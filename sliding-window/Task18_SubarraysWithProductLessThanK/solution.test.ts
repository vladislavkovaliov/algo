import { runTests, TestCase } from '../test-runner';
import { subarraysWithProductLessThanK } from './solution';

const testCases: TestCase[] = [
    { input: [[10, 5, 2, 6], 100], expected: 8 },
    { input: [[1, 2, 3], 0], expected: 0 },
    { input: [[1, 2, 3], 10], expected: 6 },
    { input: [[1], 1], expected: 0 },
    { input: [[1, 1, 1], 1], expected: 0 },
];

runTests('Task18: SubarraysWithProductLessThanK', subarraysWithProductLessThanK, testCases);
