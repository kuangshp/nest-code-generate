import AsyncAliRds from "ali-rds-async";
import { transformOptions } from "../utils/database";
import { DatabaseConfig, YMLDatabaseConfig } from "../typings/types";
import { readYMLConfig } from "../utils/index";

// 读取数据库配置文件
export const readDatabaseConfig = () => {
  let config: DatabaseConfig;
  const ymlConfig = readYMLConfig("data_source") as YMLDatabaseConfig;
  config = transformOptions(ymlConfig);
  return config;
};

const config = readDatabaseConfig();

// 创建连接
export const db = new AsyncAliRds(config);
