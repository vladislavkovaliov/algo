import { runTests, TestCase } from '../test-runner';
import { partition } from './solution';

const testCases: TestCase[] = [
    { input: ['aab'], expected: [['a', 'a', 'b'], ['aa', 'b']] },
    { input: ['a'], expected: [['a']] },
    { input: ['aaa'], expected: [['a', 'a', 'a'], ['a', 'aa'], ['aa', 'a'], ['aaa']] },
];

runTests('Task10: PalindromePartitioning', partition, testCases);