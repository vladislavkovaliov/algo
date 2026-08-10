# Task 7: LongestSubstringWithoutRepeating

## Паттерн: Пересекающиеся окна

**Зелёные флаги:** longest, подстрока, без повторов

## Условие

Дана строка s. Найди длину самой длинной подстроки без повторяющихся символов.

## Решение

```typescript
export function longestSubstringWithoutRepeating(s: string): number {
    const lastIndex = new Map<string, number>();
    let maxLen = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        if (lastIndex.has(char) && lastIndex.get(char)! >= left) {
            left = lastIndex.get(char)! + 1;
        }

        lastIndex.set(char, right);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}
```

## Разбор

**Идея:** Двигаем правый указатель, запоминаем индекс каждого символа. Если символ уже встречался и его индекс ≥ left — сдвигаем left на index + 1.

**Пошагово на примере `s = "abcabcbb"`:**

| right | char | left | lastIndex | Окно | maxLen |
|-------|------|------|-----------|------|--------|
| 0 | a | 0 | {a:0} | "a" | 1 |
| 1 | b | 0 | {a:0, b:1} | "ab" | 2 |
| 2 | c | 0 | {a:0, b:1, c:2} | "abc" | 3 |
| 3 | a | 1 | {a:3, b:1, c:2} | "bca" | 3 |
| 4 | b | 2 | {a:3, b:4, c:2} | "cab" | 3 |
| 5 | c | 3 | {a:3, b:4, c:5} | "abc" | 3 |
| 6 | b | 5 | {a:3, b:6, c:5} | "b" | 3 |
| 7 | b | 7 | {a:3, b:7, c:5} | "" | 3 |

**Сложность:** O(n) по времени, O(min(n, 26)) по памяти.
