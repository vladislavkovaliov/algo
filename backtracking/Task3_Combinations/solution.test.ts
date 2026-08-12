import { runTests, TestCase } from '../test-runner';
import { combine } from './solution';

const testCases: TestCase[] = [
    { input: [4, 2], expected: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]] },
    { input: [3, 1], expected: [[1], [2], [3]] },
    { input: [5, 3], expected: [[1, 2, 3], [1, 2, 4], [1, 2, 5], [1, 3, 4], [1, 3, 5], [1, 4, 5], [2, 3, 4], [2, 3, 5], [2, 4, 5], [3, 4, 5]] },
];

runTests('Task3: Combinations', combine, testCases);