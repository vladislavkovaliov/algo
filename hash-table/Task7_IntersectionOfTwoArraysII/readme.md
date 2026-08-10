# Task 7: IntersectionOfTwoArraysII

## Паттерн: Техника подсчёта

**Зелёные флаги:** пересечение, учесть кратность, frequency intersection

## Условие

Даны два массива целых чисел `nums1` и `nums2`. Верни массив их пересечения. Каждый элемент в результате должен встречаться столько же раз, сколько он встречается в обоих массивах.

## Решение

```typescript
export function intersect(nums1: number[], nums2: number[]): number[] {
    const count = new Map<number, number>();
    for (const num of nums1) {
        count.set(num, (count.get(num) || 0) + 1);
    }
    const result: number[] = [];
    for (const num of nums2) {
        const c = count.get(num);
        if (c && c > 0) {
            result.push(num);
            count.set(num, c - 1);
        }
    }
    return result;
}
```

## Разбор

**Идея:** Считаем частоты элементов первого массива. Затем проходим по второму: если элемент есть в счётчике и его остаток > 0 — добавляем в результат и уменьшаем счётчик.

**Пошагово на примере `nums1 = [1, 2, 2, 1]`, `nums2 = [2, 2]`:**

Сначала считаем `nums1`: `{1: 2, 2: 2}`.

| Шаг | num | count.get(num) | Действие | result |
|-----|-----|----------------|----------|--------|
| 1 | 2 | 2 | push, стало {2: 1} | [2] |
| 2 | 2 | 1 | push, стало {2: 0} | [2, 2] |

Ответ: `[2, 2]`.

**Сложность:** O(n + m) по времени, O(min(n, m)) по памяти.
