"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addImport = void 0;
const vscode_1 = require("vscode");
const addImport = async (importString) => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor)
        return;
    await editor.edit((editor) => editor.insert(new vscode_1.Position(0, 0), importString));
};
exports.addImport = addImport;
//# sourceMappingURL=add-imports.js.map