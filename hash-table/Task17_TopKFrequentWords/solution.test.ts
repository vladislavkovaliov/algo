import { runTests, TestCase } from '../test-runner';
import { topKFrequentWords } from './solution';

const testCases: TestCase[] = [
    { input: [['i', 'love', 'leetcode', 'i', 'love', 'coding'], 2], expected: ['i', 'love'] },
    { input: [['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'], 4], expected: ['the', 'is', 'sunny', 'day'] },
    { input: [['a', 'aa', 'aaa'], 1], expected: ['a'] },
];

runTests('Task17: TopKFrequentWords', topKFrequentWords, testCases);
