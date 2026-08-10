# Task 15: TopKFrequentElements

## Паттерн: KVK (bucket sort)

**Зелёные флаги:** top K, частота, bucket sort, инверсия ключ↔значение

## Условие

Дан массив целых чисел `nums` и целое число `k`. Верни `k` самых часто встречающихся элементов. Порядок не важен.

## Решение

```typescript
export function topKFrequent(nums: number[], k: number): number[] {
    const count = new Map<number, number>();
    for (const num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    const buckets: number[][] = Array.from(
        { length: nums.length + 1 },
        () => []
    );
    for (const [num, freq] of count) {
        buckets[freq].push(num);
    }

    const result: number[] = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        for (const num of buckets[i]) {
            result.push(num);
            if (result.length === k) break;
        }
    }
    return result;
}
```

## Разбор

**Идея (KVK):** Сначала считаем частоту (ключ → значение). Затем инвертируем: индексом массива становится частота, а значением — список чисел с этой частотой. Идём с конца, собирая top K.

**Пошагово на примере `nums = [1, 1, 1, 2, 2, 3]`, `k = 2`:**

Считаем частоты: `{1: 3, 2: 2, 3: 1}`.

Строим buckets (массив длиной 7, т.к. nums.length = 6):

| index (частота) | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|-----------------|---|---|---|---|---|---|---|
| числа | [] | [3] | [2] | [1] | [] | [] | [] |

Идём с конца (с 6):

| i | Содержимое | Берём | result |
|---|-----------|-------|--------|
| 6 | [] | — | [] |
| 5 | [] | — | [] |
| 4 | [] | — | [] |
| 3 | [1] | 1 | [1] |
| 2 | [2] | 2 | [1, 2] ← k=2, стоп |

Ответ: `[1, 2]`.

**Сложность:** O(n) по времени, O(n) по памяти.
