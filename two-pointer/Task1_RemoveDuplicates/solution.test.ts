import { runTests, TestCase } from '../test-runner';
import { removeDuplicates } from './solution';

const testCases: TestCase[] = [
    { input: [[1, 1, 2]], expected: 2 },
    { input: [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]], expected: 5 },
    { input: [[1]], expected: 1 },
    { input: [[1, 2, 3]], expected: 3 },
];

runTests('Task1: RemoveDuplicates', removeDuplicates, testCases);
