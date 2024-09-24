import { window, Position } from "vscode";


export const tryAddImports = async () => {
    let editor = window.activeTextEditor;
    if (!editor) return;

    if (!_checkElementaryHelperImport()) {
        await _addElementaryHelperImport();
    }

    if (!_checkElementaryImport()) {
        await _addElementaryImport();
    }
};
const _addImport = async (importString: string) => {
    let editor = window.activeTextEditor;
    if (!editor) return;

    await editor.edit((editor) => editor.insert(new Position(0, 0), importString));
};

const _checkImport = (importString: string): boolean => {
    let editor = window.activeTextEditor;
    if (!editor) return true;

    const text = editor.document.getText();

    return text.search(importString) > -1;
};



const _addElementaryImport = async () =>
    _addImport('import \'package:elementary/elementary.dart\';\n');
const _addElementaryHelperImport = async () =>
    _addImport('import \'package:elementary_helper/elementary_helper.dart\';\n');


const _checkElementaryImport = () =>
    _checkImport('import \'package:elementary/elementary.dart\';');
const _checkElementaryHelperImport = () =>
    _checkImport('import \'package:elementary_helper/elementary_helper.dart\';');