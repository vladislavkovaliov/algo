import { runTests, TestCase } from '../test-runner';
import { permuteUnique } from './solution';

const testCases: TestCase[] = [
    { input: [[1, 1, 2]], expected: [[1, 1, 2], [1, 2, 1], [2, 1, 1]] },
    { input: [[1, 2, 2]], expected: [[1, 2, 2], [2, 1, 2], [2, 2, 1]] },
    { input: [[1]], expected: [[1]] },
];

runTests('Task9: PermutationsII', permuteUnique, testCases);