# DP Training Project Configuration

This file contains the specifications for generating a local development environment for learning Dynamic Programming.
The automation script should parse this file and generate a directory structure with source files, task descriptions, and standard Jest/Vitest tests.

## Target Directory Structure

```text
dp-training/
├── Task1_GrasshopperOneStep/
│   ├── solution.ts
│   └── solution.test.ts
├── Task2_IsCellReachable/
│   ├── solution.ts
│   └── solution.test.ts
├── Task3_ExactChangeWithOnes/
│   ├── solution.ts
│   └── solution.test.ts
├── Task4_GrasshopperTwoOptions/
│   ├── solution.ts
│   └── solution.test.ts
├── Task5_IsCellReachableTwoCards/
│   ├── solution.ts
│   └── solution.test.ts
├── Task6_ExactChangeTwoCoins/
│   ├── solution.ts
│   └── solution.test.ts
├── Task7_GrasshopperFlexible/
│   ├── solution.ts
│   └── solution.test.ts
├── Task8_CoinChangeFull/
│   ├── solution.ts
│   └── solution.test.ts
└── Task9_IsSubsetSumPossible/
    ├── solution.ts
    └── solution.test.ts
```

## Task 1: GrasshopperOneStep

### Description

Кузнечик стоит на земле в точке 0. Он хочет допрыгать до точки N. Кузнечик умеет прыгать только вперёд и только на 1 клетку за раз. Сколькими способами он может добраться до точки N?

### Signature

```typescript
export function grasshopperOneStep(n: number): number;
```

### Test Cases Definition

```json
[
  {"input": [0], "expected": 1},
  {"input": [1], "expected": 1},
  {"input": [2], "expected": 1},
  {"input": [3], "expected": 1},
  {"input": [4], "expected": 1},
  {"input": [10], "expected": 1},
  {"input": [20], "expected": 1},
  {"input": [30], "expected": 1},
  {"input": [40], "expected": 1},
  {"input": [45], "expected": 1}
]
```

## Task 2: IsCellReachable

### Description

Ты стоишь на клетке 0 (она изначально доступна — true). У тебя есть карточка с фиксированным прыжком длиной K. Тебе нужно определить и вернуть true, если ты сможешь приземлиться ровно на клетку target, используя этот прыжок любое количество раз. Иначе верни false.

### Signature

```typescript
export function isCellReachable(target: number, k: number): boolean;
```

### Test Cases Definition

```json
[
  {"input": [0, 3], "expected": true},
  {"input": [3, 3], "expected": true},
  {"input": [6, 3], "expected": true},
  {"input": [5, 3], "expected": false},
  {"input": [1, 2], "expected": false},
  {"input": [10, 2], "expected": true},
  {"input": [100, 10], "expected": true},
  {"input": [7, 5], "expected": false},
  {"input": [25, 5], "expected": true},
  {"input": [14, 7], "expected": true},
  {"input": [15, 7], "expected": false},
  {"input": [0, 1], "expected": true},
  {"input": [50, 1], "expected": true},
  {"input": [99, 9], "expected": true},
  {"input": [100, 11], "expected": false}
]
```

## Task 3: ExactChangeWithOnes

### Description

У тебя есть бесконечный запас монет номиналом строго 1 рубль. Какое минимальное количество монет нужно использовать, чтобы собрать точную сумму amount?

### Signature

```typescript
export function exactChangeWithOnes(amount: number): number;
```

### Test Cases Definition

```json
[
  {"input": [0], "expected": 0},
  {"input": [1], "expected": 1},
  {"input": [5], "expected": 5},
  {"input": [12], "expected": 12},
  {"input": [25], "expected": 25},
  {"input": [43], "expected": 43},
  {"input": [68], "expected": 68},
  {"input": [71], "expected": 71},
  {"input": [89], "expected": 89},
  {"input": [100], "expected": 100}
]
```

## Task 4: GrasshopperTwoOptions

### Description

Кузнечик стоит в точке 0. Он умеет прыгать вперёд либо на 1 клетку, либо на 2 клетки за раз. Сколькими способами он может добраться до точки N? (Классическая задача на числа Фибоначчи).

### Signature

```typescript
export function grasshopperTwoOptions(n: number): number;
```

### Test Cases Definition

```json
[
  {"input": [0], "expected": 1},
  {"input": [1], "expected": 1},
  {"input": [2], "expected": 2},
  {"input": [3], "expected": 3},
  {"input": [4], "expected": 5},
  {"input": [5], "expected": 8},
  {"input": [6], "expected": 13},
  {"input": [7], "expected": 21},
  {"input": [8], "expected": 34},
  {"input": [9], "expected": 55},
  {"input": [10], "expected": 89},
  {"input": [15], "expected": 987},
  {"input": [20], "expected": 10946},
  {"input": [25], "expected": 121393},
  {"input": [30], "expected": 1346269}
]
```

## Task 5: IsCellReachableTwoCards

### Description

Ты стоишь на клетке 0. У тебя есть две карточки, задающие фиксированные длины прыжков: длиной A и длиной B. Ты можешь использовать эти карточки в любом количестве и в любом порядке. Достижима ли в таком случае клетка target? Верни true или false.

### Signature

```typescript
export function isCellReachableTwoCards(target: number, a: number, b: number): boolean;
```

### Test Cases Definition

```json
[
  {"input": [5, 2, 3], "expected": true},
  {"input": [1, 2, 3], "expected": false},
  {"input": [7, 2, 5], "expected": true},
  {"input": [4, 2, 5], "expected": true},
  {"input": [3, 2, 5], "expected": false},
  {"input": [0, 2, 3], "expected": true},
  {"input": [8, 3, 5], "expected": true},
  {"input": [11, 3, 5], "expected": true},
  {"input": [4, 3, 5], "expected": false},
  {"input": [7, 3, 5], "expected": false},
  {"input": [10, 4, 6], "expected": true},
  {"input": [5, 4, 6], "expected": false},
  {"input": [12, 4, 6], "expected": true},
  {"input": [9, 2, 4], "expected": false},
  {"input": [20, 7, 11], "expected": false},
  {"input": [18, 7, 11], "expected": true},
  {"input": [14, 7, 11], "expected": true},
  {"input": [22, 7, 11], "expected": true},
  {"input": [1, 5, 10], "expected": false},
  {"input": [15, 5, 10], "expected": true}
]
```

## Task 6: ExactChangeTwoCoins

### Description

У тебя есть бесконечно много монет двух конкретных номиналов: 2 рублей и 5 рублей. Какое минимальное количество монет нужно, чтобы набрать ровно сумму amount рублей? Если эту сумму набрать данными номиналами невозможно, функция должна вернуть -1.

### Signature

```typescript
export function exactChangeTwoCoins(amount: number): number;
```

### Test Cases Definition

```json
[
  {"input": [0], "expected": 0},
  {"input": [1], "expected": -1},
  {"input": [2], "expected": 1},
  {"input": [3], "expected": -1},
  {"input": [4], "expected": 2},
  {"input": [5], "expected": 1},
  {"input": [6], "expected": 3},
  {"input": [7], "expected": 2},
  {"input": [8], "expected": 4},
  {"input": [9], "expected": 3},
  {"input": [10], "expected": 2},
  {"input": [11], "expected": 4},
  {"input": [12], "expected": 3},
  {"input": [13], "expected": 5},
  {"input": [14], "expected": 4},
  {"input": [15], "expected": 3},
  {"input": [19], "expected": 5},
  {"input": [20], "expected": 4},
  {"input": [31], "expected": 7},
  {"input": [33], "expected": 8}
]
```

## Task 7: GrasshopperFlexible

### Description

Кузнечик находится в начальной точке 0. Ему передается массив целых чисел allowedSteps, в котором перечислены все возможные длины прыжков, которые он способен совершить. Сколькими различными способами кузнечик может допрыгать до финальной точки N?

### Signature

```typescript
export function grasshopperFlexible(n: number, allowedSteps: number[]): number;
```

### Test Cases Definition

```json
[
  {"input": [4, [1, 2, 3]], "expected": 7},
  {"input": [0, [1, 2]], "expected": 1},
  {"input": [1, [1, 2]], "expected": 1},
  {"input": [2, [1, 2]], "expected": 2},
  {"input": [3, [1, 2]], "expected": 3},
  {"input": [5, [1, 3, 4]], "expected": 6},
  {"input": [10, [2, 4, 6]], "expected": 16},
  {"input": [5, [2, 4]], "expected": 0},
  {"input": [7, [2, 3, 5]], "expected": 9},
  {"input": [1, [5, 10]], "expected": 0},
  {"input": [5, [5]], "expected": 1},
  {"input": [10, [5]], "expected": 1},
  {"input": [6, [1, 2, 3, 4]], "expected": 29},
  {"input": [8, [2, 3]], "expected": 5},
  {"input": [12, [1, 5]], "expected": 10}
]
```

## Task 8: CoinChangeFull

### Description

Дана целевая сумма amount и массив доступных номиналов монет coins. Найдите минимальное количество монет, необходимое для того, чтобы собрать эту сумму. Если сумму собрать невозможно, верните -1. Количество монет каждого номинала не ограничено.

### Signature

```typescript
export function coinChangeFull(amount: number, coins: number[]): number;
```

### Test Cases Definition

```json
[
  {"input": [11, [1, 2, 5]], "expected": 3},
  {"input": [3, [2]], "expected": -1},
  {"input": [0, [1, 2, 5]], "expected": 0},
  {"input": [6, [1, 3, 4]], "expected": 2},
  {"input": [7, [2, 4, 6]], "expected": -1},
  {"input": [6249, [186, 419, 83, 408]], "expected": 20},
  {"input": [2, [1]], "expected": 2},
  {"input": [4, [1, 2, 3]], "expected": 2},
  {"input": [10, [1, 2, 5]], "expected": 2},
  {"input": [8, [3, 5]], "expected": 2},
  {"input": [9, [3, 5]], "expected": 3},
  {"input": [11, [3, 5]], "expected": 3},
  {"input": [13, [3, 5]], "expected": 3},
  {"input": [14, [3, 5]], "expected": 4},
  {"input": [15, [3, 5]], "expected": 3},
  {"input": [100, [1, 10, 25]], "expected": 4},
  {"input": [30, [5, 10, 25]], "expected": 2},
  {"input": [11, [5, 7]], "expected": -1},
  {"input": [12, [5, 7]], "expected": 2},
  {"input": [24, [5, 7]], "expected": 4},
  {"input": [10, [10]], "expected": 1},
  {"input": [20, [10]], "expected": 2},
  {"input": [1, [2, 5]], "expected": -1},
  {"input": [4, [2, 5]], "expected": 2},
  {"input": [9, [2, 5]], "expected": 2}
]
```

## Task 9: IsSubsetSumPossible

### Description

Задан массив положительных целых чисел nums и целевое значение target. Определите, можно ли выбрать такое подмножество элементов из массива nums, чтобы их сумма была строго равна target. Каждое число из массива разрешается использовать только один раз. Функция должна возвращать true или false.

### Signature

```typescript
export function isSubsetSumPossible(target: number, nums: number[]): boolean;
```

### Test Cases Definition

```json
[
  {"input": [9, [3, 34, 4, 12, 5]], "expected": true},
  {"input": [30, [3, 34, 4, 12, 5]], "expected": false},
  {"input": [0, [1, 2, 3]], "expected": true},
  {"input": [4, [1, 2, 3]], "expected": true},
  {"input": [7, [1, 2, 3]], "expected": false},
  {"input": [11, [1, 5, 11, 5]], "expected": true},
  {"input": [5, [1, 2, 3, 5]], "expected": true},
  {"input": [6, [1, 2, 3]], "expected": true},
  {"input": [8, [1, 3, 4, 5]], "expected": true},
  {"input": [14, [1, 3, 4, 5]], "expected": false},
  {"input": [3, [1, 1, 1]], "expected": true},
  {"input": [4, [1, 1, 1]], "expected": false},
  {"input": [10, [5, 5]], "expected": true},
  {"input": [11, [5, 5]], "expected": false},
  {"input": [12, [2, 4, 6, 8]], "expected": true},
  {"input": [5, [2, 4, 6, 8]], "expected": false},
  {"input": [20, [2, 4, 6, 8]], "expected": true},
  {"input": [21, [2, 4, 6, 8]], "expected": false},
  {"input": [1, [2]], "expected": false},
  {"input": [2, [2]], "expected": true},
  {"input": [13, [7, 6]], "expected": true},
  {"input": [10, [1, 2, 3, 4]], "expected": true},
  {"input": [11, [1, 2, 3, 4]], "expected": false},
  {"input": [100, [50, 20, 30]], "expected": true},
  {"input": [101, [50, 20, 30]], "expected": false}
]
```
