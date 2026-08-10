import { runTests, TestCase } from '../test-runner';
import { validTree } from './solution';

const testCases: TestCase[] = [
    { input: [5, [[0, 1], [0, 2], [0, 3], [1, 4]]], expected: true },
    { input: [5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]], expected: false },
    { input: [4, [[0, 1], [2, 3]]], expected: false },
    { input: [1, []], expected: true },
];

runTests('Task20: ValidTree', validTree, testCases);
