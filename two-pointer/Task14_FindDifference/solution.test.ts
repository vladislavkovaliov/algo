import { runTests, TestCase } from '../test-runner';
import { findDifference } from './solution';

const testCases: TestCase[] = [
    { input: [[1, 2, 3, 4], [2, 4, 6]], expected: [1, 3] },
    { input: [[1, 2, 3], [1, 2, 3]], expected: [] },
    { input: [[1, 2, 3], []], expected: [1, 2, 3] },
    { input: [[], [1, 2]], expected: [] },
    { input: [[1, 1, 2, 3], [1, 2]], expected: [3] },
];

runTests('Task14: FindDifference', findDifference, testCases);
