import { runTests, TestCase } from '../test-runner';
import { minWindowSubstring } from './solution';

const testCases: TestCase[] = [
    { input: ['ADOBECODEBANC', 'ABC'], expected: 'BANC' },
    { input: ['a', 'a'], expected: 'a' },
    { input: ['a', 'aa'], expected: '' },
    { input: ['ab', 'b'], expected: 'b' },
    { input: ['abc', 'cba'], expected: 'abc' },
];

runTests('Task13: MinWindowSubstring', minWindowSubstring, testCases);
