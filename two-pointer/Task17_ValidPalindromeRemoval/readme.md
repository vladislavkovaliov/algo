# Task 17: ValidPalindromeRemoval

## Условие

Дана строка s из строчных латинских букв. Можно удалить не более одного символа. Определи, может ли строка стать палиндромом после такого удаления. Верни true или false.

## Решение

```typescript
function isPalindromeFrom(s: string, left: number, right: number): boolean {
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}

export function validPalindromeRemoval(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return isPalindromeFrom(s, left + 1, right) ||
                   isPalindromeFrom(s, left, right - 1);
        }
        left++;
        right--;
    }

    return true;
}
```

## Разбор

**Идея:** Обычная проверка палиндрома, но при первом несовпадении пробуем два варианта: пропустить левый символ или пропустить правый.

**Пошагово на примере `"abca"`:**

| Шаг | L | R | s[L] | s[R] | Действие |
|-----|---|----|------|------|----------|
| 0 | 0 | 3 | a | a | равны → L=1, R=2 |
| 1 | 1 | 2 | b | c | разные! |

Пробуем:
- Пропустить L: `isPalindromeFrom("abca", 2, 2)` → true (строка "a")
- Пропустить R: `isPalindromeFrom("abca", 1, 1)` → true (строка "b")

Один из вариантов true → ответ true.

**Сложность:** O(n) по времени, O(1) по памяти.
