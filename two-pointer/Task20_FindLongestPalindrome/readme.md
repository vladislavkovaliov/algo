# Task 20: FindLongestPalindrome

## Условие

Дана строка s из строчных латинских букв. Найди длину самой длинной подстроки-палиндрома в s.

## Решение

```typescript
function expandFromCenter(s: string, left: number, right: number): number {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}

export function findLongestPalindrome(s: string): number {
    if (s.length === 0) return 0;

    let maxLen = 1;

    for (let i = 0; i < s.length; i++) {
        const len1 = expandFromCenter(s, i, i);
        const len2 = expandFromCenter(s, i, i + 1);
        maxLen = Math.max(maxLen, len1, len2);
    }

    return maxLen;
}
```

## Разбор

**Идея:** Каждый символ (и каждая пара соседних) — потенциальный центр палиндрома. Расширяемся влево и вправо, пока символы равны.

**Пошагово на примере `"babad"`:**

| i | Центр | len1 (i,i) | len2 (i,i+1) | maxLen |
|---|-------|-----------|-------------|--------|
| 0 | b | 1 (b) | 0 | 1 |
| 1 | a | 3 (aba) | 0 | 3 |
| 2 | b | 3 (aba) | 0 | 3 |
| 3 | a | 1 (a) | 2 (ad — нет, 0) | 3 |
| 4 | d | 1 (d) | — | 3 |

Максимум: 3 (палиндромы "bab" или "aba").

**Сложность:** O(n²) по времени, O(1) по памяти.
