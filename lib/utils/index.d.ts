import { ColumnType, RowDataPacket, Column } from '../types/types';
/**
 * 下划线转驼峰命名
 * @param checkoutStr
 * @returns
 */
export declare const underlineToHump: (fieldName: string) => string;
export declare const isArray: (value: any) => boolean;
export declare const parseArg: (arg: string | undefined) => string | string[] | undefined;
export declare const handler: (type: string) => {
    type: ColumnType | undefined;
    length: number | undefined;
    precision: number | undefined;
    scale: number | undefined;
    enums: any[] | undefined;
};
export declare const generateColumn: ({ Field, Type, Collation, Null, Key, Default, Extra, Privileges, Comment }: RowDataPacket) => Partial<Column & RowDataPacket & {
    jsType: any;
}>;
