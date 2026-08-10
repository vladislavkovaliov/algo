import { runTests, TestCase } from '../test-runner';
import { backspaceStringCompare } from './solution';

const testCases: TestCase[] = [
    { input: ['ab#c', 'ad#c'], expected: true },
    { input: ['ab##', 'c#d#'], expected: true },
    { input: ['a#c', 'b'], expected: false },
    { input: ['a##c', '#a#c'], expected: true },
    { input: ['', ''], expected: true },
    { input: ['###', ''], expected: true },
];

runTests('Task18: BackspaceStringCompare', backspaceStringCompare, testCases);
