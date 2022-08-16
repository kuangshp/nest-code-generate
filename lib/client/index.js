"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.readDatabaseConfig = void 0;
var ali_rds_async_1 = require("ali-rds-async");
var database_1 = require("../utils/database");
var index_1 = require("../utils/index");
// 读取数据库配置文件
var readDatabaseConfig = function () {
    var config;
    var ymlConfig = index_1.readYMLConfig("data_source");
    config = database_1.transformOptions(ymlConfig);
    return config;
};
exports.readDatabaseConfig = readDatabaseConfig;
var config = exports.readDatabaseConfig();
// 创建连接
exports.db = new ali_rds_async_1.default(config);
