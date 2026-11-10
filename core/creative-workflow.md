# Adaptive Creative Workflow

Use the lightest workflow that can reliably achieve the requested result. The stages below are a decision framework, not a mandatory ceremony.

## 1. Classify the request

Identify the requested deliverable:

- concept or visual exploration,
- still graphic or design asset,
- short loop or micro-animation,
- multi-scene motion piece,
- product/UI animation,
- editable project or source code,
- critique, repair, or optimization.

Identify only the constraints that affect the result: subject, goal, audience, platform, aspect ratio, duration, style/reference, assets, renderer, and delivery format.

## 2. Choose workflow depth

### Quick creation

For a small, clear request:

1. Interpret the intent.
2. Make the key creative decisions.
3. Implement directly.
4. Check the result at the requested level.

Do not create an elaborate brief or storyboard unless it helps.

### Focused design

For a single asset, loop, interface, logo, or short sequence:

1. Establish the visual idea and design system.
2. Define the important states and motion.
3. Build the asset or animation.
4. Inspect important frames and the loop/interaction.
5. Refine visible weaknesses.

### Full production

For a complex or multi-scene project:

1. Understand the subject and communication goal.
2. Develop and select a creative direction.
3. Map the narrative or sequence.
4. Create a storyboard or motion specification when useful.
5. Select the renderer and implementation architecture.
6. Build a small working slice.
7. Preview, inspect, and refine.
8. Render and verify the final output.
9. Deliver source, output, assumptions, and limitations.

## 3. Build a visual plan proportional to complexity

A visual plan may be a compact mental model, a style brief, a state diagram, a storyboard, or a detailed shot specification. Use the smallest one that prevents avoidable rework.

Do not require:

- three written concepts for every task;
- one scene for every voiceover sentence;
- an approval gate for every creative decision;
- a storyboard for a single animated icon;
- a fixed sequence of hook, context, explanation, and recap for every format.

## 4. Select implementation after design

Keep the creative idea independent from the renderer until the requirements are understood.

Choose the lightest suitable implementation:

- HTML/CSS/GSAP for browser-based layouts and interactions;
- SVG for scalable vector graphics and path animation;
- Canvas for procedural or particle-heavy visuals;
- Remotion for frame-accurate React video composition and rendering;
- Three.js or React Three Fiber for interactive or rendered 3D scenes;
- After Effects scripts and expressions when an AE-native editable project is required.

Use the user's existing project and conventions when supplied. Do not introduce a new framework merely because it is familiar.

## 5. Prototype early

Build the most important visual moment first. Confirm that the key design language and technical approach work before expanding the entire project.

Use real assets and actual project constraints where possible. Avoid building a large system around an unverified technical assumption.

## 6. Validate the deliverable

Validation depth depends on the request:

- still asset: inspect composition, crop, contrast, and text;
- loop: inspect beginning/end continuity and playback;
- UI: inspect states, transitions, responsiveness, and interaction;
- video: inspect representative frames, full playback, timing, and audio;
- source project: run the available build/type/lint checks and verify imports/assets.

If the required renderer or preview tool is unavailable, state what was and was not verified.

## 7. Deliver usefully

Provide the actual requested output when possible. Include relevant source files, installation/run instructions, and known limitations. Keep explanations proportional to the complexity of the work.
