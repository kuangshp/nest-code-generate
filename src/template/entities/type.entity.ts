import { Entity, Column, Index, PrimaryGeneratedColumn } from 'typeorm';
@Entity('type')
export class TypeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "decimal", 
    precision: 20, 
    scale: 8, 
    name: "t_dec" 
  })
  tDec: number;

  @Column({
    type: "decimal", 
    precision: 20, 
    scale: 8, 
    name: "t_decimal" 
  })
  tDecimal: number;

  @Column({
    type: "decimal", 
    precision: 10, 
    scale: 9, 
    name: "t_numeric" 
  })
  tNumeric: number;

  @Column({
    type: "date", 
    name: "t_date" 
  })
  tDate: string;

  @Column({
    type: "datetime", 
    name: "t_datetime" 
  })
  tDatetime: Date;

  @Column({
    type: "timestamp", 
    name: "t_timestamp" 
  })
  tTimestamp: Date;

  @Column({
    type: "time", 
    name: "t_time" 
  })
  tTime: string;

  @Column({
    type: "year", 
    name: "t_year" 
  })
  tYear: string;

  @Column({
    type: "text", 
    name: "t_text" 
  })
  tText: string;

  @Column({
    type: "tinytext", 
    name: "t_tinytext" 
  })
  tTinytext: string;

  @Column({
    type: "mediumtext", 
    name: "t_mediumtext" 
  })
  tMediumtext: string;

  @Column({
    type: "blob", 
    name: "t_blob" 
  })
  tBlob: string;

  @Column({
    type: "longtext", 
    name: "t_longtext" 
  })
  tLongtext: string;

  @Column({
    type: "tinyblob", 
    name: "t_tinyblob" 
  })
  tTinyblob: string;

  @Column({
    type: "mediumblob", 
    name: "t_mediumblob" 
  })
  tMediumblob: string;

  @Column({
    type: "json", 
    name: "t_json" 
  })
  tJson: string;

  @Column({
    type: "geometry", 
    name: "t_geometry" 
  })
  tGeometry: string;

  @Column({
    type: "point", 
    name: "t_point" 
  })
  tPoint: string;

  @Column({
    type: "linestring", 
    name: "t_linestring" 
  })
  tLinestring: string;

  @Column({
    type: "polygon", 
    name: "t_polygon" 
  })
  tPolygon: string;

  @Column({
    type: "multipoint", 
    name: "t_multipoint" 
  })
  tMultipoint: string;

  @Column({
    type: "multilinestring", 
    name: "t_multilinestring" 
  })
  tMultilinestring: string;

  @Column({
    type: "multipolygon", 
    name: "t_multipolygon" 
  })
  tMultipolygon: string;

  @Index()
  @Column({
    type: "int", 
    name: "t_int" 
  })
  tInt: number;

  @Column({
    type: "tinyint", 
    name: "t_tinyint" 
  })
  tTinyint: number;

  @Column({
    type: "smallint", 
    name: "t_smallint" 
  })
  tSmallint: number;

  @Column({
    type: "mediumint", 
    name: "t_mediumint" 
  })
  tMediumint: number;

  @Column({
    type: "bigint", 
    name: "t_bigint" 
  })
  tBigint: number;

  @Column({
    type: "float", 
    scale: 1, 
    name: "t_float" 
  })
  tFloat: number;

  @Column({
    type: "double", 
    scale: 2, 
    name: "t_double" 
  })
  tDouble: number;

  @Column({
    type: "text", 
    name: "t_simple_json" 
  })
  tSimpleJson: string;

  @Column({
    type: "text", 
    name: "t_array" 
  })
  tArray: string;

  @Column({
    type: "enum", 
    enum: ["test_enum1","test_enum2"], 
    name: "t_enum" 
  })
  tEnum: ["test_enum1","test_enum2"];

  @Column({
    type: "char", 
    length: 10, 
    name: "t_char" 
  })
  tChar: string;

  @Column({
    type: "varchar", 
    length: 10, 
    name: "t_varchar" 
  })
  tVarchar: string;

  @Column({
    type: "varchar", 
    length: 10, 
    name: "t_nvarchar" 
  })
  tNvarchar: string;

  @Column({
    type: "longblob", 
    name: "t_longblob" 
  })
  tLongblob: string;

  @Column({
    type: "binary", 
    length: 10, 
    name: "t_binary" 
  })
  tBinary: string;


}