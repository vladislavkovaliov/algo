import { runTests, TestCase } from '../test-runner';
import { maxSubArray } from './solution';

const testCases: TestCase[] = [
    { input: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]], expected: 6 },
    { input: [[1]], expected: 1 },
    { input: [[5, 4, -1, 7, 8]], expected: 23 },
    { input: [[-1]], expected: -1 },
    { input: [[-2, -3, -1, -5]], expected: -1 },
    { input: [[1, 2, 3]], expected: 6 },
];

runTests('Task14: MaxSubArray', maxSubArray, testCases);
