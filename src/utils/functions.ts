// Функция для поиска начальной позиции, с которой начинаются слова слева от вставки
export function findStartOfWordsToLeftOfInsertion(lineText: string, insertionPosition: number): number | null {
    const regex = /\S+\s*$/;
    const matches = lineText.substr(0, insertionPosition).match(regex);
    return matches ? matches.index || 0 : null;
}

// Функция для удаления отступов из кода
export function removeIndentation(code: string, indentation: number): string {
    const lines = code.split('\n');
    const dedentedLines = lines.map(line => {
        if (line.startsWith(' '.repeat(indentation))) {
            return line.slice(indentation); // Убираем отступы
        } else {
            return line;
        }
    });
    return dedentedLines.join('\n');
}