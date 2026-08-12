# Task20: RemoveInvalidParentheses

## Паттерн: Бектрекинг (минимальное количество удалений)

**Зелёные флаги:** удали минимально возможное число скобок, все варианты

## Условие

Дана строка `s` из скобок и букв. Удали **минимальное** количество скобок так, чтобы строка стала валидной. Верни все такие строки.

---

**Постановка:** сначала считаем, сколько скобок нужно удалить: один проход находит количество лишних `)` (`right`) и непарных `(` (`left`). Затем перебором с отсечением удаляем ровно `left` скобок `(` и `right` скобок `)`, чтобы получить валидную строку без лишних удалений этим количеством.

**Ключевые отсечения:**
- если `left === 0` и `right === 0` — проверяем, валидна ли оставшаяся строка: да → в ответ, нет → отбрасываем;
- `(` удаляем, только пока `left > 0`; `)` — только пока `right > 0`;
- `seen`-множество убирает повторную обработку одной и той же строки-кандидата (иначе взрывается).

**Почему это бектрекинг?** Нужно вернуть **все** варианты минимальных решений. По фреймворку «вернуть все варианты → бектрекинг».

**Пошагово на примере s = "()())()":** подсчёт: left=0, right=1. Удаляем одну лишнюю `)`.
- Убрали `)` после `(())` → `(())()` → валиден ✅
- Убрали вторую `)` в середине → `()()()` → валиден ✅

Ответ: `["(())()", "()()()"]`

## Решение

```typescript
export function removeInvalidParentheses(s: string): string[] {
    let leftToRemove = 0, rightToRemove = 0;
    for (const ch of s) {
        if (ch === '(') leftToRemove++;
        else if (ch === ')') {
            if (leftToRemove > 0) leftToRemove--;
            else rightToRemove++;
        }
    }

    const result = new Set<string>();
    const seen = new Set<string>();

    function isValid(str: string): boolean {
        let balance = 0;
        for (const ch of str) {
            if (ch === '(') balance++;
            else if (ch === ')') balance--;
            if (balance < 0) return false;
        }
        return balance === 0;
    }

    function backtrack(str: string, left: number, right: number): void {
        if (left === 0 && right === 0) {
            if (isValid(str)) result.add(str);
            return;
        }
        for (let i = 0; i < str.length; i++) {
            const ch = str[i];
            if (ch !== '(' && ch !== ')') continue;
            if (ch === '(' && left === 0) continue;
            if (ch === ')' && right === 0) continue;
            const next = str.slice(0, i) + str.slice(i + 1);
            if (seen.has(next)) continue;
            seen.add(next);
            backtrack(next, left - (ch === '(' ? 1 : 0), right - (ch === ')' ? 1 : 0));
        }
    }

    backtrack(s, leftToRemove, rightToRemove);
    return [...result];
}
```

## Разбор

**Идея:** количество удалений известно заранее (left, right), поэтому бектрекинг перебирает лишь необходимое; `seen` не позволяет дублировать статусы строк.

**Сложность:** O(n · 2ⁿ) в худшем случае (количество возможных удалений), на практике сильное ограничение left/right и `seen`. Память O(n) + размер `seen`.