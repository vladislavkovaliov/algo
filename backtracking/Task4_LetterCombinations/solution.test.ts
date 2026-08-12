import { runTests, TestCase } from '../test-runner';
import { letterCombinations } from './solution';

const testCases: TestCase[] = [
    { input: ['23'], expected: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'] },
    { input: [''], expected: [] },
    { input: ['79'], expected: ['pw', 'px', 'py', 'pz', 'qw', 'qx', 'qy', 'qz', 'rw', 'rx', 'ry', 'rz', 'sw', 'sx', 'sy', 'sz'] },
];

runTests('Task4: LetterCombinations', letterCombinations, testCases);