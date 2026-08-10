import { runTests, TestCase } from '../test-runner';
import { minimumSizeSubarraySum } from './solution';

const testCases: TestCase[] = [
    { input: [[2, 3, 1, 2, 4, 3], 7], expected: 2 },
    { input: [[1, 4, 4], 4], expected: 1 },
    { input: [[1, 1, 1, 1], 5], expected: 0 },
    { input: [[1, 2, 3, 4, 5], 11], expected: 3 },
    { input: [[5], 5], expected: 1 },
];

runTests('Task12: MinimumSizeSubarraySum', minimumSizeSubarraySum, testCases);
