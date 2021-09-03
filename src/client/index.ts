import AsyncAliRds from "ali-rds-async";
const config = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "nest-code-generate",
};
// 创建连接
export const db = new AsyncAliRds(config);
