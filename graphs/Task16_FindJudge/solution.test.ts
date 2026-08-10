import { runTests, TestCase } from '../test-runner';
import { findJudge } from './solution';

const testCases: TestCase[] = [
    { input: [2, [[1, 2]]], expected: 2 },
    { input: [3, [[1, 3], [2, 3]]], expected: 3 },
    { input: [3, [[1, 3], [2, 3], [3, 1]]], expected: -1 },
    { input: [1, []], expected: 1 },
];

runTests('Task16: FindJudge', findJudge, testCases);
