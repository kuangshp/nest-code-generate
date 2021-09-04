import { readdirSync } from "fs";
import { join } from 'path';


// 寻找node_modules所在的路径
export const findNodeModules = () => {
  let currentPath = __dirname;
  let dir = readdirSync(currentPath);
  while (!dir.includes('node_modules')) {
    currentPath = join(currentPath, '..');
    dir = readdirSync(currentPath);
  }
  return { dir, path: currentPath };
}
