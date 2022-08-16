import { render } from 'ejs';
import { join, basename } from 'path';
import {
  readdirSync,
  readFileSync,
  ensureDirSync,
  writeFileSync,
  statSync,
  existsSync,
} from 'fs-extra';
import { GENFILE_TYPES, PathOptions } from '../typings/types';
import { textCapitalize, underlineToHump } from '.';

type TableOption = {
  table_name: string;
  table_uppercase_name?: string;
  table_info?: object;
};

type Options = {
  table: TableOption | null;
  module_name?: string;
  is_full?: boolean;
};

const templateRoot = join(__dirname, '..', '..', 'template');
const entityTemplate = join(templateRoot, 'entities');
const controllerTemplate = join(templateRoot, 'controllers');
const serviceTemplate = join(templateRoot, 'services');

function renderFiles(fromPath: string, toPath: string, options: Options): void {
  ensureDirSync(toPath);
  const dirs = readdirSync(fromPath);
  const { table } = options;
  if (table) {
    const { table_name } = table;
    dirs.forEach((dir) => {
      let renderPath = toPath;
      const fullPath = join(fromPath, dir);
      if (statSync(fullPath).isFile()) {
        const fileBaseName = basename(fullPath, '.ejs').replace('template', table_name) + '.ts';
        renderPath = join(renderPath, fileBaseName);
        renderFile(fullPath, renderPath, options);
      } else {
        renderPath = join(renderPath, dir);
        renderFiles(fullPath, renderPath, options);
      }
    });
  }
}

function renderFile(fromPath: string, toPath: string, options: Options): void {
  if (existsSync(toPath)) {
    return console.warn(`${toPath} has been exist`);
  }
  let content = readFileSync(fromPath, 'utf-8');
  content = render(content, options);
  writeFileSync(toPath, content, 'utf-8');
  console.log(`create ${toPath} Success`);
}

function genFiles(type: GENFILE_TYPES, options: Options, targetPath: PathOptions): void {
  options.is_full = type === GENFILE_TYPES.FULL;
  const table = options.table;
  if (table) {
    table.table_uppercase_name = textCapitalize(underlineToHump(table.table_name));
    if (type === GENFILE_TYPES.FULL || type === GENFILE_TYPES.EMPTY) {
      const renderSequlize = [GENFILE_TYPES.SERVICE, GENFILE_TYPES.CONTROLLER];
      renderSequlize.forEach((seq) => {
        genFile(seq, options, targetPath);
      });
    } else {
      genFile(type, options, targetPath);
    }
  } else {
    console.error('cant not read table info');
    process.exit(1);
  }
}

function genFile(type: GENFILE_TYPES, options: Options, targetPath: PathOptions): void {
  let entryPath = '';
  let genPath = '';
  const genOptions = {
    [GENFILE_TYPES.CONTROLLER]: () => {
      entryPath = controllerTemplate;
      genPath = targetPath.controllers;
    },
    [GENFILE_TYPES.SERVICE]: () => {
      entryPath = serviceTemplate;
      genPath = targetPath.services;
    },
  } as { [k in GENFILE_TYPES]: () => void };

  genOptions[type]();

  renderFiles(entryPath, genPath, options);
}

export { genFiles };
