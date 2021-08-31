import "dotenv/config";
import { db } from "./client";
import { writeFileSync } from "fs";

(async () => {
  // 获取全部的字段
  const result = await db.query("SHOW FULL FIELDS FROM category");

  let str = "";

  for (const item of result) {
    console.log(item);
    //     str += `
    //   @Column({
    //     type: '${item.Type}',
    //     nullable: ${item.Null == "YEW" ? true : false},
    //     name: '${item.Field}',
    //     comment: '${item.Comment}',
    //   })
    //   ${item.Field}: number;
    // `;
    //   }

    //   let entityStr = `
    // import { Entity, Unique, Column } from 'typeorm';

    // @Entity('account')
    // export class AccountEntity {
    //   ${str}
    // }
    //   `;
    //   writeFileSync("./11.ts", entityStr);
  }
})();
