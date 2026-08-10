import { runTests, TestCase } from '../test-runner';
import { findDuplicate } from './solution';

const testCases: TestCase[] = [
    { input: [[1, 3, 4, 2, 2]], expected: 2 },
    { input: [[3, 1, 3, 4, 2]], expected: 3 },
    { input: [[1, 1]], expected: 1 },
    { input: [[1, 2, 3, 4, 5, 5]], expected: 5 },
];

runTests('Task19: FindDuplicateNumber', findDuplicate, testCases);
