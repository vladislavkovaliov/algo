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
    let passed = 0;
    let failed = 0;

    console.log(`\n${'='.repeat(60)}`);
    console.log(`Testing: ${testName}`);
    console.log('='.repeat(60));

    for (let i = 0; i < testCases.length; i++) {
        const tc = testCases[i];
        try {
            const result = fn(...tc.input);
            const isPass = deepEqual(result, tc.expected);

            if (isPass) {
                passed++;
                console.log(`  [PASS] Case #${i + 1}: ${JSON.stringify(tc.input)} => ${JSON.stringify(result)}`);
            } else {
                failed++;
                console.log(`  [FAIL] Case #${i + 1}: ${JSON.stringify(tc.input)}`);
                console.log(`         Expected: ${JSON.stringify(tc.expected)}`);
                console.log(`         Got:      ${JSON.stringify(result)}`);
            }
        } catch (e) {
            failed++;
            console.log(`  [ERROR] Case #${i + 1}: ${JSON.stringify(tc.input)}`);
            console.log(`          ${e instanceof Error ? e.message : String(e)}`);
        }
    }

    console.log('-'.repeat(60));
    console.log(`Results: ${passed} passed, ${failed} failed, ${testCases.length} total`);
    console.log('='.repeat(60));

    if (failed > 0) {
        process.exit(1);
    }
}
