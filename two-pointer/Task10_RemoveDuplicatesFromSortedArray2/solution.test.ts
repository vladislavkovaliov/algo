import { runTests, TestCase } from '../test-runner';
import { removeDuplicates2 } from './solution';

const testCases: TestCase[] = [
    { input: [[1, 1, 1, 2, 2, 3]], expected: 5 },
    { input: [[0, 0, 1, 1, 1, 1, 2, 3, 3]], expected: 7 },
    { input: [[1, 1, 1]], expected: 2 },
    { input: [[1, 2, 3]], expected: 3 },
    { input: [[1, 1, 2, 2, 2, 2, 3, 3, 3]], expected: 6 },
];

runTests('Task10: RemoveDuplicatesFromSortedArray2', removeDuplicates2, testCases);
