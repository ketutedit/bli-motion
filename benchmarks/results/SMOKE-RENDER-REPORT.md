# Visual Smoke Render Report

## Run metadata

- **Workflow:** Validate Remotion Starter
- **Run:** https://github.com/ketutedit/bli-motion/actions/runs/42829507363
- **Branch:** bli-motion-1.0-dev
- **Commit:** d539041cf9e19ac08243c94edfb268ae263b5657
- **Result:** all three still renders completed and were uploaded as the `bli-motion-visual-smoke-tests` artifact.

## Inspected frames

### DNS explainer

- **Composition:** HowDnsWorks
- **Frame:** 260 of 450
- **Observation:** The browser domain field and DNS directory are visible. The example IP address is readable. The connector between browser request and resolver is visible. The destination server is intentionally scheduled later in the timeline, so it is not expected at this frame.
- **Note:** The composition is intentionally sparse and editorial. Full-sequence pacing, the server entrance, and the final hold still need playback review.

### Product UI

- **Composition:** ProductLoginMotion
- **Frame:** 240 of 360
- **Observation:** The dashboard state is visible. Main heading, status cards, task list, and product identity appear legible at 1920×1080 with no obvious overlap in this still.
- **Note:** The login and loading states, click timing, and transition need separate frame inspection or full playback.

### Abstract loop

- **Composition:** AbstractOrbitLoop
- **Frame:** 90 of 180
- **Observation:** The geometric forms are visible, balanced, and contained within the square frame. No obvious clipping is present in this still.
- **Note:** A still cannot prove loop continuity. Inspect frame 0 against frame 179 and play multiple consecutive loops before calling it seamless.

## What this verifies

- Remotion could discover the registered compositions.
- The TypeScript check and composition discovery steps passed in CI.
- Remotion could render a representative still from each of the three new composition types.
- Representative frames were visually inspected.

## What this does not verify

- Full MP4 renders or complete playback.
- Timing and motion quality across the entire timeline.
- Seamless loop continuity.
- Audio synchronization.
- The A/B/C benchmark comparison.
- Commercial clearance of assets or dependencies.

## Overall result

**Visual smoke test: passed. Production visual QA: still open.** The smoke frames show that the new examples render and have distinct art directions, but they are not a substitute for full playback review or blind benchmark trials.
