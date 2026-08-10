import { runTests, TestCase } from '../test-runner';
import { firstUniqChar } from './solution';

const testCases: TestCase[] = [
    { input: ['leetcode'], expected: 0 },
    { input: ['loveleetcode'], expected: 2 },
    { input: ['aabb'], expected: -1 },
    { input: ['a'], expected: 0 },
    { input: [''], expected: -1 },
];

runTests('Task4: FirstUniqueCharacter', firstUniqChar, testCases);
