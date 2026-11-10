# Running the BLI Motion A/B/C Benchmark

This guide explains how to compare the model's own motion-design ability with BLI Motion 0.2.0 and the 1.0 development branch.

## Conditions

- **A — Baseline:** no BLI Motion skill is loaded.
- **B — 0.2.0:** load the existing skill from the repository's main branch.
- **C — 1.0 development:** load the skill from branch `bli-motion-1.0-dev`.

Use the same model version, effort level, other settings, tool access, operating environment, Node version, Remotion version, and external reference skills for all conditions. Record any setting that cannot be held constant.

## Prepare three clean copies

For each task and each trial:

1. Make three fresh copies of `benchmarks/harness/`.
2. Do not copy files, components, assets, code, or prior outputs between the three copies.
3. In each copy, update the composition metadata in `src/Root.tsx` to match the task's aspect ratio, dimensions, fps, and duration.
4. Use the same exact task prompt from `benchmarks/tasks/`.
5. Run each condition in a clean conversation/context so no prior solution leaks into the next condition.

## Load the skill correctly

For A, do not load BLI Motion or paste its instructions into the prompt.

For B, load the complete BLI Motion 0.2.0 skill and its required local references from `main`.

For C, load the complete BLI Motion 1.0 development skill and its required local references from `bli-motion-1.0-dev`.

Do not mix BLI Motion 0.2.0 and 1.0 instructions in one run. Do not load the development skill for A or B.

If a separate Remotion Agent Skill or other tool-specific skill is used, make it available in the same version and configuration for A, B, and C. It must not be available only to one condition.

## Run one task

1. Read the task prompt exactly as written.
2. Let the model implement the composition in `src/BenchmarkScene.tsx` and update `src/Root.tsx` only as needed for the required metadata.
3. Do not add external assets, fonts, images, or packages unless the task explicitly permits them.
4. Run `npm ci` and `npm run typecheck`.
5. Run `npx remotion compositions src/index.ts`.
6. Render the video with `npm run render:benchmark`.
7. Play the full video and inspect representative frames.
8. Save the generated source, rendered MP4, logs, exact model/settings, and skill commit.

Allow the model the same number of retries and the same amount of manual intervention in each condition. Record every retry or human edit.

## Blind review

Rename the three output files with neutral random identifiers before reviewing them. Do not reveal A/B/C to the reviewer until scoring is complete.

Use [scoring-rubric.md](scoring-rubric.md) and fill out one [result report](results/REPORT-TEMPLATE.md) per condition and trial.

## Recommended repetitions

Run at least three independent trials per condition for each task before drawing conclusions. If time is limited, begin with one task across A/B/C, inspect the result, then expand the test suite. A single output is exploratory evidence, not proof.

## Interpretation

Compare individual dimensions, critical failures, time/effort, and creative diversity. Do not treat one average score as the whole result.

BLI Motion should only be described as an improvement when the gains are repeatable and do not come at an unacceptable cost in originality, technical reliability, or production effort.
