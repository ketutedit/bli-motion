---
name: bli-motion-abstract
description: "Specialist guidance for abstract, generative, procedural, and seamless-loop motion graphics."
---

# Abstract & Experimental Motion Mode

## Load when

The task is non-literal or form-led: abstract shapes, generative graphics, procedural motion, visual experiments, atmospheric loops, or non-representational brand visuals.

## Establish a visual grammar

Define a small set of rules that make the work coherent:

- shape families and their relationships;
- geometry, scale, proportion, and negative space;
- color and material behavior;
- forces or rules governing movement;
- rhythm, density, and variation;
- camera and depth behavior;
- transformation rules and visual hierarchy.

A coherent system creates richer results than random effects layered together.

## Explore form and motion

Consider growth, folding, morphing, orbiting, subdivision, attraction/repulsion, fluid flow, repetition, erosion, collision, emergence, and controlled randomness. Select behaviors that create the intended feeling.

Use randomness deliberately. Seed procedural variation when deterministic frame rendering or reproducibility is required.

## Loop design

For a seamless loop:

- define the loop duration and frame rate;
- plan how the final state connects to the initial state;
- use periodic motion, cyclic transformations, or a designed reset;
- inspect the actual boundary in playback;
- check that particles, camera, lighting, and background do not visibly jump.

Do not claim seamlessness after inspecting only a still frame.

## Technical choices

Use SVG for vector forms, Canvas for high-volume procedural drawing, WebGL/Three.js for spatial work, or Remotion for rendered frame-based compositions when appropriate. Choose based on complexity, performance, editability, and output requirements.

## Quality check

Does the piece have a recognizable visual grammar? Is variation intentional? Is motion interesting without becoming noisy? Does the loop or final state resolve cleanly?
