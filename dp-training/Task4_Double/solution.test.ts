import { runTests, TestCase } from '../test-runner';
import { double } from './solution';

const testCases: TestCase[] = [
    { input: [0], expected: 1 },
    { input: [1], expected: 2 },
    { input: [2], expected: 4 },
    { input: [3], expected: 8 },
    { input: [5], expected: 32 },
    { input: [10], expected: 1024 },
    { input: [15], expected: 32768 },
    { input: [20], expected: 1048576 },
];

runTests('Task4: Double', double, testCases);
