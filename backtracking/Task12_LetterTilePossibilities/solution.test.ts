import { runTests, TestCase } from '../test-runner';
import { numTilePossibilities } from './solution';

const testCases: TestCase[] = [
    { input: ['AAB'], expected: 8 },
    { input: ['AAABBC'], expected: 188 },
    { input: ['A'], expected: 1 },
];

runTests('Task12: LetterTilePossibilities', numTilePossibilities, testCases);