/**
 * Task 19: CoinChangeBoolean
 *
 * Description:
 * Дан массив coins — номиналы монет (каждую можно использовать сколько угодно раз)
 * и целевая сумма amount. Определите, можно ли набрать ровно amount этими монетами.
 * Функция должна возвращать true или false.
 *
 * Signature:
 * export function coinChangeBoolean(amount: number, coins: number[]): boolean;
 *
 * Test Cases:
 * [
 *   {"input": [11, [1, 2, 5]], "expected": true},
 *   {"input": [3, [2]], "expected": false},
 *   {"input": [0, [1, 2, 5]], "expected": true},
 *   {"input": [6, [1, 3, 4]], "expected": true},
 *   {"input": [7, [2, 4, 6]], "expected": false},
 *   {"input": [2, [1]], "expected": true},
 *   {"input": [4, [1, 2, 3]], "expected": true},
 *   {"input": [10, [1, 2, 5]], "expected": true},
 *   {"input": [8, [3, 5]], "expected": true},
 *   {"input": [14, [3, 5]], "expected": true},
 *   {"input": [10, [10]], "expected": true},
 *   {"input": [1, [2, 5]], "expected": false},
 *   {"input": [4, [2, 5]], "expected": true},
 * ]
 */

export function coinChangeBoolean(amount: number, coins: number[]): boolean {
    // TODO: Implement your solution here

    const dp = new Array(amount + 1).fill(false);

    dp[0] = true;

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin < 0) { continue; }

            dp[i] = dp[i] || dp[i - coin];
        }
    }

    return dp[amount];
}
