# Task 3: RansomNote

## Паттерн: Техника подсчёта

**Зелёные флаги:** составить из букв, достаточно ли символов, decrement

## Условие

Даны две строки `ransomNote` и `magazine`. Верни `true`, если `ransomNote` можно составить из букв `magazine`. Каждая буква из `magazine` может быть использована только один раз.

## Решение

```typescript
export function canConstruct(ransomNote: string, magazine: string): boolean {
    const count = new Map<string, number>();
    for (const ch of magazine) {
        count.set(ch, (count.get(ch) || 0) + 1);
    }
    for (const ch of ransomNote) {
        const val = count.get(ch);
        if (!val) return false;
        count.set(ch, val - 1);
    }
    return true;
}
```

## Разбор

**Идея:** Считаем все буквы в `magazine`. Затем для каждой буквы из `ransomNote` проверяем, есть ли она в запасе. Если нет или запас закончился — `false`.

**Пошагово на примере `ransomNote = "aa"`, `magazine = "aab"`:**

Сначала считаем `magazine`: `{a: 2, b: 1}`.

| Шаг | Буква | Остаток до | Остаток после | Результат |
|-----|-------|-------------|---------------|-----------|
| 1 | a | 2 | 1 | ок |
| 2 | a | 1 | 0 | ок |

Все буквы нашлись → `true`.

**Сложность:** O(n + m) по времени, O(k) по памяти, где k — размер алфавита.
