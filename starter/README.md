# BLI Motion — Remotion Example Starter

This folder contains sample Remotion compositions used to exercise selected BLI Motion capabilities. It is not a mandatory visual template and is not the universal engine for every project.

## Included compositions

| Composition | Discipline | Duration | Format |
|---|---|---:|---|
| `HowDnsWorks` | Editorial explainer | 15 sec | 1920×1080 |
| `ProductLoginMotion` | Product/UI motion | 12 sec | 1920×1080 |
| `AbstractOrbitLoop` | Abstract procedural loop | 6 sec | 1080×1080 |
| `HowRainForms` | Educational explainer | 45 sec | 1920×1080 |
| `KidsDrinkingGuide` | Character-led educational video | 33 sec | 1080×1920 |
| `PregnancyTipsReel` | Educational vertical video | 80 sec | 1080×1920 |
| `StreamFlowPromo` | Product promo example | 32 sec | 1920×1080 |
| `MainExplainer` | Legacy component demonstration | 10 sec | 1920×1080 |

The first three are new examples for the 1.0 development branch. The remaining compositions are legacy or user-specific demonstrations and should not be treated as required visual styles.

## Setup

```bash
npm ci
npm run dev
```

Select a composition in Remotion Studio.

## Render examples

```bash
npm run render:dns
npm run render:ui
npm run render:abstract
npm run render:rain
npm run render:kids
npm run render:streamflow
npm run render:bumil
```

## Preview frames

For the legacy starter sample:

```bash
npm run test:stills
```

For the DNS explainer:

```bash
npm run test:dns-stills
```

Frame outputs are stored under `out/`.

## Code validation

```bash
npm run typecheck
npx remotion compositions src/index.ts
```

Type checking and composition discovery confirm basic code and entry-point integrity. They do not verify visual quality. Render and inspect the actual output, including full playback, before treating a composition as finished.

## Components

See [component principles](../components/README.md). Components such as `MotionCard`, `KineticText`, and `AnimatedBadge` are configurable starting points. Use them only when they fit the art direction; create bespoke elements when the concept calls for them.

## Licensing and packaging

Check the licenses and distribution rights for all third-party packages, fonts, images, video, audio, and copied agent guidance before redistributing or selling a starter. This starter includes user-specific example projects and media; do not assume all included assets are cleared for resale.
