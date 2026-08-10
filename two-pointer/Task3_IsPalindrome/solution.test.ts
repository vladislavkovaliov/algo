import { runTests, TestCase } from '../test-runner';
import { isPalindrome } from './solution';

const testCases: TestCase[] = [
    { input: ['racecar'], expected: true },
    { input: ['hello'], expected: false },
    { input: ['a'], expected: true },
    { input: [''], expected: true },
    { input: ['abba'], expected: true },
    { input: ['abcba'], expected: true },
    { input: ['ab'], expected: false },
    { input: ['aa'], expected: true },
    { input: ['abc'], expected: false },
];

runTests('Task3: IsPalindrome', isPalindrome, testCases);
