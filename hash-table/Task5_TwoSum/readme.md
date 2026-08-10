# Task 5: TwoSum

## Паттерн: Выбор ключа

**Зелёные флаги:** сумма target, найти пару, complement

## Условие

Дан массив целых чисел `nums` и целое число `target`. Верни индексы двух элементов, сумма которых равна `target`. Каждый вход имеет ровно одно решение, и нельзя использовать один элемент дважды.

## Решение

```typescript
export function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }
        map.set(nums[i], i);
    }
    return [];
}
```

## Разбор

**Идея:** Ключом в Map выступает само число, а значением — его индекс. Для каждого элемента проверяем, встречался ли его `complement` (target минус текущее число) раньше.

**Пошагово на примере `nums = [2, 7, 11, 15]`, `target = 9`:**

| Шаг | i | nums[i] | complement (9 - nums[i]) | Есть в map? | Действие |
|-----|---|---------|--------------------------|-------------|----------|
| 1 | 0 | 2 | 7 | нет | map.set(2, 0) |
| 2 | 1 | 7 | 2 | **да** (индекс 0) | return [0, 1] |

Ответ: `[0, 1]`.

**Сложность:** O(n) по времени, O(n) по памяти.
