import AsyncAliRds from "ali-rds-async";
import { findNodeModules, transformOptions } from "../utils/database";
import { resolve } from 'path';
import { readFileSync } from 'fs';
import { DatabaseConfig, YMLDatabaseConfig } from '../types/types';
import * as YAML from 'yaml';


// 读取数据库配置文件
export const readDatabaseConfig = () => {
  // 找到node_modules所在的路径
  const { dir, path } = findNodeModules();
  let config: DatabaseConfig;
  if (dir.includes('ormconfig.yml')) {
    try {
      const file = readFileSync(resolve(path, 'ormconfig.yml'), 'utf8');
      const ymlConfig = YAML.parse(file).database as YMLDatabaseConfig;
      config = transformOptions(ymlConfig);
    } catch (error) {
      throw error;
    }
  } else {
    throw new ReferenceError('The "ormconfig.yml" file was not found');
  }
  return config;
}

const config = readDatabaseConfig();

// 创建连接
export const db = new AsyncAliRds(config);

