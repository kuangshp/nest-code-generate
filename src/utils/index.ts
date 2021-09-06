import { findNodeModules } from "./database";
import { statSync, readdirSync, mkdirSync } from 'fs';
import { join } from 'path';

// 首字母大写
export const textCapitalize = (str: string) => (typeof str === 'string') ? str.slice(0, 1).toUpperCase() + str.slice(1) : str;

// 首字母小写
export const textLowercase = (str: string) => (typeof str === 'string') ? str.slice(0, 1).toLowerCase() + str.slice(1) : str;

// 下划线转小驼峰
export const underlineToHump = (name: string): string => {
  const BigHump = name.replace(/(^|_)(\w)/g, (...args) => args[2].toUpperCase());
  return textLowercase(BigHump);
}

// 是否数组
export const isArray = (value: any): boolean => Array.isArray(value);

// 路径寻址(深度优先)
export const findPath = (dirName: string = 'src'): string => {

  let dirNames = dirName.split('/');

  if (dirNames[0].trim() === '') dirNames.shift();

  const { path: rootPath, dir } = findNodeModules();
  const ignoreDir = ['.git', '.vscode', 'node_modules'];
  let resultPath: string | undefined;

  const findRecursion = (currentPath: string, _dir: string[], _dirName: string) => {
    if (_dir.includes(_dirName)) {
      resultPath = join(currentPath, _dirName);
    } else {
      _dir.forEach((name: string) => {
        const nextPath = join(currentPath, name);
        if (
          !ignoreDir.includes(name) 
          && (name.slice(0, 1) !== '.') 
          && statSync(nextPath).isDirectory()
        ) {
          findRecursion(nextPath, readdirSync(nextPath), _dirName);
        }
      });
    }
  };

  findRecursion(rootPath, dir, dirNames[0]);

  if (resultPath) {
    return dirNames.length > 1 ? join(resultPath, ...dirNames.slice(1)) : resultPath;
  } else {
    // 如果dirName是src 并且没有src的情况下 就创建一个
    if (dirName === 'src') {
      resultPath = join(rootPath, 'src');
      mkdirSync(resultPath);
      return resultPath;
    } else {
      throw new ReferenceError(`The folder ${dirName} was not found`);
    }
  }

}

// 文件夹不存在创建文件夹
export const emptyTheMkdir = (dirPath: string) => {
  try {
    statSync(dirPath).isDirectory();
  } catch (error) {
    // 报错说明不存在, 不存在就创建一个
    mkdirSync(dirPath);
  }
}

// 判断是否存在表名
export const hasTableName = (tableNames: string[], call: Function) => {
  return new Promise(async (resolve, reject) => {
    if (tableNames.length > 0) {
      await call();
      resolve(true);
    } else {
      reject(new TypeError('Please enter the <table_name> field: nest-code-generate <table_name> <module_name> [options]'));
    }
  });
}

