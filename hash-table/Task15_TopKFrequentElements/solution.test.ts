import { runTests, TestCase } from '../test-runner';
import { topKFrequent } from './solution';

const testCases: TestCase[] = [
    { input: [[1, 1, 1, 2, 2, 3], 2], expected: [1, 2] },
    { input: [[1], 1], expected: [1] },
    { input: [[1, 2], 2], expected: [1, 2] },
];

runTests('Task15: TopKFrequentElements', topKFrequent, testCases);
