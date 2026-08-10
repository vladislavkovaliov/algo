import { runTests, TestCase } from '../test-runner';
import { validPalindromeRemoval } from './solution';

const testCases: TestCase[] = [
    { input: ['aba'], expected: true },
    { input: ['abca'], expected: true },
    { input: ['abc'], expected: false },
    { input: ['a'], expected: true },
    { input: [''], expected: true },
    { input: ['ab'], expected: true },
    { input: ['aab'], expected: true },
    { input: ['abcda'], expected: false },
];

runTests('Task17: ValidPalindromeRemoval', validPalindromeRemoval, testCases);
