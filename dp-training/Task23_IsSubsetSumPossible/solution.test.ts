import { runTests, TestCase } from '../test-runner';
import { isSubsetSumPossible } from './solution';

const testCases: TestCase[] = [
    { input: [9, [3, 34, 4, 12, 5]], expected: true },
    { input: [30, [3, 34, 4, 12, 5]], expected: false },
    { input: [0, [1, 2, 3]], expected: true },
    { input: [4, [1, 2, 3]], expected: true },
    { input: [7, [1, 2, 3]], expected: false },
    { input: [11, [1, 5, 11, 5]], expected: true },
    { input: [5, [1, 2, 3, 5]], expected: true },
    { input: [6, [1, 2, 3]], expected: true },
    { input: [8, [1, 3, 4, 5]], expected: true },
    { input: [14, [1, 3, 4, 5]], expected: false },
    { input: [3, [1, 1, 1]], expected: true },
    { input: [4, [1, 1, 1]], expected: false },
    { input: [10, [5, 5]], expected: true },
    { input: [11, [5, 5]], expected: false },
    { input: [12, [2, 4, 6, 8]], expected: true },
    { input: [5, [2, 4, 6, 8]], expected: false },
    { input: [20, [2, 4, 6, 8]], expected: true },
    { input: [21, [2, 4, 6, 8]], expected: false },
    { input: [1, [2]], expected: false },
    { input: [2, [2]], expected: true },
    { input: [13, [7, 6]], expected: true },
    { input: [10, [1, 2, 3, 4]], expected: true },
    { input: [11, [1, 2, 3, 4]], expected: false },
    { input: [100, [50, 20, 30]], expected: true },
    { input: [101, [50, 20, 30]], expected: false },
];

runTests('Task23: IsSubsetSumPossible', isSubsetSumPossible, testCases);
