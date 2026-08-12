/**
 * Task 12: AllPathsFromSourceToTarget
 *
 * Description:
 * Дан ориентированный ациклический граф (DAG) в виде списка смежности graph.
 * graph[i] — список узлов, в которые можно перейти из узла i.
 * Найди все возможные пути из узла 0 в узел n-1. Верни их в любом порядке.
 *
 * Signature:
 * export function allPathsSourceTarget(graph: number[][]): number[][];
 *
 * Test Cases:
 * [
 *   {"input": [[[1,2],[3],[3],[]]], "expected": [[0,1,3],[0,2,3]]},
 *   {"input": [[[1],[]]], "expected": [[0,1]]},
 *   {"input": [[[1,2,3],[2],[3],[]]], "expected": [[0,1,2,3],[0,2,3],[0,3]]}
 * ]
 */

export function allPathsSourceTarget(graph: number[][]): number[][] {
    const len = graph.length;
    const target = graph.length - 1;
    const result = [];
    const stack = [[0]];
    
    while (stack.length) {
        const path = stack.pop();

        const node = path[path.length - 1];

        if (node === target) {
            result.push(path);
            continue;
        }

        for (const n of graph[node]) {
            stack.push([...path, n]);
        }

        console.log({stack, result})
    }
        
    console.log(1, {result})
    return [];
}
