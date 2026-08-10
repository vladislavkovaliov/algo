import { runTests, TestCase } from '../test-runner';
import { intersect } from './solution';

const testCases: TestCase[] = [
    { input: [[1, 2, 2, 1], [2, 2]], expected: [2, 2] },
    { input: [[4, 9, 5], [9, 4, 9, 8, 4]], expected: [4, 9] },
    { input: [[1, 2], [3, 4]], expected: [] },
    { input: [[], [1, 2]], expected: [] },
];

runTests('Task7: IntersectionOfTwoArraysII', intersect, testCases);
