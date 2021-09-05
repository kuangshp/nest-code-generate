"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GENFILE_TYPES = exports.RULES = exports.JSTYPEMAP = exports.HAS_SCALE = exports.HAS_PRECISION = exports.HAS_LENGTH = exports.ColumnType = exports.Options = void 0;
var Options;
(function (Options) {
    Options["entity"] = "entity";
    Options["tier"] = "tier";
    Options["curd"] = "curd";
    Options["all"] = "all";
})(Options = exports.Options || (exports.Options = {}));
;
var ColumnType;
(function (ColumnType) {
    ColumnType["int"] = "int";
    ColumnType["decimal"] = "decimal";
    ColumnType["date"] = "date";
    ColumnType["datetime"] = "datetime";
    ColumnType["timestamp"] = "timestamp";
    ColumnType["time"] = "time";
    ColumnType["year"] = "year";
    ColumnType["char"] = "char";
    ColumnType["varchar"] = "varchar";
    ColumnType["text"] = "text";
    ColumnType["tinytext"] = "tinytext";
    ColumnType["mediumtext"] = "mediumtext";
    ColumnType["blob"] = "blob";
    ColumnType["longtext"] = "longtext";
    ColumnType["tinyblob"] = "tinyblob";
    ColumnType["mediumblob"] = "mediumblob";
    ColumnType["longblob"] = "longblob";
    ColumnType["json"] = "json";
    ColumnType["binary"] = "binary";
    ColumnType["geometry"] = "geometry";
    ColumnType["point"] = "point";
    ColumnType["linestring"] = "linestring";
    ColumnType["polygon"] = "polygon";
    ColumnType["multipoint"] = "multipoint";
    ColumnType["multilinestring"] = "multilinestring";
    ColumnType["multipolygon"] = "multipolygon";
    ColumnType["tinyint"] = "tinyint";
    ColumnType["smallint"] = "smallint";
    ColumnType["mediumint"] = "mediumint";
    ColumnType["bigint"] = "bigint";
    ColumnType["float"] = "float";
    ColumnType["double"] = "double";
    ColumnType["enum"] = "enum";
    ColumnType["geomcollection"] = "geomcollection";
})(ColumnType = exports.ColumnType || (exports.ColumnType = {}));
exports.HAS_LENGTH = ['char', 'varchar', 'nvarchar', 'binary'];
exports.HAS_PRECISION = ['dec', 'decimal', 'numeric', 'int', 'tinyint', 'smallint', 'mediumint', 'bigint', 'datetime', 'timestamp', 'time'];
exports.HAS_SCALE = ['dec', 'decimal', 'numeric', 'float', 'double'];
exports.JSTYPEMAP = (_a = {},
    _a[ColumnType.int] = 'number',
    _a[ColumnType.decimal] = 'number',
    _a[ColumnType.date] = 'string',
    _a[ColumnType.datetime] = 'Date',
    _a[ColumnType.timestamp] = 'Date',
    _a[ColumnType.time] = 'string',
    _a[ColumnType.year] = 'string',
    _a[ColumnType.char] = 'string',
    _a[ColumnType.varchar] = 'string',
    _a[ColumnType.text] = 'string',
    _a[ColumnType.tinytext] = 'string',
    _a[ColumnType.mediumtext] = 'string',
    _a[ColumnType.blob] = 'string',
    _a[ColumnType.longtext] = 'string',
    _a[ColumnType.tinyblob] = 'string',
    _a[ColumnType.mediumblob] = 'string',
    _a[ColumnType.longblob] = 'string',
    _a[ColumnType.json] = 'string',
    _a[ColumnType.binary] = 'string',
    _a[ColumnType.geometry] = 'string',
    _a[ColumnType.point] = 'string',
    _a[ColumnType.linestring] = 'string',
    _a[ColumnType.polygon] = 'string',
    _a[ColumnType.multipoint] = 'string',
    _a[ColumnType.multilinestring] = 'string',
    _a[ColumnType.multipolygon] = 'string',
    _a[ColumnType.tinyint] = 'number',
    _a[ColumnType.smallint] = 'number',
    _a[ColumnType.mediumint] = 'number',
    _a[ColumnType.bigint] = 'number',
    _a[ColumnType.float] = 'number',
    _a[ColumnType.double] = 'number',
    _a[ColumnType.enum] = '[]',
    _a[ColumnType.geomcollection] = 'string',
    _a);
exports.RULES = {
    int: /^int(\(\d+\))?$/i,
    decimal: /^decimal(\((\d+,?)+\))?$/i,
    date: /^date$/i,
    datetime: /^datetime(\(\d+\))?$/i,
    timestamp: /^timestamp(\(\d+\))?$/i,
    time: /^time(\(\d+\))?$/i,
    year: /^year$/i,
    char: /^char(\(\d+\))?$/i,
    varchar: /^varchar(\(\d+\))?$/i,
    text: /^text$/i,
    tinytext: /^tinytext$/i,
    mediumtext: /^mediumtext$/i,
    blob: /^blob$/i,
    longtext: /^longtext$/i,
    tinyblob: /^tinyblob$/i,
    mediumblob: /^mediumblob$/i,
    longblob: /^longblob$/i,
    json: /^json$/i,
    binary: /^binary(\(\d+\))?$/i,
    geometry: /^geometry$/i,
    point: /^point$/i,
    linestring: /^linestring$/i,
    polygon: /^polygon$/i,
    multipoint: /^multipoint$/i,
    multilinestring: /^multilinestring$/i,
    multipolygon: /^multipolygon$/i,
    tinyint: /^tinyint(\(\d+\))?$/i,
    smallint: /^smallint$/i,
    mediumint: /^mediumint$/i,
    bigint: /^bigint(\(\d+\))?$/i,
    float: /^float(\((\d+,?)+\))?$/i,
    double: /^double(\((\d+,?)+\))?$/i,
    enum: /^enum(\((.+?,?)?\))?$/i,
    geomcollection: /^geomcollection$/i
};
var GENFILE_TYPES;
(function (GENFILE_TYPES) {
    GENFILE_TYPES["ENTITY"] = "entities";
    GENFILE_TYPES["CONTROLLER"] = "controllers";
    GENFILE_TYPES["SERVICE"] = "services";
    GENFILE_TYPES["FULL"] = "full";
    GENFILE_TYPES["EMPTY"] = "empty";
})(GENFILE_TYPES = exports.GENFILE_TYPES || (exports.GENFILE_TYPES = {}));
