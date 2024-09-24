"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementaryCodeActionProvider = void 0;
const vscode_1 = require("vscode");
const utils_1 = require("../utils");
const stateNotifierBuilderRegExp = new RegExp("^StateNotifierBuilder(\\<.*\\>)*\\(.*\\)", "ms");
const doubleSourceBuilderRegExp = new RegExp("^DoubleSourceBuilder(\\<.*\\>)*(\\.value)*\\(.*\\)", "ms");
const tripleSourceBuilderRegExp = new RegExp("^TripleSourceBuilder(\\<.*\\>)*(\\.value)*\\(.*\\)", "ms");
const widgetRegExp = new RegExp("^_?[A-Z][a-zA-Z]*(\\<.*\\>)*\\(.*\\)", "ms");
class ElementaryCodeActionProvider {
    provideCodeActions() {
        const editor = vscode_1.window.activeTextEditor;
        if (!editor)
            return [];
        const selectedText = editor.document.getText((0, utils_1.getSelectedText)(editor));
        const isWidget = widgetRegExp.test(selectedText);
        if (!isWidget)
            return [];
        const isStateNotifierBuilder = stateNotifierBuilderRegExp.test(selectedText);
        const isDoubleSourceBuilder = doubleSourceBuilderRegExp.test(selectedText);
        const isTripleSourceBuilder = tripleSourceBuilderRegExp.test(selectedText);
        return [
            ...(isStateNotifierBuilder
                ? [
                    {
                        command: "extension.convert-doublesourcebuilder",
                        title: "Convert to DoubleSourceBuilder",
                    },
                    {
                        command: "extension.convert-triplesourcebuilder",
                        title: "Convert to TripleSourceBuilder",
                    },
                ]
                : []),
            ...(isDoubleSourceBuilder
                ? [
                    {
                        command: "extension.convert-statenotifierbuilder",
                        title: "Convert to StateNotifierBuilder",
                    },
                    {
                        command: "extension.convert-triplesourcebuilder",
                        title: "Convert to TripleSourceBuilder",
                    },
                ]
                : []),
            ...(isTripleSourceBuilder
                ? [
                    {
                        command: "extension.convert-statenotifierbuilder",
                        title: "Convert to StateNotifierBuilder",
                    },
                    {
                        command: "extension.convert-doublesourcebuilder",
                        title: "Convert to DoubleSourceBuilder",
                    },
                ]
                : []),
            {
                command: "extension.wrap-statenotifierbuilder",
                title: "Wrap with StateNotifierBuilder",
            },
            {
                command: "extension.wrap-entitystatebuilder",
                title: "Wrap with EntityStateBuilder",
            },
            {
                command: "extension.wrap-doublesourcebuilder",
                title: "Wrap with DoubleSourceBuilder",
            },
            {
                command: "extension.wrap-triplesourcebuilder",
                title: "Wrap with TripleSourceBuilder",
            },
        ].map((c) => {
            let action = new vscode_1.CodeAction(c.title, vscode_1.CodeActionKind.Refactor);
            action.command = {
                command: c.command,
                title: c.title,
            };
            return action;
        });
    }
}
exports.ElementaryCodeActionProvider = ElementaryCodeActionProvider;
//# sourceMappingURL=elementary-code-action-provider.js.map