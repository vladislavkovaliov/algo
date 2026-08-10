import { runTests, TestCase } from '../test-runner';
import { longestRepeatingCharReplacement } from './solution';

const testCases: TestCase[] = [
    { input: ['ABAB', 2], expected: 4 },
    { input: ['AABABBA', 1], expected: 4 },
    { input: ['ABCDE', 1], expected: 2 },
    { input: ['AAAA', 2], expected: 4 },
    { input: ['', 0], expected: 0 },
];

runTests('Task8: LongestRepeatingCharReplacement', longestRepeatingCharReplacement, testCases);
