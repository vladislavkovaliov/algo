import { runTests, TestCase } from '../test-runner';
import { containsNearbyDuplicate } from './solution';

const testCases: TestCase[] = [
    { input: [[1, 2, 3, 1], 3], expected: true },
    { input: [[1, 0, 1, 1], 1], expected: true },
    { input: [[1, 2, 3, 1, 2, 3], 2], expected: false },
    { input: [[1], 1], expected: false },
    { input: [[1, 2, 1], 1], expected: false },
];

runTests('Task6: ContainsNearbyDuplicate', containsNearbyDuplicate, testCases);
