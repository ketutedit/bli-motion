# Visual Smoke Render Report

## Run metadata

- **Workflow:** Validate Remotion Starter
- **Run:** https://github.com/ketutedit/bli-motion/actions/runs/42905772562
- **Branch:** `bli-motion-1.0-dev`
- **Commit tested:** `43248abd0384bd0f842eb3fe8c172f4a236b2d92`
- **Result:** successful TypeScript check, composition discovery, four still renders, four full MP4 renders, and artifact uploads.
- **Artifacts:** `bli-motion-visual-smoke-tests` and `bli-motion-video-smoke-tests`.

## Inspected compositions

### DNS explainer

- **Composition:** `HowDnsWorks`
- **Format:** 1920×1080, 30 fps, 15 seconds
- **Sampled times:** 0.5s, 4s, 7s, 10s, 14.5s
- **Observation:** The opening establishes the question and browser domain. The DNS directory reveals the documentation-range IP address. The destination server and final relationship appear later in the timeline. Labels remain readable in the sampled frames and no major clipping is visible.
- **Still requiring review:** Full playback pacing and the final hold.

### Product UI

- **Composition:** `ProductLoginMotion`
- **Format:** 1920×1080, 30 fps, 12 seconds
- **Sampled times:** 0.5s, 3s, 5s, 7s, 9s, 11.5s
- **Observation:** The sequence includes the product intro, login form, loading state, and dashboard. The dashboard hierarchy, status cards, and task list remain legible in the sampled frames. No major overlap or clipping is visible.
- **Still requiring review:** Cursor timing, click feedback, and the full transition path in continuous playback.

### Abstract loop

- **Composition:** `AbstractOrbitLoop`
- **Format:** 1080×1080, 30 fps, 6 seconds
- **Sampled times:** 0s, 1.5s, 3s, 4.5s, 5.966s
- **Observation:** Geometric forms stay inside the frame. The visual grammar remains consistent while the orbiting forms change position and orientation.
- **Boundary check:** The decoded frame at 0s and the last frame at 5.966s were compared; the normalized mean absolute pixel difference was approximately 0.0066 (0–1 scale), and no large visual jump was apparent in the still comparison.
- **Still requiring review:** Play multiple consecutive cycles before describing the loop as seamless; a frame comparison alone cannot prove playback continuity.

### Motion primitives showcase

- **Composition:** `MotionPrimitivesShowcase`
- **Format:** 1920×1080, 30 fps, 8 seconds
- **Sampled times:** 0.5s, 2s, 4s, 6s, 7.5s
- **Observation:** The `Reveal`, `MotionShape`, and `ConnectorLine` primitives render with distinct reveal behaviors, configurable geometric forms, and a moving packet. The composition stays within the frame and provides a neutral component demonstration rather than a mandatory house style.
- **Still requiring review:** Full timing and easing in continuous playback.

## What this verifies

- The starter TypeScript check passed.
- Remotion discovered the registered compositions.
- Remotion rendered representative stills for all four compositions.
- Remotion rendered full MP4 files for all four compositions.
- The stills and MP4 files were uploaded as GitHub Actions artifacts.
- Representative frames extracted from the MP4s were visually inspected; no major clipping, blank output, or obvious element collision was found in the samples.

## What this does not verify

- A human review of every frame or uninterrupted full playback of all four videos.
- Seamless loop continuity across repeated playback.
- Audio synchronization or sound design.
- The A/B/C comparison against Claude without the skill and BLI Motion 0.2.0.
- Rendering quality for every specialist mode and every target renderer.
- Commercial clearance of third-party code, sample media, fonts, icons, audio, or other assets.

## Overall result

**Smoke build and render: passed. Sample-frame visual review: passed. Production visual QA: still open.**

The four compositions render and demonstrate different visual directions. This is evidence that the examples and current starter work technically; it is not evidence yet that BLI Motion 1.0 consistently outperforms the base model or is ready for commercial release.
