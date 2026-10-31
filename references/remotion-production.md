# Remotion Production Guide

This document describes how BLI Motion can target Remotion as one rendering backend. It is a technical production guide, not the creative direction system. The creative director must remain renderer-independent.

Primary source: https://github.com/remotion-dev/remotion and https://www.remotion.dev/docs/ai/skills.

## When to choose Remotion
Use Remotion when the project benefits from:
- React components for reusable visual systems,
- frame-accurate animation and deterministic seeking,
- compositions with explicit duration, frame rate, and dimensions,
- reusable scene components,
- previewing in Remotion Studio,
- automated rendering to a video file.

For simple one-file browser artwork, HTML/CSS/SVG/Canvas with GSAP may be a lighter option. Do not force every output into Remotion.

## Composition model
A Remotion project describes a video composition with explicit width, height, frames per second, duration in frames, and a React component tree.

Use scene components for meaningful units of the storyboard. Use sequences to position content on the timeline. Keep scene data and animation intent separate from renderer-specific JSX where practical.

A conceptual scene model should hold:
- scene ID and purpose,
- start frame and duration,
- visual elements,
- animation parameters,
- voiceover range,
- transition intent,
- source / asset metadata.

Convert seconds to frames using the composition FPS. Do not mix seconds and frames silently.

## Frame-driven animation
Use Remotion's frame-based model for seeking and rendering:
- useCurrentFrame() to read the current frame,
- useVideoConfig() for FPS and composition dimensions,
- interpolate() for mapping frame ranges to animated values,
- spring() when motion should have spring-like dynamics.

Clamp interpolation where values should remain within a defined range. Keep animation functions deterministic: a given frame and set of props should render the same result.

Check current Remotion documentation before writing code because APIs and package boundaries can change between versions.

## Scenes and transitions
Use reusable React components for scenes. For multi-scene timelines, use the recommended sequence structure and consider TransitionSeries from @remotion/transitions when a transition genuinely improves the edit.

A transition has timing consequences: adjacent scenes can overlap, which changes the total composition duration. Calculate the timeline after transition overlaps rather than simply summing scene lengths.

Do not add transitions by default to every scene boundary. Match cuts, object continuity, and direct cuts may be more appropriate.

## Audio and narration
Treat voiceover as a timeline asset:
- obtain the actual audio duration,
- align scene beats to spoken phrases,
- leave reading and comprehension holds,
- place music and sound effects at meaningful events,
- mix narration above background sound,
- avoid timing based only on the estimated length of the script when audio is available.

Use Remotion's current audio/media components and documentation for exact implementation details.

## Preview and rendering workflow
1. Create the smallest runnable composition.
2. Start Remotion Studio as early as practical so the visual can be reviewed while it is built.
3. Build the first scene and validate frame dimensions and typography.
4. Add remaining scenes and transitions.
5. Scrub key frames and inspect screenshots / contact sheets.
6. Render a preview or final output using the project's configured Remotion render command.
7. Inspect the exported file for clipping, missing assets, timing drift, audio sync, and compression artifacts.

A successful build is not visual approval. The final render must be reviewed.

## Renderer adapter principle
BLI Motion's storyboard should describe what the viewer sees and what changes over time. A Remotion adapter maps those instructions to React components, frame ranges, transitions, media components, and render settings.

Do not let the AI invent unsupported Remotion components or props. Consult the installed version documentation and Remotion Agent Skills before implementation.

## Licensing and commercial use
Remotion's repository has a special license rather than a conventional permissive open-source license. The current repository license describes a free tier for individuals and eligible small organizations, and a company license for some larger for-profit organizations. Review the latest terms for the actual project before commercial deployment.

The license also distinguishes using Remotion to create videos from copying or modifying Remotion code to sell or sublicense a derivative. Do not assume the source repository can be repackaged as a commercial product without checking the terms.
