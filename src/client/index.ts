import AsyncAliRds from "ali-rds-async";
const config = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "123456",
  database: "yst_shop",
};
// 创建连接
export const db = new AsyncAliRds(config);
