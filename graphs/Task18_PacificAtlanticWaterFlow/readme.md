# Task18: PacificAtlanticWaterFlow

## Паттерн: Обход компонент связанности (DFS/BFS от границ)

**Зелёные флаги:** вода течёт в океаны, обратный поток от границ

## Условие

Вода течёт от высоких клеток к низким. Найди клетки, из которых вода достигает обоих океанов (Тихий — лево/верх, Атлантический — право/низ).

---

**Постановка:** вместо того чтобы из каждой клетки идти к океанам, запускаем DFS/BFS от границ океанов и идём вверх (в клетки с высотой ≥ текущей).
**Подход:** два множества — достижимые из Pacific и из Atlantic. Ответ — их пересечение.
**Почему это Графы?** Каждая клетка — узел, направления — рёбра. Обход компонент от границ.
**Пошагово:** 1) Запускаем DFS от левой и верхней границ — помечаем, что достижимо для Pacific. 2) От правой и нижней — для Atlantic. 3) Ищем пересечение.

## Решение

```typescript
export function pacificAtlantic(heights: number[][]): number[][] {
    const m = heights.length;
    const n = heights[0].length;
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const pacific = Array.from({ length: m }, () => new Array(n).fill(false));
    const atlantic = Array.from({ length: m }, () => new Array(n).fill(false));

    function dfs(r: number, c: number, visited: boolean[][]): void {
        visited[r][c] = true;
        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
            if (visited[nr][nc]) continue;
            if (heights[nr][nc] < heights[r][c]) continue;
            dfs(nr, nc, visited);
        }
    }

    for (let c = 0; c < n; c++) {
        dfs(0, c, pacific);
        dfs(m - 1, c, atlantic);
    }
    for (let r = 0; r < m; r++) {
        dfs(r, 0, pacific);
        dfs(r, n - 1, atlantic);
    }

    const result: number[][] = [];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (pacific[r][c] && atlantic[r][c]) {
                result.push([r, c]);
            }
        }
    }

    return result;
}
```

## Разбор

**Идея:** Обратный поток от границ. Пересечение двух множеств достижимости.
**Сложность:** O(m·n) по времени и памяти.
