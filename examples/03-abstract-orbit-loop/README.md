# Example 03 — Abstract Orbit Loop

A procedural geometric composition designed to demonstrate a coherent abstract visual grammar and deterministic loop timing.

## Run

From the repository root:

```bash
cd starter
npm ci
npm run dev
```

Select **AbstractOrbitLoop** in Remotion Studio.

Render the MP4 with:

```bash
npm run render:abstract
```

## What the example demonstrates

- A restrained palette and limited shape vocabulary.
- Orbiting forms driven by frame-derived trigonometric functions.
- No unseeded random values or wall-clock animation.
- A 180-frame cycle at 30 fps.

## QA checklist

- [ ] Render the MP4 and inspect playback.
- [ ] Compare frame 0 with frame 179 and check visual continuity.
- [ ] Play multiple consecutive loops and check for visible jumps.
- [ ] Inspect aliasing, clipping, and shape overlap.
- [ ] Confirm render output is deterministic when rendering the same frame twice.
