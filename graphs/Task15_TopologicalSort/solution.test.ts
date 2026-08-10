import { runTests, TestCase } from '../test-runner';
import { topologicalSort } from './solution';

const testCases: TestCase[] = [
    { input: [4, [[0, 1], [1, 2], [2, 3]]], expected: [3, 2, 1, 0] },
    { input: [2, [[0, 1], [1, 0]]], expected: [] },
    { input: [3, [[0, 1], [2, 0]]], expected: [1, 0, 2] },
    { input: [1, []], expected: [0] },
];

runTests('Task15: TopologicalSort', topologicalSort, testCases);
