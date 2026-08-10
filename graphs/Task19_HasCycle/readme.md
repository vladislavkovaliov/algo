# Task19: HasCycle

## Паттерн: Порядок зависимостей (алгоритм Кана / DFS)

**Зелёные флаги:** цикл в ориентированном графе, обнаружение цикла

## Условие

Дан ориентированный граф. Есть ли в нём цикл?

---

**Постановка:** два варианта решения: 1) Алгоритм Кана — если не все узлы обработаны → есть цикл. 2) DFS с тремя состояниями (0 — не посещён, 1 — в обработке, 2 — обработан).
**Почему алгоритм Кана?** Классический способ: topological sort fails = есть цикл.
**Пошагово на примере 3, [[0,1],[1,2],[2,0]]:**
- in-degree: [1,1,1]
- Нет узлов с in-degree=0 → цикл есть → true

## Решение

```typescript
export function hasCycle(numNodes: number, edges: number[][]): boolean {
    const graph: number[][] = Array.from({ length: numNodes }, () => []);
    const inDegree = new Array(numNodes).fill(0);

    for (const [u, v] of edges) {
        graph[u].push(v);
        inDegree[v]++;
    }

    const queue: number[] = [];
    for (let i = 0; i < numNodes; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    let processed = 0;

    while (queue.length > 0) {
        const node = queue.shift()!;
        processed++;

        for (const neighbor of graph[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) queue.push(neighbor);
        }
    }

    return processed !== numNodes;
}
```

## Разбор

**Идея:** Алгоритм Кана — если есть цикл, не все узлы будут обработаны.
**Сложность:** O(n + e) по времени, O(n + e) по памяти.
