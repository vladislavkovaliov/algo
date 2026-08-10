import { runTests, TestCase } from '../test-runner';
import { frequencySort } from './solution';

const testCases: TestCase[] = [
    { input: ['tree'], expected: 'eetr' },
    { input: ['cccaaa'], expected: 'cccaaa' },
    { input: ['Aabb'], expected: 'bbAa' },
    { input: [''], expected: '' },
];

runTests('Task16: SortCharactersByFrequency', frequencySort, testCases);
