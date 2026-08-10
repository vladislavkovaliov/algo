import { runTests, TestCase } from '../test-runner';
import { squaresOfSortedArray } from './solution';

const testCases: TestCase[] = [
    { input: [[-4, -1, 0, 3, 10]], expected: [0, 1, 9, 16, 100] },
    { input: [[-7, -3, 2, 3, 11]], expected: [4, 9, 9, 49, 121] },
    { input: [[1, 2, 3]], expected: [1, 4, 9] },
    { input: [[-5, -4, -3]], expected: [9, 16, 25] },
    { input: [[0]], expected: [0] },
];

runTests('Task19: SquaresOfSortedArray', squaresOfSortedArray, testCases);
