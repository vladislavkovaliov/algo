import { runTests, TestCase } from '../test-runner';
import { findLongestPalindrome } from './solution';

const testCases: TestCase[] = [
    { input: ['babad'], expected: 3 },
    { input: ['cbbd'], expected: 2 },
    { input: ['a'], expected: 1 },
    { input: [''], expected: 0 },
    { input: ['racecar'], expected: 7 },
    { input: ['abcde'], expected: 1 },
];

runTests('Task20: FindLongestPalindrome', findLongestPalindrome, testCases);
