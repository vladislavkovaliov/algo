import { test } from 'node:test';
import assert from 'node:assert/strict';

export function deepEqual(a: unknown, b: unknown): boolean {
    if (a === b) return true;
    if (a === null || b === null) return false;
    if (typeof a !== typeof b) return false;

    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
            if (!deepEqual(a[i], b[i])) return false;
        }
        return true;
    }

    if (typeof a === 'object') {
        const keysA = Object.keys(a).sort();
        const keysB = Object.keys(b as object).sort();
        if (keysA.length !== keysB.length) return false;
        for (const key of keysA) {
            if (!deepEqual((a as Record<string, unknown>)[key], (b as Record<string, unknown>)[key])) return false;
        }
        return true;
    }

    return false;
}

export interface TestCase {
    input: unknown[];
    expected: unknown;
}

export function runTests(testName: string, fn: (...args: unknown[]) => unknown, testCases: TestCase[]): void {
    test(testName, async (t) => {
        for (let i = 0; i < testCases.length; i++) {
            const tc = testCases[i];
            await t.test(`Case #${i + 1}: ${JSON.stringify(tc.input)}`, () => {
                assert.deepStrictEqual(fn(...tc.input), tc.expected);
            });
        }
    });
}
