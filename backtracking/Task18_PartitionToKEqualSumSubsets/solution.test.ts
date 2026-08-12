import { runTests, TestCase } from '../test-runner';
import { canPartitionKSubsets } from './solution';

const testCases: TestCase[] = [
    { input: [[4, 3, 2, 3, 5, 2, 1], 4], expected: true },
    { input: [[1, 2, 3, 4], 3], expected: false },
    { input: [[1, 1, 1], 1], expected: true },
];

runTests('Task18: PartitionToKEqualSumSubsets', canPartitionKSubsets, testCases);