# Task 4: MaxVowelsInSubstringK

## Паттерн: Окно фиксированной длины

**Зелёные флаги:** k, фиксированная длина окна, гласные

## Условие

Дана строка s и число k. Найди максимальное количество гласных букв в подстроке длины k. Гласные: a, e, i, o, u.

## Решение

```typescript
function isVowel(c: string): boolean {
    return 'aeiouAEIOU'.includes(c);
}

export function maxVowelsInSubstring(s: string, k: number): number {
    let count = 0;

    for (let i = 0; i < k; i++) {
        if (isVowel(s[i])) count++;
    }

    let maxCount = count;

    for (let i = k; i < s.length; i++) {
        if (isVowel(s[i])) count++;
        if (isVowel(s[i - k])) count--;
        if (count > maxCount) maxCount = count;
    }

    return maxCount;
}
```

## Разбор

**Идея:** Считаем гласные в первом окне, затем скользим: добавляем новую гласную, убираем старую.

**Пошагово на примере `s = "abciiidef"`, `k = 3`:**

| Шаг | Окно | Гласных | max |
|-----|------|---------|-----|
| 0 | "abc" | 1 | 1 |
| 1 | "bci" | 1 | 1 |
| 2 | "cii" | 2 | 2 |
| 3 | "iii" | 3 | 3 |

Ответ: `3`.

**Сложность:** O(n) по времени, O(1) по памяти.
