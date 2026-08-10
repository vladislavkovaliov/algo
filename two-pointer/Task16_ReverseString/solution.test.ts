import { runTests, TestCase } from '../test-runner';
import { reverseString } from './solution';

const testCases: TestCase[] = [
    { input: [['h', 'e', 'l', 'l', 'o']], expected: ['o', 'l', 'l', 'e', 'h'] },
    { input: [['a']], expected: ['a'] },
    { input: [['a', 'b']], expected: ['b', 'a'] },
    { input: [[]], expected: [] },
    { input: [['a', 'b', 'c', 'd']], expected: ['d', 'c', 'b', 'a'] },
];

runTests('Task16: ReverseString', reverseString, testCases);
