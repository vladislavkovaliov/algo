# Task8: CombinationSumII

## Паттерн: Бектрекинг (дубликаты + сумма, по одному разу)

**Зелёные флаги:** каждый элемент можно использовать один раз, могут быть дубликаты в массиве, суммы равны target

## Условие

Дан массив `candidates` (с дубликатами) и `target`. Верни все уникальные комбинации с суммой `target`. **Каждый элемент можно использовать один раз.**

---

**Постановка:** объединяем приёмы Task6 и Task7:
1. Сортируем массив (нужно для дедупликации) + пропускаем одинаковые на одном уровне.
2. В отличие от Task6, вызываем `backtrack(i + 1, ...)` — каждый элемент берём один раз (0/1, а не безгранично).

**Ключевые отличия от Task6:**
- рекурсия на `i + 1` (нельзя повторять число);
- `candidates[i] > remaining` → `break` вместо `continue` (массив отсортирован, дальше только больше).

**Пошагово на примере candidates = [10,1,2,7,6,1,5], target = 8:**

Сортируем: `[1, 1, 2, 5, 6, 7, 10]`

| path | remaining | Действие |
|---|---|---|
| [1,1] | 6 | берём 6 → [1,1,6] ✅ |
| [1,2] | 5 | берём 5 → [1,2,5] ✅ |
| [1] | 7 | берём 7 → [1,7] ✅ |
| [2] | 6 | берём 6 → [2,6] ✅ |
| второй 1 в цикле | — | пропускаем (дубль) |

Ответ: `[[1,1,6],[1,2,5],[1,7],[2,6]]`

## Решение

```typescript
export function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b);
    const result: number[][] = [];

    function backtrack(start: number, remaining: number, path: number[]): void {
        if (remaining === 0) {
            result.push([...path]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] > remaining) break;
            if (i > start && candidates[i] === candidates[i - 1]) continue;
            path.push(candidates[i]);
            backtrack(i + 1, remaining - candidates[i], path);
            path.pop();
        }
    }

    backtrack(0, target, []);
    return result;
}
```

## Разбор

**Идея:** «каждый элемент один раз» + «дубликаты в исходных данных» → Task6 + пропуск одинаковых на уровне. Это классический LeetCode 40.

**Сложность:** O(2ⁿ · n) в худшем случае, O(n) по памяти для стека рекурсии.