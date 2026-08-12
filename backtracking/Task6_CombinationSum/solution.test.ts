import { runTests, TestCase } from '../test-runner';
import { combinationSum } from './solution';

const testCases: TestCase[] = [
    { input: [[2, 3, 6, 7], 7], expected: [[2, 2, 3], [7]] },
    { input: [[2, 3, 5], 8], expected: [[2, 2, 2, 2], [2, 3, 3], [3, 5]] },
    { input: [[2], 3], expected: [] },
];

runTests('Task6: CombinationSum', combinationSum, testCases);