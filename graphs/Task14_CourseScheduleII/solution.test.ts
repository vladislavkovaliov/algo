import { runTests, TestCase } from '../test-runner';
import { findOrder } from './solution';

const testCases: TestCase[] = [
    { input: [2, [[1, 0]]], expected: [0, 1] },
    { input: [2, [[1, 0], [0, 1]]], expected: [] },
    { input: [4, [[1, 0], [2, 1], [3, 2]]], expected: [0, 1, 2, 3] },
    { input: [1, []], expected: [0] },
];

runTests('Task14: CourseScheduleII', findOrder, testCases);
