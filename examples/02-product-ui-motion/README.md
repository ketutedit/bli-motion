# Example 02 — Product UI Motion

A fictional Northstar login-to-dashboard sequence, designed to test the Product & UI Motion mode.

## Run

From the repository root:

```bash
cd starter
npm ci
npm run dev
```

Select **ProductLoginMotion** in Remotion Studio.

Render the MP4 with:

```bash
npm run render:ui
```

## What the example demonstrates

- Login form hierarchy and readable labels.
- A sign-in action with restrained press feedback.
- A short loading state.
- A transition into a fictional dashboard.
- A different visual language from the DNS explainer example.

The cursor is a visual cue in a rendered video, not a working form control. The dashboard content is illustrative.

## QA checklist

- [ ] Check form labels and values at 1920×1080.
- [ ] Inspect button press timing and loading-state visibility.
- [ ] Confirm login-to-dashboard transition does not overlap awkwardly.
- [ ] Check that the final dashboard remains readable.
- [ ] Render and play the full 12-second output.
- [ ] Check that the animation does not imply a real authentication service.
