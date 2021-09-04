import "dotenv/config";
import { Options, OptionsKey } from './types/types';
export declare class Parse {
    tableName: string;
    moduleName: string;
    options: OptionsKey;
    type: Options;
    externalOptions: {
        table: {
            table_name: string;
            table_info: object;
        };
        module_name: string;
    } | null;
    constructor(tableName: string, moduleName: string, options: OptionsKey);
    parseOption(): void;
    generateEntity(): Promise<void>;
    generateTier(): void;
    generateCURD(): void;
}
