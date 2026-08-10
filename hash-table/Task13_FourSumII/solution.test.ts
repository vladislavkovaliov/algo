import { runTests, TestCase } from '../test-runner';
import { fourSumCount } from './solution';

const testCases: TestCase[] = [
    { input: [[1, 2], [-2, -1], [-1, 2], [0, 2]], expected: 2 },
    { input: [[0], [0], [0], [0]], expected: 1 },
    { input: [[1], [2], [-2], [-1]], expected: 1 },
    { input: [[], [], [], []], expected: 0 },
];

runTests('Task13: FourSumII', fourSumCount, testCases);
