# Task 11: GroupAnagrams

## Паттерн: Выбор ключа

**Зелёные флаги:** сгруппировать анаграммы, отсортированная строка как ключ

## Условие

Дан массив строк `strs`. Сгруппируй анаграммы вместе. Порядок групп и порядок строк внутри группы не важен.

## Решение

```typescript
export function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();
    for (const s of strs) {
        const key = s.split('').sort().join('');
        if (!map.has(key)) map.set(key, []);
        map.get(key)!.push(s);
    }
    return Array.from(map.values());
}
```

## Разбор

**Идея:** Ключом в Map выступает **отсортированная версия строки**. У анаграмм отсортированные символы совпадают, поэтому они попадут в одну группу.

**Пошагово на примере `["eat","tea","tan","ate","nat","bat"]`:**

| Строка | Отсортированная (ключ) | Группа |
|--------|----------------------|--------|
| eat | aet | [eat] |
| tea | aet | [eat, tea] |
| tan | ant | [tan] |
| ate | aet | [eat, tea, ate] |
| nat | ant | [tan, nat] |
| bat | abt | [bat] |

Группы: `[["eat","tea","ate"], ["tan","nat"], ["bat"]]`.

**Сложность:** O(n × k log k) по времени, где k — макс. длина строки, O(n × k) по памяти.
