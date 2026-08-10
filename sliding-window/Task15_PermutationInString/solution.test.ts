import { runTests, TestCase } from '../test-runner';
import { permutationInString } from './solution';

const testCases: TestCase[] = [
    { input: ['ab', 'eidbaooo'], expected: true },
    { input: ['ab', 'eidboaoo'], expected: false },
    { input: ['adc', 'dcda'], expected: true },
    { input: ['a', 'a'], expected: true },
    { input: ['abc', 'ab'], expected: false },
];

runTests('Task15: PermutationInString', permutationInString, testCases);
