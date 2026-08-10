# Task12: AllPathsFromSourceToTarget

## Паттерн: Кратчайший путь / Обход графа (DFS + backtracking)

**Зелёные флаги:** все пути, DAG, от источника к цели

## Условие

Дан DAG (ориентированный ациклический граф). Найди все пути из узла 0 в узел n-1.

---

**Постановка:** DFS + backtracking. Идём из узла 0, собираем путь, когда дошли до n-1 — сохраняем.
**Почему не BFS?** Нужны все пути, а не кратчайший. BFS для этого неэффективен.
**Почему это Графы?** Обход графа для поиска всех путей между двумя узлами.
**Пошагово на примере [[1,2],[3],[3],[]]:**
- Начали с 0: path=[0]
- Из 0 → 1: path=[0,1]
- Из 1 → 3: path=[0,1,3] → сохранили
- Возврат, из 0 → 2: path=[0,2]
- Из 2 → 3: path=[0,2,3] → сохранили
- Ответ: [[0,1,3],[0,2,3]]

## Решение

```typescript
export function allPathsSourceTarget(graph: number[][]): number[][] {
    const result: number[][] = [];
    const n = graph.length;

    function dfs(node: number, path: number[]): void {
        if (node === n - 1) {
            result.push([...path]);
            return;
        }

        for (const neighbor of graph[node]) {
            path.push(neighbor);
            dfs(neighbor, path);
            path.pop();
        }
    }

    dfs(0, [0]);
    return result;
}
```

## Разбор

**Идея:** DFS от 0 до n-1, собираем пути через backtracking.
**Сложность:** O(2^n · n) в худшем случае, O(n) для стека рекурсии.
