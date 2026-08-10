# Task 13: FourSumII

## Паттерн: Выбор ключа

**Зелёные флаги:** четыре массива, суммы пар, frequency of pair sums, divide & conquer

## Условие

Даны четыре массива целых чисел `nums1`, `nums2`, `nums3`, `nums4`. Верни количество кортежей (i, j, k, l) таких, что `nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0`.

## Решение

```typescript
export function fourSumCount(
    nums1: number[], nums2: number[],
    nums3: number[], nums4: number[]
): number {
    const map = new Map<number, number>();
    for (const a of nums1) {
        for (const b of nums2) {
            const sum = a + b;
            map.set(sum, (map.get(sum) || 0) + 1);
        }
    }
    let count = 0;
    for (const c of nums3) {
        for (const d of nums4) {
            const target = -(c + d);
            count += map.get(target) || 0;
        }
    }
    return count;
}
```

## Разбор

**Идея:** Разделяем 4 массива на две пары. Считаем все суммы пар из первых двух массивов (и их частоту). Затем для каждой суммы пары из последних двух массивов ищем её отрицание в счётчике.

**Пошагово на примере `nums1 = [1, 2]`, `nums2 = [-2, -1]`, `nums3 = [-1, 2]`, `nums4 = [0, 2]`:**

Сначала считаем суммы пар из nums1 + nums2:

| a | b | sum | map |
|---|---|-----|-----|
| 1 | -2 | -1 | {-1: 1} |
| 1 | -1 | 0 | {-1: 1, 0: 1} |
| 2 | -2 | 0 | {-1: 1, 0: 2} |
| 2 | -1 | 1 | {-1: 1, 0: 2, 1: 1} |

Теперь проходим nums3 + nums4:

| c | d | c + d | -(c+d) | В map? | count |
|---|---|-------|--------|--------|-------|
| -1 | 0 | -1 | 1 | {1: 1} | 1 |
| -1 | 2 | 1 | -1 | {-1: 1} | 2 |
| 2 | 0 | 2 | -2 | нет | 2 |
| 2 | 2 | 4 | -4 | нет | 2 |

Ответ: `2`.

**Сложность:** O(n²) по времени, O(n²) по памяти.
