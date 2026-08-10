import { runTests, TestCase } from '../test-runner';
import { orangesRotting } from './solution';

const testCases: TestCase[] = [
    { input: [[[2, 1, 1], [1, 1, 0], [0, 1, 1]]], expected: 4 },
    { input: [[[2, 1, 1], [0, 1, 1], [1, 0, 1]]], expected: -1 },
    { input: [[[0, 2]]], expected: 0 },
    { input: [[[1, 1, 1], [1, 1, 1], [1, 1, 1]]], expected: -1 },
];

runTests('Task10: RottingOranges', orangesRotting, testCases);
