# BLI Motion Benchmark Harness

This is a clean, minimal Remotion project for A/B/C comparison:

- **A:** same model without BLI Motion.
- **B:** same model with BLI Motion 0.2.0.
- **C:** same model with the BLI Motion 1.0 development branch.

## Keep the comparison fair

For every group, start from an identical fresh copy of this folder. Use the same model version, effort/settings, prompt, installed dependencies, project files, machine/runtime, and available assets. Do not carry source code or assets from one group's run into another.

The starter is deliberately a blank white composition. It contains no BLI Motion components, design presets, stock images, fonts, or sample animations.

## Setup

```bash
npm ci
npm run typecheck
npx remotion compositions src/index.ts
```

## Run a task

Each benchmark task states its target dimensions, frame rate, and duration. Update the `<Composition>` metadata in `src/Root.tsx` to match the task. Implement the work in `src/BenchmarkScene.tsx`.

Preview:

```bash
npm run dev
```

Render:

```bash
npm run render:benchmark
```

The output is `out/benchmark.mp4`.

## Evidence to keep

Save the exact prompt, model/settings, the skill version/commit, generated source, render, logs, and blind evaluation score. Use a new clean copy for each separate A/B/C trial.

A build or TypeScript pass is not a visual quality result. Review the exported video at full playback and inspect representative frames.
