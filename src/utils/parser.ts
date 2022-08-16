import {
  ColumnType,
  RULES,
  HAS_LENGTH,
  HAS_PRECISION,
  HAS_SCALE,
  RowDataPacket,
  Column,
  JSTYPEMAP,
  ColumnMap,
  RowMap,
  MinxinProp,
} from "../typings/types";
import {
  textCapitalize,
  underlineToHump,
  isArray,
  emptyTheMkdir,
} from "./index";
import { db } from "../client";
import { writeFileSync } from "fs";
import { join } from "path";

// 将参数解刨: ('table_name1', 'table_name2') => [table_name1, table_name2]
export const parseArg = (arg: string | undefined) =>
  arg
    ? arg.replace(/\(/g, "").replace(/\)/g, "").replace(/'/g, "").split(",")
    : arg;

// 处理主要数据
export const handler = (
  type: string
): {
  type: ColumnType | undefined;
  length: number | undefined; // 列类型的长度
  precision: number | undefined; // 整数位数
  scale: number | undefined; // 小数点位数
  enums: any[] | undefined; // 在enum列类型中使用
} => {
  let columnType: ColumnType | undefined;
  let length: number | undefined;
  let precision: number | undefined;
  let scale: number | undefined;
  let enums: any[] | undefined;
  Object.keys(RULES).forEach((k: any) => {
    const key: ColumnType = k;
    // 开头包含key
    if (type.startsWith(key)) {
      const reg: RegExp = RULES[key] as RegExp;
      const check = reg.test(type);
      // 通过验证
      if (check) {
        columnType = key;
        if (HAS_LENGTH.includes(columnType)) {
          // 有length
          length = Number(parseArg(type.match(reg)?.[1])) as number | undefined;
        }

        if (HAS_PRECISION.includes(columnType)) {
          // 有precision
          let ret = parseArg(type.match(reg)?.[1]);
          if (ret && isArray(ret)) {
            ret = ret[0];
          }
          precision = Number(ret as any as number | undefined);
        }

        if (HAS_SCALE.includes(columnType)) {
          // 有scale
          let ret = parseArg(type.match(reg)?.[1]);
          if (ret && isArray(ret)) {
            ret = ret[1];
          }
          scale = Number(ret as any as number | undefined);
        }
        if (columnType === "enum") {
          // 是enum
          enums = parseArg(type.match(reg)?.[1]) as any[] | undefined;
        }
      }
    }
  });

  return { type: columnType, length, precision, scale, enums };
};

// 生成期望的列信息
export const generateColumn = ({
  Field,
  Type,
  Collation,
  Null,
  Key,
  Default,
  Extra,
  Privileges,
  Comment,
}: RowDataPacket): Partial<Column & RowDataPacket & MinxinProp> => {
  let { type, length, precision, scale, enums } = handler(Type);

  let primaryGeneratedColumn = false;

  if (typeof length !== "number" || Number.isNaN(length)) length = undefined;
  if (typeof precision !== "number" || Number.isNaN(length))
    precision = undefined;
  if (typeof scale !== "number" || Number.isNaN(length)) precision = undefined;
  if (!isArray(enums)) enums = undefined;
  if (Collation === null) Collation = undefined;
  if (Extra === "auto_increment") primaryGeneratedColumn = true;

  return {
    type,
    length,
    precision,
    scale,
    primaryGeneratedColumn,
    enum: JSON.stringify(enums),
    name: Field,
    collation: undefined,
    nullable: Null === "YES" ? true : undefined,
    default: Default! === null ? undefined : Default!,
    comment: Comment === "" ? undefined : Comment,
    update: Privileges.includes("update") ? undefined : false,
    // unique: Key === 'PRI' ? true : undefined,
    jsType: type === "enum" ? JSON.stringify(enums) : JSTYPEMAP[type!],
    isIndex: Key === "MUL",
  };
};

// 获取表结构
export const getTableStructure = async (
  tableNames: string[]
): Promise<RowMap> => {
  // @ts-ignore
  const structure: Promise<RowMap> = tableNames.reduce(
    async (map: Promise<RowMap>, name: string) => {
      const newMap = await map;
      try {
        newMap[name] = await db.query(`SHOW FULL FIELDS FROM ${name}`);
      } catch (error) {
        throw error;
      }
      return map;
    },
    {}
  );
  return structure;
};

// 表结构转换
export const transformStructure = (
  structure: RowMap,
  collect: string[]
): ColumnMap => {
  return Object.keys(structure).reduce((map: any, tableName: string) => {
    map[tableName] = [];
    structure[tableName].forEach((row: RowDataPacket) => {
      // 过滤基类字段
      if (!collect.includes(row.Field)) {
        map[tableName].push(generateColumn(row));
      }
    });
    return map;
  }, {});
};

// 生成column的option
const generateOption = (row: Column & { jsType: string }) => {
  return Object.keys(row).reduce(
    (str: string, key: string, i: number, list: string[]) => {
      // @ts-ignore
      const v = row[key]; // 这里规定一下 如果v是ignore的话 就直接过滤掉
      const ignoreKeys = ["primaryGeneratedColumn", "jsType", "isIndex"];
      const numberTypes = ["length", "scale", "precision"];
      if (!ignoreKeys.includes(key) && v !== undefined) {
        const value = () => {
          if (v === "") return "''";
          if (
            typeof v === "boolean" ||
            numberTypes.includes(key) ||
            key === "enum"
          )
            return v;
          if (v != null) return `'${v}'`;
          return v;
        };
        str += `    ${key}: ${value()}, \n`;
      }

      if (i === list.length - 1) {
        str = str.slice(0, str.length - 3);
      }
      return str;
    },
    ""
  );
};

// 生成实体类
export const generateEntity = (
  columnStructure: ColumnMap,
  targetPath: string,
  baseName: string
) => {
  Object.keys(columnStructure).forEach((tableName: string) => {
    const tableScheme = columnStructure[tableName];
    let scheme = "";
    let hasPrimary = false;
    let hasIndex = false;

    // 列表分割
    const segment = (row: Column & MinxinProp, option: string) => {
      if (row.primaryGeneratedColumn)
        return `  @PrimaryGeneratedColumn({\n${option} \n  })`;
      if (row.isIndex) return `  @Index()\n  @Column({\n${option} \n  })`;
      return `  @Column({\n${option} \n  })`;
    };

    // 导入依赖
    const importDependences = () => {
      let dependence: string = "";
      if (hasIndex) dependence += ", Index";
      if (hasPrimary) dependence += ", PrimaryGeneratedColumn";
      return dependence;
    };

    // 改变flag
    const changeFlags = (row: Column & MinxinProp, option: string) => {
      if (row.isIndex) hasIndex = true;
      if (row.primaryGeneratedColumn) hasPrimary = true;
    };

    // 是否存在基类
    const hasBaseEntity = () => (baseName !== "" ? `extends ${baseName}` : "");

    tableScheme.forEach((r: any) => {
      const row = r as Column & MinxinProp;

      // 获取column的options
      const option = generateOption(row);

      changeFlags(row, option);

      scheme += `${segment(row, option)}\n  ${underlineToHump(row.name)}!: ${
        r.jsType
      };\n\n`;
    });

    const entityStr = `import { Entity, Column${importDependences()} } from 'typeorm';\n\n@Entity('${tableName}')\nexport class ${textCapitalize(
      tableName
    )}Entity ${hasBaseEntity()} {\n${scheme}\n}`;

    const dirPath = join(targetPath, "entities");
    const filepath = join(dirPath, `${tableName}.entity.ts`);

    emptyTheMkdir(dirPath);

    /**
     * 生成结构
     * entities
     *  tableName.entity.ts
     */
    writeFileSync(filepath, entityStr);
    console.log(`create ${filepath} Success`);
  });
};
