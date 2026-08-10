import { runTests, TestCase } from '../test-runner';
import { maxAverageSubarray } from './solution';

const testCases: TestCase[] = [
    { input: [[1, 12, -5, -6, 50, 3], 4], expected: 12.75 },
    { input: [[5], 1], expected: 5 },
    { input: [[3, 3, 3, 3], 2], expected: 3 },
    { input: [[-1, -2, -3, -4], 2], expected: -1.5 },
    { input: [[1, 2, 3, 4, 5], 5], expected: 3 },
];

runTests('Task1: MaxAverageSubarrayK', maxAverageSubarray, testCases);
