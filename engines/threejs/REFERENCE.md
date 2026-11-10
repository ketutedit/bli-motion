# Three.js / React Three Fiber Renderer Guide

## Best fit

Use Three.js or React Three Fiber when depth, perspective, 3D camera movement, lighting, materials, spatial relationships, or real-time interaction materially improve the idea.

Do not choose 3D merely to make a project look more expensive. A well-designed 2D solution may be clearer, faster, and more distinctive.

## Scene planning

Define:

- camera type, framing, and movement;
- world scale and coordinate conventions;
- geometry and object hierarchy;
- material response and lighting;
- animation states and interaction;
- environment, background, and depth cues;
- performance and target hardware constraints.

Keep the focal object and intended action clear. Avoid adding complexity that does not improve the visual idea.

## Animation

Use explicit timelines, frame/time inputs, or state transitions according to the runtime. For deterministic video rendering, derive transforms from the timeline rather than accumulating per-frame mutations.

Use physically plausible movement when it supports the idea. Stylization and exaggeration are valid when they are deliberate and consistent.

## Assets and performance

Check model, texture, environment, font, and shader requirements. Optimize geometry, texture sizes, draw calls, and post-processing for the target environment.

## Verification

Inspect camera framing, clipping, z-fighting, lighting, material readability, shadow artifacts, and frame performance. Test on the actual target renderer and device class where possible.
