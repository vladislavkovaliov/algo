# Task 3: FirstNegativeInWindowK

## Паттерн: Окно фиксированной длины

**Зелёные флаги:** k, фиксированная длина окна, первый отрицательный

## Условие

Дан массив nums и число k. Для каждого подмассива длины k найди первый отрицательный элемент. Если отрицательных нет — добавь 0. Верни массив результатов.

## Решение

```typescript
export function firstNegativeInWindow(nums: number[], k: number): number[] {
    const result: number[] = [];
    const negativeIndices: number[] = [];
    let head = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] < 0) {
            negativeIndices.push(right);
        }

        if (right >= k - 1) {
            const left = right - k + 1;

            // выбрасываем индексы, которые уже слева от окна
            while (
                head < negativeIndices.length &&
                negativeIndices[head] < left
            ) {
                head++;
            }

            // первый отрицательный в окне — в начале очереди
            result.push(
                head < negativeIndices.length
                    ? nums[negativeIndices[head]]
                    : 0
            );
        }
    }

    return result;
}
```

## Разбор

**Идея:** Храним индекс последнего встреченного отрицательного числа. Для каждого окна проверяем, попадает ли он в текущее окно.

**Пошагово на примере `nums = [1, -2, 3, -4, 5]`, `k = 2`:**

| i | nums[i] | negIdx | Окно | Результат |
|---|---------|--------|------|-----------|
| 0 | 1 | -1 | — | — |
| 1 | -2 | 1 | [1, -2] | -2 |
| 2 | 3 | 1 | [-2, 3] | -2 |
| 3 | -4 | 3 | [3, -4] | -4 |
| 4 | 5 | 3 | [-4, 5] | -4 |

Ответ: `[-2, -2, -4, -4]`.

**Сложность:** O(n) по времени, O(1) по памяти (без учёта ответа).
