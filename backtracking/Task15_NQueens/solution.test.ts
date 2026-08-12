import { runTests, TestCase } from '../test-runner';
import { solveNQueens } from './solution';

const testCases: TestCase[] = [
    { input: [4], expected: [[".Q..", "...Q", "Q...", "..Q."], ["..Q.", "Q...", "...Q", ".Q.."]] },
    { input: [1], expected: [["Q"]] },
];

runTests('Task15: NQueens', solveNQueens, testCases);