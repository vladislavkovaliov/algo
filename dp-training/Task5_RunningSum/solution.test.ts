import { runTests, TestCase } from '../test-runner';
import { runningSum } from './solution';

const testCases: TestCase[] = [
    { input: [0], expected: 0 },
    { input: [1], expected: 1 },
    { input: [2], expected: 3 },
    { input: [3], expected: 6 },
    { input: [4], expected: 10 },
    { input: [5], expected: 15 },
    { input: [10], expected: 55 },
    { input: [20], expected: 210 },
    { input: [100], expected: 5050 },
];

runTests('Task5: RunningSum', runningSum, testCases);
