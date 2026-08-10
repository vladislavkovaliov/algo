import { runTests, TestCase } from '../test-runner';
import { maxSumSubarray } from './solution';

const testCases: TestCase[] = [
    { input: [[1, 2, 3, 4, 5], 2], expected: 9 },
    { input: [[2, 7, 3, 0, 6, 1, -5], 3], expected: 12 },
    { input: [[1], 1], expected: 1 },
    { input: [[-2, -3, -1, -5], 2], expected: -3 },
    { input: [[1, 1, 1, 1], 4], expected: 4 },
];

runTests('Task2: MaxSumSubarrayK', maxSumSubarray, testCases);
