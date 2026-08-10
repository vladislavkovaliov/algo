# Task 14: FruitIntoBaskets

## Паттерн: Пересекающиеся окна

**Зелёные флаги:** longest, подмассив, не более 2 типов

## Условие

Дан массив fruits, где fruits[i] — тип фрукта на i-м дереве. У тебя есть 2 корзины, в каждую можно класть фрукты только одного типа. Начиная с любого дерева, иди вправо и собирай фрукты. Найди максимальное количество фруктов, которое можно собрать.

## Решение

```typescript
export function fruitIntoBaskets(fruits: number[]): number {
    const basket = new Map<number, number>();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < fruits.length; right++) {
        basket.set(fruits[right], (basket.get(fruits[right]) || 0) + 1);

        while (basket.size > 2) {
            const leftFruit = fruits[left];
            basket.set(leftFruit, basket.get(leftFruit)! - 1);
            if (basket.get(leftFruit) === 0) basket.delete(leftFruit);
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}
```

## Разбор

**Идея:** Окно с не более чем 2 типами фруктов. Когда появляется 3-й — сужаем слева.

**Пошагово на примере `fruits = [1, 2, 3, 2, 2]`:**

| right | fruit | basket | size > 2? | left | Окно | maxLen |
|-------|-------|--------|-----------|------|------|--------|
| 0 | 1 | {1:1} | Нет | 0 | [1] | 1 |
| 1 | 2 | {1:1,2:1} | Нет | 0 | [1,2] | 2 |
| 2 | 3 | {1:1,2:1,3:1} | 3 > 2 → 1:0 | 1 | [2,3] | 2 |
| 3 | 2 | {2:2,3:1} | Нет | 1 | [2,3,2] | 3 |
| 4 | 2 | {2:3,3:1} | Нет | 1 | [2,3,2,2] | 4 |

Ответ: `4` (фрукты [2, 3, 2, 2]).

**Сложность:** O(n) по времени, O(1) по памяти (максимум 2 типа в Map).
