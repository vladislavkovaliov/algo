import { runTests, TestCase } from '../test-runner';
import { countAnagramOccurrences } from './solution';

const testCases: TestCase[] = [
    { input: ['cbaebabacd', 'abc'], expected: [0, 6] },
    { input: ['abab', 'ab'], expected: [0, 1, 2] },
    { input: ['aaaa', 'a'], expected: [0, 1, 2, 3] },
    { input: ['abc', 'abc'], expected: [0] },
    { input: ['abc', 'def'], expected: [] },
];

runTests('Task16: CountAnagramOccurrences', countAnagramOccurrences, testCases);
