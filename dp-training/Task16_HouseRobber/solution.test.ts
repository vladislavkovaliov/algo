import { runTests, TestCase } from '../test-runner';
import { houseRobber } from './solution';

const testCases: TestCase[] = [
    { input: [[1, 2, 3, 1]], expected: 4 },
    { input: [[2, 7, 9, 3, 1]], expected: 12 },
    { input: [[1]], expected: 1 },
    { input: [[2, 1]], expected: 2 },
    { input: [[1, 2]], expected: 2 },
    { input: [[2, 1, 1, 2]], expected: 4 },
    { input: [[0]], expected: 0 },
    { input: [[5, 5, 10, 100, 10, 5]], expected: 110 },
    { input: [[1, 3, 1, 3, 100]], expected: 103 },
    { input: [[4, 1, 2, 7, 5, 3, 1]], expected: 14 },
];

runTests('Task16: HouseRobber', houseRobber, testCases);
