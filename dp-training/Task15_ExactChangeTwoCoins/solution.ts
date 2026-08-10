/**
 * Task 15: ExactChangeTwoCoins
 *
 * Description:
 * У тебя есть бесконечно много монет двух конкретных номиналов: 2 рублей и 5 рублей.
 * Какое минимальное количество монет нужно, чтобы набрать ровно сумму amount рублей?
 * Если эту сумму набрать данными номиналами невозможно, функция должна вернуть -1.
 *
 * Signature:
 * export function exactChangeTwoCoins(amount: number): number;
 *
 * Test Cases:
 * [
 *   {"input": [0], "expected": 0},
 *   {"input": [1], "expected": -1},
 *   {"input": [2], "expected": 1},
 *   {"input": [3], "expected": -1},
 *   {"input": [4], "expected": 2},
 *   {"input": [5], "expected": 1},
 *   {"input": [6], "expected": 3},
 *   {"input": [7], "expected": 2},
 *   {"input": [8], "expected": 4},
 *   {"input": [9], "expected": 3},
 *   {"input": [10], "expected": 2},
 *   {"input": [11], "expected": 4},
 *   {"input": [12], "expected": 3},
 *   {"input": [13], "expected": 5},
 *   {"input": [14], "expected": 4},
 *   {"input": [15], "expected": 3},
 *   {"input": [19], "expected": 5},
 *   {"input": [20], "expected": 4},
 *   {"input": [31], "expected": 7},
 *   {"input": [33], "expected": 8}
 * ]
 */

export function exactChangeTwoCoins(amount: number): number {
    // TODO: Implement your solution here

    if (amount === 0) return 0;
    if (amount === 1) return -1;
   
    const dp = new Array(amount + 1).fill(Infinity);

    dp[0] = 0;

    const coins: number[] = [2, 5];

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount];
}
