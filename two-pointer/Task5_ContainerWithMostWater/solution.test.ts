import { runTests, TestCase } from '../test-runner';
import { containerWithMostWater } from './solution';

const testCases: TestCase[] = [
    { input: [[1, 8, 6, 2, 5, 4, 8, 3, 7]], expected: 49 },
    { input: [[1, 1]], expected: 1 },
    { input: [[4, 3, 2, 1, 4]], expected: 16 },
    { input: [[1, 2, 1]], expected: 2 },
    { input: [[1, 2, 3, 4, 5]], expected: 6 },
];

runTests('Task5: ContainerWithMostWater', containerWithMostWater, testCases);
