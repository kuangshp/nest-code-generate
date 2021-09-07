"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountEntity = void 0;
var typeorm_1 = require("typeorm");
var AccountEntity = /** @class */ (function () {
    function AccountEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({
            type: "bigint",
            primary: true,
            name: "id",
            comment: "主键id",
            unique: true
        })
    ], AccountEntity.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamp",
            name: "created_at",
            default: "CURRENT_TIMESTAMP(6)",
            comment: "创建时间"
        })
    ], AccountEntity.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamp",
            name: "updated_at",
            default: "CURRENT_TIMESTAMP(6)",
            comment: "更新时间"
        })
    ], AccountEntity.prototype, "updatedAt", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamp",
            name: "deleted_at",
            nullable: true,
            comment: "软删除时间"
        })
    ], AccountEntity.prototype, "deletedAt", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column({
            type: "varchar",
            length: 50,
            name: "username",
            comment: "用户名"
        })
    ], AccountEntity.prototype, "username", void 0);
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            length: 100,
            name: "password",
            comment: "密码"
        })
    ], AccountEntity.prototype, "password", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column({
            type: "varchar",
            length: 11,
            name: "mobile",
            nullable: true,
            comment: "手机号码"
        })
    ], AccountEntity.prototype, "mobile", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column({
            type: "varchar",
            length: 50,
            name: "email",
            nullable: true,
            comment: "邮箱"
        })
    ], AccountEntity.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({
            type: "tinyint",
            name: "status",
            nullable: true,
            default: "1",
            comment: "状态,0表示禁止,1表示正常"
        })
    ], AccountEntity.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column({
            type: "tinyint",
            name: "platform",
            nullable: true,
            default: "0",
            comment: "平台:0表示普通用户(没权限),1表示为运营管理,2表示入住商家"
        })
    ], AccountEntity.prototype, "platform", void 0);
    __decorate([
        typeorm_1.Column({
            type: "tinyint",
            name: "is_super",
            default: "0",
            comment: "是否为超级管理员1表示是,0表示不是"
        })
    ], AccountEntity.prototype, "isSuper", void 0);
    AccountEntity = __decorate([
        typeorm_1.Entity('account')
    ], AccountEntity);
    return AccountEntity;
}());
exports.AccountEntity = AccountEntity;
