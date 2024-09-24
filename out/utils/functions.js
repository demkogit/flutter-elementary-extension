"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeIndentation = exports.findStartOfWordsToLeftOfInsertion = void 0;
// Функция для поиска начальной позиции, с которой начинаются слова слева от вставки
function findStartOfWordsToLeftOfInsertion(lineText, insertionPosition) {
    const regex = /\S+\s*$/;
    const matches = lineText.substr(0, insertionPosition).match(regex);
    return matches ? matches.index || 0 : null;
}
exports.findStartOfWordsToLeftOfInsertion = findStartOfWordsToLeftOfInsertion;
// Функция для удаления отступов из кода
function removeIndentation(code, indentation) {
    const lines = code.split('\n');
    const dedentedLines = lines.map(line => {
        if (line.startsWith(' '.repeat(indentation))) {
            return line.slice(indentation); // Убираем отступы
        }
        else {
            return line;
        }
    });
    return dedentedLines.join('\n');
}
exports.removeIndentation = removeIndentation;
//# sourceMappingURL=functions.js.map