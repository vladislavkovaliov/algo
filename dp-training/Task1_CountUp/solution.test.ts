import { runTests, TestCase } from '../test-runner';
import { countUp } from './solution';

const testCases: TestCase[] = [
    { input: [0], expected: 0 },
    { input: [1], expected: 1 },
    { input: [5], expected: 5 },
    { input: [10], expected: 10 },
    { input: [50], expected: 50 },
    { input: [100], expected: 100 },
];

runTests('Task1: CountUp', countUp, testCases);
