import { runTests, TestCase } from '../test-runner';
import { nearestExit } from './solution';

const testCases: TestCase[] = [
    { input: [[["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], [1, 2]], expected: 1 },
    { input: [[["+","+","+"],[".",".","."],["+","+","+"]], [1, 0]], expected: 2 },
    { input: [[[".","+"]], [0, 0]], expected: -1 },
];

runTests('Task9: NearestExitFromMaze', nearestExit, testCases);
