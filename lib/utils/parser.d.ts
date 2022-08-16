import { ColumnType, RowDataPacket, Column, ColumnMap, RowMap, MinxinProp } from "../typings/types";
export declare const parseArg: (arg: string | undefined) => string | string[] | undefined;
export declare const handler: (type: string) => {
    type: ColumnType | undefined;
    length: number | undefined;
    precision: number | undefined;
    scale: number | undefined;
    enums: any[] | undefined;
};
export declare const generateColumn: ({ Field, Type, Collation, Null, Key, Default, Extra, Privileges, Comment, }: RowDataPacket) => Partial<Column & RowDataPacket & MinxinProp>;
export declare const getTableStructure: (tableNames: string[]) => Promise<RowMap>;
export declare const transformStructure: (structure: RowMap, collect: string[]) => ColumnMap;
export declare const generateEntity: (columnStructure: ColumnMap, targetPath: string, baseName: string) => void;
