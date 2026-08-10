import { runTests, TestCase } from '../test-runner';
import { isHappy } from './solution';

const testCases: TestCase[] = [
    { input: [19], expected: true },
    { input: [2], expected: false },
    { input: [1], expected: true },
    { input: [7], expected: true },
];

runTests('Task10: HappyNumber', isHappy, testCases);
