import { runTests, TestCase } from '../test-runner';
import { wordBreak } from './solution';

const testCases: TestCase[] = [
    { input: ['catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']], expected: ['cat sand dog', 'cats and dog'] },
    { input: ['pineapplepenapple', ['apple', 'pen', 'applepen', 'pine', 'pineapple']], expected: ['pine apple pen apple', 'pine applepen apple', 'pineapple pen apple'] },
    { input: ['catsandog', ['cats', 'dog', 'sand', 'and', 'cat']], expected: [] },
];

runTests('Task19: WordBreakII', wordBreak, testCases);