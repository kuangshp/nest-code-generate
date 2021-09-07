"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.readDatabaseConfig = void 0;
var ali_rds_async_1 = require("ali-rds-async");
var database_1 = require("../utils/database");
var path_1 = require("path");
var fs_1 = require("fs");
var YAML = require("yaml");
// 读取数据库配置文件
var readDatabaseConfig = function () {
    // 找到node_modules所在的路径
    var _a = database_1.findNodeModules(), dir = _a.dir, path = _a.path;
    var config;
    if (dir.includes('ormconfig.yml')) {
        try {
            var file = fs_1.readFileSync(path_1.join(process.cwd(), 'ormconfig.yml'), 'utf8');
            var ymlConfig = YAML.parse(file).database;
            config = database_1.transformOptions(ymlConfig);
        }
        catch (error) {
            throw error;
        }
    }
    else {
        throw new ReferenceError('The "ormconfig.yml" file was not found');
    }
    return config;
};
exports.readDatabaseConfig = readDatabaseConfig;
var config = exports.readDatabaseConfig();
// 创建连接
exports.db = new ali_rds_async_1.default(config);
