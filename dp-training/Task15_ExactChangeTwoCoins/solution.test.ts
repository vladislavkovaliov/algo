import { runTests, TestCase } from '../test-runner';
import { exactChangeTwoCoins } from './solution';

const testCases: TestCase[] = [
    { input: [0], expected: 0 },
    { input: [1], expected: -1 },
    { input: [2], expected: 1 },
    { input: [3], expected: -1 },
    { input: [4], expected: 2 },
    { input: [5], expected: 1 },
    { input: [6], expected: 3 },
    { input: [7], expected: 2 },
    { input: [8], expected: 4 },
    { input: [9], expected: 3 },
    { input: [10], expected: 2 },
    { input: [11], expected: 4 },
    { input: [12], expected: 3 },
    { input: [13], expected: 5 },
    { input: [14], expected: 4 },
    { input: [15], expected: 3 },
    { input: [19], expected: 5 },
    { input: [20], expected: 4 },
    { input: [31], expected: 8 },
    { input: [33], expected: 9 },
];

runTests('Task15: ExactChangeTwoCoins', exactChangeTwoCoins, testCases);
