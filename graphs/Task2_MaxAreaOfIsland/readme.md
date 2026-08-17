# Task2: MaxAreaOfIsland

## Паттерн: Обход компонент связанности (DFS)

**Зелёные флаги:** площадь острова, размер компоненты, grid

## Условие

Как Task1, но вместо количества островов нужна максимальная площадь (количество клеток 1) среди всех островов.

---

**Постановка:** обходим grid, для каждого острова запускаем DFS, считаем площадь, обновляем максимум.
**Чем отличается от Task1?** Вместо счётчика островов — размер каждой компоненты.
**Почему это Графы?** Компонента связности, DFS для подсчёта размера.
**Пошагово на примере:** [[0,0,1],[0,0,1],[1,1,0]]
- (0,2) = 1 → DFS, площадь = 2 → max = 2
- (2,0) = 1 → DFS, площадь = 2 → max = 2 (не изменился)

## Решение

```typescript
export function maxAreaOfIsland(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    let max = 0;

    function dfs(r: number, c: number): number {
        if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] === 0) return 0;
        grid[r][c] = 0;
        return 1 + dfs(r - 1, c) + dfs(r + 1, c) + dfs(r, c - 1) + dfs(r, c + 1);
    }

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 1) {
                max = Math.max(max, dfs(r, c));
            }
        }
    }

    return max;
}
```

## Решение через очередь (BFS)

```typescript
export function maxAreaOfIsland(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let max = 0;

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] !== 1) continue;

            let area = 0;
            const queue: number[][] = [[r, c]];
            grid[r][c] = 0;

            while (queue.length > 0) {
                const [cr, cc] = queue.shift()!;
                area++;

                for (const [dr, dc] of dirs) {
                    const nr = cr + dr;
                    const nc = cc + dc;
                    if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
                    if (grid[nr][nc] !== 1) continue;
                    grid[nr][nc] = 0;
                    queue.push([nr, nc]);
                }
            }

            max = Math.max(max, area);
        }
    }

    return max;
}
```

## Разбор

**Идея:** Почти как NumberOfIslands, но DFS возвращает размер компоненты. Площадь = количество клеток, обработанных BFS-волной.
**Сложность:** O(m·n) по времени, O(m·n) по памяти для очереди.
**Почему очередь, а не рекурсия?** Та же логика, что в Task1: без рекурсивных вызовов (защита от переполнения стека на больших островах), обход занимает память только под границу волны.
