import { runTests, TestCase } from '../test-runner';
import { majorityElement } from './solution';

const testCases: TestCase[] = [
    { input: [[3, 2, 3]], expected: 3 },
    { input: [[2, 2, 1, 1, 1, 2, 2]], expected: 2 },
    { input: [[1]], expected: 1 },
    { input: [[6, 5, 5]], expected: 5 },
];

runTests('Task6: MajorityElement', majorityElement, testCases);
