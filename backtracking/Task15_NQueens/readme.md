# Task15: NQueens

## Паттерн: Бектрекинг (отсечение по атаке ферзей)

**Зелёные флаги:** n ферзей на n x n, не атакуют друг друга, все решения

## Условие

Размести `n` ферзей на доске `n × n` так, чтобы ни один не атаковал другого. Верни все решения.

---

**Постановка:** главный инсайт — размещаем по одному ферзю на каждую строку. Для строки `row` перебираем столбцы `col` и ставим ферзя, если он не атакован уже стоящими. Атаку проверяем через три множества: занятые столбцы `cols`, диагонали «\» `(row - col)` и диагонали «/» `(row + col)`.

**Почему множества диагоналей работают?** На одной диагонали «\» разность `row - col` постоянна, на диагонали «/» — сумма `row + col` постоянна. Совпали значения — значит атакует.

**Что отсекаем?** Все столбцы, где ферзь под боем: `cols.has(col) || d1.has(row - col) || d2.has(row + col)` → `continue`.

**Пошагово на примере n = 4:**

Решения (размещения по строкам):
1. `.Q.. / ...Q / Q... / ..Q.`
2. `..Q. / Q... / ...Q / .Q..`

## Решение

```typescript
export function solveNQueens(n: number): string[][] {
    const result: string[][] = [];
    const cols = new Set<number>();
    const diag1 = new Set<number>();
    const diag2 = new Set<number>();
    const queens: number[] = [];

    function backtrack(row: number): void {
        if (row === n) {
            result.push(queens.map(q => '.'.repeat(q) + 'Q' + '.'.repeat(n - q - 1)));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) continue;
            cols.add(col); diag1.add(row - col); diag2.add(row + col);
            queens.push(col);
            backtrack(row + 1);
            queens.pop();
            cols.delete(col); diag1.delete(row - col); diag2.delete(row + col);
        }
    }

    backtrack(0);
    return result;
}
```

## Разбор

**Идея:** за O(1) проверяем атаку через множества. Вместо генерации всех n⁴ расстановок отсекаем конфликты по мере размещения.

**Сложность:** O(n!) по времени (число решений ~ n!), O(n) по памяти.