import { runTests, TestCase } from '../test-runner';
import { arrayIntersectionSorted } from './solution';

const testCases: TestCase[] = [
    { input: [[1, 1, 2, 2], [2, 2]], expected: [2, 2] },
    { input: [[1, 1, 2, 3], [1, 2, 2, 4]], expected: [1, 2] },
    { input: [[1, 2, 2, 2, 3], [2, 2, 4]], expected: [2, 2] },
    { input: [[1, 2, 3], [4, 5, 6]], expected: [] },
    { input: [[1, 1, 1, 1], [1, 1]], expected: [1, 1] },
];

runTests('Task15: ArrayIntersectionSorted', arrayIntersectionSorted, testCases);
