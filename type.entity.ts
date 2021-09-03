import { Entity, Unique, Column } from "typeorm";

@Entity("type")
export class TypeEntity {
  @Column({
    type: "int",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "id",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "true",
    unique: "true",
    jsType: undefined,
  })
  id: undefined;

  @Column({
    type: "decimal",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_dec",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_dec: undefined;

  @Column({
    type: "decimal",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_decimal",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_decimal: undefined;

  @Column({
    type: "decimal",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_numeric",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_numeric: undefined;

  @Column({
    type: "date",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_date",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_date: undefined;

  @Column({
    type: "datetime",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_datetime",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_datetime: undefined;

  @Column({
    type: "timestamp",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_timestamp",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_timestamp: undefined;

  @Column({
    type: "time",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_time",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_time: undefined;

  @Column({
    type: "year",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_year",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_year: undefined;

  @Column({
    type: "text",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_text",
    collation: "utf8mb4_bin",
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_text: undefined;

  @Column({
    type: "tinytext",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_tinytext",
    collation: "utf8mb4_bin",
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_tinytext: undefined;

  @Column({
    type: "mediumtext",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_mediumtext",
    collation: "utf8mb4_bin",
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_mediumtext: undefined;

  @Column({
    type: "blob",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_blob",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_blob: undefined;

  @Column({
    type: "longtext",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_longtext",
    collation: "utf8mb4_bin",
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_longtext: undefined;

  @Column({
    type: "tinyblob",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_tinyblob",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_tinyblob: undefined;

  @Column({
    type: "mediumblob",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_mediumblob",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_mediumblob: undefined;

  @Column({
    type: "json",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_json",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_json: undefined;

  @Column({
    type: "geometry",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_geometry",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_geometry: undefined;

  @Column({
    type: "point",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_point",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_point: undefined;

  @Column({
    type: "linestring",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_linestring",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_linestring: undefined;

  @Column({
    type: "polygon",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_polygon",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_polygon: undefined;

  @Column({
    type: "multipoint",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_multipoint",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_multipoint: undefined;

  @Column({
    type: "multilinestring",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_multilinestring",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_multilinestring: undefined;

  @Column({
    type: "multipolygon",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_multipolygon",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_multipolygon: undefined;

  @Column({
    type: "int",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_int",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_int: undefined;

  @Column({
    type: "tinyint",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_tinyint",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_tinyint: undefined;

  @Column({
    type: "smallint",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_smallint",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_smallint: undefined;

  @Column({
    type: "mediumint",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_mediumint",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_mediumint: undefined;

  @Column({
    type: "bigint",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_bigint",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_bigint: undefined;

  @Column({
    type: "float",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_float",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_float: undefined;

  @Column({
    type: "double",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_double",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_double: undefined;

  @Column({
    type: "text",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_simple_json",
    collation: "utf8mb4_bin",
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_simple_json: undefined;

  @Column({
    type: "text",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_array",
    collation: "utf8mb4_bin",
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_array: undefined;

  @Column({
    type: "enum",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: "test_enum1,test_enum2",
    name: "t_enum",
    collation: "utf8mb4_bin",
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: "[]",
  })
  t_enum: [];

  @Column({
    type: "char",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_char",
    collation: "utf8mb4_bin",
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_char: undefined;

  @Column({
    type: "varchar",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_varchar",
    collation: "utf8mb4_bin",
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_varchar: undefined;

  @Column({
    type: "varchar",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_nvarchar",
    collation: "utf8mb4_bin",
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_nvarchar: undefined;

  @Column({
    type: "longblob",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_longblob",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_longblob: undefined;

  @Column({
    type: "binary",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_binary",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_binary: undefined;

  @Column({
    type: "geomcollection",
    length: undefined,
    precision: undefined,
    scale: undefined,
    enum: undefined,
    name: "t_geometrycollection",
    collation: null,
    nullable: "false",
    default: null,
    select: "false",
    comment: "",
    update: "true",
    primary: "false",
    unique: "false",
    jsType: undefined,
  })
  t_geometrycollection: undefined;
}
