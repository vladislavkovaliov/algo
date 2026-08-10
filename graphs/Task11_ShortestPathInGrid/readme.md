# Task11: ShortestPathInGrid

## Паттерн: Кратчайший путь (BFS)

**Зелёные флаги:** кратчайший путь, минимальное количество шагов, сетка с препятствиями

## Условие

Дана сетка. Найди кратчайший путь от start до end, обходя препятствия (1). Движение только по четырём направлениям.

---

**Постановка:** BFS от start, считаем расстояние. Когда дошли до end — возвращаем расстояние.
**Почему BFS?** «Кратчайший» в невзвешенном графе → BFS.
**Почему это Графы?** Клетка = узел, соседние пустые клетки = рёбра.
**Пошагово на примере [[0,0,0],[0,1,0],[0,0,0]], start=[0,0], end=[2,2]:**
- dist=0: (0,0)
- dist=1: (0,1), (1,0)
- dist=2: (0,2), (2,0)
- dist=3: (1,2), (2,1)
- dist=4: (2,2) → ответ 4

## Решение

```typescript
export function shortestPathInGrid(grid: number[][], start: number[], end: number[]): number {
    const m = grid.length;
    const n = grid[0].length;
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const queue: number[][] = [[start[0], start[1], 0]];
    const visited = new Set<string>();
    visited.add(`${start[0]},${start[1]}`);

    while (queue.length > 0) {
        const [r, c, dist] = queue.shift()!;

        if (r === end[0] && c === end[1]) return dist;

        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;

            if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
            if (grid[nr][nc] === 1 || visited.has(`${nr},${nc}`)) continue;

            visited.add(`${nr},${nc}`);
            queue.push([nr, nc, dist + 1]);
        }
    }

    return -1;
}
```

## Разбор

**Идея:** Классический BFS на сетке с препятствиями.
**Сложность:** O(m·n) по времени, O(m·n) по памяти.
