import { runTests, TestCase } from '../test-runner';
import { canReachSumWithTwo } from './solution';

const testCases: TestCase[] = [
    { input: [5, 2, 3], expected: true },
    { input: [1, 2, 3], expected: false },
    { input: [7, 2, 5], expected: true },
    { input: [4, 2, 5], expected: false },
    { input: [3, 2, 5], expected: false },
    { input: [0, 2, 3], expected: true },
    { input: [8, 3, 5], expected: true },
    { input: [11, 3, 5], expected: false },
    { input: [4, 3, 5], expected: false },
    { input: [7, 3, 5], expected: false },
    { input: [10, 3, 5], expected: false },
    { input: [5, 4, 6], expected: false },
    { input: [10, 4, 6], expected: true },
    { input: [12, 4, 6], expected: false },
    { input: [15, 7, 11], expected: false },
    { input: [18, 7, 11], expected: true },
];

runTests('Task20: CanReachSumWithTwo', canReachSumWithTwo, testCases);
