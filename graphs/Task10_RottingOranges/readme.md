# Task10: RottingOranges

## Паттерн: Кратчайший путь (Multi-source BFS)

**Зелёные флаги:** распространяется от источников, время/минуты, волна

## Условие

Гнилые апельсины (2) каждую минуту заражают соседние свежие (1). Сколько минут нужно, чтобы все сгнили?

---

**Постановка:** multi-source BFS — кладём в очередь все изначально гнилые апельсины, BFS-волна заражения.
**Почему BFS?** «Минуты» — это кратчайшее расстояние от ближайшего источника заражения.
**Почему multi-source?** Гнилых апельсинов может быть несколько, и они гниют одновременно.
**Пошагово на примере [[2,1,1],[1,1,0],[0,1,1]]:**
- Минута 0: гнилые (0,0)
- Минута 1: заражаются (1,0), (0,1)
- Минута 2: заражаются (2,0), (1,1), (0,2)
- Минута 3: заражаются (2,1), (1,2)
- Минута 4: заражается (2,2) — все сгнили

## Решение

```typescript
export function orangesRotting(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const queue: number[][] = [];
    let fresh = 0;

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c, 0]);
            } else if (grid[r][c] === 1) {
                fresh++;
            }
        }
    }

    let minutes = 0;

    while (queue.length > 0) {
        const [r, c, dist] = queue.shift()!;
        minutes = Math.max(minutes, dist);

        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;

            if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
            if (grid[nr][nc] !== 1) continue;

            grid[nr][nc] = 2;
            fresh--;
            queue.push([nr, nc, dist + 1]);
        }
    }

    return fresh === 0 ? minutes : -1;
}
```

## Разбор

**Идея:** Multi-source BFS. Все гнилые апельсины — начальные источники. BFS-волна считает минуты.
**Сложность:** O(m·n) по времени и памяти.
