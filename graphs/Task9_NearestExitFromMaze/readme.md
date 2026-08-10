# Task9: NearestExitFromMaze

## Паттерн: Кратчайший путь (BFS)

**Зелёные флаги:** минимальное количество шагов, кратчайший путь в лабиринте

## Условие

Дан лабиринт. Найди минимальное количество шагов до выхода (граничной клетки, не являющейся входом). Двигаться можно только по `.` вверх/вниз/влево/вправо.

---

**Постановка:** BFS от входа, отслеживаем расстояние. Как только дошли до границы — возвращаем расстояние.
**Почему BFS, а не DFS?** BFS находит кратчайший путь в невзвешенном графе. «Минимум» в условии → BFS.
**Почему это Графы?** Каждая клетка — узел, 4 соседа — рёбра. Ищем кратчайший путь до целевых узлов.
**Пошагово:** От входа BFS расходится волной. Первая граничная клетка на пути — ближайший выход.

## Решение

```typescript
export function nearestExit(maze: string[][], entrance: number[]): number {
    const m = maze.length;
    const n = maze[0].length;
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const queue: number[][] = [[entrance[0], entrance[1], 0]];
    const visited = new Set<string>();
    visited.add(`${entrance[0]},${entrance[1]}`);

    while (queue.length > 0) {
        const [r, c, dist] = queue.shift()!;

        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;

            if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
            if (maze[nr][nc] === '+' || visited.has(`${nr},${nc}`)) continue;

            if (nr === 0 || nr === m - 1 || nc === 0 || nc === n - 1) {
                return dist + 1;
            }

            visited.add(`${nr},${nc}`);
            queue.push([nr, nc, dist + 1]);
        }
    }

    return -1;
}
```

## Разбор

**Идея:** BFS от входа. Граничная клетка (кроме входа) — выход. Возвращаем расстояние до первой такой клетки.
**Сложность:** O(m·n) по времени и памяти.
