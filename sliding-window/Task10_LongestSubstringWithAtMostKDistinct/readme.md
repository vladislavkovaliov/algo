# Task 10: LongestSubstringWithAtMostKDistinct

## Паттерн: Пересекающиеся окна

**Зелёные флаги:** longest, подстрока, не более k различных символов

## Условие

Дана строка s и число k. Найди длину самой длинной подстроки, содержащей не более k различных символов.

## Решение

```typescript
export function longestSubstringWithAtMostKDistinct(s: string, k: number): number {
    if (k === 0) return 0;

    const freq = new Map<string, number>();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        freq.set(s[right], (freq.get(s[right]) || 0) + 1);

        while (freq.size > k) {
            const leftChar = s[left];
            freq.set(leftChar, freq.get(leftChar)! - 1);
            if (freq.get(leftChar) === 0) freq.delete(leftChar);
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}
```

## Разбор

**Идея:** Окно, в котором не больше k уникальных символов. Когда появляется k+1 — сужаем слева, пока не удалим один из типов.

**Пошагово на примере `s = "eceba"`, `k = 2`:**

| right | char | freq | size | size > k? | left | Окно | maxLen |
|-------|------|------|------|-----------|------|------|--------|
| 0 | e | {e:1} | 1 | Нет | 0 | "e" | 1 |
| 1 | c | {e:1,c:1} | 2 | Нет | 0 | "ec" | 2 |
| 2 | e | {e:2,c:1} | 2 | Нет | 0 | "ece" | 3 |
| 3 | b | {e:2,c:1,b:1} | 3 | 3 > 2 → e:1, left=1 | 1 | "ceb" | 3 |
| 3 | b | {e:1,c:1,b:1} | 3 | 3 > 2 → c:0, удаляем, left=2 | 2 | "eb" | 3 |
| 4 | a | {e:1,b:1,a:1} | 3 | 3 > 2 → e:0, left=3 | 3 | "ba" | 3 |

Ответ: `3` ("ece").

**Сложность:** O(n) по времени, O(k) по памяти.
