import { runTests, TestCase } from '../test-runner';
import { longestNonDecreasingSubsequence } from './solution';

const testCases: TestCase[] = [
    { input: [[1, 2, 2, 3]], expected: 4 },
    { input: [[3, 2, 1]], expected: 1 },
    { input: [[1, 1, 1]], expected: 3 },
    { input: [[10, 9, 2, 5, 3, 7, 101, 18]], expected: 4 },
    { input: [[1]], expected: 1 },
    { input: [[1, 2]], expected: 2 },
    { input: [[2, 1]], expected: 1 },
    { input: [[10, 20, 10, 30, 20, 40]], expected: 4 },
    { input: [[1, 3, 2, 2, 4]], expected: 4 },
];

runTests('Task22: LongestNonDecreasingSubsequence', longestNonDecreasingSubsequence, testCases);
