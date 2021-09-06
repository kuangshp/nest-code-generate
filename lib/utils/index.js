"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
exports.hasTableName = exports.emptyTheMkdir = exports.findPath = exports.isArray = exports.underlineToHump = exports.textLowercase = exports.textCapitalize = void 0;
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
// 文件夹不存在创建文件夹
var emptyTheMkdir = function (dirPath) {
    try {
        (0, fs_1.statSync)(dirPath).isDirectory();
    }
    catch (error) {
        // 报错说明不存在, 不存在就创建一个
        (0, fs_1.mkdirSync)(dirPath);
    }
};
exports.emptyTheMkdir = emptyTheMkdir;
// 判断是否存在表名
var hasTableName = function (tableNames, call) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(tableNames.length > 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, call()];
                case 1:
                    _a.sent();
                    resolve(true);
                    return [3 /*break*/, 3];
                case 2:
                    reject(new TypeError('Please enter the <table_name> field: nest-code-generate <table_name> <module_name> [options]'));
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); });
};
exports.hasTableName = hasTableName;
