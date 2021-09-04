import "dotenv/config";
import { Options, OptionsKey } from './types/types';
import { getTableStructure, transformStructure, generateEntity } from "./utils";

export class Parse {
  tableName: string = '';
  moduleName: string = '';
  options: OptionsKey;
  type: Options; // 向外传递的类型 entities | controllers | services | full | empty
  externalOptions: { table: { table_name: string, table_info: object }, module_name: string } | null = null; // 包含模块名，表名，表信息

  constructor(tableName: string, moduleName: string, options: OptionsKey) {
    this.tableName = tableName;
    this.moduleName = moduleName;
    this.options = options; // { entity: true, tier: true, curd: true }
    this.type = Object.keys(options)[0] as Options;
    this.parseOption();
  }

  parseOption() {
    const typeMap = {
      'entity': () => this.generateEntity(),
      'tier': () => this.generateTier(),
      'curd': () => this.generateCURD()
    };
    if (this.type && Reflect.has(typeMap, this.type)) {
      typeMap[this.type]();
    } else {
      this.generateEntity()
    }
  }

  // 单独生成实体类
  async generateEntity() {
    // 获取全部的表格名字
    const tableNames: string[] = this.tableName.split(',');

    // 有表名的情况下
    if (tableNames.length > 0) {

      // 获取表结构(源)
      const structure = await getTableStructure(tableNames);

      // 将源结构转换成期望机构
      const columnStructure = transformStructure(structure);

      // 生成实体类
      generateEntity(columnStructure);

    } else {
      throw new TypeError('Please enter the <table_name> field: nest-code-generate <table_name> <module_name> [options]');
    }

  }

  // 外部方法: 生成实体类和各种服务
  generateTier() {
    this.generateEntity();
  }

  // 外部方法: 生成实体类和CURD
  generateCURD() {
    this.generateEntity();
  }

}
