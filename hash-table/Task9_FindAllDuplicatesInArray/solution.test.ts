import { runTests, TestCase } from '../test-runner';
import { findDuplicates } from './solution';

const testCases: TestCase[] = [
    { input: [[4, 3, 2, 7, 8, 2, 3, 1]], expected: [2, 3] },
    { input: [[1, 1, 2]], expected: [1] },
    { input: [[1]], expected: [] },
    { input: [[]], expected: [] },
];

runTests('Task9: FindAllDuplicatesInArray', findDuplicates, testCases);
