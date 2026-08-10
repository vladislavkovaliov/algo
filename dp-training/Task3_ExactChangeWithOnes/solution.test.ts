import { runTests, TestCase } from '../test-runner';
import { exactChangeWithOnes } from './solution';

const testCases: TestCase[] = [
    { input: [0], expected: 0 },
    { input: [1], expected: 1 },
    { input: [5], expected: 5 },
    { input: [12], expected: 12 },
    { input: [25], expected: 25 },
    { input: [43], expected: 43 },
    { input: [68], expected: 68 },
    { input: [71], expected: 71 },
    { input: [89], expected: 89 },
    { input: [100], expected: 100 },
];

runTests('Task3: ExactChangeWithOnes', exactChangeWithOnes, testCases);
