# Animation Principles Skill

## Purpose
Make motion feel intentional, legible, and controlled.

## Core principles to apply
- **Timing:** duration communicates weight, urgency, and importance.
- **Spacing:** distance between successive positions controls perceived speed.
- **Ease in / ease out:** use acceleration and deceleration to avoid mechanical starts and stops.
- **Anticipation:** prepare the viewer for a meaningful action when needed.
- **Follow-through:** secondary elements settle after the primary action.
- **Overlap:** related actions may overlap to create flow, without obscuring information.
- **Staging:** present one clear focal action at a time.
- **Secondary action:** supporting motion reinforces, never distracts.
- **Exaggeration:** use selectively to improve readability, not for constant cartoonish motion.
- **Consistency:** related objects should share coherent motion behavior.

## Practical motion guidance
- Use short, decisive movement for labels and UI-like elements.
- Use slower movement for large, heavy, or conceptually important objects.
- Use restrained overshoot only when it supports the tone.
- Keep critical text stable long enough to read.
- Sequence complex diagrams so viewers understand one relationship before the next.
- Avoid animating every property at once.

## Motion specification
For each animated element, define:
1. initial state,
2. property being animated (position, scale, rotation, opacity, mask, path, etc.),
3. direction and amount,
4. duration,
5. easing character,
6. delay or stagger,
7. final state.

If exact frame timing is unknown, specify relative timing and intended feel rather than inventing precision.