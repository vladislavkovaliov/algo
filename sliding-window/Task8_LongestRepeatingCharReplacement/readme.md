# Task 8: LongestRepeatingCharReplacement

## Паттерн: Пересекающиеся окна

**Зелёные флаги:** longest, подстрока, замена символов, k операций

## Условие

Дана строка s и число k. Ты можешь заменить любые k символов на любые другие буквы. Найди длину самой длинной подстроки из одного символа после не более k замен.

## Решение

```typescript
export function longestRepeatingCharReplacement(s: string, k: number): number {
    const freq = new Array(26).fill(0);
    let left = 0;
    let maxFreq = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        const idx = s.charCodeAt(right) - 65;
        freq[idx]++;
        maxFreq = Math.max(maxFreq, freq[idx]);

        if (right - left + 1 - maxFreq > k) {
            const leftIdx = s.charCodeAt(left) - 65;
            freq[leftIdx]--;
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}
```

## Разбор

**Идея:** В окне нам нужно заменить все символы, кроме самого частого. Условие: `длина окна - maxFreq ≤ k`. Если нет — сужаем слева.

**Пошагово на примере `s = "AABABBA"`, `k = 1`:**

| right | char | freq | maxFreq | left | Окно | (right-left+1) - maxFreq ≤ k? | maxLen |
|-------|------|------|---------|------|------|------------------------------|--------|
| 0 | A | A:1 | 1 | 0 | "A" | 1-1=0 ≤ 1 ✅ | 1 |
| 1 | A | A:2 | 2 | 0 | "AA" | 2-2=0 ≤ 1 ✅ | 2 |
| 2 | B | A:2,B:1 | 2 | 0 | "AAB" | 3-2=1 ≤ 1 ✅ | 3 |
| 3 | A | A:3,B:1 | 3 | 0 | "AABA" | 4-3=1 ≤ 1 ✅ | 4 |
| 4 | B | A:3,B:2 | 3 | 0 | "AABAB" | 5-3=2 > 1 → left=1 | 4 |
| 4 | B | A:2,B:2 | 2 | 1 | "ABAB" | 4-2=2 > 1 → left=2 | 4 |
| 4 | B | A:1,B:2 | 2 | 2 | "BAB" | 3-2=1 ≤ 1 ✅ | 4 |
| 5 | B | A:1,B:3 | 3 | 2 | "BABB" | 4-3=1 ≤ 1 ✅ | 4 |
| 6 | A | A:2,B:3 | 3 | 2 | "BABBA" | 5-3=2 > 1 → left=3 | 4 |

Ответ: `4`.

**Сложность:** O(n) по времени, O(1) по памяти (алфавит 26 символов).
