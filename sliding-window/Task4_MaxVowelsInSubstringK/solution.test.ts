import { runTests, TestCase } from '../test-runner';
import { maxVowelsInSubstring } from './solution';

const testCases: TestCase[] = [
    { input: ['abciiidef', 3], expected: 3 },
    { input: ['aeiou', 2], expected: 2 },
    { input: ['leetcode', 3], expected: 2 },
    { input: ['bcdf', 2], expected: 0 },
    { input: ['abcde', 1], expected: 1 },
];

runTests('Task4: MaxVowelsInSubstringK', maxVowelsInSubstring, testCases);
