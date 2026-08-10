# Task8: IsCellReachable

## Паттерн: Одномерная ДП

**Зелёные флаги:** достижимость, прыжки фиксированной длины, boolean ДП

## Условие

Даны числа target и k. Можно прыгать из точки i в точку i+k. Начинаешь в 0. Можно ли добраться до target?

---

**Постановка:** Определить, достижима ли клетка target, если из каждой клетки i можно перейти в i+k.
**Формула:** dp[i] = dp[i] || dp[i-k] (если i >= k)
**Что такое dp[i]?** true, если в точку i можно добраться
**Почему именно такой переход?** в точку i можно попасть только из i-k, если она достижима
**Пошагово на примере target=6, k=3:** table: dp[0]=true, dp[1]=false, dp[2]=false, dp[3]=true, dp[4]=false, dp[5]=false, dp[6]=true

## Решение

```typescript
export function isCellReachable(target: number, k: number): boolean {
    if (target === 0) return true;
    const dp = new Array(target + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= target; i++) {
        if (i - k >= 0) {
            dp[i] = dp[i] || dp[i - k];
        }
    }
    return dp[target];
}
```

## Разбор

**Идея:** Двигаемся слева направо, помечая достижимые клетки. Каждая следующая клетка достижима только если достижима клетка на k шагов левее.
**Сложность:** O(target) по времени, O(target) по памяти.
