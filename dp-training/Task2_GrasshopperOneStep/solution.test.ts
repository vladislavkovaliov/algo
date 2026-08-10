import { runTests, TestCase } from '../test-runner';
import { grasshopperOneStep } from './solution';

const testCases: TestCase[] = [
    { input: [0], expected: 1 },
    { input: [1], expected: 1 },
    { input: [2], expected: 1 },
    { input: [3], expected: 1 },
    { input: [4], expected: 1 },
    { input: [10], expected: 1 },
    { input: [20], expected: 1 },
    { input: [30], expected: 1 },
    { input: [40], expected: 1 },
    { input: [45], expected: 1 },
];

runTests('Task2: GrasshopperOneStep', grasshopperOneStep, testCases);
