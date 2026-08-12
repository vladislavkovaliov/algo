# Task18: PartitionToKEqualSumSubsets

## Паттерн: Бектрекинг (обобщение MatchsticksToSquare на k вёдер)

**Зелёные флаги:** разбить на k подмножеств равной суммы, обобщение квадрата из спичек

## Условие

Дан массив `nums` и число `k`. Можно ли разбить массив на `k` подмножеств с равной суммой, использовав каждый элемент один раз?

---

**Постановка:** это обобщение Task17 (там k было фиксировано = 4). Каждое подмножество должно иметь сумму `target = total / k`. Проверяем делимость → сортируем по убыванию → распределяем элементы по `k` «вёдрам».

**Почему это бектрекинг?** Элементы нельзя переставлять между вёдрами повторно без возврата: на каждое решение «в какое ведро положить элемент» пытаемся расположить оставшиеся, и при неудаче откатываемся.

**Отсечения (те же, что в Task17):**
- сумма не делится на `k` → false;
- самый большой элемент больше `target` → false;
- не класть элемент в ведро с такой же текущей суммой, как у предыдущего ведра (`buckets[i] === buckets[i-1]`).

**Пошагово на примере nums = [4,3,2,3,5,2,1], k = 4:** сумма 20, target = 5. Сортируем [5,4,3,3,2,2,1]. Распределяем: {5}, {4,1}, {3,2}, {3,2} → true ✅

## Решение

```typescript
export function canPartitionKSubsets(nums: number[], k: number): boolean {
    const total = nums.reduce((a, b) => a + b, 0);
    if (total % k !== 0) return false;
    const target = total / k;
    nums.sort((a, b) => b - a);
    if (nums[0] > target) return false;

    const bucket = new Array(k).fill(0);

    function backtrack(index: number): boolean {
        if (index === nums.length) {
            return bucket.every(value => value === target);
        }
        for (let i = 0; i < k; i++) {
            if (bucket[i] + nums[index] > target) continue;
            if (i > 0 && bucket[i] === bucket[i - 1]) continue;
            bucket[i] += nums[index];
            if (backtrack(index + 1)) return true;
            bucket[i] -= nums[index];
        }
        return false;
    }

    return backtrack(0);
}
```

## Разбор

**Идея:** Task17 с обобщением на произвольное `k`. Тот же каркас: сумма → target → распределение по вёдрам с отсечениями.

**Сравнение с Task17:** в Task17 вёдер ровно 4 (стороны квадрата), здесь их `k`. Всё остальное идентично.

**Сложность:** экспоненциальная в худшем случае (O(kⁿ)), сортировка и отсечение одинаковых вёдер сильно ускоряют на практике.