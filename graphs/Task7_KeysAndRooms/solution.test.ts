import { runTests, TestCase } from '../test-runner';
import { canVisitAllRooms } from './solution';

const testCases: TestCase[] = [
    { input: [[[1], [2], [3], []]], expected: true },
    { input: [[[1, 3], [3, 0, 1], [2], [0]]], expected: true },
    { input: [[[1], [], [0, 3], [1]]], expected: false },
    { input: [[[[]]]], expected: true },
];

runTests('Task7: KeysAndRooms', canVisitAllRooms, testCases);
