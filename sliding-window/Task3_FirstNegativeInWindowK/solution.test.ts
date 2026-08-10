import { runTests, TestCase } from '../test-runner';
import { firstNegativeInWindow } from './solution';

const testCases: TestCase[] = [
    { input: [[1, -2, 3, -4, 5], 2], expected: [-2, -2, -4, -4] },
    { input: [[1, 2, 3, 4], 2], expected: [0, 0, 0] },
    { input: [[-1, -2, -3], 3], expected: [-1] },
    { input: [[1], 1], expected: [0] },
    { input: [[-5, 1, 1, -2], 2], expected: [-5, 0, -2] },
];

runTests('Task3: FirstNegativeInWindowK', firstNegativeInWindow, testCases);
