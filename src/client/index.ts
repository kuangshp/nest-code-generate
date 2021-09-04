import AsyncAliRds from "ali-rds-async";
import { findNodeModules, transformOptions } from "../utils/database";
import { resolve } from 'path';
import { readFileSync } from 'fs';
import { EnvDatabaseConfig, DatabaseConfig, YMLDatabaseConfig } from '../types/types';
import * as dotenv from 'dotenv';
import * as YAML from 'yaml';

const env = process.env.NODE_ENV || 'development';

// 读取数据库配置文件
export const readDatabaseConfig = () => {
  // 找到node_modules所在的路径
  const { dir, path } = findNodeModules();
  let config: DatabaseConfig;
  if (dir.includes('ormconfig.json')) {
    try {
      const strConfig = readFileSync(resolve(path, 'ormconfig.json'), 'utf-8');
      const jsonConfig = JSON.parse(strConfig) as DatabaseConfig;
      config = transformOptions(jsonConfig);
    } catch (error) {
      throw error;
    }
  } else if (dir.includes('ormconfig.yml')) {
      try {
        const file = readFileSync(resolve(path, 'ormconfig.yml'), 'utf8');
        const ymlConfig = YAML.parse(file).database as YMLDatabaseConfig;
        config = transformOptions(ymlConfig);
      } catch (error) {
        throw error;
      }
  } else if (dir.includes(`.env.${env}`)) {
    try {
      const envConfig = dotenv.config({ path: `.env.${env}` }).parsed as any as EnvDatabaseConfig;
      config = transformOptions(envConfig);
    } catch (error) {
      throw error;
    }
  } else {
    throw new ReferenceError('The database configuration file was not found: .env.* | ormconfig.json | ormconfig.yml ');
  }
  return config;
}

const config = readDatabaseConfig();

// 创建连接
export const db = new AsyncAliRds(config);
