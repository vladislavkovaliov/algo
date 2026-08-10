import { runTests, TestCase } from '../test-runner';
import { wordPattern } from './solution';

const testCases: TestCase[] = [
    { input: ['abba', 'dog cat cat dog'], expected: true },
    { input: ['abba', 'dog cat cat fish'], expected: false },
    { input: ['aaaa', 'dog cat cat dog'], expected: false },
    { input: ['abba', 'dog dog dog dog'], expected: false },
    { input: ['abc', 'dog cat fish'], expected: true },
];

runTests('Task8: WordPattern', wordPattern, testCases);
