import { runTests, TestCase } from '../test-runner';
import { shortestPathInGrid } from './solution';

const testCases: TestCase[] = [
    { input: [[[0, 0, 0], [0, 1, 0], [0, 0, 0]], [0, 0], [2, 2]], expected: 4 },
    { input: [[[0, 1], [1, 0]], [0, 0], [1, 1]], expected: 2 },
    { input: [[[0, 0, 0], [1, 1, 1], [0, 0, 0]], [0, 0], [2, 2]], expected: -1 },
];

runTests('Task11: ShortestPathInGrid', shortestPathInGrid, testCases);
