import AsyncAliRds from "ali-rds-async";
import { findNodeModules } from "../utils/database";
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
  const config = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "test",
  };
  if (dir.includes('ormconfig.json')) {
    try {
      const jsonConfig = readFileSync(resolve(path, 'ormconfig.json'), 'utf-8');
      const { host, port, user, password, database } = JSON.parse(jsonConfig) as DatabaseConfig;
      config.host = host;
      config.port = port;
      config.user = user;
      config.password = password;
      config.database = database;
    } catch (error) {
      throw error;
    }
  } else if (dir.includes('ormconfig.yml')) {
      try {
        const file = readFileSync(resolve(path, 'ormconfig.yml'), 'utf8');
        const { Host, Port, User, Password, Database } = YAML.parse(file).database as YMLDatabaseConfig;
        config.host = Host;
        config.port = Port;
        config.user = User;
        config.password = Password;
        config.database = Database;
      } catch (error) {
        throw error;
      }
  } else if (dir.includes(`.env.${env}`)) {
    try {
      const envConfig = dotenv.config({ path: `.env.${env}` });
      const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = envConfig.parsed as any as EnvDatabaseConfig;
      config.host = DB_HOST;
      config.port = DB_PORT;
      config.user = DB_USERNAME;
      config.password = DB_PASSWORD;
      config.database = DB_DATABASE;
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
