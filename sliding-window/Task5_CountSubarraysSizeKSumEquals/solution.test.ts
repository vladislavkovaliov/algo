import { runTests, TestCase } from '../test-runner';
import { countSubarraysSizeKSumEquals } from './solution';

const testCases: TestCase[] = [
    { input: [[2, 3, 5, 1, 4], 2, 5], expected: 2 },
    { input: [[1, 1, 1, 1], 2, 2], expected: 3 },
    { input: [[5, 5, 5], 3, 15], expected: 1 },
    { input: [[1, 2, 3], 2, 10], expected: 0 },
    { input: [[10], 1, 10], expected: 1 },
];

runTests('Task5: CountSubarraysSizeKSumEquals', countSubarraysSizeKSumEquals, testCases);
