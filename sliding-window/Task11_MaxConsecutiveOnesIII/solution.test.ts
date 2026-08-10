import { runTests, TestCase } from '../test-runner';
import { maxConsecutiveOnesIII } from './solution';

const testCases: TestCase[] = [
    { input: [[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2], expected: 6 },
    { input: [[0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1], 3], expected: 7 },
    { input: [[0, 0, 0], 1], expected: 1 },
    { input: [[1, 1, 1], 0], expected: 3 },
    { input: [[0], 1], expected: 1 },
];

runTests('Task11: MaxConsecutiveOnesIII', maxConsecutiveOnesIII, testCases);
