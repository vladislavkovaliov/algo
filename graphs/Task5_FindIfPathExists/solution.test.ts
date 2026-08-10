import { runTests, TestCase } from '../test-runner';
import { validPath } from './solution';

const testCases: TestCase[] = [
    { input: [3, [[0, 1], [1, 2], [2, 0]], 0, 2], expected: true },
    { input: [6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5], expected: false },
    { input: [1, [], 0, 0], expected: true },
];

runTests('Task5: FindIfPathExists', validPath, testCases);
