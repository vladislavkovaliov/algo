import { runTests, TestCase } from '../test-runner';
import { slidingWindowMaximum } from './solution';

const testCases: TestCase[] = [
    { input: [[1, 3, -1, -3, 5, 3, 6, 7], 3], expected: [3, 3, 5, 5, 6, 7] },
    { input: [[1], 1], expected: [1] },
    { input: [[1, -1], 1], expected: [1, -1] },
    { input: [[7, 2, 4], 2], expected: [7, 4] },
    { input: [[1, 3, 1, 2, 0, 5], 3], expected: [3, 3, 2, 5] },
];

runTests('Task17: SlidingWindowMaximum', slidingWindowMaximum, testCases);
