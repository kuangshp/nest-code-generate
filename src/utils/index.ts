import { ColumnType, RULES, HAS_LENGTH, HAS_PRECISION, HAS_SCALE, RowDataPacket, Column, JSTYPEMAP } from '../types/types';

/**
 * 下划线转驼峰命名
 * @param checkoutStr
 * @returns
 */
export const underlineToHump = (fieldName: string): string =>
  fieldName
    .replace(/_(\w)/g, " $1")
    .replace(/( |^)[a-z]/g, (l: string) => l.toUpperCase());

export const isArray = (value: any): boolean => Array.isArray(value);

export const parseArg = (arg: string | undefined) => arg ? arg.replace(/\(/g, '').replace(/\)/g, '').replace(/'/g, '').split(',') : arg;

// 处理主要数据
export const handler = (type: string): {
  type: ColumnType | undefined,
  length: number | undefined, // 列类型的长度
  precision: number | undefined, // 整数位数
  scale: number | undefined, // 小数点位数
  enums: any[] | undefined // 在enum列类型中使用
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
        /*
          [ 'test_enum1', 'test_enum2' ]
          [ 'test_enum1' ]
          undefined
          [ '10', '9' ]
          [ '10' ]
          undefined
        */
        if (HAS_LENGTH.includes(type)) { // 有length
          length = Number(parseArg(type.match(reg)?.[1])) as number | undefined;
        }
        
        if (HAS_PRECISION.includes(type)) { // 有precision
          let ret = parseArg(type.match(reg)?.[1]);
          if (ret && isArray(ret)) {
            ret = ret[0];
          }
          precision = ret as number | undefined;
        }
        
        if (HAS_SCALE.includes(type)) { // 有scale
          let ret = parseArg(type.match(reg)?.[1]);
          if (ret && isArray(ret)) {
            ret = ret[1];
          }
          scale = ret as number | undefined;
        }
        if (key === 'enum') { // 是enum
          enums = parseArg(type.match(reg)?.[1]) as any[] | undefined;
        }
      }
    }
  });
  return { type: columnType, length, precision, scale, enums };
}

export const generateColumn = ({ 
  Field, Type, Collation, Null, Key, Default, 
  Extra, Privileges, Comment 
}: RowDataPacket): Partial<Column & RowDataPacket & { jsType: any }> => {
  const { type, length, precision, scale, enums } = handler(Type);
  return { 
    type, 
    length, 
    precision, 
    scale, 
    enum: enums,
    name: Field,
    collation: Collation!,
    nullable: Null === 'YES',
    default: Default!,
    select: false,
    comment: Comment,
    update: Privileges.includes('update'),
    primary: Key === 'PRI',
    unique: Key === 'PRI',
    jsType: type === 'enum' ? JSTYPEMAP[type!] : enums
  }
};