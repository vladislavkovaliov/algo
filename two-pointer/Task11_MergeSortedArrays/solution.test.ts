import { runTests, TestCase } from '../test-runner';
import { mergeSortedArrays } from './solution';

const testCases: TestCase[] = [
    { input: [[1, 3, 5], [2, 4, 6]], expected: [1, 2, 3, 4, 5, 6] },
    { input: [[1, 2, 3], []], expected: [1, 2, 3] },
    { input: [[], [4, 5, 6]], expected: [4, 5, 6] },
    { input: [[], []], expected: [] },
    { input: [[1, 1, 1], [1, 1]], expected: [1, 1, 1, 1, 1] },
    { input: [[0, 2, 4], [1, 3, 5]], expected: [0, 1, 2, 3, 4, 5] },
];

runTests('Task11: MergeSortedArrays', mergeSortedArrays, testCases);
