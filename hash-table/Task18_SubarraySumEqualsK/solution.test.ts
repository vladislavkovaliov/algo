import { runTests, TestCase } from '../test-runner';
import { subarraySum } from './solution';

const testCases: TestCase[] = [
    { input: [[1, 1, 1], 2], expected: 2 },
    { input: [[1, 2, 3], 3], expected: 2 },
    { input: [[1], 0], expected: 0 },
    { input: [[-1, -1, 1], 0], expected: 1 },
    { input: [[], 1], expected: 0 },
];

runTests('Task18: SubarraySumEqualsK', subarraySum, testCases);
