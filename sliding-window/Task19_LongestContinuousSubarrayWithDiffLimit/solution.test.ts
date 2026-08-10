import { runTests, TestCase } from '../test-runner';
import { longestContinuousSubarrayWithDiffLimit } from './solution';

const testCases: TestCase[] = [
    { input: [[8, 2, 4, 7], 4], expected: 2 },
    { input: [[10, 1, 2, 4, 7, 2], 5], expected: 4 },
    { input: [[4, 2, 2, 2, 4, 4, 2, 2], 0], expected: 3 },
    { input: [[1], 1], expected: 1 },
    { input: [[1, 5, 6, 7, 8, 10], 4], expected: 3 },
];

runTests('Task19: LongestContinuousSubarrayWithDiffLimit', longestContinuousSubarrayWithDiffLimit, testCases);
