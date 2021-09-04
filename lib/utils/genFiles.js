"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genFiles = void 0;
var ejs_1 = require("ejs");
var path_1 = require("path");
var fs_extra_1 = require("fs-extra");
var types_1 = require("../types/types");
var _1 = require(".");
var cwd = process.cwd();
var templateRoot = path_1.join(__dirname, '../../template');
var entityTemplate = path_1.join(templateRoot, 'entities');
var controllerTemplate = path_1.join(templateRoot, 'controllers');
var serviceTemplate = path_1.join(templateRoot, 'services');
var outpuRoot = path_1.join(cwd, 'demo');
function renderFiles(fromPath, toPath, options) {
    fs_extra_1.ensureDirSync(toPath);
    var dirs = fs_extra_1.readdirSync(fromPath);
    var table = options.table;
    if (table) {
        var table_name_1 = table.table_name;
        dirs.forEach(function (dir) {
            var renderPath = toPath;
            var fullPath = path_1.join(fromPath, dir);
            if (fs_extra_1.statSync(fullPath).isFile()) {
                var fileBaseName = path_1.basename(fullPath, '.ejs').replace('template', table_name_1) + '.ts';
                renderPath = path_1.join(renderPath, fileBaseName);
                renderFile(fullPath, renderPath, options);
            }
            else {
                renderPath = path_1.join(renderPath, dir);
                renderFiles(fullPath, renderPath, options);
            }
        });
    }
}
function renderFile(fromPath, toPath, options) {
    if (fs_extra_1.existsSync(toPath)) {
        return console.warn(toPath + " has been exist");
    }
    var content = fs_extra_1.readFileSync(fromPath, 'utf-8');
    content = ejs_1.render(content, options);
    fs_extra_1.writeFileSync(toPath, content, 'utf-8');
    console.log("create " + toPath + " success");
}
function genFiles(type, options) {
    options.is_full = type === types_1.GENFILE_TYPES.FULL;
    var table = options.table;
    if (table) {
        table.table_uppercase_name = _1.underlineToHump(table.table_name);
        if (type === types_1.GENFILE_TYPES.FULL || type === types_1.GENFILE_TYPES.EMPTY) {
            var renderSequlize = [types_1.GENFILE_TYPES.ENTITY, types_1.GENFILE_TYPES.SERVICE, types_1.GENFILE_TYPES.CONTROLLER];
            renderSequlize.forEach(function (seq) {
                genFile(seq, options);
            });
        }
        else {
            genFile(type, options);
        }
    }
    else {
        console.error('cant not read table info');
        process.exit(1);
    }
}
exports.genFiles = genFiles;
function genFile(type, options) {
    var module_name = options.module_name;
    var entryPath = '';
    switch (type) {
        case types_1.GENFILE_TYPES.ENTITY:
            entryPath = entityTemplate;
            break;
        case types_1.GENFILE_TYPES.CONTROLLER:
            entryPath = controllerTemplate;
            break;
        default:
            entryPath = serviceTemplate;
            break;
    }
    var modulePath = path_1.join(outpuRoot, type + "/" + module_name);
    renderFiles(entryPath, modulePath, options);
}
