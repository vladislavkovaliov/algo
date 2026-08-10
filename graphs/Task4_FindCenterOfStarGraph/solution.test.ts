import { runTests, TestCase } from '../test-runner';
import { findCenter } from './solution';

const testCases: TestCase[] = [
    { input: [[[1, 2], [2, 3], [4, 2]]], expected: 2 },
    { input: [[[1, 2], [5, 1], [1, 3], [1, 4]]], expected: 1 },
    { input: [[[1, 2], [2, 3]]], expected: 2 },
];

runTests('Task4: FindCenterOfStarGraph', findCenter, testCases);
