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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parse = void 0;
require("dotenv/config");
var types_1 = require("./typings/types");
var parser_1 = require("./utils/parser");
var inquirer_1 = require("inquirer");
var utils_1 = require("./utils");
var genFiles_1 = require("./utils/genFiles");
var path_1 = require("path");
var Parse = /** @class */ (function () {
    function Parse(tableName, dir) {
        this.tableName = tableName;
        this.targetDir = dir;
        this.prompt();
    }
    Parse.prototype.exit = function () {
        process.exit(0);
    };
    // 发起询问
    Parse.prototype.prompt = function () {
        return __awaiter(this, void 0, void 0, function () {
            var type, targetPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, inquirer_1.prompt([
                            {
                                name: 'type',
                                type: 'list',
                                message: 'What content is generated(要生成什么内容)?: ',
                                choices: [
                                    { name: 'Entity  (实体类)', value: 'entity' },
                                    { name: 'Tier    (实体类 + 控制器和服务层方法)', value: 'tier' },
                                    { name: 'CURD    (实体类 + 简单的增删改查)', value: 'curd' },
                                    { name: 'All     (全部生成: 实体类 + 控制器和服务层方法 + 简单的增删改查)', value: 'all' }
                                ]
                            },
                        ])];
                    case 1:
                        type = (_a.sent()).type;
                        this.type = type;
                        targetPath = utils_1.findPath(this.targetDir);
                        utils_1.emptyTheMkdir(targetPath);
                        this.targetPath = targetPath;
                        this.parseOption();
                        return [2 /*return*/];
                }
            });
        });
    };
    Parse.prototype.parseOption = function () {
        return __awaiter(this, void 0, void 0, function () {
            var typeMap;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        typeMap = {
                            'entity': function () { return _this.generateEntity(); },
                            'tier': function () { return _this.generateTier(); },
                            'curd': function () { return _this.generateCURD(); },
                            'all': function () { return _this.generateAll(); }
                        };
                        if (!(this.type && Reflect.has(typeMap, this.type))) return [3 /*break*/, 2];
                        return [4 /*yield*/, typeMap[this.type]()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, typeMap.entity()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        this.exit();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 单独生成实体类
    Parse.prototype.generateEntity = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tableNames;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tableNames = this.tableName.split(',');
                        return [4 /*yield*/, utils_1.hasTableName(tableNames, function () { return __awaiter(_this, void 0, void 0, function () {
                                var structure, _a, collect, base_name, columnStructure;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, parser_1.getTableStructure(tableNames)];
                                        case 1:
                                            structure = _b.sent();
                                            _a = utils_1.baseEntity(), collect = _a.collect, base_name = _a.base_name;
                                            columnStructure = parser_1.transformStructure(structure, collect);
                                            // 生成实体类
                                            parser_1.generateEntity(columnStructure, this.targetPath, base_name);
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 外部方法: 生成实体类和控制器和服务层方法
    Parse.prototype.generateTier = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tableNames;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tableNames = this.tableName.split(',');
                        return [4 /*yield*/, utils_1.hasTableName(tableNames, function () { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, Promise.all(tableNames.map(function (name) { return __awaiter(_this, void 0, void 0, function () {
                                                var childCollectPath, options;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            utils_1.emptyTheMkdir(path_1.join(this.targetPath, 'controllers'));
                                                            utils_1.emptyTheMkdir(path_1.join(this.targetPath, 'services'));
                                                            childCollectPath = {
                                                                controllers: path_1.join(this.targetPath, 'controllers', name),
                                                                services: path_1.join(this.targetPath, 'services', name)
                                                            };
                                                            utils_1.emptyTheMkdir(childCollectPath.controllers);
                                                            utils_1.emptyTheMkdir(childCollectPath.services);
                                                            return [4 /*yield*/, this.generateEntity()];
                                                        case 1:
                                                            _a.sent();
                                                            options = { table: { table_name: name } };
                                                            genFiles_1.genFiles(types_1.GENFILE_TYPES.CONTROLLER, options, childCollectPath);
                                                            genFiles_1.genFiles(types_1.GENFILE_TYPES.SERVICE, options, childCollectPath);
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); }))];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 外部方法: 实体类+控制器和服务层方法
    Parse.prototype.generateCURD = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tableNames;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tableNames = this.tableName.split(',');
                        return [4 /*yield*/, utils_1.hasTableName(tableNames, function () { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, Promise.all(tableNames.map(function (name) { return __awaiter(_this, void 0, void 0, function () {
                                                var childCollectPath, options;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            utils_1.emptyTheMkdir(path_1.join(this.targetPath, 'controllers'));
                                                            utils_1.emptyTheMkdir(path_1.join(this.targetPath, 'services'));
                                                            childCollectPath = {
                                                                controllers: path_1.join(this.targetPath, 'controllers', name),
                                                                services: path_1.join(this.targetPath, 'services', name)
                                                            };
                                                            utils_1.emptyTheMkdir(childCollectPath.controllers);
                                                            utils_1.emptyTheMkdir(childCollectPath.services);
                                                            return [4 /*yield*/, this.generateEntity()];
                                                        case 1:
                                                            _a.sent();
                                                            options = { table: { table_name: name } };
                                                            genFiles_1.genFiles(types_1.GENFILE_TYPES.FULL, options, childCollectPath);
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); }))];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 综合方法: 生成所有
    Parse.prototype.generateAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.generateCURD()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Parse;
}());
exports.Parse = Parse;
