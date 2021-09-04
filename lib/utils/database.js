"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformOptions = exports.findNodeModules = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
// 寻找node_modules所在的路径
var findNodeModules = function () {
    var currentPath = __dirname;
    var dir = fs_1.readdirSync(currentPath);
    while (!dir.includes('node_modules')) {
        currentPath = path_1.join(currentPath, '..');
        dir = fs_1.readdirSync(currentPath);
    }
    return { dir: dir, path: currentPath };
};
exports.findNodeModules = findNodeModules;
// 转换一下选项参数
var transformOptions = function (options) {
    return {
        host: options.host || options.DB_HOST || options.Host,
        port: options.port || options.DB_PORT || options.Port,
        user: options.user || options.DB_USERNAME || options.User,
        password: options.password || options.DB_PASSWORD || options.Password,
        database: options.database || options.DB_DATABASE || options.Database,
    };
};
exports.transformOptions = transformOptions;
