import { runTests, TestCase } from '../test-runner';
import { makesquare } from './solution';

const testCases: TestCase[] = [
    { input: [[1, 1, 2, 2, 2]], expected: true },
    { input: [[3, 3, 3, 3, 4]], expected: false },
    { input: [[1, 1, 1, 1]], expected: true },
];

runTests('Task17: MatchsticksToSquare', makesquare, testCases);