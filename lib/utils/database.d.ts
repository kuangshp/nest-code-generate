import { DatabaseConfig, EnvDatabaseConfig, YMLDatabaseConfig } from '../types/types';
export declare const findNodeModules: () => {
    dir: string[];
    path: string;
};
export declare const transformOptions: (options: Partial<DatabaseConfig & EnvDatabaseConfig & YMLDatabaseConfig>) => DatabaseConfig;
