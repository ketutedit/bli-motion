# Visual QA Checklist: How DNS Works

Status is intentionally unverified until the composition is rendered and reviewed in playback.

## Static implementation review

- [x] The example uses a documentation-range IP address (`203.0.113.42`) rather than presenting a real service address.
- [x] The composition distinguishes the DNS resolver from the destination server.
- [x] The layout avoids the previous three-node neon-card starter treatment.
- [x] Motion values are derived from the Remotion frame and do not rely on CSS keyframe animation.

## Render and visual review

- [ ] Run `npm run typecheck`.
- [ ] Run `npm run test:dns-stills`.
- [ ] Inspect the opening frame and browser request.
- [ ] Inspect the DNS directory and IP reveal.
- [ ] Inspect the destination server and connection path.
- [ ] Check text size, contrast, alignment, and clipping at 1920×1080.
- [ ] Render the complete MP4 and review the full 15-second playback.
- [ ] Confirm the ending hold is long enough and there are no visual jumps.

## Accuracy review

- [ ] Confirm the narration and final edit do not imply the DNS resolver is the website.
- [ ] Confirm any additional technical detail is fact-checked before publication.
