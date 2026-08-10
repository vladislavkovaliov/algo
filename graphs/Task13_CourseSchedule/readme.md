# Task13: CourseSchedule

## Паттерн: Порядок зависимостей (алгоритм Кана)

**Зелёные флаги:** зависимости, порядок прохождения, обнаружение цикла, topological sort

## Условие

Дан список курсов и их зависимостей. Можно ли пройти все курсы? (Нет ли цикла в графе зависимостей.)

---

**Постановка:** строим граф и массив in-degree. Кладём в очередь курсы без зависимостей. Убираем их, уменьшаем in-degree соседей. Если в конце обработали не все курсы — есть цикл.
**Почему алгоритм Кана?** Фреймворк: «проверить цикл / топологический порядок → порядок зависимостей (алгоритм Кана)».
**Почему это Графы?** Зависимости = ориентированные рёбра между курсами.
**Пошагово на примере 2, [[1,0]]:**
- graph: 0→[1], in-degree: [0,1]
- Курс 0 в очереди (in-degree=0)
- Обрабатываем 0, уменьшаем in-degree 1 → 0
- Курс 1 в очереди
- Обработали 2 из 2 → true

## Решение

```typescript
export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
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

    let processed = 0;

    while (queue.length > 0) {
        const node = queue.shift()!;
        processed++;

        for (const neighbor of graph[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) queue.push(neighbor);
        }
    }

    return processed === numCourses;
}
```

## Разбор

**Идея:** Алгоритм Кана (топологическая сортировка). Если обработали не все узлы — есть цикл.
**Сложность:** O(n + e) по времени, O(n + e) по памяти.
