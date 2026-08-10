import { runTests, TestCase } from '../test-runner';
import { isCellReachable } from './solution';

const testCases: TestCase[] = [
    { input: [0, 3], expected: true },
    { input: [3, 3], expected: true },
    { input: [6, 3], expected: true },
    { input: [5, 3], expected: false },
    { input: [1, 2], expected: false },
    { input: [10, 2], expected: true },
    { input: [100, 10], expected: true },
    { input: [7, 5], expected: false },
    { input: [25, 5], expected: true },
    { input: [14, 7], expected: true },
    { input: [15, 7], expected: false },
    { input: [0, 1], expected: true },
    { input: [50, 1], expected: true },
    { input: [99, 9], expected: true },
    { input: [100, 11], expected: false },
];

runTests('Task8: IsCellReachable', isCellReachable, testCases);
