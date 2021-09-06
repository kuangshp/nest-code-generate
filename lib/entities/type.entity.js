"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeEntity = void 0;
var typeorm_1 = require("typeorm");
var TypeEntity = /** @class */ (function () {
    function TypeEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({
            type: "int",
            primary: true,
            name: "id",
            unique: true
        })
    ], TypeEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "decimal",
            precision: 20,
            scale: 8,
            name: "t_dec"
        })
    ], TypeEntity.prototype, "tDec", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "decimal",
            precision: 20,
            scale: 8,
            name: "t_decimal"
        })
    ], TypeEntity.prototype, "tDecimal", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "decimal",
            precision: 10,
            scale: 9,
            name: "t_numeric"
        })
    ], TypeEntity.prototype, "tNumeric", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "date",
            name: "t_date"
        })
    ], TypeEntity.prototype, "tDate", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "datetime",
            name: "t_datetime"
        })
    ], TypeEntity.prototype, "tDatetime", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "timestamp",
            name: "t_timestamp"
        })
    ], TypeEntity.prototype, "tTimestamp", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "time",
            name: "t_time"
        })
    ], TypeEntity.prototype, "tTime", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "year",
            name: "t_year"
        })
    ], TypeEntity.prototype, "tYear", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "text",
            name: "t_text"
        })
    ], TypeEntity.prototype, "tText", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "tinytext",
            name: "t_tinytext"
        })
    ], TypeEntity.prototype, "tTinytext", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "mediumtext",
            name: "t_mediumtext"
        })
    ], TypeEntity.prototype, "tMediumtext", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "blob",
            name: "t_blob"
        })
    ], TypeEntity.prototype, "tBlob", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "longtext",
            name: "t_longtext"
        })
    ], TypeEntity.prototype, "tLongtext", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "tinyblob",
            name: "t_tinyblob"
        })
    ], TypeEntity.prototype, "tTinyblob", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "mediumblob",
            name: "t_mediumblob"
        })
    ], TypeEntity.prototype, "tMediumblob", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "json",
            name: "t_json"
        })
    ], TypeEntity.prototype, "tJson", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "geometry",
            name: "t_geometry"
        })
    ], TypeEntity.prototype, "tGeometry", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "point",
            name: "t_point"
        })
    ], TypeEntity.prototype, "tPoint", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "linestring",
            name: "t_linestring"
        })
    ], TypeEntity.prototype, "tLinestring", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "polygon",
            name: "t_polygon"
        })
    ], TypeEntity.prototype, "tPolygon", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "multipoint",
            name: "t_multipoint"
        })
    ], TypeEntity.prototype, "tMultipoint", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "multilinestring",
            name: "t_multilinestring"
        })
    ], TypeEntity.prototype, "tMultilinestring", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "multipolygon",
            name: "t_multipolygon"
        })
    ], TypeEntity.prototype, "tMultipolygon", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({
            type: "int",
            name: "t_int"
        })
    ], TypeEntity.prototype, "tInt", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "tinyint",
            name: "t_tinyint"
        })
    ], TypeEntity.prototype, "tTinyint", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "smallint",
            name: "t_smallint"
        })
    ], TypeEntity.prototype, "tSmallint", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "mediumint",
            name: "t_mediumint"
        })
    ], TypeEntity.prototype, "tMediumint", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "bigint",
            name: "t_bigint"
        })
    ], TypeEntity.prototype, "tBigint", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "float",
            scale: 1,
            name: "t_float"
        })
    ], TypeEntity.prototype, "tFloat", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "double",
            scale: 2,
            name: "t_double"
        })
    ], TypeEntity.prototype, "tDouble", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "text",
            name: "t_simple_json"
        })
    ], TypeEntity.prototype, "tSimpleJson", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "text",
            name: "t_array"
        })
    ], TypeEntity.prototype, "tArray", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "enum",
            enum: ["test_enum1", "test_enum2"],
            name: "t_enum"
        })
    ], TypeEntity.prototype, "tEnum", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "char",
            length: 10,
            name: "t_char"
        })
    ], TypeEntity.prototype, "tChar", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            length: 10,
            name: "t_varchar"
        })
    ], TypeEntity.prototype, "tVarchar", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            length: 10,
            name: "t_nvarchar"
        })
    ], TypeEntity.prototype, "tNvarchar", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "longblob",
            name: "t_longblob"
        })
    ], TypeEntity.prototype, "tLongblob", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "binary",
            length: 10,
            name: "t_binary"
        })
    ], TypeEntity.prototype, "tBinary", void 0);
    TypeEntity = __decorate([
        (0, typeorm_1.Entity)('type')
    ], TypeEntity);
    return TypeEntity;
}());
exports.TypeEntity = TypeEntity;
