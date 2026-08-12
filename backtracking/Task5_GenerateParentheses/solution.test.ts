import { runTests, TestCase } from '../test-runner';
import { generateParenthesis } from './solution';

const testCases: TestCase[] = [
    { input: [3], expected: ['((()))', '(()())', '(())()', '()(())', '()()()'] },
    { input: [2], expected: ['(())', '()()'] },
    { input: [1], expected: ['()'] },
];

runTests('Task5: GenerateParentheses', generateParenthesis, testCases);