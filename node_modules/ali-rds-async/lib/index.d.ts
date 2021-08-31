declare class AsyncAliRds {
    client: any;
    constructor(config: {
        [propsName: string]: any;
    });
    /**
     * 执行原生sql语句
     * @param sql sql语句
     * @param params 拼接sql的参数
     */
    query(sql: string, params?: Array<any>): Promise<any>;
    /**
     * 插入数据
     * @param tableName 表名
     * @param row 插入的数据, 对象或者对象数组
     */
    insert(tableName: string, row: {
        [propsName: string]: any;
    } | Array<{
        [propsName: string]: any;
    }>): Promise<any>;
    /**
     * 更新单条数据
     * @param tableName 表名
     * @param row 行数据(会默认根据id去更新数据)
     * @param operation 其它的参数补充
     */
    update(tableName: string, row: {
        [propsName: string]: any;
    }, operation?: {
        [propsName: string]: any;
    }): Promise<any>;
    /**
     * 更新多条数据
     * @param tableName 表名
     * @param rows 需要更新的数组对象
     */
    updateRows(tableName: string, rows: Array<{
        [propsName: string]: any;
    }>): Promise<any>;
    /**
     * 简单根据条件查询数据
     * @param tableName 表名
     * @param operation 过滤条件
     */
    get(tableName: string, operation: {
        [propsName: string]: any;
    }): Promise<any>;
    /**
     * 查询数据
     * @param tableName
     * @param operation
     */
    select(tableName: string, operation?: {
        [propsName: string]: any;
    }): Promise<any>;
    /**
     * 根据条件删除数据
     * @param tableName
     * @param operation
     */
    delete(tableName: string, operation: {
        [propsName: string]: any;
    }): Promise<any>;
    /**
     * 根据条件查询记录数
     * @param tableName
     * @param operation
     */
    count(tableName: string, operation?: {
        [propsName: string]: any;
    }): Promise<any>;
    /**
     * 开启事务
     */
    beginTransaction(): {
        commit: () => void;
        rollback: () => void;
    };
}
export default AsyncAliRds;
export { AsyncAliRds };
