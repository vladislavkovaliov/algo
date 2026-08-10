import { runTests, TestCase } from '../test-runner';
import { minimumKBitFlips } from './solution';

const testCases: TestCase[] = [
    { input: [[0, 1, 0], 1], expected: 2 },
    { input: [[1, 1, 0], 2], expected: -1 },
    { input: [[0, 0, 0, 1, 0, 1, 1, 0], 3], expected: 3 },
    { input: [[0], 1], expected: 1 },
    { input: [[1], 1], expected: 0 },
];

runTests('Task20: MinimumKBitFlips', minimumKBitFlips, testCases);
