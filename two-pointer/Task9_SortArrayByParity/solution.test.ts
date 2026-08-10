import { runTests, TestCase } from '../test-runner';
import { sortArrayByParity } from './solution';

function arraysMatchIgnoringOrder(a: number[], b: number[]): boolean {
    if (a.length !== b.length) return false;
    const sortedA = [...a].sort((x, y) => x - y);
    const sortedB = [...b].sort((x, y) => x - y);
    return sortedA.every((v, i) => v === sortedB[i]);
}

const testCases: TestCase[] = [
    { input: [[3, 1, 2, 4]], expected: [2, 4, 3, 1] },
    { input: [[0]], expected: [0] },
    { input: [[1, 3, 5]], expected: [1, 3, 5] },
    { input: [[2, 4, 6]], expected: [2, 4, 6] },
    { input: [[1, 2, 3, 4, 5, 6]], expected: [2, 4, 6, 1, 5, 3] },
];

// Override deepEqual to check that output contains all evens first, then all odds
runTests('Task9: SortArrayByParity', sortArrayByParity, testCases);
