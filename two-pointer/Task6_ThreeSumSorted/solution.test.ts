import { runTests, TestCase } from '../test-runner';
import { threeSumSorted } from './solution';

const testCases: TestCase[] = [
    // без дубликатов
    { input: [[1, 2, 3, 4, 5, 6], 9], expected: [[1, 2, 6], [1, 3, 5], [2, 3, 4]] },
    { input: [[0, 1, 2, 3, 4, 5], 6], expected: [[0, 1, 5], [0, 2, 4], [1, 2, 3]] },
    { input: [[1, 2, 3], 6], expected: [[1, 2, 3]] },
    { input: [[1, 2, 3], 7], expected: [] },
    { input: [[1, 3, 5, 7, 9], 15], expected: [[1, 5, 9], [3, 5, 7]] },
    { input: [[1, 2], 3], expected: [] },

    // с дубликатами — проверка пропуска i
    { input: [[1, 1, 2, 3], 6], expected: [[1, 2, 3]] },

    // с дубликатами — проверка пропуска left после нахождения тройки
    { input: [[1, 2, 2, 3, 4, 5, 6], 9], expected: [[1, 2, 6], [1, 3, 5], [2, 2, 5], [2, 3, 4]] },

    // с дубликатами — проверка пропуска left и right одновременно
    { input: [[1, 2, 2, 3, 4, 4, 5, 6], 9], expected: [[1, 2, 6], [1, 3, 5], [1, 4, 4], [2, 2, 5], [2, 3, 4]] },
];

runTests('Task6: ThreeSumSorted', threeSumSorted, testCases);
