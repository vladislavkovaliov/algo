import { runTests, TestCase } from '../test-runner';
import { partitionLabels } from './solution';

const testCases: TestCase[] = [
    { input: ['ababcbacadefegdehijhklij'], expected: [9, 7, 8] },
    { input: ['eccbbbbdec'], expected: [10] },
    { input: ['a'], expected: [1] },
    { input: ['abcdef'], expected: [1, 1, 1, 1, 1, 1] },
];

runTests('Task20: PartitionLabels', partitionLabels, testCases);
