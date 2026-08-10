# Task 14: ValidSudoku

## Паттерн: Выбор ключа

**Зелёные флаги:** уникальность в строке, столбце, блоке 3×3, несколько Set

## Условие

Дана доска 9×9 для игры в судоку. Верни `true`, если доска валидна. Валидная доска: цифры 1-9 не повторяются в строке, столбце и блоке 3×3. Пустые клетки обозначены `'.'`.

## Решение

```typescript
export function isValidSudoku(board: string[][]): boolean {
    const rows = Array.from({ length: 9 }, () => new Set<string>());
    const cols = Array.from({ length: 9 }, () => new Set<string>());
    const boxes = Array.from({ length: 9 }, () => new Set<string>());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const val = board[i][j];
            if (val === '.') continue;

            const boxIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (rows[i].has(val) || cols[j].has(val) || boxes[boxIdx].has(val)) {
                return false;
            }
            rows[i].add(val);
            cols[j].add(val);
            boxes[boxIdx].add(val);
        }
    }
    return true;
}
```

## Разбор

**Идея:** Держим 27 Set: по одному на каждую строку, столбец и блок 3×3. Индекс блока вычисляем по формуле `Math.floor(i / 3) * 3 + Math.floor(j / 3)`.

**Пошагово на примере клетки `board[0][0] = "5"`:**

| i | j | val | rows[0] | cols[0] | boxIdx (0//3*3 + 0//3 = 0) | boxes[0] |
|---|---|-----|---------|---------|---------------------------|----------|
| 0 | 0 | 5 | {} → {5} | {} → {5} | 0 | {} → {5} |

Если где-то в той же строке/столбце/блоке снова встретится 5 — `false`.

**Сложность:** O(1) по времени (всегда 81 клетка), O(1) по памяти (всегда 27 Set).
