"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var ali_rds_async_1 = require("ali-rds-async");
var config = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "nest-code-generate",
};
// 创建连接
exports.db = new ali_rds_async_1.default(config);
