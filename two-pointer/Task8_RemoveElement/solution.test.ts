import { runTests, TestCase } from '../test-runner';
import { removeElement } from './solution';

const testCases: TestCase[] = [
    { input: [[3, 2, 2, 3], 3], expected: 2 },
    { input: [[0, 1, 2, 2, 3, 0, 4, 2], 2], expected: 5 },
    { input: [[1], 1], expected: 0 },
    { input: [[1, 2, 3], 4], expected: 3 },
    { input: [[], 0], expected: 0 },
];

runTests('Task8: RemoveElement', removeElement, testCases);
