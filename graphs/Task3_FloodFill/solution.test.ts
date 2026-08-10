import { runTests, TestCase } from '../test-runner';
import { floodFill } from './solution';

const testCases: TestCase[] = [
    { input: [[[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2], expected: [[2, 2, 2], [2, 2, 0], [2, 0, 1]] },
    { input: [[[0, 0, 0], [0, 0, 0]], 0, 0, 0], expected: [[0, 0, 0], [0, 0, 0]] },
    { input: [[[0, 0, 0], [0, 0, 0]], 0, 0, 1], expected: [[1, 1, 1], [1, 1, 1]] },
];

runTests('Task3: FloodFill', floodFill, testCases);
