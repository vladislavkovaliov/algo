# Task 6: ContainsNearbyDuplicate

## Паттерн: Окно фиксированной длины

**Зелёные флаги:** k, фиксированная длина окна, дубликаты на расстоянии

## Условие

Дан массив nums и число k. Определи, есть ли в массиве два одинаковых элемента на расстоянии не больше k (индексы отличаются ≤ k).

## Решение

```typescript
export function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const window = new Set<number>();

    for (let i = 0; i < nums.length; i++) {
        if (window.has(nums[i])) return true;
        window.add(nums[i]);
        if (window.size > k) {
            window.delete(nums[i - k]);
        }
    }

    return false;
}
```

## Разбор

**Идея:** Храним в Set последние k элементов. Если новый элемент уже есть в Set — дубликат найден.

**Пошагово на примере `nums = [1, 2, 3, 1]`, `k = 3`:**

| i | nums[i] | Set | Действие |
|---|---------|-----|----------|
| 0 | 1 | {1} | Добавили |
| 1 | 2 | {1, 2} | Добавили |
| 2 | 3 | {1, 2, 3} | Добавили |
| 3 | 1 | {1, 2, 3} | 1 уже есть → true |

**Сложность:** O(n) по времени, O(k) по памяти.
