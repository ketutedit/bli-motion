# Creative Direction — Decide Before You Animate

> This document remains as a detailed companion to the BLI Motion 0.2.0 explainer references. For the universal 1.0 system, use [core/creative-intelligence.md](../core/creative-intelligence.md) and [core/art-direction.md](../core/art-direction.md) as the primary guidance.

## Purpose

Turn a subject and brief into a distinctive visual idea before choosing layouts, colors, effects, or code. Creative direction should come from the user's intent, subject, audience, and context—not from whichever starter file or visual reference was opened most recently.

## Useful creative decisions

Select the decisions relevant to the project:

1. **Core intent:** What should the viewer understand, feel, notice, or do?
2. **Audience:** What do they already know, and what may confuse them?
3. **Emotional tone:** Curious, urgent, warm, playful, authoritative, mysterious, optimistic, or another specific feeling.
4. **Visual device:** A metaphor, journey, transformation, character, comparison, interface state, system map, timeline, data story, typographic treatment, or abstract form.
5. **Visual language:** Shape vocabulary, color roles, typography, image/material treatment, texture, depth, and camera behavior.
6. **Motion language:** How information enters, changes, connects, reacts, and leaves.
7. **Signature moment:** A memorable visual or motion event that expresses the idea rather than decorating it.

Not every project needs every decision. A small UI interaction does not need an explainer narrative, and a seamless abstract loop does not need a voiceover structure.

## Explore concepts proportionally

For non-trivial work, consider multiple genuinely different visual directions internally. Choose the strongest direction using relevance, originality, clarity, emotional fit, motion potential, and production feasibility.

Present alternatives only when the user requests options or when the creative choice materially affects the outcome. Do not require three written candidates for every project. Alternatives must differ in their central visual idea, not merely swap colors.

If the user has already specified a style or reference, respect it and develop it rather than replacing it without a clear reason.

## Compact style brief

For complex work, record only the decisions that matter:

- **Project / core intent:**
- **Audience / platform / aspect ratio:**
- **Emotional tone:**
- **Selected concept and rationale:**
- **Visual device or organizing idea:**
- **Palette and color roles:**
- **Typography and readability:**
- **Shape / illustration / image language:**
- **Material / render family:**
- **Background behavior:**
- **Camera and depth:**
- **Motion signature and timing character:**
- **Transition logic:**
- **Audio relationship:**
- **Production constraints and assets:**

## Make style coherent, not repetitive

A style system gives one project a recognizable identity. It does not mean every future project must use the same scene order, camera move, background, or transition.

For an ongoing series, preserve the channel's identity tokens while varying the visual metaphor and scene choreography. For unrelated projects, avoid reusing the same combination of palette, type treatment, background behavior, and motion signature by habit.

## Reference analysis

When a user supplies a visual reference, extract its principles:

- pacing and shot duration;
- hierarchy of attention;
- camera behavior;
- motion quality;
- transition motivation;
- density and rhythm;
- use of image, typography, and sound.

Do not reproduce distinctive protected composition, text, assets, sequence, palette, or signature moments unless the user owns the material and explicitly requests a permitted adaptation. Make a new design that solves the same communication problem.

## Reasons to pause before implementation

Pause only when a missing decision would materially change the outcome: the core intent is unclear, the selected visual idea does not serve the subject, a required factual visual has no trustworthy source, or the implementation cannot be produced in the selected environment.

Do not hide a concept problem with more effects.
