# Task12: IsCellReachableTwoCards

## Паттерн: Одномерная ДП

**Зелёные флаги:** достижимость, два размера шага, boolean ДП

## Условие

Даны числа target, a и b. Можно прыгать из точки i в точку i+a или i+b. Начинаешь в 0. Можно ли добраться до target?

---

**Постановка:** даны target, a, b; начальная точка 0; шаги a и b; вопрос — достижим ли target?
**Формула:** dp[i] = dp[i] || dp[i-a] || dp[i-b] (если индекс >= 0)
**Что такое dp[i]?** true, если точку i можно достичь
**Почему именно такой переход?** в i можно попасть из i-a или i-b, если они достижимы
**Пошагово на примере target=5, a=2, b=3:** table: dp[0]=true, dp[1]=false, dp[2]=true, dp[3]=true, dp[4]=true (из 2), dp[5]=true (из 2 или 3)

## Решение

```typescript
export function isCellReachableTwoCards(target: number, a: number, b: number): boolean {
    if (target === 0) return true;
    const dp = new Array(target + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= target; i++) {
        if (i - a >= 0) {
            dp[i] = dp[i] || dp[i - a];
        }
        if (i - b >= 0) {
            dp[i] = dp[i] || dp[i - b];
        }
    }
    return dp[target];
}
```

## Разбор

**Идея:** заполняем булев массив dp: dp[i] = true, если i достижима. Базовый случай dp[0] = true. Для каждой i проверяем, можно ли прийти из i-a или i-b.
**Сложность:** O(target) по времени, O(target) по памяти.
