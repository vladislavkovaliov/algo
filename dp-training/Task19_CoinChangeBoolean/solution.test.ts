import { runTests, TestCase } from '../test-runner';
import { coinChangeBoolean } from './solution';

const testCases: TestCase[] = [
    { input: [11, [1, 2, 5]], expected: true },
    { input: [3, [2]], expected: false },
    { input: [0, [1, 2, 5]], expected: true },
    { input: [6, [1, 3, 4]], expected: true },
    { input: [7, [2, 4, 6]], expected: false },
    { input: [2, [1]], expected: true },
    { input: [4, [1, 2, 3]], expected: true },
    { input: [10, [1, 2, 5]], expected: true },
    { input: [8, [3, 5]], expected: true },
    { input: [14, [3, 5]], expected: true },
    { input: [10, [10]], expected: true },
    { input: [1, [2, 5]], expected: false },
    { input: [4, [2, 5]], expected: true },
];

runTests('Task19: CoinChangeBoolean', coinChangeBoolean, testCases);
