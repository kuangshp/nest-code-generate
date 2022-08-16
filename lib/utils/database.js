"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformOptions = exports.findNodeModules = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
// 寻找node_modules所在的路径
var findNodeModules = function () {
    var currentPath = process.cwd();
    var dir = fs_1.readdirSync(currentPath);
    while (!dir.includes("node_modules")) {
        currentPath = path_1.join(currentPath, "..");
        dir = fs_1.readdirSync(currentPath);
    }
    return { dir: dir, path: currentPath };
};
exports.findNodeModules = findNodeModules;
// 转换一下选项参数
var transformOptions = function (options) {
    return {
        host: options.host || options.DB_HOST || options.host,
        port: options.port || options.DB_PORT || options.port,
        user: options.user || options.DB_USERNAME || options.user,
        password: options.password || options.DB_PASSWORD || options.password,
        database: options.database || options.DB_DATABASE || options.database,
    };
};
exports.transformOptions = transformOptions;
