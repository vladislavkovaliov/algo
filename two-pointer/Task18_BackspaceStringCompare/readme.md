# Task 18: BackspaceStringCompare

## Условие

Даны две строки s и t, содержащие строчные латинские буквы и символ '#'. Символ '#' — backspace, удаляющий предыдущий символ. Если перед '#' нет символа, он ничего не удаляет. Определи, равны ли строки после применения backspace.

## Решение

```typescript
function nextValidIndex(str: string, index: number): number {
    let backspaces = 0;

    while (index >= 0) {
        if (str[index] === '#') {
            backspaces++;
        } else if (backspaces > 0) {
            backspaces--;
        } else {
            break;
        }
        index--;
    }

    return index;
}

export function backspaceStringCompare(s: string, t: string): boolean {
    let si = s.length - 1;
    let ti = t.length - 1;

    while (si >= 0 || ti >= 0) {
        si = nextValidIndex(s, si);
        ti = nextValidIndex(t, ti);

        const schar = si >= 0 ? s[si] : undefined;
        const tchar = ti >= 0 ? t[ti] : undefined;

        if (schar !== tchar) return false;

        si--;
        ti--;
    }

    return true;
}
```

## Разбор

**Идея:** Два указателя с конца строк. Для каждой позиции пропускаем символы, удалённые backspace'ами, затем сравниваем.

**Пошагово на примере s = `"ab#c"`, t = `"ad#c"`:**

| si | ti | nextValid(s, si) | nextValid(t, ti) | s[si] | t[ti] | Равны? |
|----|----|------------------|------------------|-------|-------|--------|
| 3 | 3 | 3 (c, 0 #) | 3 (c, 0 #) | c | c | ✅ |
| 2 | 2 | 0 (b, 1 #: b) | 0 (d, 1 #: d) | b | d | ❌ |

❌ — стоп. Но давайте проверим ещё раз: `"ab#c"` → a|c = "ac". `"ad#c"` → a|c = "ac". Они равны! Ошибка в алгоритме?

Давайте перепроверим trace:

s = "ab#c"
- index 3: 'c' → 0 backspaces, return 3
- index 2: '#' → backspaces=1, index=1
- index 1: 'b' → backspaces>0 → backspaces=0, index=0
- index 0: 'a' → 0 backspaces, return 0

Так: si=3, nextValid=3 (c), ti=3, nextValid=3 (c) → совпало.

si--=2, nextValid=0 (a), ti--=2, nextValid=0 (a) → совпало.

Вывод: всё работает, ответ true.

**Сложность:** O(n + m) по времени, O(1) по памяти.
