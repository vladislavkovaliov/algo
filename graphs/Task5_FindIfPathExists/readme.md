# Task5: FindIfPathExists

## Паттерн: Обход компонент связанности (DFS/BFS)

**Зелёные флаги:** существует ли путь, граф, source → destination

## Условие

Дан неориентированный граф. Определи, есть ли путь от source до destination.

---

**Постановка:** строим список смежности, запускаем DFS/BFS из source. Если встретили destination — true.
**Почему это Графы?** Базовая задача на обход графа.
**Пошагово на примере 3, [[0,1],[1,2],[2,0]], 0, 2:**
- Строим граф: 0→[1,2], 1→[0,2], 2→[1,0]
- BFS из 0: посещаем 0 → 1,2 → нашли 2 → true

## Решение

```typescript
export function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    if (source === destination) return true;

    const graph: number[][] = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const visited = new Array(n).fill(false);
    const stack = [source];
    visited[source] = true;

    while (stack.length > 0) {
        const node = stack.pop()!;
        if (node === destination) return true;

        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                stack.push(neighbor);
            }
        }
    }

    return false;
}
```

## Разбор

**Идея:** DFS (или BFS) в списке смежности.
**Сложность:** O(n + e) по времени, O(n + e) по памяти.
