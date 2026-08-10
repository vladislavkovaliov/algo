# Task 9: LongestSubarrayWithSumAtMostK

## Паттерн: Пересекающиеся окна

**Зелёные флаги:** longest, подмассив, сумма не больше k

## Условие

Дан массив nums (только положительные числа) и число k. Найди длину самого длинного подмассива, сумма которого ≤ k.

## Решение

```typescript
export function longestSubarrayWithSumAtMostK(nums: number[], k: number): number {
    let left = 0;
    let sum = 0;
    let maxLen = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum > k) {
            sum -= nums[left];
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}
```

## Разбор

**Идея:** Расширяем окно вправо. Если сумма превысила k — сужаем слева, пока не станет ≤ k.

**Пошагово на примере `nums = [3, 1, 2, 1, 1]`, `k = 5`:**

| right | nums[right] | sum | sum > k? | left | Окно | maxLen |
|-------|-------------|-----|----------|------|------|--------|
| 0 | 3 | 3 | Нет | 0 | [3] | 1 |
| 1 | 1 | 4 | Нет | 0 | [3,1] | 2 |
| 2 | 2 | 6 | 6 > 5 → 6-3=3, left=1 | 1 | [1,2] | 2 |
| 3 | 1 | 4 | Нет | 1 | [1,2,1] | 3 |
| 4 | 1 | 5 | Нет | 1 | [1,2,1,1] | 4 |

Ответ: `4`.

**Сложность:** O(n) по времени, O(1) по памяти.
