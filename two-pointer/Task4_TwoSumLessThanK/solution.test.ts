import { runTests, TestCase } from '../test-runner';
import { twoSumLessThanK } from './solution';

const testCases: TestCase[] = [
    { input: [[2, 3, 4, 5], 10], expected: 9 },
    { input: [[10, 20, 30], 15], expected: -1 },
    { input: [[1, 2, 3, 4, 5], 8], expected: 7 },
    { input: [[1, 2, 3, 4], 6], expected: 5 },
    { input: [[1, 1, 1, 1], 3], expected: 2 },
];

runTests('Task4: TwoSumLessThanK', twoSumLessThanK, testCases);
