# BLI Motion Component Principles

## Purpose

Components are optional implementation building blocks. They must not dictate the art direction of a project or turn the visual output into one repeated BLI Motion template.

## Component rules

- Make visual primitives configurable through explicit props.
- Keep content and styling separate where practical.
- Expose variants for genuinely different visual treatments.
- Keep animation behavior configurable; do not make every entrance a spring.
- Use semantic names for variants and motion behavior.
- Preserve stable defaults for backwards compatibility when changing existing starter components.
- Allow projects to bypass a component and implement a bespoke visual when the concept requires it.
- Do not add abstraction without a real reuse or editability benefit.

## Current starter components

The Remotion explainer starter includes components such as MotionCard, KineticText, AnimatedBadge, ConnectorLine, and SVGCharacter. These are sample primitives, not mandatory assets.

MotionCard, KineticText, and AnimatedBadge expose initial styling and entrance variants in the 1.0 development branch. Other starter components remain legacy examples and may still use a narrower visual treatment.

## Future component quality checks

For each component, document:

- purpose and intended contexts;
- props and supported variants;
- timing and animation behavior;
- responsive or composition constraints;
- one or more usage examples;
- visual and technical verification.
