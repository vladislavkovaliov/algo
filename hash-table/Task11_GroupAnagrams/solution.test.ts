import { runTests, TestCase } from '../test-runner';
import { groupAnagrams } from './solution';

const testCases: TestCase[] = [
    { input: [['eat', 'tea', 'tan', 'ate', 'nat', 'bat']], expected: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']] },
    { input: [['']], expected: [['']] },
    { input: [['a']], expected: [['a']] },
];

runTests('Task11: GroupAnagrams', groupAnagrams, testCases);
