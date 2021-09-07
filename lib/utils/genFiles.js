"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genFiles = void 0;
var ejs_1 = require("ejs");
var path_1 = require("path");
var fs_extra_1 = require("fs-extra");
var types_1 = require("../types/types");
var _1 = require(".");
var templateRoot = (0, path_1.join)(__dirname, '..', '..', 'src', 'template');
var entityTemplate = (0, path_1.join)(templateRoot, 'entities');
var controllerTemplate = (0, path_1.join)(templateRoot, 'controllers');
var serviceTemplate = (0, path_1.join)(templateRoot, 'services');
function renderFiles(fromPath, toPath, options) {
    (0, fs_extra_1.ensureDirSync)(toPath);
    var dirs = (0, fs_extra_1.readdirSync)(fromPath);
    var table = options.table;
    if (table) {
        var table_name_1 = table.table_name;
        dirs.forEach(function (dir) {
            var renderPath = toPath;
            var fullPath = (0, path_1.join)(fromPath, dir);
            if ((0, fs_extra_1.statSync)(fullPath).isFile()) {
                var fileBaseName = (0, path_1.basename)(fullPath, '.ejs').replace('template', table_name_1) + '.ts';
                renderPath = (0, path_1.join)(renderPath, fileBaseName);
                renderFile(fullPath, renderPath, options);
            }
            else {
                renderPath = (0, path_1.join)(renderPath, dir);
                renderFiles(fullPath, renderPath, options);
            }
        });
    }
}
function renderFile(fromPath, toPath, options) {
    if ((0, fs_extra_1.existsSync)(toPath)) {
        return console.warn(toPath + " has been exist");
    }
    var content = (0, fs_extra_1.readFileSync)(fromPath, 'utf-8');
    content = (0, ejs_1.render)(content, options);
    (0, fs_extra_1.writeFileSync)(toPath, content, 'utf-8');
    console.log("create " + toPath + " Success");
}
function genFiles(type, options, targetPath) {
    options.is_full = type === types_1.GENFILE_TYPES.FULL;
    var table = options.table;
    if (table) {
        table.table_uppercase_name = (0, _1.textCapitalize)((0, _1.underlineToHump)(table.table_name));
        if (type === types_1.GENFILE_TYPES.FULL || type === types_1.GENFILE_TYPES.EMPTY) {
            var renderSequlize = [types_1.GENFILE_TYPES.SERVICE, types_1.GENFILE_TYPES.CONTROLLER];
            renderSequlize.forEach(function (seq) {
                genFile(seq, options, targetPath);
            });
        }
        else {
            genFile(type, options, targetPath);
        }
    }
    else {
        console.error('cant not read table info');
        process.exit(1);
    }
}
exports.genFiles = genFiles;
function genFile(type, options, targetPath) {
    var _a;
    var entryPath = '';
    var genPath = '';
    var genOptions = (_a = {},
        _a[types_1.GENFILE_TYPES.CONTROLLER] = function () {
            entryPath = controllerTemplate;
            genPath = targetPath.controllers;
        },
        _a[types_1.GENFILE_TYPES.SERVICE] = function () {
            entryPath = serviceTemplate;
            genPath = targetPath.services;
        },
        _a);
    genOptions[type]();
    renderFiles(entryPath, genPath, options);
}
