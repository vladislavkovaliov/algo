/**
 * Task 13: MinCostClimbingStairs
 *
 * Description:
 * Дана лестница, где cost[i] — стоимость i-й ступеньки.
 * Ты можешь начать со ступеньки 0 или 1.
 * На каждом шаге ты можешь подняться на 1 или 2 ступеньки.
 * Найди минимальную стоимость, чтобы добраться до вершины (за пределы последнего элемента).
 *
 * Signature:
 * export function minCostClimbingStairs(cost: number[]): number;
 *
 * Test Cases:
 * [
 *   {"input": [[10, 15, 20]], "expected": 15},
 *   {"input": [[1, 100, 1, 1, 1, 100, 1, 1, 100, 1]], "expected": 6},
 *   {"input": [[0, 0, 0, 0]], "expected": 0},
 *   {"input": [[5]], "expected": 5},
 *   {"input": [[1, 2]], "expected": 1},
 *   {"input": [[10, 15, 20, 25]], "expected": 30},
 *   {"input": [[1, 100, 1, 1]], "expected": 2},
 *   {"input": [[2, 5, 3, 1, 7]], "expected": 6}
 * ]
 */

export function minCostClimbingStairs(cost: number[]): number {
    // TODO: Implement your solution here
    const n = cost.length;

    if (n === 1) return cost[0];
    
    const dp = new Array(n).fill(0);

    dp[0] = cost[0];
    dp[1] = cost[1];

    for(let i = 2; i <= n; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }
    
    return Math.min(dp[n - 1], dp[n - 2]);
}

