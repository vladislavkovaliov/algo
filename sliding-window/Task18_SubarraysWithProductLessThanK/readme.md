# Task 18: SubarraysWithProductLessThanK

## Паттерн: Пересекающиеся окна

**Зелёные флаги:** count, подмассив, произведение меньше k

## Условие

Дан массив nums (только положительные числа) и число k. Найди количество подмассивов, произведение которых меньше k.

## Решение

```typescript
export function subarraysWithProductLessThanK(nums: number[], k: number): number {
    if (k <= 1) return 0;

    let left = 0;
    let product = 1;
    let count = 0;

    for (let right = 0; right < nums.length; right++) {
        product *= nums[right];

        while (product >= k) {
            product /= nums[left];
            left++;
        }

        count += right - left + 1;
    }

    return count;
}
```

## Разбор

**Идея:** На каждой итерации right все подмассивы, заканчивающиеся на right с произведением < k, учитываются добавлением `right - left + 1`. Это ключевой трюк: если окно [left..right] даёт произведение < k, то все подмассивы, заканчивающиеся на right и начинающиеся от left и правее, тоже подходят.

**Пошагово на примере `nums = [10, 5, 2, 6]`, `k = 100`:**

| right | val | product | > k? | left | Добавляем | count |
|-------|-----|---------|------|------|-----------|-------|
| 0 | 10 | 10 | Нет | 0 | right-left+1=1: [10] | 1 |
| 1 | 5 | 50 | Нет | 0 | 2: [5], [10,5] | 3 |
| 2 | 2 | 100 | 100 ≥ 100 → /10=10, left=1 | 1 | 2: [2], [5,2] | 5 |
| 3 | 6 | 60 | Нет | 1 | 3: [6], [2,6], [5,2,6] | 8 |

Всего 8 подмассивов.

**Сложность:** O(n) по времени, O(1) по памяти.
