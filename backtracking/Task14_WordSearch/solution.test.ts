import { runTests, TestCase } from '../test-runner';
import { exist } from './solution';

const testCases: TestCase[] = [
    { input: [[["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"], expected: true },
    { input: [[["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "SEE"], expected: true },
    { input: [[["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCB"], expected: false },
    { input: [[["A", "B"], ["C", "D"]], "ABCD"], expected: false },
];

runTests('Task14: WordSearch', exist, testCases);