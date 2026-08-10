import { runTests, TestCase } from '../test-runner';
import { minCostClimbingStairs } from './solution';

const testCases: TestCase[] = [
    { input: [[10, 15, 20]], expected: 15 },
    { input: [[1, 100, 1, 1, 1, 100, 1, 1, 100, 1]], expected: 6 },
    { input: [[0, 0, 0, 0]], expected: 0 },
    { input: [[5]], expected: 5 },
    { input: [[1, 2]], expected: 1 },
    { input: [[10, 15, 20, 25]], expected: 30 },
    { input: [[1, 100, 1, 1]], expected: 2 },
    { input: [[2, 5, 3, 1, 7]], expected: 6 },
];

runTests('Task13: MinCostClimbingStairs', minCostClimbingStairs, testCases);
