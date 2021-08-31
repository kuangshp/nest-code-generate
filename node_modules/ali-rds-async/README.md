## ali-rds-async

## 申明

本`SDK`仅仅是将[ali-rds](https://github.com/ali-sdk/ali-rds)的`SDK`的`generator`书写方法使用[co 模块](https://www.npmjs.com/package/co)改造成现在市场上流行的`Promise`的方式,参考文档直接看[ali-rds 官网](https://github.com/ali-sdk/ali-rds)就可以

## 使用示例

- 1、安装模块

  ```shell
  npm install ali-rds-async
  ```

- 2、导包及连接数据库

  ```js
  import AsyncAliRds from 'ali-rds-async';
  // or
  const { AsyncAliRds } = require('ali-rds-async');

  const config = {
    host: 'your-rds-address.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'your-username',
    password: 'your-password',
    database: 'your-database-name',

    // optional params
    // The charset for the connection.
    // This is called "collation" in the SQL-level of MySQL (like utf8_general_ci).
    // If a SQL-level charset is specified (like utf8mb4)
    // then the default collation for that charset is used. (Default: 'UTF8_GENERAL_CI')
    // charset: 'utf8_general_ci',
    //
    // The maximum number of connections to create at once. (Default: 10)
    // connectionLimit: 10,
    //
    // The maximum number of connection requests the pool will queue
    // before returning an error from getConnection.
    // If set to 0, there is no limit to the number of queued connection requests. (Default: 0)
    // queueLimit: 0,
  };
  // 创建连接
  let mysql = new AsyncAliRds(config);
  ```

* 3、使用案例

  ```js
  (async () => {
    const r = await mysql.query('select * from dog');
    console.log(r);
  })();

  (async () => {
    const r = await mysql.select('dog');
    console.log('结果2', r);
  })();

  (async () => {
    const r = await mysql.insert('dog', { name: '小狗', color: '黄色' });
    console.log('结果', r);
  })();
  ```

## 主要实现的方法

- [x] `query`使用原生`sql`语句
- [x] `insert`插入语句
- [x] `update`更新单条语句
- [x] `updateRows`更新多条语句
- [x] `get`获取一条数据
- [x] `select`查询数据
- [x] `delete`删除数据
- [x] `count`计数
- [x] `beginTransaction`事务
