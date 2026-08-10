import { runTests, TestCase } from '../test-runner';
import { countMultiples } from './solution';

const testCases: TestCase[] = [
    { input: [0, 3], expected: 0 },
    { input: [3, 3], expected: 1 },
    { input: [5, 3], expected: 1 },
    { input: [6, 3], expected: 2 },
    { input: [10, 2], expected: 5 },
    { input: [10, 3], expected: 3 },
    { input: [10, 5], expected: 2 },
    { input: [20, 4], expected: 5 },
    { input: [100, 10], expected: 10 },
    { input: [99, 7], expected: 14 },
];

runTests('Task7: CountMultiples', countMultiples, testCases);
