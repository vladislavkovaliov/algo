# Task 19: LongestContinuousSubarrayWithDiffLimit

## Паттерн: Пересекающиеся окна

**Зелёные флаги:** longest, |max-min| ≤ limit, два deque

## Условие

Дан массив nums и число limit. Найди длину самого длинного подмассива, в котором абсолютная разница между любыми двумя элементами ≤ limit.

## Решение

```typescript
export function longestContinuousSubarrayWithDiffLimit(nums: number[], limit: number): number {
    const maxDeque: number[] = [];
    const minDeque: number[] = [];
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < nums.length; right++) {
        while (maxDeque.length > 0 && maxDeque[maxDeque.length - 1] < nums[right]) {
            maxDeque.pop();
        }
        maxDeque.push(nums[right]);

        while (minDeque.length > 0 && minDeque[minDeque.length - 1] > nums[right]) {
            minDeque.pop();
        }
        minDeque.push(nums[right]);

        while (maxDeque[0] - minDeque[0] > limit) {
            if (maxDeque[0] === nums[left]) maxDeque.shift();
            if (minDeque[0] === nums[left]) minDeque.shift();
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}
```

## Разбор

**Идея:** Два deque — один для максимума (убывающий), другой для минимума (возрастающий). Разница между головой deque'ов — это |max-min| в окне. Если превышает limit — сужаем слева.

**Пошагово на примере `nums = [10, 1, 2, 4, 7, 2]`, `limit = 5`:**

| right | val | maxDeque | minDeque | head diff | > limit? | left | maxLen |
|-------|-----|----------|----------|-----------|----------|------|--------|
| 0 | 10 | [10] | [10] | 0 | Нет | 0 | 1 |
| 1 | 1 | [10] | [1] | 9 | 9 > 5 → left=1 | 1 | 1 |
| 2 | 2 | [2] | [2] | 0 | Нет | 1 | 2 |
| 3 | 4 | [4] | [2,4] | 2 | Нет | 1 | 3 |
| 4 | 7 | [7] | [2,4,7] | 5 | 5 ≤ 5 ✅ | 1 | 4 |
| 5 | 2 | [7] | [2,2] | 5 | Нет | 1 | 4 |

Ответ: `4` (подмассив [1, 2, 4, 7]).

**Сложность:** O(n) по времени, O(n) по памяти.
