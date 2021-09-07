import "dotenv/config";
import { ExternalOptions, Options, GENFILE_TYPES } from './types/types';
import { getTableStructure, transformStructure, generateEntity } from "./utils/parser";
import { prompt } from 'inquirer';
import { findPath, emptyTheMkdir, hasTableName } from "./utils";
import { genFiles } from './utils/genFiles';
import { join } from "path";

export class Parse {
  tableName         !: string;             // 数据表名城
  moduleName        !: string;             // 模块名称
  targetDir         !: string;             // 目标文件夹
  targetPath        !: string;             // 目标路径
  type              !: Options;            // 向外传递的类型
  externalOptions   !: ExternalOptions;    // 包含模块名，表名，表信息

  constructor(tableName: string, dir: string) {
    this.tableName = tableName;
    this.targetDir = dir;
    this.prompt();
  }

  exit() {
    process.exit(0);
  }

  // 发起询问
  async prompt() {
    /*
      1.询问生成什么东西? -- 实体类 | 实体类+控制器和服务层方法 | 实体类+简单的增删改查 | 全部生成
      2.询问要挂载到哪个模块?
    */
    const { type, moduleName } = await prompt([
      {
        name: 'type',
        type: 'list',
        message: 'What content is generated(要生成什么内容)?: ',
        choices: [
          { name: 'Entity  (实体类)', value: 'entity' },
          { name: 'Tier    (实体类 + 控制器和服务层方法)', value: 'tier' },
          { name: 'CURD    (实体类 + 简单的增删改查)', value: 'curd' },
          { name: 'All     (全部生成: 实体类 + 控制器和服务层方法 + 简单的增删改查)', value: 'all' }
        ]
      }, {
        name: 'moduleName',
        type: 'input',
        message: 'Which module do you want to mount to(要挂载到哪个模块)?: '
      }
    ]);
    this.type = type;
    this.moduleName = moduleName ? moduleName : 'App';

    // 获取生成路径
    const targetPath = findPath(this.targetDir);
    this.targetPath = targetPath;

    this.parseOption();
  }

  async parseOption() {
    const typeMap: { [k in Options]: () => any } = {
      'entity': () => this.generateEntity(),
      'tier': () => this.generateTier(),
      'curd': () => this.generateCURD(),
      'all': () => this.generateAll()
    };

    if (this.type && Reflect.has(typeMap, this.type)) {
      await typeMap[this.type]();
    } else {
      await typeMap.entity();
    }
    this.exit();
  }

  // 单独生成实体类
  async generateEntity() {
    // 获取全部的表格名字
    const tableNames: string[] = this.tableName.split(',');

    await hasTableName(tableNames, async () => {
      // 获取表结构(源)
      const structure = await getTableStructure(tableNames);

      // 将源结构转换成期望机构
      const columnStructure = transformStructure(structure);

      // 生成实体类
      generateEntity(columnStructure, this.targetPath);
    });
  }

  // 外部方法: 生成实体类和控制器和服务层方法
  async generateTier() {
    const tableNames: string[] = this.tableName.split(',');

    await hasTableName(tableNames, async () => {
      await Promise.all(
        tableNames.map(async (name: string) => {
          const collectPath = {
            controllers: join(this.targetPath, 'controllers'),
            services: join(this.targetPath, 'services')
          };
      
          emptyTheMkdir(collectPath.controllers);
          emptyTheMkdir(collectPath.services);
      
          await this.generateEntity();
          const options = { module_name: this.moduleName, table: { table_name: name } };
          genFiles(GENFILE_TYPES.CONTROLLER, options, collectPath);
          genFiles(GENFILE_TYPES.SERVICE, options, collectPath);
        })
      );
    });
  }

  // 外部方法: 实体类+控制器和服务层方法
  async generateCURD() {
    const tableNames: string[] = this.tableName.split(',');

    await hasTableName(tableNames, async () => {
      const collectPath = {
        controllers: join(this.targetPath, 'controllers'),
        services: join(this.targetPath, 'services')
      };
  
      emptyTheMkdir(collectPath.controllers);
      emptyTheMkdir(collectPath.services);
  
      await this.generateEntity();
      const options = { module_name: this.moduleName, table: { table_name: this.tableName } };
      genFiles(GENFILE_TYPES.FULL, options, collectPath);
    });
  }

  // 综合方法: 生成所有
  async generateAll() {
    await this.generateCURD();
  }

}
