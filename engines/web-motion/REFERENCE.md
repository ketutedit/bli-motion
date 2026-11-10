# HTML / CSS / GSAP Renderer Guide

## Best fit

Use for responsive browser layouts, UI and product motion, interactive motion posters, lightweight web animations, and experiences that benefit from DOM semantics or event-driven interaction.

## Design and implementation

- Build semantic structure before adding visual effects.
- Use CSS for layout, typography, responsive behavior, and simple transitions.
- Use GSAP timelines when sequencing, overlapping, orchestration, or complex easing benefits from a timeline.
- Use SVG within the DOM for vector paths, masks, and scalable illustrations.
- Separate content, state, and animation logic so the project remains editable.
- Prefer transform and opacity for frequent motion where practical.
- Keep UI motion tied to real interface states when the interaction is meant to be functional.

## Timing

Use one coherent timeline or explicit interaction state model. Avoid conflicting CSS animations and GSAP timelines controlling the same property unless ownership is deliberate.

For looping animations, define an intentional reset or periodic state and inspect the loop boundary in playback.

## Responsive and accessible behavior

Test the intended viewport sizes. Check overflow, text wrapping, focus states, hit areas, and reduced-motion behavior for interactive interfaces.

## Verification

Run the project's actual dev/build scripts. Inspect the result in a browser at target sizes and test relevant interactions. Do not infer browser behavior from static source review alone.
