"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryAddImports = void 0;
const vscode_1 = require("vscode");
const tryAddImports = async () => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor)
        return;
    if (!_checkElementaryHelperImport()) {
        await _addElementaryHelperImport();
    }
    if (!_checkElementaryImport()) {
        await _addElementaryImport();
    }
};
exports.tryAddImports = tryAddImports;
const _addImport = async (importString) => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor)
        return;
    await editor.edit((editor) => editor.insert(new vscode_1.Position(0, 0), importString));
};
const _checkImport = (importString) => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor)
        return true;
    const text = editor.document.getText();
    return text.search(importString) > -1;
};
const _addElementaryImport = async () => _addImport('import \'package:elementary/elementary.dart\';\n');
const _addElementaryHelperImport = async () => _addImport('import \'package:elementary_helper/elementary_helper.dart\';\n');
const _checkElementaryImport = () => _checkImport('import \'package:elementary/elementary.dart\';');
const _checkElementaryHelperImport = () => _checkImport('import \'package:elementary_helper/elementary_helper.dart\';');
//# sourceMappingURL=add-import.js.map