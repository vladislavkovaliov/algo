# Task 12: MinimumSizeSubarraySum

## Паттерн: Пересекающиеся окна

**Зелёные флаги:** shortest, подмассив, сумма ≥ target

## Условие

Дан массив nums (только положительные числа) и число target. Найди минимальную длину подмассива, сумма которого ≥ target. Если такого нет — верни 0.

## Решение

```typescript
export function minimumSizeSubarraySum(nums: number[], target: number): number {
    let left = 0;
    let sum = 0;
    let minLen = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}
```

## Разбор

**Идея:** Расширяем окно вправо. Как только сумма ≥ target — пытаемся сузить слева, чтобы найти минимальную длину.

**Пошагово на примере `nums = [2, 3, 1, 2, 4, 3]`, `target = 7`:**

| right | val | sum | sum ≥ target? | left | Длина | minLen |
|-------|-----|-----|---------------|------|-------|--------|
| 0 | 2 | 2 | Нет | 0 | — | ∞ |
| 1 | 3 | 5 | Нет | 0 | — | ∞ |
| 2 | 1 | 6 | Нет | 0 | — | ∞ |
| 3 | 2 | 8 | 8 ≥ 7 → сужаем | 0 | 4 | 4 |
| 3 | 2 | 6 | Нет | 1 | — | 4 |
| 4 | 4 | 10 | 10 ≥ 7 → сужаем | 1 | 4 | 4 |
| 4 | 4 | 7 | 7 ≥ 7 → сужаем | 2 | 3 | 3 |
| 4 | 4 | 4 | Нет | 3 | — | 3 |
| 5 | 3 | 7 | 7 ≥ 7 → сужаем | 3 | 3 | 3 |
| 5 | 3 | 4 | Нет | 4 | — | 2 |

Ответ: `2` (подмассив [4, 3]).

**Сложность:** O(n) по времени, O(1) по памяти.
