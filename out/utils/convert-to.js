"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTo = void 0;
const vscode_1 = require("vscode");
const utils_1 = require("../utils");
const childRegExp = new RegExp("(?<=\{).*(?=\})", "ms");
// const childRegExp = new RegExp("[^S\r\n]*return (.*?(\(.*\))?);", "ms");
const convertTo = async (snippet) => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor)
        return;
    const selection = (0, utils_1.getSelectedText)(editor);
    const rawWidget = editor.document.getText(selection).replace("$", "//$");
    const match = rawWidget.match(childRegExp);
    if (!match || !match.length)
        return;
    const child = match[0];
    if (!child)
        return;
    const widget = rawWidget.replace(childRegExp, "");
    //* Логика для добавления отступов (чтобы не использовать editor.action.formatDocument)
    // Определение начальной позиции, с которой начинаются слова слева от вставки
    const lineText = editor.document.lineAt(selection.start.line).text;
    const startOfWords = (0, utils_1.findStartOfWordsToLeftOfInsertion)(lineText, selection.start.character);
    // Определение позиции начала вставки
    const insertionPosition = startOfWords !== null ? startOfWords : selection.start.character;
    // Виджет с отступами 
    const formattedChild = (0, utils_1.removeIndentation)(child, insertionPosition);
    editor.insertSnippet(new vscode_1.SnippetString(snippet(widget, formattedChild)), selection);
};
exports.convertTo = convertTo;
//# sourceMappingURL=convert-to.js.map