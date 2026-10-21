# Глава 9. Практикум: 20 задач

Этот практикум соответствует задачам из папки [`../two-pointer`](../two-pointer). Для каждой задачи:

- краткая цель;
- паттерн;
- подсказки (открывайте по одной);
- решение (в свёрнутом блоке);
- сложность.

## Как работать

1. Прочитайте условие в файле задачи: `two-pointer/TaskN_.../solution.ts`.
2. Не открывайте решение сразу. Сначала попробуйте 15–20 минут.
3. Если застряли — откройте первую подсказку. Ещё через 10 минут — вторую.
4. Решение открывайте только после того, как написали своё (пусть даже неработающее).
5. Запустите тесты:

```bash
npm run test:tp:N
```

6. Сравните свой код с решением. Если отличается — это нормально. Важно понять, **почему** оба варианта работают (или почему ваш нет).

---

## Группа A. Быстрый и медленный

### Задача 1. RemoveDuplicates

**Цель:** удалить дубликаты из отсортированного массива in-place, вернуть длину.

**Паттерн:** A, перезапись.

**Подсказка 1:** заведите `slow` — индекс последнего уникального элемента.

**Подсказка 2:** сравнивайте `nums[fast]` с `nums[slow]`. Если разные — увеличивайте `slow` и записывайте.

<details>
<summary>Решение</summary>

```typescript
export function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;

    let slow = 0;

    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }

    return slow + 1;
}
```

**Сложность:** O(n) время, O(1) память.

**Ключевое:** `slow` — индекс, поэтому ответ `slow + 1`.

</details>

---

### Задача 7. MoveZeroes

**Цель:** переместить нули в конец, сохранив порядок остальных.

**Паттерн:** A, swap.

**Подсказка 1:** `slow` — позиция для следующего ненулевого.

**Подсказка 2:** при встрече ненулевого меняйте его местами с `nums[slow]`.

<details>
<summary>Решение</summary>

```typescript
export function moveZeroes(nums: number[]): number[] {
    let slow = 0;

    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== 0) {
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
            slow++;
        }
    }

    return nums;
}
```

**Сложность:** O(n) время, O(1) память.

**Ключевое:** swap, а не перезапись, иначе нули потеряются.

</details>

---

### Задача 8. RemoveElement

**Цель:** удалить все вхождения `val`, сохранив порядок, вернуть длину.

**Паттерн:** A, перезапись.

**Подсказка 1:** сохраняйте элементы, которые **не равны** `val`.

**Подсказка 2:** `slow` — количество записанных элементов.

<details>
<summary>Решение</summary>

```typescript
export function removeElement(nums: number[], val: number): number {
    let slow = 0;

    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast];
            slow++;
        }
    }

    return slow;
}
```

**Сложность:** O(n) время, O(1) память.

**Ключевое:** здесь `slow` — количество, поэтому возвращаем `slow`.

</details>

---

### Задача 9. SortArrayByParity

**Цель:** чётные в начало, нечётные в конец, in-place.

**Паттерн:** A, swap.

**Подсказка 1:** условие «сохранить» — `nums[fast] % 2 === 0`.

**Подсказка 2:** меняйте местами с `nums[slow]` и увеличивайте `slow`.

<details>
<summary>Решение</summary>

```typescript
export function sortArrayByParity(nums: number[]): number[] {
    let slow = 0;

    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] % 2 === 0) {
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
            slow++;
        }
    }

    return nums;
}
```

**Сложность:** O(n) время, O(1) память.

**Ключевое:** порядок внутри групп не сохраняется, и это допустимо условием.

</details>

---

### Задача 10. RemoveDuplicatesFromSortedArray2

**Цель:** каждое число не более двух раз, вернуть длину.

**Паттерн:** A, обобщение на K повторов.

**Подсказка 1:** начинайте с `slow = 2`, `fast = 2`.

**Подсказка 2:** сравнивайте `nums[fast]` с `nums[slow - 2]`.

<details>
<summary>Решение</summary>

```typescript
export function removeDuplicates2(nums: number[]): number {
    if (nums.length <= 2) return nums.length;

    let slow = 2;

    for (let fast = 2; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow - 2]) {
            nums[slow] = nums[fast];
            slow++;
        }
    }

    return slow;
}
```

**Сложность:** O(n) время, O(1) память.

**Ключевое:** сравнение с элементом на `K` позиций назад.

</details>

---

## Группа B. С двух сторон

### Задача 2. TwoSumSorted

**Цель:** индексы двух чисел с суммой `target` в отсортированном массиве.

**Паттерн:** B.

**Подсказка 1:** `left = 0`, `right = n - 1`.

**Подсказка 2:** сумма меньше — `left++`, больше — `right--`.

<details>
<summary>Решение</summary>

```typescript
export function twoSumSorted(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [-1, -1];
}
```

**Сложность:** O(n) время, O(1) память.

**Ключевое:** отсортированность позволяет безопасно отбрасывать край.

</details>

---

### Задача 3. IsPalindrome

**Цель:** проверить, является ли строка палиндромом.

**Паттерн:** B.

**Подсказка 1:** сравнивайте `s[left]` и `s[right]`.

**Подсказка 2:** при несовпадении сразу `return false`.

<details>
<summary>Решение</summary>

```typescript
export function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}
```

**Сложность:** O(n) время, O(1) память.

**Ключевое:** средний символ сравнивать не нужно.

</details>

---

### Задача 4. TwoSumLessThanK

**Цель:** максимальная сумма двух различных элементов, строго меньшая `K`.

**Паттерн:** B.

**Подсказка 1:** если сумма `< K` — обновите `best` и двигайте `left`.

**Подсказка 2:** если сумма `>= K` — двигайте `right`.

<details>
<summary>Решение</summary>

```typescript
export function twoSumLessThanK(nums: number[], k: number): number {
    let left = 0;
    let right = nums.length - 1;
    let best = -1;

    while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum < k) {
            best = Math.max(best, sum);
            left++;
        } else {
            right--;
        }
    }

    return best;
}
```

**Сложность:** O(n) время, O(1) память.

**Ключевое:** при подходящей сумме двигаем `left`, чтобы попробовать увеличить.

</details>

---

### Задача 5. ContainerWithMostWater

**Цель:** максимальная площадь контейнера.

**Паттерн:** B, жадный сдвиг.

**Подсказка 1:** площадь = `min(height[left], height[right]) * (right - left)`.

**Подсказка 2:** двигайте указатель с меньшей высотой.

<details>
<summary>Решение</summary>

```typescript
export function containerWithMostWater(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const area = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}
```

**Сложность:** O(n) время, O(1) память.

**Ключевое:** более низкая стенка исчерпана; двигать высокую бессмысленно.

</details>

---

### Задача 16. ReverseString

**Цель:** развернуть массив символов in-place.

**Паттерн:** B, swap.

**Подсказка 1:** меняйте местами `s[left]` и `s[right]`.

**Подсказка 2:** после обмена двигайте оба указателя к центру.

<details>
<summary>Решение</summary>

```typescript
export function reverseString(s: string[]): string[] {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }

    return s;
}
```

**Сложность:** O(n) время, O(1) память.

**Ключевое:** `left < right`, чтобы не менять средний элемент с самим собой.

</details>

---

### Задача 19. SquaresOfSortedArray

**Цель:** вернуть отсортированные квадраты.

**Паттерн:** B + запись с конца.

**Подсказка 1:** самый большой квадрат — на одном из краёв.

**Подсказка 2:** заполняйте результат с последней позиции.

<details>
<summary>Решение</summary>

```typescript
export function squaresOfSortedArray(nums: number[]): number[] {
    const result: number[] = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;

    for (let pos = nums.length - 1; pos >= 0; pos--) {
        const leftSquare = nums[left] * nums[left];
        const rightSquare = nums[right] * nums[right];

        if (leftSquare > rightSquare) {
            result[pos] = leftSquare;
            left++;
        } else {
            result[pos] = rightSquare;
            right--;
        }
    }

    return result;
}
```

**Сложность:** O(n) время, O(n) память.

**Ключевое:** сравнение крайних квадратов, запись от большего к меньшему.

</details>

---

## Группа C. По указателю на массив

### Задача 11. MergeSortedArrays

**Цель:** слить два отсортированных массива.

**Паттерн:** C.

**Подсказка 1:** берите меньший из `nums1[i]` и `nums2[j]`.

**Подсказка 2:** после основного цикла допишите остатки.

<details>
<summary>Решение</summary>

```typescript
export function mergeSortedArrays(nums1: number[], nums2: number[]): number[] {
    const result: number[] = [];
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            result.push(nums1[i]);
            i++;
        } else {
            result.push(nums2[j]);
            j++;
        }
    }

    while (i < nums1.length) {
        result.push(nums1[i]);
        i++;
    }

    while (j < nums2.length) {
        result.push(nums2[j]);
        j++;
    }

    return result;
}
```

**Сложность:** O(n + m) время, O(n + m) память.

**Ключевое:** не забыть остатки.

</details>

---

### Задача 12. IntersectionOfTwoArrays

**Цель:** общие элементы без повторов.

**Паттерн:** C.

**Подсказка 1:** меньший элемент двигает свой указатель.

**Подсказка 2:** при равенстве добавляйте число, только если оно новое.

<details>
<summary>Решение</summary>

```typescript
export function intersectionOfTwoArrays(nums1: number[], nums2: number[]): number[] {
    const result: number[] = [];
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else {
            if (result.length === 0 || result[result.length - 1] !== nums1[i]) {
                result.push(nums1[i]);
            }
            i++;
            j++;
        }
    }

    return result;
}
```

**Сложность:** O(n + m) время, O(1) доп. память.

**Ключевое:** проверка последнего добавленного элемента.

</details>

---

### Задача 13. IsSubsequence

**Цель:** проверить, является ли `s` подпоследовательностью `t`.

**Паттерн:** C.

**Подсказка 1:** `si` двигается только при совпадении.

**Подсказка 2:** `ti` двигается всегда.

<details>
<summary>Решение</summary>

```typescript
export function isSubsequence(s: string, t: string): boolean {
    let si = 0;
    let ti = 0;

    while (si < s.length && ti < t.length) {
        if (s[si] === t[ti]) {
            si++;
        }
        ti++;
    }

    return si === s.length;
}
```

**Сложность:** O(len(t)) время, O(1) память.

**Ключевое:** проверяем `si === s.length`, а не `ti`.

</details>

---

### Задача 14. FindDifference

**Цель:** элементы первого массива, которых нет во втором.

**Паттерн:** C.

**Подсказка 1:** если `nums1[i] < nums2[j]` — элемента точно нет во втором.

**Подсказка 2:** при равенстве пропустите все повторы в обоих массивах.

<details>
<summary>Решение</summary>

```typescript
export function findDifference(nums1: number[], nums2: number[]): number[] {
    const result: number[] = [];
    let i = 0;
    let j = 0;

    while (i < nums1.length) {
        if (j >= nums2.length || nums1[i] < nums2[j]) {
            if (result.length === 0 || result[result.length - 1] !== nums1[i]) {
                result.push(nums1[i]);
            }
            i++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else {
            const val = nums1[i];
            while (i < nums1.length && nums1[i] === val) i++;
            while (j < nums2.length && nums2[j] === val) j++;
        }
    }

    return result;
}
```

**Сложность:** O(n + m) время, O(1) доп. память.

**Ключевое:** проверка `j >= nums2.length` до обращения к `nums2[j]`.

</details>

---

### Задача 15. ArrayIntersectionSorted

**Цель:** общие элементы с учётом повторов.

**Паттерн:** C.

**Подсказка 1:** при равенстве всегда добавляйте элемент.

**Подсказка 2:** двигайте оба указателя после добавления.

<details>
<summary>Решение</summary>

```typescript
export function arrayIntersectionSorted(nums1: number[], nums2: number[]): number[] {
    const result: number[] = [];
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else {
            result.push(nums1[i]);
            i++;
            j++;
        }
    }

    return result;
}
```

**Сложность:** O(n + m) время, O(1) доп. память.

**Ключевое:** каждое совпадение расходует по одному вхождению из каждого массива.

</details>

---

## Группа D. Вариации

### Задача 6. ThreeSumSorted

**Цель:** все уникальные тройки с суммой `target`.

**Паттерн:** фиксация + B.

**Подсказка 1:** зафиксируйте `nums[i]`, ищите пару с суммой `target - nums[i]`.

**Подсказка 2:** пропускайте дубликаты для `i`, `left`, `right`.

<details>
<summary>Решение</summary>

```typescript
export function threeSumSorted(nums: number[], target: number): number[][] {
    const triplets: number[][] = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === target) {
                triplets.push([nums[i], nums[left], nums[right]]);

                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return triplets;
}
```

**Сложность:** O(n²) время, O(1) доп. память.

**Ключевое:** внутри `while` для дубликатов обязательна проверка `left < right`.

</details>

---

### Задача 17. ValidPalindromeRemoval

**Цель:** можно ли удалить не более одного символа, чтобы получить палиндром.

**Паттерн:** B + ветвление.

**Подсказка 1:** идите с краёв, пока символы совпадают.

**Подсказка 2:** при первом несовпадении проверьте два остатка.

<details>
<summary>Решение</summary>

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

**Сложность:** O(n) время, O(1) память.

**Ключевое:** ветвление только один раз — удалить можно только один символ.

</details>

---

### Задача 18. BackspaceStringCompare

**Цель:** сравнить строки после применения backspace.

**Паттерн:** B с конца.

**Подсказка 1:** идите с конца и считайте отложенные `#`.

**Подсказка 2:** функция `nextValidIndex` пропускает удалённые символы.

<details>
<summary>Решение</summary>

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

**Сложность:** O(n + m) время, O(1) память.

**Ключевое:** `||` в условии, чтобы не пропустить хвост более длинной строки.

</details>

---

### Задача 20. FindLongestPalindrome

**Цель:** длина самой длинной подстроки-палиндрома.

**Паттерн:** D, расширение от центра.

**Подсказка 1:** для каждой позиции проверьте два центра: `(i, i)` и `(i, i+1)`.

**Подсказка 2:** расширяйтесь, пока символы равны и не вышли за границы.

<details>
<summary>Решение</summary>

```typescript
function expandFromCenter(s: string, left: number, right: number): number {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}

export function findLongestPalindrome(s: string): number {
    if (s.length === 0) return 0;

    let maxLen = 1;

    for (let i = 0; i < s.length; i++) {
        const len1 = expandFromCenter(s, i, i);
        const len2 = expandFromCenter(s, i, i + 1);
        maxLen = Math.max(maxLen, len1, len2);
    }

    return maxLen;
}
```

**Сложность:** O(n²) время, O(1) память.

**Ключевое:** проверять и нечётные, и чётные центры.

</details>

---

## Дополнительные задачи

Эти задачи не входят в проект, но хорошо закрепляют материал. Решения не приводятся — только идеи.

### 1. Dutch National Flag (флаг Нидерландов)

Дан массив из `0`, `1`, `2`. Отсортируйте его in-place за один проход.

**Идея:** три указателя: `low`, `mid`, `high`. Область `[0, low)` — нули, `[low, mid)` — единицы, `(high, n)` — двойки. Это расширение семейства A на три группы.

### 2. Trapping Rain Water

Дан массив высот. Найдите, сколько воды задержится после дождя.

**Идея:** два указателя с краёв + максимумы слева и справа. Вода над позицией = `min(maxLeft, maxRight) - height[i]`.

### 3. 4Sum

Дан отсортированный массив и `target`. Найдите все уникальные четвёрки с суммой `target`.

**Идея:** два внешних цикла + два указателя внутри. O(n³).

### 4. Valid Palindrome II

Дана строка. Можно удалить не более одного символа. Проверить, будет ли палиндром.

Это задача 17 под другим названием. Решите без подглядывания.

### 5. Minimum Window Sort

Дан массив. Найдите длину минимального подмассива, после сортировки которого весь массив станет отсортированным.

**Идея:** найдите первую и последнюю позиции, где нарушается порядок, затем расширьте границы, сравнивая с минимумом и максимумом внутри.

### 6. Merge Two Sorted Lists

Даны два отсортированных связных списка. Слейте их.

**Идея:** тот же алгоритм, что в задаче 11, но с указателями на узлы списка.

---

## Самопроверка

После практикума ответьте:

- [ ] Я могу решить любую из 20 задач без подсказки.
- [ ] Я объясняю, почему правило движения указателя корректно.
- [ ] Я не путаю `slow` как индекс и `slow` как количество.
- [ ] Я проверяю граничные случаи до запуска тестов.
- [ ] Я могу определить паттерн по условию за 1–2 минуты.
- [ ] Я понимаю сложность каждого решения.

Если какой-то пункт вызывает сомнение — вернитесь к соответствующей главе.

---

[← Назад: ошибки и отладка](08-oshibki-i-otladka.md) | [Оглавление](README.md) | [Дальше: методичка →](10-metodichka.md)
