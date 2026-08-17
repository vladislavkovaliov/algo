# Task3: FloodFill

## Паттерн: Обход компонент связанности (DFS)

**Зелёные флаги:** заливка области, изменение connected cells, замена цвета

## Условие

Начни с пикселя (sr, sc). Поменяй его цвет и цвет всех соседних пикселей того же исходного цвета на новый. Похоже на «ведро с краской» в графических редакторах.

---

**Постановка:** DFS/BFS из стартовой клетки. Меняем цвет, рекурсивно идём к соседям того же исходного цвета.
**Почему это Графы?** Каждый пиксель — узел, соседи по 4 направлениям — рёбра.
**Пошагово на примере image=[[1,1,1],[1,1,0],[1,0,1]], sr=1, sc=1, color=2:**
- Стартуем в (1,1), исходный цвет = 1
- Меняем (1,1) на 2, идём к соседям
- (0,1), (1,0), (2,1) того же цвета → меняем, идём дальше
- В результате вся область 1 в левом верхнем углу становится 2

## Решение

```typescript
export function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const m = image.length;
    const n = image[0].length;
    const original = image[sr][sc];

    if (original === color) return image;

    function dfs(r: number, c: number): void {
        if (r < 0 || r >= m || c < 0 || c >= n || image[r][c] !== original) return;
        image[r][c] = color;
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }

    dfs(sr, sc);
    return image;
}
```

## Решение через очередь (BFS)

```typescript
export function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const m = image.length;
    const n = image[0].length;
    const original = image[sr][sc];
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    if (original === color) return image;

    const queue: number[][] = [[sr, sc]];
    image[sr][sc] = color;

    while (queue.length > 0) {
        const [cr, cc] = queue.shift()!;

        for (const [dr, dc] of dirs) {
            const nr = cr + dr;
            const nc = cc + dc;
            if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
            if (image[nr][nc] !== original) continue;
            image[nr][nc] = color;
            queue.push([nr, nc]);
        }
    }

    return image;
}
```

## Разбор

**Идея:** DFS от стартовой точки, меняем цвет только у клеток с исходным цветом.
**Сложность BFS:** O(m·n) по времени, O(m·n) по памяти для очереди.
**Почему очередь, а не рекурсия?** BFS «заливает» область по кругу-волной из стартового пикселя, не создавая рекурсивный стек — надёжно для огромных областей, где рекурсия упёрлась бы в лимит вызовов.
