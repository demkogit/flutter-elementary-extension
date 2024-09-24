"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapWith = void 0;
const vscode_1 = require("vscode");
const utils_1 = require("../utils");
const interpolatedVarRegExp = new RegExp("\\$", "g");
const wrapWith = async (snippet) => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor)
        return;
    await (0, utils_1.tryAddImports)();
    const selection = (0, utils_1.getSelectedText)(editor);
    const widget = editor.document.getText(selection).replace(interpolatedVarRegExp, "\\$");
    //* Логика для добавления отступов (чтобы не использовать editor.action.formatDocument)
    // Определение начальной позиции, с которой начинаются слова слева от вставки
    const lineText = editor.document.lineAt(selection.start.line).text;
    const startOfWords = (0, utils_1.findStartOfWordsToLeftOfInsertion)(lineText, selection.start.character);
    // Определение позиции начала вставки
    const insertionPosition = startOfWords !== null ? startOfWords : selection.start.character;
    // Виджет с отступами 
    const formattedWidget = (0, utils_1.removeIndentation)(widget, insertionPosition - 4);
    editor.insertSnippet(new vscode_1.SnippetString(snippet(formattedWidget)), selection);
};
exports.wrapWith = wrapWith;
//# sourceMappingURL=wrap-with.js.map