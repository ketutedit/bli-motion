# SVG / Canvas Renderer Guide

## Best fit

Use SVG for scalable vector composition, diagrams, labels, paths, masks, and relatively modest numbers of independently styled elements.

Use Canvas for procedural drawings, particle systems, large numbers of repeated marks, pixel operations, or scenes where direct drawing provides better performance.

## SVG guidance

- Use a consistent viewBox and coordinate system.
- Group related elements by semantic purpose.
- Use path drawing, clipping, masks, and transforms when they express the idea.
- Keep text accessible and verify font metrics in the target browser.
- Use stable identifiers for filters and reusable definitions to avoid collisions.
- Keep animation deterministic when frames must be reproducible.

## Canvas guidance

- Separate scene data from drawing routines.
- Clear and redraw deterministically for each frame when frame seeking is required.
- Use seeded randomness for reproducible generative layouts.
- Scale for device pixel ratio where browser output requires it.
- Avoid unnecessary full-canvas redraws in interactive environments when a smaller update is possible.

## Timing and export

For frame-based output, derive motion from a supplied frame/time value rather than accumulated state. For browser interaction, use explicit state and event handling.

Confirm whether the result needs a browser preview, image sequence, video capture, or integration into another renderer.

## Verification

Inspect actual frames at the target size. Check path clipping, text legibility, antialiasing, filter performance, and canvas scaling.
