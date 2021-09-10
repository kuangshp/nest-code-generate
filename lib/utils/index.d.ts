export declare const textCapitalize: (str: string) => string;
export declare const textLowercase: (str: string) => string;
export declare const underlineToHump: (name: string) => string;
export declare const isArray: (value: any) => boolean;
export declare const findPath: (dirName?: string) => string;
export declare const emptyTheMkdir: (dirPath: string) => void;
export declare const hasTableName: (tableNames: string[], call: Function) => Promise<unknown>;
export declare const readYMLConfig: (field: string) => any;
export declare const baseEntity: () => {
    base_name: string;
    collect: string[];
};
