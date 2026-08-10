# Task 19: SquaresOfSortedArray

## Условие

Дан массив чисел nums, отсортированный по возрастанию (могут быть отрицательные числа). Верни массив квадратов этих чисел, также отсортированный по возрастанию.

## Решение

```typescript
export function squaresOfSortedArray(nums: number[]): number[] {
    const result: number[] = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;

    for (let pos = nums.length - 1; pos >= 0; pos--) {
        const leftSquare = nums[left] * nums[left];
        const rightSquare = nums[right] * nums[right];

        if (leftSquare > rightSquare) {
            result[pos] = leftSquare;
            left++;
        } else {
            result[pos] = rightSquare;
            right--;
        }
    }

    return result;
}
```

## Разбор

**Идея:** Квадраты отрицательных чисел могут быть большими. Самый большой квадрат будет либо крайнего левого (самого отрицательного), либо крайнего правого (самого положительного). Заполняем результат с конца, выбирая больший квадрат.

**Пошагово на примере `[-4, -1, 0, 3, 10]`:**

| pos | L | R | L² | R² | Выбор | Результат |
|-----|---|----|----|----|-------|-----------|
| 4 | 0 | 4 | 16 | 100 | 100 | `[ , , , , 100]` |
| 3 | 0 | 3 | 16 | 9 | 16 | `[ , , , 16, 100]` |
| 2 | 1 | 3 | 1 | 9 | 9 | `[ , , 9, 16, 100]` |
| 1 | 1 | 2 | 1 | 0 | 1 | `[ , 1, 9, 16, 100]` |
| 0 | 2 | 2 | 0 | 0 | 0 | `[0, 1, 9, 16, 100]` |

Ответ: `[0, 1, 9, 16, 100]`.

**Сложность:** O(n) по времени, O(n) по памяти.
