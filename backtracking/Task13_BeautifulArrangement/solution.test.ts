import { runTests, TestCase } from '../test-runner';
import { countArrangement } from './solution';

const testCases: TestCase[] = [
    { input: [1], expected: 1 },
    { input: [2], expected: 2 },
    { input: [3], expected: 3 },
    { input: [15], expected: 24679 },
];

runTests('Task13: BeautifulArrangement', countArrangement, testCases);