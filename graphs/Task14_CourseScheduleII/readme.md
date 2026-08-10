# Task14: CourseScheduleII

## Паттерн: Порядок зависимостей (алгоритм Кана)

**Зелёные флаги:** порядок прохождения, топологическая сортировка, зависимости

## Условие

Как Task13, но нужно вернуть порядок прохождения курсов, а не просто true/false.

---

**Постановка:** алгоритм Кана, но вместо счётчика собираем порядок в массив.
**Чем отличается от Task13?** В Task13 — boolean (есть ли цикл). Здесь — массив порядка.
**Почему это Графы?** Топологическая сортировка — классическая задача на графы.
**Пошагово на примере 4, [[1,0],[2,1],[3,2]]:**
- in-degree: [0,1,1,1]
- Очередь: [0]
- 0 → order=[0], уменьшаем in-degree 1 → 0, очередь: [1]
- 1 → order=[0,1], уменьшаем in-degree 2 → 0, очередь: [2]
- 2 → order=[0,1,2], уменьшаем in-degree 3 → 0, очередь: [3]
- 3 → order=[0,1,2,3]
- Ответ: [0,1,2,3]

## Решение

```typescript
export function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const graph: number[][] = Array.from({ length: numCourses }, () => []);
    const inDegree = new Array(numCourses).fill(0);

    for (const [course, prereq] of prerequisites) {
        graph[prereq].push(course);
        inDegree[course]++;
    }

    const queue: number[] = [];
    for (let i = 0; i < numCourses; i++) {
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

    return order.length === numCourses ? order : [];
}
```

## Разбор

**Идея:** Алгоритм Кана, собираем порядок обработки узлов.
**Сложность:** O(n + e) по времени, O(n + e) по памяти.
