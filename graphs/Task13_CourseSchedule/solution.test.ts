import { runTests, TestCase } from '../test-runner';
import { canFinish } from './solution';

const testCases: TestCase[] = [
    { input: [2, [[1, 0]]], expected: true },
    { input: [2, [[1, 0], [0, 1]]], expected: false },
    { input: [4, [[1, 0], [2, 1], [3, 2]]], expected: true },
    { input: [4, [[1, 0], [2, 1], [1, 2]]], expected: false },
];

runTests('Task13: CourseSchedule', canFinish, testCases);
