# BLI Motion Distribution Readiness

This checklist is required before publishing a paid ZIP or declaring BLI Motion 1.0 commercially ready. It is a project-control document, not legal advice.

## Current status

**Not ready for commercial packaging.** The core skill redesign is progressing, but licensing, asset provenance, dependency security, and actual render validation remain open.

## 1. Core intellectual property

- [ ] Confirm which files are original BLI Motion work and which were adapted from references.
- [ ] Add a copyright notice identifying the BLI Motion owner.
- [ ] Choose the repository license, if any. Do not add MIT or another open-source license by default.
- [ ] Create a separate end-user license for paid BLI Motion Pro downloads.
- [ ] Define whether buyers may modify the skill for their own use.
- [ ] Define restrictions on redistribution, resale, sublicensing, or sharing a purchased copy.
- [ ] Keep Community and Pro license terms distinct and clear.
- [ ] Confirm how existing public copies and forks of 0.2.0 affect the planned Pro feature split.

## 2. Third-party code and agent guidance

The current repository contains a copy of a Remotion Agent Skill under `starter/.agents/skills/remotion-markup/`, with a source reference to `remotion-dev/skills`.

- [ ] Verify the exact upstream license and redistribution permission for the copied agent-skill files and assets.
- [ ] Until permission is confirmed, exclude the copied third-party agent-skill folder from any paid BLI Motion package.
- [ ] Prefer instructions that tell users how to install third-party skills separately.
- [ ] Review Remotion's current license terms for the intended commercial use.
- [ ] Preserve attribution and notices for any third-party code that is legitimately reused.
- [ ] Do not repackage third-party code, templates, examples, or documentation as BLI Motion-owned material.

The BLI Motion core skill should remain functional without this third-party folder.

## 3. Sample project media and client assets

The starter contains product-specific StreamFlow artwork/screenshots, multiple audio files, and other sample media in `starter/public/` and the composition folders.

- [ ] Confirm ownership or written redistribution permission for every image, logo, screenshot, video, and audio file.
- [ ] Confirm that client or collaborator assets are not included without permission.
- [ ] Remove or replace any uncleared media from commercial starter packages.
- [ ] Add a media inventory with source, owner, license, and allowed use.
- [ ] Verify that every font and icon dependency has an appropriate license.

Do not assume that an asset is redistributable just because it is visible in a public GitHub repository.

## 4. Dependencies and security

A later GitHub Actions audit of the current `starter/` lockfile (November 10, 2026; run [42905772562](https://github.com/ketutedit/bli-motion/actions/runs/42905772562)) reported **0 known vulnerabilities** across 300 dependency entries in the audited graph. This supersedes the earlier scan that reported 10 high-severity findings for an older dependency graph.

- [x] Run and retain the `npm audit` JSON report for `starter/`; latest report: 0 info, 0 low, 0 moderate, 0 high, 0 critical.
- [ ] Run and review the `npm audit` report for `benchmarks/harness/` (added to its CI workflow; result pending).
- [ ] Re-run audits before each commercial build because dependency advisories can change.
- [ ] Identify whether any future findings are direct or transitive and whether they affect production or development use.
- [x] Refresh the Remotion package versions and lockfile without forcing a major-version upgrade; retain reproducible dependency installation.
- [ ] Add a dependency notice and keep required third-party license texts with redistributed source where required.

## 5. Marketplace package

Before preparing an Agensi.io, Gumroad, or other marketplace ZIP:

- [ ] Include only BLI Motion-owned core instructions, modules, templates, and cleared assets.
- [ ] Exclude benchmark-only projects, private/client media, development notes, and unlicensed third-party materials unless specifically cleared.
- [ ] Ensure every relative link inside the package points to a file included in the ZIP.
- [ ] Include version, changelog, install instructions, support contact, and license terms.
- [ ] Test installation from a fresh download in each supported agent environment.
- [ ] Confirm that updates and previous buyers are handled as described in the marketplace terms.

## 6. Product quality gate

- [ ] Run TypeScript checks.
- [ ] Discover all Remotion compositions.
- [ ] Render representative samples for each released specialist mode.
- [ ] Review full playback, not just still frames.
- [ ] Run the blind A/B/C benchmark and retain its evidence.
- [ ] Fix critical rendering, legibility, factual, or compatibility defects.
- [ ] Do not describe the product as 1.0-ready until the release gates have passed.

## Packaging principle

The commercial BLI Motion package should contain the original skill system and only those optional examples or assets whose ownership and redistribution rights are clear. Third-party renderer skills and sample media should be installed or downloaded separately when their license requires it.
