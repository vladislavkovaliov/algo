import { runTests, TestCase } from '../test-runner';
import { countIncreasingSequences } from './solution';

const testCases: TestCase[] = [
    { input: [[1, 2, 3]], expected: [0, 1, 2] },
    { input: [[3, 2, 1]], expected: [0, 0, 0] },
    { input: [[1, 1, 1]], expected: [0, 0, 0] },
    { input: [[10, 9, 2, 5, 3, 7, 101, 18]], expected: [0, 0, 0, 1, 1, 3, 6, 6] },
    { input: [[1]], expected: [0] },
    { input: [[5, 1, 3, 2, 4]], expected: [0, 0, 1, 1, 3] },
    { input: [[2, 2, 2]], expected: [0, 0, 0] },
];

runTests('Task21: CountIncreasingSequences', countIncreasingSequences, testCases);
