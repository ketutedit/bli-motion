# Motion Intelligence

## Purpose

Design movement as part of the visual idea. Motion should communicate, express character, guide attention, or create a deliberate sensory experience.

## Choose motion from intent

For each important movement, identify its role:

- reveal or conceal;
- transform or morph;
- connect or separate;
- compare or measure;
- guide attention or camera;
- express weight, personality, or emotion;
- create rhythm, atmosphere, or visual pleasure.

Not every element needs to move. Stillness and holds are active timing decisions.

## Motion specification

For significant actions, define as needed:

1. initial state;
2. animated property or path;
3. direction, distance, and scale of change;
4. duration and start time;
5. easing or physical character;
6. overlap, stagger, and follow-through;
7. final state and hold.

Use precise values when the implementation requires them. Otherwise describe relative timing and intended feel without inventing false precision.

## Timing and dynamics

Choose speed based on mass, distance, urgency, tone, and information density.

Use anticipation, easing, overshoot, follow-through, overlap, and secondary action selectively. Avoid making every movement springy, elastic, or equally fast.

Related elements should share a coherent motion logic. A large object, a light label, a cursor, and a camera should not automatically use the same timing.

## Choreography and hierarchy

- Direct attention to one primary event at a time when clarity matters.
- Sequence dependent information so the viewer can understand the relationship.
- Use overlapping actions to create flow, not to obscure content.
- Let secondary motion support the primary action.
- Vary movement scale and rhythm deliberately.
- Use camera movement only when it reveals, follows, compares, or connects meaningful content.

## Transitions

Select transitions from the relationship between shots or states:

- direct cut for a meaningful change;
- match cut for visual or conceptual continuity;
- object-led transition when an element carries the viewer forward;
- spatial transition when the camera travels through a coherent environment;
- mask, wipe, morph, or distortion when motivated by the visual concept.

Do not add a transition to every boundary merely to demonstrate technical ability.

## Renderer-aware implementation

Translate motion intent into the target engine's actual capabilities.

- For frame-based renderers, use deterministic frame/time-derived values.
- Avoid unseeded randomness and wall-clock-driven animation in seekable renders.
- For browser interaction, use event/state-driven motion where appropriate.
- For procedural motion, seed random layouts or derive them from stable identifiers.
- Check the installed renderer version and use supported APIs.

Do not mix seconds, frames, milliseconds, and pixels without explicit conversion.

## Sound relationship

When sound is part of the request, use voice, music, silence, and effects to reinforce the motion hierarchy. Do not force every movement to a beat. Preserve dialogue intelligibility and avoid invented audio assets or licensing claims.

## Quality check

A movement is successful when its timing, path, weight, and relationship to other actions make the intended experience clearer or stronger—not merely when it looks smooth.
