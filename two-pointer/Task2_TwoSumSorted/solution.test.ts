import { runTests, TestCase } from '../test-runner';
import { twoSumSorted } from './solution';

const testCases: TestCase[] = [
    { input: [[2, 7, 11, 15], 9], expected: [0, 1] },
    { input: [[2, 3, 4], 6], expected: [0, 2] },
    { input: [[-1, 0], -1], expected: [0, 1] },
    { input: [[1, 2, 3, 4, 5], 7], expected: [1, 4] },
];

runTests('Task2: TwoSumSorted', twoSumSorted, testCases);
