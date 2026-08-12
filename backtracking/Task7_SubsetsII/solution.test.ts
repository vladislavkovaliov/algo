import { runTests, TestCase } from '../test-runner';
import { subsetsWithDup } from './solution';

const testCases: TestCase[] = [
    { input: [[1, 2, 2]], expected: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]] },
    { input: [[0]], expected: [[], [0]] },
    { input: [[1, 2, 3]], expected: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]] },
];

runTests('Task7: SubsetsII', subsetsWithDup, testCases);