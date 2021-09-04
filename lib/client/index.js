"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.readDatabaseConfig = void 0;
var ali_rds_async_1 = require("ali-rds-async");
var database_1 = require("../utils/database");
var path_1 = require("path");
var fs_1 = require("fs");
var dotenv = require("dotenv");
var YAML = require("yaml");
var env = process.env.NODE_ENV || 'development';
// 读取数据库配置文件
var readDatabaseConfig = function () {
    // 找到node_modules所在的路径
    var _a = (0, database_1.findNodeModules)(), dir = _a.dir, path = _a.path;
    var config = {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "test",
    };
    if (dir.includes('ormconfig.json')) {
        try {
            var jsonConfig = (0, fs_1.readFileSync)((0, path_1.resolve)(path, 'ormconfig.json'), 'utf-8');
            var _b = JSON.parse(jsonConfig), host = _b.host, port = _b.port, user = _b.user, password = _b.password, database = _b.database;
            config.host = host;
            config.port = port;
            config.user = user;
            config.password = password;
            config.database = database;
        }
        catch (error) {
            throw error;
        }
    }
    else if (dir.includes('ormconfig.yml')) {
        try {
            var file = (0, fs_1.readFileSync)((0, path_1.resolve)(path, 'ormconfig.yml'), 'utf8');
            var _c = YAML.parse(file).database, Host = _c.Host, Port = _c.Port, User = _c.User, Password = _c.Password, Database = _c.Database;
            config.host = Host;
            config.port = Port;
            config.user = User;
            config.password = Password;
            config.database = Database;
        }
        catch (error) {
            throw error;
        }
    }
    else if (dir.includes(".env." + env)) {
        try {
            var envConfig = dotenv.config({ path: ".env." + env });
            var _d = envConfig.parsed, DB_HOST = _d.DB_HOST, DB_PORT = _d.DB_PORT, DB_USERNAME = _d.DB_USERNAME, DB_PASSWORD = _d.DB_PASSWORD, DB_DATABASE = _d.DB_DATABASE;
            config.host = DB_HOST;
            config.port = DB_PORT;
            config.user = DB_USERNAME;
            config.password = DB_PASSWORD;
            config.database = DB_DATABASE;
        }
        catch (error) {
            throw error;
        }
    }
    else {
        throw new ReferenceError('The database configuration file was not found: .env.* | ormconfig.json | ormconfig.yml ');
    }
    return config;
};
exports.readDatabaseConfig = readDatabaseConfig;
var config = (0, exports.readDatabaseConfig)();
// 创建连接
exports.db = new ali_rds_async_1.default(config);
