# Anti-Slide Quality Gates

A technically functioning animation can still feel like an automated slide deck. This document turns that subjective problem into checks that an agent can apply to a storyboard, implementation, and rendered frames.

## 1. Story and scene structure
A scene is not automatically a new slide just because the narration has moved to a new sentence.

For each scene, identify:
- the one main idea,
- the visual event that explains it,
- the element or relationship that carries attention,
- what changes during the shot,
- why the next shot follows.

Use continuity when it helps: an object becomes a diagram, a camera follows a path, a small detail reveals a larger system, or a chart grows from an earlier visual. Use a clear cut when the topic, time, location, or point of view genuinely changes.

Do not force every video into one continuous world. Continuity must serve the story.

## 2. The slide-deck warning signs
Review and redesign when several of these appear together:
- every scene repeats the same title-plus-body layout;
- static image, headline, and paragraph are replaced by another static image, headline, and paragraph;
- scene changes rely only on fading whole sections in and out;
- every transition uses the same fade, scale bump, or generic wipe;
- camera movement is only a tiny zoom on an otherwise unchanged still;
- decorative particles move while the explanatory objects remain inert;
- all scenes have the same framing and visual density;
- visuals repeat the narration word-for-word without adding understanding.

A single deliberate static hold or fade is not automatically wrong. Judge the sequence as a whole and by the purpose of the moment.

## 3. Make motion communicate
Every important animation should perform at least one communication job:
- **Reveal:** uncover information at the right moment.
- **Demonstrate:** show how something works.
- **Transform:** make a before/after or state change visible.
- **Connect:** show a relationship or sequence.
- **Compare:** expose a difference, scale, or trade-off.
- **Emphasize:** make the key insight noticeable.
- **Navigate:** guide the viewer through a complex visual space.

Atmospheric motion may support the scene, but it is not a substitute for meaningful object motion.

## 4. Visual hierarchy and readability
- Establish one dominant focal point at a time.
- Keep labels close to the object or data they describe.
- Avoid displaying the complete voiceover as on-screen copy by default.
- Keep supporting information concise, but do not remove information required for understanding.
- Test text at the actual output size, particularly on mobile.
- Use safe margins appropriate to the platform UI.

Useful starting points for a 1920×1080 composition:
- main headline around 84 px or larger,
- important supporting text around 44 px or larger,
- key content roughly 80 px from side edges and 100 px from top/bottom.

These are starting guidelines, not universal laws. Scale proportionally for other resolutions and adapt to font metrics, language, and density. Never solve an overcrowded frame by making all text tiny.

## 5. Explain with visual evidence
A complex explainer scene may need several related elements. Use them when they build one visual argument: subject + process + evidence + scale + annotation, for example.

Do not add elements merely to hit a count. A clean scene with one powerful transformation is better than five unrelated decorations.

## 6. Transition quality
Prefer transitions with a narrative or spatial reason:
- match a shape or movement across scenes,
- let an object reveal the next setting,
- follow a path or camera move,
- carry a visual element forward,
- cut on a meaningful change or beat.

Avoid using an expensive transition at every cut. A clean cut can be more confident than an unnecessary effect. Vary transition behavior when the story calls for it, not just to prove variety.

## 7. Deterministic animation
For frame-based rendering, the same frame/time must produce the same visual result.
- Derive animated values from the timeline frame or time.
- Do not use the wall clock to drive the animation.
- Do not call unseeded random values during frame rendering.
- Avoid accumulated per-frame position updates that produce different results when seeking directly to a frame.
- Seed procedural layouts once, or derive them deterministically from stable IDs.

Determinism makes scrubbing, automated screenshots, and final rendering consistent.

## 8. Visual quality review
Review actual rendered frames, not just source code. Sample:
- the opening hook,
- the first appearance of each key visual,
- moments with the densest typography or data,
- important transitions,
- the climax / key insight,
- the ending.

For each sample, ask:
1. Is the intended focal point obvious immediately?
2. Is anything clipped, overlapped, or too small?
3. Does the image explain something beyond the spoken words?
4. Is motion smooth and purposeful?
5. Does the scene feel connected to the surrounding sequence?
6. Is the frame visually balanced and stylistically coherent?

For a short video, a contact sheet of approximately 6–20 key frames is often a useful first pass. Add samples wherever the motion or content is complex. Fix problems and capture again before delivery.

## 9. Final pass
- [ ] Each scene has a clear communication purpose.
- [ ] Visuals demonstrate, connect, or clarify the idea.
- [ ] No accidental repeated slide layout.
- [ ] Transitions have a reason.
- [ ] Camera movement is motivated and composed.
- [ ] Typography is readable at delivery size.
- [ ] The animation is deterministic and seekable.
- [ ] Key frames have been inspected.
- [ ] The final render has been checked, not only the preview.
