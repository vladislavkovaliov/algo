import { runTests, TestCase } from '../test-runner';
import { canConstruct } from './solution';

const testCases: TestCase[] = [
    { input: ['a', 'b'], expected: false },
    { input: ['aa', 'ab'], expected: false },
    { input: ['aa', 'aab'], expected: true },
    { input: ['', 'anything'], expected: true },
    { input: ['abc', 'aabbcc'], expected: true },
];

runTests('Task3: RansomNote', canConstruct, testCases);
