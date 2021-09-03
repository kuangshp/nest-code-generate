import "dotenv/config";
import { OptionsKey } from './types/types';
export declare class Parse {
    tableName: string;
    moduleName: string;
    options: OptionsKey;
    constructor(tableName: string, moduleName: string, options: OptionsKey);
    parseOption(): void;
    generateEntity(): Promise<void>;
    generateTier(): void;
    generateCURD(): void;
}
