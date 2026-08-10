# DP Training — AGENTS.md

## Project structure

```
dp/                     # root
├── dp-training/        # 20 DP algorithm tasks (Task1_CountUp … Task20_LongestIncreasingSubsequence)
│   ├── test-runner.ts  # custom lightweight test runner (no Jest/Vitest)
│   └── TaskN_xxx/
│       ├── solution.ts
│       └── solution.test.ts
├── two-pointer/        # 2 two-pointer tasks
│   ├── test-runner.ts  # same pattern, copy
│   └── TaskN_xxx/
└── config.md           # spec for auto-generating DP tasks (outdated numbering vs actual dirs)
```

## Key facts

- **Not a standard test framework.** Tests use a custom `runTests()` / `TestCase` helper. Run with `tsx`, not `jest`/`vitest`/`node`.
- **Commands** are per-task scripts in `package.json`:
  - `npm run test:N` — run a single DP task (`N` = 1–20)
  - `npm run test:tp:N` — run a single two-pointer task (`N` = 1–20)
  - `npm run test:all` — run all 20 DP tasks sequentially
  - `npm run test:tp:all` — run all 20 two-pointer tasks sequentially
- **tsconfig** has `rootDir: "dp-training"` / `include: ["dp-training/**/*.ts"]`. Two-pointer files are outside this scope — `tsx` still runs them fine at runtime; `tsc` may complain.
- **No linter, no formatter, no CI** configured.
- **Writing a new task**: create `TaskN_Name/` with a `solution.ts` (export the function) and `solution.test.ts` (import `runTests` from `../test-runner`), then add the script to `package.json`.
- **Deps**: only `typescript` + `tsx` (dev). Run with `npm install`.

## Testing pattern (both modules)

```ts
import { runTests, TestCase } from '../test-runner';
import { myFunc } from './solution';

const testCases: TestCase[] = [
  { input: [arg1, arg2], expected: result },
];
runTests('TaskN: Name', myFunc, testCases);
```
