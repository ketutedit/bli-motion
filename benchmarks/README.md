# BLI Motion Benchmark Program

## Purpose

Measure whether BLI Motion improves creative and technical outcomes over the same model working without the skill. The benchmark is designed to detect regressions as well as improvements.

## Comparison groups

- **A — Baseline:** model without BLI Motion.
- **B — Current:** model with BLI Motion 0.2.0.
- **C — Candidate:** model with the current 1.0 development branch.

Use the same model version, model settings, effort level, prompt, blank project, dependencies, asset availability, renderer version, and execution environment wherever possible. Record unavoidable differences. Do not give one group extra prebuilt visual components, assets, or implementation help.

Run more than one trial per task when feasible. One attractive result is not sufficient evidence.

## Shared project harness

Use the clean [Remotion benchmark harness](harness/README.md) for all three groups. It has a blank canvas, a pinned dependency graph, and no BLI Motion visual components or sample assets. Start every group and every trial from an identical fresh copy.

The task prompt defines the dimensions, fps, duration, and content. Adjust the composition metadata in the harness to match the task before implementing the scene.

## Fixed task suite

Use the exact prompts and delivery constraints in these files:

1. [Product and UI motion](tasks/01-product-ui.md)
2. [Brand and logo reveal](tasks/02-brand-reveal.md)
3. [Kinetic typography](tasks/03-kinetic-typography.md)
4. [Abstract seamless loop](tasks/04-abstract-loop.md)
5. [Educational explainer](tasks/05-explainer.md)
6. [Infographic and data motion](tasks/06-infographic.md)

Runnable examples in the main starter provide additional reference work, not benchmark starter assets:

- [DNS explainer](../examples/01-how-dns-works/README.md)
- [Product UI motion](../examples/02-product-ui-motion/README.md)
- [Abstract orbit loop](../examples/03-abstract-orbit-loop/README.md)

All benchmark tasks use the same Remotion environment for comparability. Renderer selection across different technologies can be evaluated later as a separate experiment.

## Blind review

When possible, hide which comparison group produced each output. Review actual rendered output rather than descriptions or source code alone.

Score each dimension from 1 to 5 using [scoring-rubric.md](scoring-rubric.md):

- brief fit;
- creative specificity and originality;
- art direction and composition;
- motion quality;
- readability and communication;
- continuity and timing;
- technical reliability;
- production efficiency.

Record critical failures separately. A severe factual, legibility, or rendering failure cannot be concealed by a high average score.

## Evidence to retain

For each trial, retain:

- model and settings;
- exact prompt and context;
- skill version and commit;
- renderer and dependency versions;
- generated source;
- rendered output or representative frames;
- build/render logs;
- scores and reviewer notes.

## Release gate

Do not claim BLI Motion 1.0 is better solely because it has more instructions or files. Release claims must be supported by repeatable comparisons showing meaningful improvements without unacceptable regressions in speed, reliability, or creative diversity.

The benchmark suite defines the measurement protocol; tests are not complete until outputs have actually been generated, rendered, and reviewed.
