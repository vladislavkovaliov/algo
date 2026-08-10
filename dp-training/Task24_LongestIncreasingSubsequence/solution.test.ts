import { runTests, TestCase } from '../test-runner';
import { longestIncreasingSubsequence } from './solution';

const testCases: TestCase[] = [
    { input: [[10, 9, 2, 5, 3, 7, 101, 18]], expected: 4 },
    { input: [[0, 1, 0, 3, 2, 3]], expected: 4 },
    { input: [[7, 7, 7, 7, 7]], expected: 1 },
    { input: [[1]], expected: 1 },
    { input: [[3, 2]], expected: 1 },
    { input: [[1, 2]], expected: 2 },
    { input: [[1, 2, 3]], expected: 3 },
    { input: [[3, 2, 1]], expected: 1 },
    { input: [[1, 3, 2, 4, 3, 5]], expected: 4 },
    { input: [[10, 20, 10, 30, 20, 40]], expected: 4 },
    { input: [[1, 1, 1, 1]], expected: 1 },
    { input: [[1, 2, 1, 2, 1, 2]], expected: 3 },
];

runTests('Task24: LongestIncreasingSubsequence', longestIncreasingSubsequence, testCases);
