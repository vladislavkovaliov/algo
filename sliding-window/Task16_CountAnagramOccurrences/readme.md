# Task 16: CountAnagramOccurrences

## Паттерн: Окно фиксированной длины

**Зелёные флаги:** анаграмма, фиксированная длина, подстрока

## Условие

Даны две строки s и p. Найди все стартовые индексы подстрок s, которые являются анаграммами p.

## Решение

```typescript
export function countAnagramOccurrences(s: string, p: string): number[] {
    if (p.length > s.length) return [];

    const pFreq = new Array(26).fill(0);
    const windowFreq = new Array(26).fill(0);
    const result: number[] = [];

    for (let i = 0; i < p.length; i++) {
        pFreq[p.charCodeAt(i) - 97]++;
        windowFreq[s.charCodeAt(i) - 97]++;
    }

    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if (pFreq[i] === windowFreq[i]) matches++;
    }

    for (let i = 0; i <= s.length - p.length; i++) {
        if (matches === 26) result.push(i);

        if (i + p.length >= s.length) break;

        const outIdx = s.charCodeAt(i) - 97;
        const inIdx = s.charCodeAt(i + p.length) - 97;

        windowFreq[inIdx]++;
        if (windowFreq[inIdx] === pFreq[inIdx]) matches++;
        else if (windowFreq[inIdx] - 1 === pFreq[inIdx]) matches--;

        windowFreq[outIdx]--;
        if (windowFreq[outIdx] === pFreq[outIdx]) matches++;
        else if (windowFreq[outIdx] + 1 === pFreq[outIdx]) matches--;
    }

    return result;
}
```

## Разбор

**Идея:** Окно длины p. Скользим и сравниваем частоты через matches.

**Пошагово на примере `s = "cbaebabacd"`, `p = "abc"`:**

pFreq = {a:1, b:1, c:1}

| i | Окно | matches | Результат |
|---|------|---------|-----------|
| 0 | "cba" | 26 | [0] |
| 1 | "bae" | 24 | [0] |
| 2 | "aeb" | 24 | [0] |
| 3 | "eba" | 24 | [0] |
| 4 | "bab" | 24 | [0] |
| 5 | "aba" | 24 | [0] |
| 6 | "bac" | 26 | [0, 6] |

Ответ: `[0, 6]`.

**Сложность:** O(n) по времени, O(1) по памяти.
