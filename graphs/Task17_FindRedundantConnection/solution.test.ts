import { runTests, TestCase } from '../test-runner';
import { findRedundantConnection } from './solution';

const testCases: TestCase[] = [
    { input: [[[1, 2], [1, 3], [2, 3]]], expected: [2, 3] },
    { input: [[[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]], expected: [1, 4] },
    { input: [[[1, 2], [2, 3], [1, 3]]], expected: [1, 3] },
];

runTests('Task17: FindRedundantConnection', findRedundantConnection, testCases);
