import { runTests, TestCase } from '../test-runner';
import { moveZeroes } from './solution';

const testCases: TestCase[] = [
    { input: [[0, 1, 0, 3, 12]], expected: [1, 3, 12, 0, 0] },
    { input: [[0]], expected: [0] },
    { input: [[1, 2, 3]], expected: [1, 2, 3] },
    { input: [[0, 0, 1]], expected: [1, 0, 0] },
    { input: [[1, 0, 2, 0, 3]], expected: [1, 2, 3, 0, 0] },
];

runTests('Task7: MoveZeroes', moveZeroes, testCases);
