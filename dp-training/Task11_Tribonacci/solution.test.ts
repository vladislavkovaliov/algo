import { runTests, TestCase } from '../test-runner';
import { tribonacci } from './solution';

const testCases: TestCase[] = [
    { input: [0], expected: 0 },
    { input: [1], expected: 0 },
    { input: [2], expected: 1 },
    { input: [3], expected: 1 },
    { input: [4], expected: 2 },
    { input: [5], expected: 4 },
    { input: [6], expected: 7 },
    { input: [7], expected: 13 },
    { input: [8], expected: 24 },
    { input: [9], expected: 44 },
    { input: [10], expected: 81 },
    { input: [15], expected: 1705 },
    { input: [20], expected: 35890 },
];

runTests('Task11: Tribonacci', tribonacci, testCases);
