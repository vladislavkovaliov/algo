# Task 13: MinWindowSubstring

## Паттерн: Пересекающиеся окна

**Зелёные флаги:** shortest, подстрока, содержит все символы

## Условие

Даны две строки s и t. Найди минимальное окно в s, которое содержит все символы из t (с учётом повторений). Если такого окна нет — верни пустую строку.

## Решение

```typescript
export function minWindowSubstring(s: string, t: string): string {
    if (t.length > s.length) return '';

    const need = new Map<string, number>();
    for (const char of t) {
        need.set(char, (need.get(char) || 0) + 1);
    }

    let have = 0;
    const needCount = need.size;
    let left = 0;
    let minLen = Infinity;
    let start = 0;

    const window = new Map<string, number>();

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        window.set(char, (window.get(char) || 0) + 1);

        if (need.has(char) && window.get(char) === need.get(char)) {
            have++;
        }

        while (have === needCount) {
            const len = right - left + 1;
            if (len < minLen) {
                minLen = len;
                start = left;
            }

            const leftChar = s[left];
            window.set(leftChar, window.get(leftChar)! - 1);
            if (need.has(leftChar) && window.get(leftChar)! < need.get(leftChar)!) {
                have--;
            }
            left++;
        }
    }

    return minLen === Infinity ? '' : s.substring(start, start + minLen);
}
```

## Разбор

**Идея:** Два счётчика — need (что нужно найти) и window (что есть в окне). Когда все символы найдены — сужаем слева, обновляя минимум.

**Пошагово на примере `s = "ADOBECODEBANC"`, `t = "ABC"`:**

need = {A:1, B:1, C:1}, needCount = 3

| right | char | window | have | left | Окно | minLen |
|-------|------|--------|------|------|------|--------|
| 0 | A | {A:1} | 1 | 0 | "A" | ∞ |
| 1 | D | {A:1,D:1} | 1 | 0 | "AD" | ∞ |
| 2 | O | {A:1,D:1,O:1} | 1 | 0 | "ADO" | ∞ |
| 3 | B | {A:1,D:1,O:1,B:1} | 2 | 0 | "ADOB" | ∞ |
| 4 | E | {A:1,D:1,O:1,B:1,E:1} | 2 | 0 | "ADOBE" | ∞ |
| 5 | C | {A:1,D:1,O:1,B:1,E:1,C:1} | 3 | 0 | "ADOBEC" | 6 |
| 5 | C | A:0, have=2 | 1 | 1 | "DOBEC" | 6 |
| 6 | O | ... | 2 | 1 | ... | 6 |
| 7 | D | ... | 2 | 1 | ... | 6 |
| 8 | E | ... | 2 | 1 | ... | 6 |
| 9 | B | B:2 | 2 | 1 | ... | 6 |
| 10 | A | A:1 | 3 | 1 | "DOBECODEBA" | 10 |
| 10 | A | D:0, have=2 | 2 | 2 | "OBECODEBA" | 10 |
| 10 | A | O:0, have=2 | 2 | 3 | "BECODEBA" | 10 |
| ... | ... | ... | ... | ... | ... | ... |
| 13 | C | A:1,B:1,C:1 | 3 | 9 | "BANC" | 4 |

Ответ: `"BANC"`.

**Сложность:** O(n) по времени, O(k) по памяти, где k — размер алфавита t.
