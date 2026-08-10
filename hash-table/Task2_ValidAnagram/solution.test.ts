import { runTests, TestCase } from '../test-runner';
import { isAnagram } from './solution';

const testCases: TestCase[] = [
    { input: ['anagram', 'nagaram'], expected: true },
    { input: ['rat', 'car'], expected: false },
    { input: ['', ''], expected: true },
    { input: ['a', 'a'], expected: true },
    { input: ['ab', 'a'], expected: false },
];

runTests('Task2: ValidAnagram', isAnagram, testCases);
