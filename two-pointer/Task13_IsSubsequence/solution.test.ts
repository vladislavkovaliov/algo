import { runTests, TestCase } from '../test-runner';
import { isSubsequence } from './solution';

const testCases: TestCase[] = [
    { input: ['abc', 'ahbgdc'], expected: true },
    { input: ['axc', 'ahbgdc'], expected: false },
    { input: ['', 'abc'], expected: true },
    { input: ['abc', ''], expected: false },
    { input: ['ace', 'abcde'], expected: true },
    { input: ['aec', 'abcde'], expected: false },
    { input: ['xyz', 'xyz'], expected: true },
];

runTests('Task13: IsSubsequence', isSubsequence, testCases);
