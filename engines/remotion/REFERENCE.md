# Remotion Engine Guide

## Best fit

Use Remotion when the project benefits from React-based composition, explicit dimensions and frame rate, frame-accurate timelines, reusable scene components, Studio preview, or programmatic video rendering.

## Project inspection

Before editing:

- inspect the existing package manifest and lockfile;
- confirm installed Remotion and related package versions;
- inspect composition registration and project scripts;
- preserve the user's existing structure and changes;
- consult the installed Remotion skill and matching version documentation.

Do not copy example code blindly from a different Remotion release.

## Composition and timeline

Define explicit composition dimensions, fps, and duration. Convert seconds to frames using the composition fps. Keep storyboard intent separate from React implementation where practical.

Use frame-derived animation values for deterministic seeking. Avoid wall-clock time and unseeded random values in frame-rendered compositions.

## Scene and component structure

Use components for meaningful visual units and sequences for timeline placement. Keep component responsibilities narrow. Do not make every object a reusable abstraction unless reuse or editability benefits the project.

Transitions must account for overlap and total composition duration. Do not add transition effects by default.

## Preview and render

Start with the smallest runnable composition. Use Studio for scrubbing and inspect key frames. Render the requested output using the project's configured script or a verified CLI invocation.

Check the exported file for missing assets, clipping, typography, timing, audio synchronization, and playback defects.

## License and distribution

Remotion and its associated packages have specific license terms. Review the current terms for the exact use case before redistributing or modifying Remotion code or packaging a derivative. Rendering a user's video with a framework is not the same as selling the framework's source.

## Existing BLI Motion resources

The legacy explainer guide is available at [references/remotion-production.md](../../references/remotion-production.md). The bundled Remotion markup skill is at [starter/.agents/skills/remotion-markup/SKILL.md](../../starter/.agents/skills/remotion-markup/SKILL.md).
