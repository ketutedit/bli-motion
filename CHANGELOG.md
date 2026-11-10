# Changelog

## Unreleased — BLI Motion 1.0 development

### Creative system
- Reposition the system from educational-explainer-first to universal, creative-first motion design.
- Replace fixed always-on guidance with adaptive workflow and conditional specialist routing.
- Add creative intelligence, autonomous decision, art direction, motion intelligence, and visual verification modules.
- Add seven specialist modes for explainer, product/UI, kinetic typography, abstract, brand, infographic, and character/2D/3D motion.
- Add renderer guides for HTML/GSAP, SVG/Canvas, Remotion, Three.js, and After Effects.

### Production examples and components
- Make MotionCard, KineticText, and AnimatedBadge variants configurable while preserving legacy defaults.
- Add neutral Reveal and MotionShape primitives for reusable entrances and geometric forms.
- Make ConnectorLine track, stroke, glow, packet count, direction, and reveal behavior configurable.
- Add a Motion Primitives Showcase composition and include it in still/video smoke validation.
- Fix the opaque Solid overlay in the old MainExplainer starter.
- Replace a CSS keyframe animation in HowRainForms with deterministic frame-driven rotation.
- Add a new DNS explainer with aligned brief, storyboard, source entry point, and unverified visual QA checklist.
- Add a fictional Product UI login-to-dashboard example.
- Add a deterministic abstract orbit loop example.

### Benchmark and validation
- Add six fixed A/B/C benchmark prompts and blind scoring rubric.
- Add a clean Remotion benchmark harness with a pinned dependency graph and blank visual canvas.
- Add CI for TypeScript checks, Remotion composition discovery, still renders, and MP4 smoke renders.
- Refresh starter and benchmark lockfiles using semver-safe npm audit fixes; follow-up audit verification remains pending.
- Add visual smoke-test frame rendering in the starter workflow.
- Add commercial distribution readiness checklist covering IP, third-party material, assets, security, and marketplace packaging.

### Safety and release status
- Keep the 0.2.0 implementation on the main branch while 1.0 is developed separately.
- No visual benchmark claim is made until renders are reviewed and A/B/C trials are completed.
- Commercial distribution is not ready pending license, asset-rights, and dependency audit.

## 0.2.0

- Initial creative motion system focused on explainers and educational motion.
- Added specialist skills, references, templates, Remotion starter, and DNS example.
