# Task20: ValidTree

## Паттерн: Специальная задача (Union-Find + проверка компонент)

**Зелёные флаги:** дерево, связность, без циклов, Union-Find

## Условие

Граф является деревом, если: 1) у него n-1 ребро, 2) он связный, 3) нет циклов.

---

**Постановка:** проверяем два условия: 1) количество рёбер = n-1 (иначе не дерево). 2) Все узлы в одной компоненте связности (Union-Find). Если при добавлении ребра его концы уже в одном множестве — есть цикл → не дерево.
**Почему Union-Find?** Эффективно проверяет связность и обнаруживает циклы в неориентированном графе.
**Пошагово на примере 5, [[0,1],[0,2],[0,3],[1,4]]:**
- n=5, ребёр=4 (n-1=4) → ок
- (0,1): объединяем
- (0,2): объединяем  
- (0,3): объединяем
- (1,4): объединяем
- Все 5 узлов в одном множестве, циклов нет → true

## Решение

```typescript
export function validTree(n: number, edges: number[][]): boolean {
    if (edges.length !== n - 1) return false;

    const parent: number[] = Array.from({ length: n }, (_, i) => i);

    function find(x: number): number {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    function union(x: number, y: number): boolean {
        const px = find(x);
        const py = find(y);
        if (px === py) return false;
        parent[px] = py;
        return true;
    }

    for (const [u, v] of edges) {
        if (!union(u, v)) return false;
    }

    return true;
}
```

## Разбор

**Идея:** Дерево = n-1 ребро + связность + без циклов. Union-Find проверяет всё за один проход.
**Сложность:** O(n · α(n)) по времени, O(n) по памяти.
