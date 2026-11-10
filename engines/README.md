# Motion Renderer and Adapter Registry

BLI Motion keeps creative decisions independent from renderer-specific implementation. Select an engine after understanding the desired result, available project, editability needs, performance, and delivery format.

## Selection guide

| Engine | Choose when | Consider alternatives when |
|---|---|---|
| HTML / CSS / GSAP | Browser motion, UI states, web-based posters, lightweight interactive work | Frame-accurate rendered video or complex 3D is central |
| SVG / Canvas | Vector diagrams, paths, procedural drawings, particle or pixel systems | DOM semantics, video timelines, or full 3D scene management matter more |
| Remotion | Frame-accurate React video compositions, timeline-based scenes, programmatic rendering | A simple loop or a small browser interaction can be built with less overhead |
| Three.js / React Three Fiber | 3D scenes, camera, lighting, materials, and interactive spatial work | A flat vector or 2D composition communicates better |
| After Effects | An AE-native editable project, expressions, scripts, or established motion-design handoff | The user needs a web-native or code-rendered output instead |

These are decision aids, not hard limits. Use a user's existing project and renderer conventions when possible.

## Adapter contract

Every engine guide should explain:

1. supported project shape and prerequisites;
2. how time, frames, states, and interactions are represented;
3. asset, font, and media handling;
4. motion implementation patterns and known constraints;
5. preview, export, and verification steps;
6. relevant license and distribution checks.

Do not invent installed packages, APIs, renderer features, or successful output. Check project files and exact dependency versions before implementation.

## Creative independence

The storyboard, style brief, or motion specification should describe what the viewer sees and experiences. Engine adapters translate that intent into code and timeline structures; they must not dictate the art direction.

## Verification

Use the real target environment when available. A source-code review is not a build check, a build check is not a visual preview, and a preview still is not a full playback review.

## Current guides

- [HTML / GSAP](web-motion/REFERENCE.md)
- [SVG / Canvas](svg-canvas/REFERENCE.md)
- [Remotion](remotion/REFERENCE.md)
- [Three.js / React Three Fiber](threejs/REFERENCE.md)
- [After Effects](after-effects/REFERENCE.md)
