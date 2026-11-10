# BLI Motion Benchmark Program

## Purpose

Measure whether BLI Motion improves creative and technical outcomes over the same model working without the skill. The benchmark is designed to detect regressions as well as improvements.

## Comparison groups

- **A — Baseline:** model without BLI Motion.
- **B — Current:** model with BLI Motion 0.2.0.
- **C — Candidate:** model with the current 1.0 development branch.

Use the same model version, model settings, effort level, prompt, project files, asset availability, renderer version, and execution environment wherever possible. Record unavoidable differences.

Run more than one trial per task when feasible. One attractive result is not sufficient evidence.

## Initial task families

1. Product/UI animation.
2. Brand and logo reveal.
3. Kinetic typography.
4. Abstract seamless loop.
5. Educational explainer.
6. Infographic and data visualization.

Each task should include a brief, fixed user prompt, required deliverable, and objective constraints. Do not write prompts that contain the hidden answer or favor a particular skill.

## Blind review

When possible, hide which comparison group produced each output. Review actual rendered output rather than descriptions or source code alone.

Score each dimension from 1 to 5:

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

The benchmark suite itself is a measurement framework; tests are not complete until outputs have actually been generated and reviewed.
