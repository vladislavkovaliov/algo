# Task15: TopologicalSort

## Паттерн: Порядок зависимостей (алгоритм Кана)

**Зелёные флаги:** топологическая сортировка, порядок узлов в DAG

## Условие

Дан ориентированный граф. Верни топологический порядок узлов. Если есть цикл — верни [].

---

**Постановка:** Строим граф из edges, вычисляем in-degree. Алгоритм Кана.
**Чем отличается от CourseSchedule?** Вход — не prerequisites, а просто массив рёбер. Выход — порядок или [].
**Почему это Графы?** Топологическая сортировка — базовая задача на графы.
**Пошагово на примере 4, [[0,1],[1,2],[2,3]]:** (здесь u→v, то есть 0 зависит от 1)
- graph: 1→[0], 2→[1], 3→[2]
- in-degree: [0,0,0,0]... wait

Actually, edges[i] = [u, v] означает u→v. Так в описании функции. Значит:
- 0→1: graph[0].push(1), in-degree[1]++
- 1→2: graph[1].push(2), in-degree[2]++
- 2→3: graph[2].push(3), in-degree[3]++

in-degree: [0,1,1,1]
queue: [0]
0 → order=[0], in-degree 1-- → 0, queue: [1]
1 → order=[0,1], in-degree 2-- → 0, queue: [2]
2 → order=[0,1,2], in-degree 3-- → 0, queue: [3]
3 → order=[0,1,2,3]

Wait, but expected output is [3,2,1,0]. That means the convention is that in edges[i]=[u,v], v→u (v depends on u, or edge goes from v to u). Or rather, the expected output suggests that in the test case [[0,1],[1,2],[2,3]], node 0 points to 1, 1 points to 2, 2 points to 3, and the topological order is [3,2,1,0].

Actually looking more carefully at the problem statement: "u → v (u зависит от v или u→v)". This says u depends on v, meaning v must come before u. So the edge direction is from v to u (or in topological terms, v must precede u).

With [[0,1],[1,2],[2,3]]:
- 0 depends on 1 → edge 1→0
- 1 depends on 2 → edge 2→1
- 2 depends on 3 → edge 3→2

in-degree: [1,1,1,0]
queue: [3]
3 → in-degree 2-- → 0, queue: [2]
2 → in-degree 1-- → 0, queue: [1]
1 → in-degree 0-- → 0, queue: [0]
0 → order: [3,2,1,0]

Yes, that matches. So the convention is edges[i] = [u, v] where u depends on v.

## Решение

```typescript
export function topologicalSort(n: number, edges: number[][]): number[] {
    const graph: number[][] = Array.from({ length: n }, () => []);
    const inDegree = new Array(n).fill(0);

    for (const [u, v] of edges) {
        graph[v].push(u);
        inDegree[u]++;
    }

    const queue: number[] = [];
    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    const order: number[] = [];

    while (queue.length > 0) {
        const node = queue.shift()!;
        order.push(node);

        for (const neighbor of graph[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) queue.push(neighbor);
        }
    }

    return order.length === n ? order : [];
}
```

## Разбор

**Идея:** Алгоритм Кана для топологической сортировки.
**Сложность:** O(n + e) по времени, O(n + e) по памяти.
