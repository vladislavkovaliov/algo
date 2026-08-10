import { runTests, TestCase } from '../test-runner';
import { longestConsecutive } from './solution';

const testCases: TestCase[] = [
    { input: [[100, 4, 200, 1, 3, 2]], expected: 4 },
    { input: [[0, 3, 7, 2, 5, 8, 4, 6, 0, 1]], expected: 9 },
    { input: [[]], expected: 0 },
    { input: [[1, 2, 0, 1]], expected: 3 },
];

runTests('Task12: LongestConsecutiveSequence', longestConsecutive, testCases);
