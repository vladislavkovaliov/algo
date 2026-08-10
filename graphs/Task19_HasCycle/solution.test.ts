import { runTests, TestCase } from '../test-runner';
import { hasCycle } from './solution';

const testCases: TestCase[] = [
    { input: [3, [[0, 1], [1, 2]]], expected: false },
    { input: [3, [[0, 1], [1, 2], [2, 0]]], expected: true },
    { input: [4, [[0, 1], [1, 2], [2, 3], [1, 3]]], expected: false },
    { input: [2, [[0, 1], [1, 0]]], expected: true },
];

runTests('Task19: HasCycle', hasCycle, testCases);
