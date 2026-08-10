# Task16: FindJudge

## Паттерн: Специальная задача (indegree / outdegree)

**Зелёные флаги:** доверие, отношения между людьми, кто кому доверяет

## Условие

Судья — человек, которому доверяют все, но он сам не доверяет никому. Найди судью.

---

**Постановка:** считаем in-degree (сколько людей доверяют человеку) и out-degree (скольким людям доверяет человек). Судья — тот, у кого in-degree = n-1, out-degree = 0.
**Почему это Графы?** Ориентированный граф: a → b означает «a доверяет b».
**Пошагово на примере 3, [[1,3],[2,3]]:**
- in-degree: [0,1,1,2] (с запасом от 1 до n)
- out-degree: [0,1,1,0] 
- Узел 3: in=2 (n-1=2), out=0 → судья

## Решение

```typescript
export function findJudge(n: number, trust: number[][]): number {
    const inDegree = new Array(n + 1).fill(0);
    const outDegree = new Array(n + 1).fill(0);

    for (const [a, b] of trust) {
        outDegree[a]++;
        inDegree[b]++;
    }

    for (let i = 1; i <= n; i++) {
        if (inDegree[i] === n - 1 && outDegree[i] === 0) {
            return i;
        }
    }

    return -1;
}
```

## Разбор

**Идея:** Судья — узел с in-degree = n-1 и out-degree = 0.
**Сложность:** O(n + t) по времени, O(n) по памяти.
