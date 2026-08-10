import { runTests, TestCase } from '../test-runner';
import { numberOfProvinces } from './solution';

const testCases: TestCase[] = [
    { input: [[[1, 1, 0], [1, 1, 0], [0, 0, 1]]], expected: 2 },
    { input: [[[1, 0, 0], [0, 1, 0], [0, 0, 1]]], expected: 3 },
    { input: [[[1]]], expected: 1 },
    { input: [[[1, 1, 1], [1, 1, 1], [1, 1, 1]]], expected: 1 },
];

runTests('Task6: NumberOfProvinces', numberOfProvinces, testCases);
