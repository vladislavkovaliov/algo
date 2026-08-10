import { runTests, TestCase } from '../test-runner';
import { longestSubstringWithoutRepeating } from './solution';

const testCases: TestCase[] = [
    { input: ['abcabcbb'], expected: 3 },
    { input: ['bbbbb'], expected: 1 },
    { input: ['pwwkew'], expected: 3 },
    { input: [''], expected: 0 },
    { input: [' '], expected: 1 },
    { input: ['au'], expected: 2 },
];

runTests('Task7: LongestSubstringWithoutRepeating', longestSubstringWithoutRepeating, testCases);
