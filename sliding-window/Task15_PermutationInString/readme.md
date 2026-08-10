# Task 15: PermutationInString

## Паттерн: Окно фиксированной длины

**Зелёные флаги:** перестановка, подстрока, анаграмма, фиксированная длина

## Условие

Даны две строки s1 и s2. Определи, содержит ли s2 какую-либо перестановку s1.

## Решение

```typescript
export function permutationInString(s1: string, s2: string): boolean {
    if (s1.length > s2.length) return false;

    const s1Freq = new Array(26).fill(0);
    const windowFreq = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        s1Freq[s1.charCodeAt(i) - 97]++;
        windowFreq[s2.charCodeAt(i) - 97]++;
    }

    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if (s1Freq[i] === windowFreq[i]) matches++;
    }

    for (let i = s1.length; i < s2.length; i++) {
        if (matches === 26) return true;

        const rightIdx = s2.charCodeAt(i) - 97;
        windowFreq[rightIdx]++;
        if (windowFreq[rightIdx] === s1Freq[rightIdx]) {
            matches++;
        } else if (windowFreq[rightIdx] - 1 === s1Freq[rightIdx]) {
            matches--;
        }

        const leftIdx = s2.charCodeAt(i - s1.length) - 97;
        windowFreq[leftIdx]--;
        if (windowFreq[leftIdx] === s1Freq[leftIdx]) {
            matches++;
        } else if (windowFreq[leftIdx] + 1 === s1Freq[leftIdx]) {
            matches--;
        }
    }

    return matches === 26;
}
```

## Разбор

**Идея:** Окно фиксированной длины s1. Сравниваем частоты символов в окне с частотами s1. Используем matches для O(1) проверки совпадения.

**Пошагово на примере `s1 = "ab"`, `s2 = "eidbaooo"`:**

s1Freq = [a:1, b:1]

Первое окно "ei": e:1,i:1. matches = 24 (все, кроме e и i).

| i | Выходящий | Входящий | matches |
|---|-----------|----------|---------|
| 2 | e ← i | d | 24 |
| 3 | i ← d | b | 24 |
| 4 | d ← b | a | — |

На i=4: выходит d, входит a. После обработки: окно = "ba":
- a:1 = s1[a]:1 → matches++
- b:1 = s1[b]:1 → matches++

matches = 26 → true.

**Сложность:** O(n) по времени, O(1) по памяти.
