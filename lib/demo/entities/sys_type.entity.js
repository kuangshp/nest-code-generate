"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sys_typeEntity = void 0;
var typeorm_1 = require("typeorm");
var Sys_typeEntity = /** @class */ (function () {
    function Sys_typeEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({
            type: "int",
            primary: true,
            name: "id",
            unique: true
        })
    ], Sys_typeEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "decimal",
            precision: 20,
            scale: 8,
            name: "t_dec"
        })
    ], Sys_typeEntity.prototype, "tDec", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "decimal",
            precision: 20,
            scale: 8,
            name: "t_decimal"
        })
    ], Sys_typeEntity.prototype, "tDecimal", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "decimal",
            precision: 10,
            scale: 9,
            name: "t_numeric"
        })
    ], Sys_typeEntity.prototype, "tNumeric", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "date",
            name: "t_date"
        })
    ], Sys_typeEntity.prototype, "tDate", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "datetime",
            name: "t_datetime"
        })
    ], Sys_typeEntity.prototype, "tDatetime", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "timestamp",
            name: "t_timestamp"
        })
    ], Sys_typeEntity.prototype, "tTimestamp", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "time",
            name: "t_time"
        })
    ], Sys_typeEntity.prototype, "tTime", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "year",
            name: "t_year"
        })
    ], Sys_typeEntity.prototype, "tYear", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "text",
            name: "t_text"
        })
    ], Sys_typeEntity.prototype, "tText", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "tinytext",
            name: "t_tinytext"
        })
    ], Sys_typeEntity.prototype, "tTinytext", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "mediumtext",
            name: "t_mediumtext"
        })
    ], Sys_typeEntity.prototype, "tMediumtext", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "blob",
            name: "t_blob"
        })
    ], Sys_typeEntity.prototype, "tBlob", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "longtext",
            name: "t_longtext"
        })
    ], Sys_typeEntity.prototype, "tLongtext", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "tinyblob",
            name: "t_tinyblob"
        })
    ], Sys_typeEntity.prototype, "tTinyblob", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "mediumblob",
            name: "t_mediumblob"
        })
    ], Sys_typeEntity.prototype, "tMediumblob", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "json",
            name: "t_json"
        })
    ], Sys_typeEntity.prototype, "tJson", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "geometry",
            name: "t_geometry"
        })
    ], Sys_typeEntity.prototype, "tGeometry", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "point",
            name: "t_point"
        })
    ], Sys_typeEntity.prototype, "tPoint", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "linestring",
            name: "t_linestring"
        })
    ], Sys_typeEntity.prototype, "tLinestring", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "polygon",
            name: "t_polygon"
        })
    ], Sys_typeEntity.prototype, "tPolygon", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "multipoint",
            name: "t_multipoint"
        })
    ], Sys_typeEntity.prototype, "tMultipoint", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "multilinestring",
            name: "t_multilinestring"
        })
    ], Sys_typeEntity.prototype, "tMultilinestring", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "multipolygon",
            name: "t_multipolygon"
        })
    ], Sys_typeEntity.prototype, "tMultipolygon", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({
            type: "int",
            name: "t_int"
        })
    ], Sys_typeEntity.prototype, "tInt", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "tinyint",
            name: "t_tinyint"
        })
    ], Sys_typeEntity.prototype, "tTinyint", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "smallint",
            name: "t_smallint"
        })
    ], Sys_typeEntity.prototype, "tSmallint", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "mediumint",
            name: "t_mediumint"
        })
    ], Sys_typeEntity.prototype, "tMediumint", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "bigint",
            name: "t_bigint"
        })
    ], Sys_typeEntity.prototype, "tBigint", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "float",
            scale: 1,
            name: "t_float"
        })
    ], Sys_typeEntity.prototype, "tFloat", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "double",
            scale: 2,
            name: "t_double"
        })
    ], Sys_typeEntity.prototype, "tDouble", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "text",
            name: "t_simple_json"
        })
    ], Sys_typeEntity.prototype, "tSimpleJson", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "text",
            name: "t_array"
        })
    ], Sys_typeEntity.prototype, "tArray", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "enum",
            enum: ["test_enum1", "test_enum2"],
            name: "t_enum"
        })
    ], Sys_typeEntity.prototype, "tEnum", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "char",
            length: 10,
            name: "t_char"
        })
    ], Sys_typeEntity.prototype, "tChar", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            length: 10,
            name: "t_varchar"
        })
    ], Sys_typeEntity.prototype, "tVarchar", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            length: 10,
            name: "t_nvarchar"
        })
    ], Sys_typeEntity.prototype, "tNvarchar", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "longblob",
            name: "t_longblob"
        })
    ], Sys_typeEntity.prototype, "tLongblob", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "binary",
            length: 10,
            name: "t_binary"
        })
    ], Sys_typeEntity.prototype, "tBinary", void 0);
    Sys_typeEntity = __decorate([
        (0, typeorm_1.Entity)('sys_type')
    ], Sys_typeEntity);
    return Sys_typeEntity;
}());
exports.Sys_typeEntity = Sys_typeEntity;
