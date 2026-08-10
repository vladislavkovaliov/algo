# Task17: FindRedundantConnection

## Паттерн: Специальная задача (Union-Find / DSU)

**Зелёные флаги:** лишнее ребро, цикл в неориентированном графе, DSU

## Условие

Граф изначально — дерево (n узлов, n-1 ребро). Добавили одно ребро, создавшее цикл. Найди его.

---

**Постановка:** используем Union-Find (DSU). Проходим по рёбрам. Если два узла уже в одном множестве — это ребро создаёт цикл, возвращаем его.
**Почему Union-Find?** DSU эффективно проверяет, соединены ли два узла, без построения графа.
**Почему это Графы?** Поиск цикла в неориентированном графе.
**Пошагово на примере [[1,2],[1,3],[2,3]]:**
- (1,2): разные множества → объединяем
- (1,3): разные множества → объединяем
- (2,3): уже в одном множестве → это лишнее ребро → [2,3]

## Решение

```typescript
export function findRedundantConnection(edges: number[][]): number[] {
    const parent: number[] = [];
    for (let i = 0; i <= edges.length; i++) {
        parent[i] = i;
    }

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
        if (!union(u, v)) {
            return [u, v];
        }
    }

    return [];
}
```

## Разбор

**Идея:** Union-Find (DSU) для обнаружения цикла в неориентированном графе.
**Сложность:** O(n · α(n)) по времени, O(n) по памяти.
