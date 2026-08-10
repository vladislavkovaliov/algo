import { runTests, TestCase } from '../test-runner';
import { longestSubarrayWithSumAtMostK } from './solution';

const testCases: TestCase[] = [
    { input: [[1, 2, 3, 4, 5], 9], expected: 3 },
    { input: [[3, 1, 2, 1, 1], 5], expected: 4 },
    { input: [[1, 1, 1, 1], 10], expected: 4 },
    { input: [[5, 5, 5], 4], expected: 0 },
    { input: [[1], 1], expected: 1 },
];

runTests('Task9: LongestSubarrayWithSumAtMostK', longestSubarrayWithSumAtMostK, testCases);
