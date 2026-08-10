/**
 * Task 17: GrasshopperFlexible
 *
 * Description:
 * Кузнечик находится в начальной точке 0.
 * Ему передается массив целых чисел allowedSteps, в котором перечислены все возможные длины прыжков,
 * которые он способен совершить.
 * Сколькими различными способами кузнечик может допрыгать до финальной точки N?
 *
 * Signature:
 * export function grasshopperFlexible(n: number, allowedSteps: number[]): number;
 *
 * Test Cases:
 * [
 *   {"input": [4, [1, 2, 3]], "expected": 7},
 *   {"input": [0, [1, 2]], "expected": 1},
 *   {"input": [1, [1, 2]], "expected": 1},
 *   {"input": [2, [1, 2]], "expected": 2},
 *   {"input": [3, [1, 2]], "expected": 3},
 *   {"input": [5, [1, 3, 4]], "expected": 6},
 *   {"input": [10, [2, 4, 6]], "expected": 13},
 *   {"input": [5, [2, 4]], "expected": 0},
 *   {"input": [7, [2, 3, 5]], "expected": 5},
 *   {"input": [1, [5, 10]], "expected": 0},
 *   {"input": [5, [5]], "expected": 1},
 *   {"input": [10, [5]], "expected": 1},
 *   {"input": [6, [1, 2, 3, 4]], "expected": 29},
 *   {"input": [8, [2, 3]], "expected": 4},
 *   {"input": [12, [1, 5]], "expected": 15}
 * ]
 */

export function grasshopperFlexible(n: number, allowedSteps: number[]): number {
    // TODO: Implement your solution here

    const dp = new Array(n + 1).fill(0);

    dp[0] = 1;

    for (let i = 1; i <= n; i++) {
        for (let step of allowedSteps) {
            if (i - step < 0) { continue; }

            dp[i] = dp[i] + dp[i - step];
        }
        
    }

    return dp[n];
}
