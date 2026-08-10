import { runTests, TestCase } from '../test-runner';
import { numIslands } from './solution';

const testCases: TestCase[] = [
    { input: [[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]], expected: 1 },
    { input: [[["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]], expected: 3 },
    { input: [[["0"]]], expected: 0 },
    { input: [[["1"]]], expected: 1 },
];

runTests('Task1: NumberOfIslands', numIslands, testCases);
