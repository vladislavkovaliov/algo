import { runTests, TestCase } from '../test-runner';
import { isBipartite } from './solution';

const testCases: TestCase[] = [
    { input: [[[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]]], expected: false },
    { input: [[[1, 3], [0, 2], [1, 3], [0, 2]]], expected: true },
    { input: [[[1], [0], [3], [2]]], expected: true },
    { input: [[[1, 2, 3], [0], [0], [0]]], expected: true },
    { input: [[[1], [0, 2], [1]]], expected: true },
];

runTests('Task8: IsBipartite', isBipartite, testCases);
