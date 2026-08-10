/**
 * Task 18: CoinChangeFull
 *
 * Description:
 * Дана целевая сумма amount и массив доступных номиналов монет coins.
 * Найдите минимальное количество монет, необходимое для того, чтобы собрать эту сумму.
 * Если сумму собрать невозможно, верните -1.
 * Количество монет каждого номинала не ограничено.
 *
 * Signature:
 * export function coinChangeFull(amount: number, coins: number[]): number;
 *
 * Test Cases:
 * [
 *   {"input": [11, [1, 2, 5]], "expected": 3},
 *   {"input": [3, [2]], "expected": -1},
 *   {"input": [0, [1, 2, 5]], "expected": 0},
 *   {"input": [6, [1, 3, 4]], "expected": 2},
 *   {"input": [7, [2, 4, 6]], "expected": -1},
 *   {"input": [6249, [186, 419, 83, 408]], "expected": 20},
 *   {"input": [2, [1]], "expected": 2},
 *   {"input": [4, [1, 2, 3]], "expected": 2},
 *   {"input": [10, [1, 2, 5]], "expected": 2},
 *   {"input": [8, [3, 5]], "expected": 2},
 *   {"input": [9, [3, 5]], "expected": 3},
 *   {"input": [11, [3, 5]], "expected": 3},
 *   {"input": [13, [3, 5]], "expected": 3},
 *   {"input": [14, [3, 5]], "expected": 4},
 *   {"input": [15, [3, 5]], "expected": 3},
 *   {"input": [100, [1, 10, 25]], "expected": 4},
 *   {"input": [30, [5, 10, 25]], "expected": 2},
 *   {"input": [11, [5, 7]], "expected": -1},
 *   {"input": [12, [5, 7]], "expected": 2},
 *   {"input": [24, [5, 7]], "expected": 4},
 *   {"input": [10, [10]], "expected": 1},
 *   {"input": [20, [10]], "expected": 2},
 *   {"input": [1, [2, 5]], "expected": -1},
 *   {"input": [4, [2, 5]], "expected": 2},
 *   {"input": [9, [2, 5]], "expected": 2}
 * ]
 */

export function coinChangeFull(amount: number, coins: number[]): number {
    // TODO: Implement your solution here

    const dp = new Array(amount + 1).fill(Infinity);

    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin < 0) {
                continue
            }
            
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }


    return dp[amount] === Infinity ? -1 : dp[amount];
}
