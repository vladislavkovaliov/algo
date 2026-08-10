/**
 * Task 8: IsBipartite
 *
 * Description:
 * Дан граф в виде списка смежности graph, где graph[i] — соседи узла i.
 * Определи, является ли граф двудольным (bipartite).
 * Граф двудольный, если его узлы можно раскрасить в два цвета так,
 * чтобы каждое ребро соединяло узлы разных цветов.
 *
 * Signature:
 * export function isBipartite(graph: number[][]): boolean;
 *
 * Test Cases:
 * [
 *   {"input": [[[1,2,3],[0,2],[0,1,3],[0,2]]], "expected": false},
 *   {"input": [[[1,3],[0,2],[1,3],[0,2]]], "expected": true},
 *   {"input": [[[1],[0],[3],[2]]], "expected": true},
 *   {"input": [[[1,2,3],[0],[0],[0]]], "expected": true},
 *   {"input": [[[1],[0,2],[1]]], "expected": true}
 * ]
 */

export function isBipartite(graph: number[][]): boolean {

    const color = new Array(graph.length).fill(-1); // defaul color

    for (let i = 0; i < graph.length; i++) {
        if (color[i] !== -1) continue;
        
        color[i] = 0; // make color 

        const queue = [i];
        
        while (queue.length) {
            const node = queue.shift()!;

            for (let neig of graph[node]) {
                if (color[neig] === -1) {
                    color[neig] = 1 - color[node];
                    
                    queue.push(neig);
                } else if (color[neig] === color[node]) {
                    return false
                }
            }
        }
    }

    return true;
}
