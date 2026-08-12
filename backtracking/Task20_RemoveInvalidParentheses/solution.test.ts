import { runTests, TestCase } from '../test-runner';
import { removeInvalidParentheses } from './solution';

const testCases: TestCase[] = [
    { input: ['()())()'], expected: ['(())()', '()()()'] },
    { input: ['(a)())()'], expected: ['(a())()', '(a)()()'] },
    { input: [')('], expected: [''] },
];

runTests('Task20: RemoveInvalidParentheses', removeInvalidParentheses, testCases);