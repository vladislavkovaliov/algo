import { runTests, TestCase } from '../test-runner';
import { isCellReachableTwoCards } from './solution';

const testCases: TestCase[] = [
    { input: [5, 2, 3], expected: true },
    { input: [1, 2, 3], expected: false },
    { input: [7, 2, 5], expected: true },
    { input: [4, 2, 5], expected: true },
    { input: [3, 2, 5], expected: false },
    { input: [0, 2, 3], expected: true },
    { input: [8, 3, 5], expected: true },
    { input: [11, 3, 5], expected: true },
    { input: [4, 3, 5], expected: false },
    { input: [7, 3, 5], expected: false },
    { input: [10, 4, 6], expected: true },
    { input: [5, 4, 6], expected: false },
    { input: [12, 4, 6], expected: true },
    { input: [9, 2, 4], expected: false },
    { input: [20, 7, 11], expected: false },
    { input: [18, 7, 11], expected: true },
    { input: [14, 7, 11], expected: true },
    { input: [22, 7, 11], expected: true },
    { input: [1, 5, 10], expected: false },
    { input: [15, 5, 10], expected: true },
];

runTests('Task12: IsCellReachableTwoCards', isCellReachableTwoCards, testCases);
