/**
 * Task 15: TopologicalSort
 *
 * Description:
 * Дан ориентированный граф с n узлами (0..n-1) и массив рёбер edges,
 * где edges[i] = [u, v] означает, что u → v (u зависит от v или u→v).
 * Верни топологический порядок узлов. Если граф содержит цикл, верни [].
 *
 * Signature:
 * export function topologicalSort(n: number, edges: number[][]): number[];
 *
 * Test Cases:
 * [
 *   {"input": [4, [[0,1],[1,2],[2,3]]], "expected": [3,2,1,0]},
 *   {"input": [2, [[0,1],[1,0]]], "expected": []},
 *   {"input": [3, [[0,1],[2,0]]], "expected": [1,0,2]},
 *   {"input": [1, []], "expected": [0]}
 * ]
 */

export function topologicalSort(n: number, edges: number[][]): number[] {
    return [];
}
