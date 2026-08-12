import { runTests, TestCase } from '../test-runner';
import { subsets } from './solution';

const testCases: TestCase[] = [
    { input: [[1, 2, 3]], expected: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]] },
    { input: [[1]], expected: [[], [1]] },
    { input: [[]], expected: [[]] },
];

runTests('Task1: AllSubsets', subsets, testCases);