# BLI Motion Component Principles

## Purpose

Components are optional implementation building blocks. They must not dictate art direction or turn every output into one repeated BLI Motion template.

The AI should first decide what the project needs. It may use a primitive, combine several primitives, or write a bespoke component when that produces a stronger result.

## Component rules

- Make visual primitives configurable through explicit props.
- Keep content and styling separate where practical.
- Expose variants only when they represent genuinely different behaviors or treatments.
- Keep animation behavior configurable; do not make every entrance a spring.
- Avoid hidden assumptions about color, surface, glow, layout, and typography.
- Preserve stable defaults when changing existing starter components.
- Allow projects to bypass a component when the concept requires a bespoke visual.
- Do not add abstraction without a real reuse or editability benefit.

## Current starter components

### General-purpose primitives

- **Reveal** — wraps content with frame-driven fade, rise, slide, scale, or clip/wipe entrances. It does not style the child content.
- **MotionShape** — configurable SVG geometry: circle, ellipse, rectangle, rounded rectangle, triangle, diamond, hexagon, or line.
- **ConnectorLine** — straight diagram connector with optional track, configurable stroke, reveal, glow, and zero/one/two animated packets.

### Configurable presentation components

- **MotionCard** — card with glass, solid, outline, and minimal treatments plus configurable colors and dimensions.
- **KineticText** — word-level text reveal with configurable typography, alignment, stagger, and highlight behavior.
- **AnimatedBadge** — compact label with pill, outline, or plain treatment and configurable entrance.

### Specialized examples

- **SVGCharacter**, **RainParticles**, **VoxAnnotation**, **KidsStepCard**, and the StreamFlow / pregnancy components demonstrate narrower visual solutions. They are examples, not universal defaults.

## Usage examples

### Reveal content without imposing a surface style

```tsx
<Reveal effect="wipe-left" motion="linear" durationInFrames={20}>
  <div style={{ fontSize: 72, fontWeight: 800, color: "#202B2A" }}>
    A clear idea deserves a clear reveal.
  </div>
</Reveal>
```

### Use a shape as a visual primitive

```tsx
<MotionShape
  shape="diamond"
  width={180}
  height={180}
  fill="#E4775E"
  stroke="#202B2A"
  strokeWidth={2}
  rotation={12}
  entrance="spring"
/>
```

### Use a quieter connector

```tsx
<ConnectorLine
  startX={360}
  startY={520}
  endX={920}
  endY={520}
  color="#527B67"
  strokeWidth={2}
  track={false}
  showPacket={false}
  glow={false}
  reveal="linear"
  revealDurationInFrames={24}
/>
```

## Component quality checks

For every component, document:

- purpose and intended contexts;
- props and supported variants;
- timing and animation behavior;
- coordinate-space and composition constraints;
- one or more usage examples;
- visual and technical verification.

A component is not production-ready merely because it type-checks. Verify its rendered appearance in the intended composition and check its behavior at relevant frame positions.
