import { GENFILE_TYPES, PathOptions } from '../typings/types';
declare type TableOption = {
    table_name: string;
    table_uppercase_name?: string;
    table_info?: object;
};
declare type Options = {
    table: TableOption | null;
    module_name?: string;
    is_full?: boolean;
};
declare function genFiles(type: GENFILE_TYPES, options: Options, targetPath: PathOptions): void;
export { genFiles };
