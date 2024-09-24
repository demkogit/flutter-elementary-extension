import { window, SnippetString } from "vscode";
import { getSelectedText, findStartOfWordsToLeftOfInsertion, removeIndentation } from "../utils";

const childRegExp = new RegExp("(?<=\{).*(?=\})", "ms");
// const childRegExp = new RegExp("[^S\r\n]*return (.*?(\(.*\))?);", "ms");

export const convertTo = async (
  snippet: (widget: string, child: string) => string
) => {
  let editor = window.activeTextEditor;
  if (!editor) return;
  const selection = getSelectedText(editor);
  const rawWidget = editor.document.getText(selection).replace("$", "//$");
  const match = rawWidget.match(childRegExp);
  if (!match || !match.length) return;
  const child = match[0];
  if (!child) return;

  const widget = rawWidget.replace(childRegExp, "");

  //* Логика для добавления отступов (чтобы не использовать editor.action.formatDocument)
  // Определение начальной позиции, с которой начинаются слова слева от вставки
  const lineText = editor.document.lineAt(selection.start.line).text;
  const startOfWords = findStartOfWordsToLeftOfInsertion(lineText, selection.start.character);

  // Определение позиции начала вставки
  const insertionPosition = startOfWords !== null ? startOfWords : selection.start.character;

  // Виджет с отступами 
  const formattedChild = removeIndentation(child, insertionPosition);


  editor.insertSnippet(new SnippetString(snippet(widget, formattedChild)), selection);
};
