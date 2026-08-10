# Task 16: SortCharactersByFrequency

## Паттерн: KVK (sort by value)

**Зелёные флаги:** отсортировать по частоте, инверсия ключ↔значение

## Условие

Дана строка `s`. Отсортируй её по убыванию частоты символов. Если два символа имеют одинаковую частоту — порядок не важен.

## Решение

```typescript
export function frequencySort(s: string): string {
    const count = new Map<string, number>();
    for (const ch of s) {
        count.set(ch, (count.get(ch) || 0) + 1);
    }

    return [...count.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(([ch, freq]) => ch.repeat(freq))
        .join('');
}
```

## Разбор

**Идея (KVK):** Считаем частоту символов. Затем сортируем пары [символ, частота] по убыванию частоты. Повторяем каждый символ freq раз и объединяем.

**Пошагово на примере `"tree"`:**

Считаем: `{t: 1, r: 1, e: 2}`.

Сортируем: `[['e', 2], ['t', 1], ['r', 1]]`.

Собираем: `'e'.repeat(2) + 't'.repeat(1) + 'r'.repeat(1)` = `"eetr"`.

**Сложность:** O(n log n) по времени, O(k) по памяти, где k — уникальные символы.
