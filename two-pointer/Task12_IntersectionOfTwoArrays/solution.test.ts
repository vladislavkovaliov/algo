import { runTests, TestCase } from '../test-runner';
import { intersectionOfTwoArrays } from './solution';

const testCases: TestCase[] = [
    { input: [[1, 1, 2, 2], [2, 2]], expected: [2] },
    { input: [[1, 2, 3, 4], [2, 4, 6, 8]], expected: [2, 4] },
    { input: [[1, 2, 3], [4, 5, 6]], expected: [] },
    { input: [[], [1, 2]], expected: [] },
    { input: [[1, 2, 3], []], expected: [] },
];

runTests('Task12: IntersectionOfTwoArrays', intersectionOfTwoArrays, testCases);
