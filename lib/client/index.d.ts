import AsyncAliRds from "ali-rds-async";
export declare const readDatabaseConfig: () => {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
};
export declare const db: AsyncAliRds;
