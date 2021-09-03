import "dotenv/config";
import { db } from "./client";
import { writeFileSync } from "fs";
import { Column, Options, OptionsKey, RowDataPacket } from './types/types';
import { generateColumn } from "./utils";

const compositionMap: { [k in Options]: () => void } = {
  // 单独生成实体类
  async entity () {

  },
  // 生成实体类和空的控制器和服务层
  async tier () {
    this.entity();
  },
  // 生成实体类和带有curd的接口
  async curd () {
    this.entity();
  }
};

export class Parse {
  tableName: string = '';
  moduleName: string = '';
  options: OptionsKey;
  constructor(tableName: string, moduleName: string, options: OptionsKey) {
    this.tableName = tableName;
    this.moduleName = moduleName;
    this.options = options; // { entity: true, tier: true, curd: true }
    this.parseOption();
  }

  parseOption() {
    const keys = Object.keys(this.options) as Options[];
    switch(keys[0]) {
      case 'entity':
        this.generateEntity();
        break;
      case 'tier':
        this.generateTier();
        break;
      case 'curd':
        this.generateCURD();
        break;
      default:
        this.generateEntity();
    }
  }

  // 单独生成实体类
  async generateEntity() {
    // 获取全部的字段
    const tableNames: string[] = this.tableName.split(',');

    if (tableNames.length > 0) {
      // @ts-ignore
      const structure: { [k in string]: any[] } = await tableNames.reduce(async (map: Promise<{[name: string]: RowDataPacket[]}>, name: string) => {
        const newMap = (await map);
        newMap[name] = await db.query(`SHOW FULL FIELDS FROM ${name}`);
        return map;
      }, {});
      const columnStructure = Object.keys(structure).reduce((map: any, tableName: string) => {
        map[tableName] = structure[tableName].map(row => generateColumn(row));
        return map;
      }, {});

      Object.keys(columnStructure).forEach((tableName: string) => {
        const tableScheme = columnStructure[tableName];
        let scheme = "";
        tableScheme.forEach((row: Column & { jsType: string }) => {
          const option = Object.keys(row).reduce((str: string, key: string) => {
            const value = () => {
              // @ts-ignore
              const v = row[key];
              if (v === '') return '""';
              if (v != null) return `"${v}"`;
              return v;
            };
            str += `${key}: ${value()}, \n`;
            return str;
          }, '');
          scheme += `
            @Column({
              ${ option }
            })
            ${row.name}: ${row.jsType};
          `;
        });
        let entityStr = `
          import { Entity, Unique, Column } from 'typeorm';
      
          @Entity('${tableName}')
          export class ${tableName.slice(0, 1).toUpperCase() + tableName.slice(1)}Entity {
            ${scheme}
          }
        `;
        writeFileSync(`./${tableName}.entity.ts`, entityStr);
      });
    } else {
      throw new TypeError('Please enter the <table_name> field: nest-code-generate <table_name> <module_name> [options]');
    }

  }

  // 外部方法: 生成实体类和各种服务
  generateTier() {
    this.generateEntity()
    compositionMap['tier']();
  }

  // 外部方法: 生成实体类和CURD
  generateCURD() {
    this.generateEntity()
    compositionMap['curd']();
  }

}
