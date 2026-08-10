# Task 8: WordPattern

## Паттерн: Выбор ключа

**Зелёные флаги:** биекция, паттерн → слово, bidirectional map

## Условие

Даны строка-паттерн `pattern` и строка `s` (слова, разделённые пробелами). Верни `true`, если `s` соответствует тому же паттерну. "Соответствие" означает полное биективное соответствие: каждой букве в `pattern` соответствует ровно одно слово, и наоборот.

## Решение

```typescript
export function wordPattern(pattern: string, s: string): boolean {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;

    const charToWord = new Map<string, string>();
    const wordToChar = new Map<string, string>();

    for (let i = 0; i < pattern.length; i++) {
        const c = pattern[i];
        const w = words[i];

        if (charToWord.has(c) && charToWord.get(c) !== w) return false;
        if (wordToChar.has(w) && wordToChar.get(w) !== c) return false;

        charToWord.set(c, w);
        wordToChar.set(w, c);
    }
    return true;
}
```

## Разбор

**Идея:** Нужна двусторонняя проверка: буква → слово и слово → буква. Если хотя бы в одну сторону связь нарушается — это не биекция.

**Пошагово на примере `pattern = "abba"`, `s = "dog cat cat dog"`:**

| i | c | w | charToWord | wordToChar | Результат |
|---|----|----|-----------|-----------|-----------|
| 0 | a | dog | {a: dog} | {dog: a} | ок |
| 1 | b | cat | {a: dog, b: cat} | {dog: a, cat: b} | ок |
| 2 | b | cat | b → cat = cat ✓ | cat → b = b ✓ | ок |
| 3 | a | dog | a → dog = dog ✓ | dog → a = a ✓ | ок |

Ответ: `true`.

**Сложность:** O(n) по времени, O(k) по памяти, где k — количество уникальных слов.
