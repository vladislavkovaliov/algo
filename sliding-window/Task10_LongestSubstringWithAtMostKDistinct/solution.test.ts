import { runTests, TestCase } from '../test-runner';
import { longestSubstringWithAtMostKDistinct } from './solution';

const testCases: TestCase[] = [
    { input: ['eceba', 2], expected: 3 },
    { input: ['aa', 1], expected: 2 },
    { input: ['abcde', 2], expected: 2 },
    { input: ['aabbcc', 3], expected: 6 },
    { input: ['', 1], expected: 0 },
];

runTests('Task10: LongestSubstringWithAtMostKDistinct', longestSubstringWithAtMostKDistinct, testCases);
