import { runTests, TestCase } from '../test-runner';
import { fibonacci } from './solution';

const testCases: TestCase[] = [
    { input: [0], expected: 0 },
    { input: [1], expected: 1 },
    { input: [2], expected: 1 },
    { input: [3], expected: 2 },
    { input: [4], expected: 3 },
    { input: [5], expected: 5 },
    { input: [6], expected: 8 },
    { input: [7], expected: 13 },
    { input: [8], expected: 21 },
    { input: [9], expected: 34 },
    { input: [10], expected: 55 },
    { input: [15], expected: 610 },
    { input: [20], expected: 6765 },
];

runTests('Task9: Fibonacci', fibonacci, testCases);
