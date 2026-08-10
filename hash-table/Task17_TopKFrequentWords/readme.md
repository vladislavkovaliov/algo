# Task 17: TopKFrequentWords

## Паттерн: KVK (custom sort)

**Зелёные флаги:** top K слов, частота, лексикографический порядок при равенстве

## Условие

Дан массив строк `words` и целое число `k`. Верни `k` самых часто встречающихся слов. Ответ нужно отсортировать по убыванию частоты, а при равной частоте — в лексикографическом порядке.

## Решение

```typescript
export function topKFrequentWords(words: string[], k: number): string[] {
    const count = new Map<string, number>();
    for (const w of words) {
        count.set(w, (count.get(w) || 0) + 1);
    }

    return [...count.entries()]
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .slice(0, k)
        .map(([word]) => word);
}
```

## Разбор

**Идея (KVK):** Считаем частоту слов. Сортируем: сначала по убыванию частоты, при равенстве — по возрастанию (лексикографически). Берём первые k.

**Пошагово на примере `words = ["i","love","leetcode","i","love","coding"]`, `k = 2`:**

Считаем: `{i: 2, love: 2, leetcode: 1, coding: 1}`.

Сортируем:

| Слово | Частота | Сравнение |
|-------|---------|-----------|
| i | 2 | 2 = 2, но "i" < "love" → на первом месте |
| love | 2 | на втором месте |
| leetcode | 1 | |
| coding | 1 | |

Результат: `["i", "love"]`.

**Сложность:** O(n log n) по времени, O(n) по памяти.
