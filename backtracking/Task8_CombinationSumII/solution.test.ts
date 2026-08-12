import { runTests, TestCase } from '../test-runner';
import { combinationSum2 } from './solution';

const testCases: TestCase[] = [
    { input: [[10, 1, 2, 7, 6, 1, 5], 8], expected: [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]] },
    { input: [[2, 5, 2, 1, 2], 5], expected: [[1, 2, 2], [5]] },
    { input: [[1, 2, 2], 4], expected: [[2, 2]] },
];

runTests('Task8: CombinationSumII', combinationSum2, testCases);