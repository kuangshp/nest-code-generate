"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNodeModules = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
// 寻找node_modules所在的路径
var findNodeModules = function () {
    var currentPath = __dirname;
    var dir = (0, fs_1.readdirSync)(currentPath);
    while (!dir.includes('node_modules')) {
        currentPath = (0, path_1.join)(currentPath, '..');
        dir = (0, fs_1.readdirSync)(currentPath);
    }
    return { dir: dir, path: currentPath };
};
exports.findNodeModules = findNodeModules;
