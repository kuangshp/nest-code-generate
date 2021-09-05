"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = exports.underlineToHump = exports.textLowercase = exports.textCapitalize = void 0;
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
var isArray = function (value) { return Array.isArray(value); };
exports.isArray = isArray;
