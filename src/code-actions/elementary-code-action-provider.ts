import { window, CodeAction, CodeActionProvider, CodeActionKind } from "vscode";
import { getSelectedText } from "../utils";

const stateNotifierBuilderRegExp = new RegExp("^StateNotifierBuilder(\\<.*\\>)*\\(.*\\)", "ms");
const doubleSourceBuilderRegExp = new RegExp(
  "^DoubleSourceBuilder(\\<.*\\>)*(\\.value)*\\(.*\\)",
  "ms"
);
const tripleSourceBuilderRegExp = new RegExp(
  "^TripleSourceBuilder(\\<.*\\>)*(\\.value)*\\(.*\\)",
  "ms"
);

const widgetRegExp = new RegExp(
  "^_?[A-Z][a-zA-Z]*(\\<.*\\>)*\\(.*\\)", "ms",
)

export class ElementaryCodeActionProvider implements CodeActionProvider {
  public provideCodeActions(): CodeAction[] {
    const editor = window.activeTextEditor;
    if (!editor) return [];

    const selectedText = editor.document.getText(getSelectedText(editor));

    const isWidget = widgetRegExp.test(selectedText);

    if (!isWidget) return [];


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
      let action = new CodeAction(c.title, CodeActionKind.Refactor);
      action.command = {
        command: c.command,
        title: c.title,
      };
      return action;
    });
  }
}
