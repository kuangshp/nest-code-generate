"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPath = exports.isArray = exports.underlineToHump = exports.textLowercase = exports.textCapitalize = void 0;
var database_1 = require("./database");
var fs_1 = require("fs");
var path_1 = require("path");
// 首字母大写
var textCapitalize = function (str) { return (typeof str === 'string') ? str.slice(0, 1).toUpperCase() + str.slice(1) : str; };
exports.textCapitalize = textCapitalize;
// 首字母小写
var textLowercase = function (str) { return (typeof str === 'string') ? str.slice(0, 1).toLowerCase() + str.slice(1) : str; };
exports.textLowercase = textLowercase;
// 下划线转小驼峰
var underlineToHump = function (name) {
    var BigHump = name.replace(/(^|_)(\w)/g, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args[2].toUpperCase();
    });
    return (0, exports.textLowercase)(BigHump);
};
exports.underlineToHump = underlineToHump;
// 是否数组
var isArray = function (value) { return Array.isArray(value); };
exports.isArray = isArray;
// 路径寻址(深度优先)
var findPath = function (dirName) {
    if (dirName === void 0) { dirName = 'src'; }
    var dirNames = dirName.split('/');
    if (dirNames[0].trim() === '')
        dirNames.shift();
    var _a = (0, database_1.findNodeModules)(), rootPath = _a.path, dir = _a.dir;
    var ignoreDir = ['.git', '.vscode', 'node_modules'];
    var resultPath;
    var findRecursion = function (currentPath, _dir, _dirName) {
        if (_dir.includes(_dirName)) {
            resultPath = (0, path_1.join)(currentPath, _dirName);
        }
        else {
            _dir.forEach(function (name) {
                var nextPath = (0, path_1.join)(currentPath, name);
                if (!ignoreDir.includes(name)
                    && (name.slice(0, 1) !== '.')
                    && (0, fs_1.statSync)(nextPath).isDirectory()) {
                    findRecursion(nextPath, (0, fs_1.readdirSync)(nextPath), _dirName);
                }
            });
        }
    };
    findRecursion(rootPath, dir, dirNames[0]);
    if (resultPath) {
        return dirNames.length > 1 ? path_1.join.apply(void 0, __spreadArray([resultPath], dirNames.slice(1), false)) : resultPath;
    }
    else {
        // 如果dirName是src 并且没有src的情况下 就创建一个
        if (dirName === 'src') {
            resultPath = (0, path_1.join)(rootPath, 'src');
            (0, fs_1.mkdirSync)(resultPath);
            return resultPath;
        }
        else {
            throw new ReferenceError("The folder " + dirName + " was not found");
        }
    }
};
exports.findPath = findPath;
