import { runTests, TestCase } from '../test-runner';
import { allPathsSourceTarget } from './solution';

const testCases: TestCase[] = [
    { input: [[[1, 2], [3], [3], []]], expected: [[0, 1, 3], [0, 2, 3]] },
    { input: [[[1], []]], expected: [[0, 1]] },
    { input: [[[1, 2, 3], [2], [3], []]], expected: [[0, 1, 2, 3], [0, 2, 3], [0, 3]] },
];

runTests('Task12: AllPathsFromSourceToTarget', allPathsSourceTarget, testCases);
