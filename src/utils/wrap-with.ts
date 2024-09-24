import { SnippetString, window } from "vscode";
import { getSelectedText, tryAddImports, removeIndentation, findStartOfWordsToLeftOfInsertion } from "../utils";

const interpolatedVarRegExp = new RegExp("\\$", "g");

export const wrapWith = async (snippet: (widget: string) => string) => {
  let editor = window.activeTextEditor;
  if (!editor) return;

  await tryAddImports();

  const selection = getSelectedText(editor);

  const widget = editor.document.getText(selection).replace(
    interpolatedVarRegExp,
    "\\$",
  );

  //* Логика для добавления отступов (чтобы не использовать editor.action.formatDocument)
  // Определение начальной позиции, с которой начинаются слова слева от вставки
  const lineText = editor.document.lineAt(selection.start.line).text;
  const startOfWords = findStartOfWordsToLeftOfInsertion(lineText, selection.start.character);

  // Определение позиции начала вставки
  const insertionPosition = startOfWords !== null ? startOfWords : selection.start.character;

  // Виджет с отступами 
  const formattedWidget = removeIndentation(widget, insertionPosition - 4);


  editor.insertSnippet(new SnippetString(snippet(formattedWidget)), selection);
};

