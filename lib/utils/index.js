"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateColumn = exports.handler = exports.parseArg = exports.isArray = exports.underlineToHump = void 0;
var types_1 = require("../types/types");
/**
 * 下划线转驼峰命名
 * @param checkoutStr
 * @returns
 */
var underlineToHump = function (fieldName) {
    return fieldName
        .replace(/_(\w)/g, " $1")
        .replace(/( |^)[a-z]/g, function (l) { return l.toUpperCase(); });
};
exports.underlineToHump = underlineToHump;
var isArray = function (value) { return Array.isArray(value); };
exports.isArray = isArray;
var parseArg = function (arg) { return arg ? arg.replace(/\(/g, '').replace(/\)/g, '').replace(/'/g, '').split(',') : arg; };
exports.parseArg = parseArg;
// 处理主要数据
var handler = function (type) {
    var columnType;
    var length;
    var precision;
    var scale;
    var enums;
    Object.keys(types_1.RULES).forEach(function (k) {
        var _a, _b, _c, _d;
        var key = k;
        // 开头包含key
        if (type.startsWith(key)) {
            var reg = types_1.RULES[key];
            var check = reg.test(type);
            // 通过验证
            if (check) {
                columnType = key;
                /*
                  [ 'test_enum1', 'test_enum2' ]
                  [ 'test_enum1' ]
                  undefined
                  [ '10', '9' ]
                  [ '10' ]
                  undefined
                */
                if (types_1.HAS_LENGTH.includes(type)) { // 有length
                    length = Number((0, exports.parseArg)((_a = type.match(reg)) === null || _a === void 0 ? void 0 : _a[1]));
                }
                if (types_1.HAS_PRECISION.includes(type)) { // 有precision
                    var ret = (0, exports.parseArg)((_b = type.match(reg)) === null || _b === void 0 ? void 0 : _b[1]);
                    if (ret && (0, exports.isArray)(ret)) {
                        ret = ret[0];
                    }
                    precision = ret;
                }
                if (types_1.HAS_SCALE.includes(type)) { // 有scale
                    var ret = (0, exports.parseArg)((_c = type.match(reg)) === null || _c === void 0 ? void 0 : _c[1]);
                    if (ret && (0, exports.isArray)(ret)) {
                        ret = ret[1];
                    }
                    scale = ret;
                }
                if (key === 'enum') { // 是enum
                    enums = (0, exports.parseArg)((_d = type.match(reg)) === null || _d === void 0 ? void 0 : _d[1]);
                }
            }
        }
    });
    return { type: columnType, length: length, precision: precision, scale: scale, enums: enums };
};
exports.handler = handler;
var generateColumn = function (_a) {
    var Field = _a.Field, Type = _a.Type, Collation = _a.Collation, Null = _a.Null, Key = _a.Key, Default = _a.Default, Extra = _a.Extra, Privileges = _a.Privileges, Comment = _a.Comment;
    var _b = (0, exports.handler)(Type), type = _b.type, length = _b.length, precision = _b.precision, scale = _b.scale, enums = _b.enums;
    return {
        type: type,
        length: length,
        precision: precision,
        scale: scale,
        enum: enums,
        name: Field,
        collation: Collation,
        nullable: Null === 'YES',
        default: Default,
        select: false,
        comment: Comment,
        update: Privileges.includes('update'),
        primary: Key === 'PRI',
        unique: Key === 'PRI',
        jsType: type === 'enum' ? types_1.JSTYPEMAP[type] : enums
    };
};
exports.generateColumn = generateColumn;
