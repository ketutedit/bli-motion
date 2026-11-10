# Example 01 — How DNS Works

This example is the first runnable, editorial-style explainer composition in the BLI Motion 1.0 development branch.

## Run it

From the repository root:

```bash
cd starter
npm ci
npm run dev
```

In Remotion Studio, select **HowDnsWorks**.

To render the MP4:

```bash
npm run render:dns
```

To create keyframe stills for visual review:

```bash
npm run test:dns-stills
```

Output files are written under `starter/out/`.

## Files

- `brief.md` — communication brief and accuracy notes.
- `style-brief.md` — the chosen editorial art direction.
- `storyboard.md` — beat-by-beat visual plan.
- `Composition.tsx` — compatibility entry point that re-exports the runnable starter composition.
- `QA-CHECKLIST.md` — static checks and outstanding visual verification.

## Verification status

Source and type checks can be automated. The visual checklist remains open until the stills and full render have been inspected. A successful TypeScript check does not prove visual quality or factual completeness.
