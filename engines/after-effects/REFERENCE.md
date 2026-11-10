# Adobe After Effects Renderer Guide

## Best fit

Use After Effects when the user needs an editable AE project, a script or expression workflow, established compositing tools, or delivery to an AE-based production pipeline.

## Project-aware implementation

Before editing, inspect the user's AE version, project structure, frame rate, dimensions, color settings, installed fonts, plugins, and delivery requirements.

Use version-compatible scripting and expressions. Do not assume a feature or API exists in every AE version.

## Design and animation

Choose the appropriate combination of shape layers, text animators, masks, effects, cameras, 3D layers, expressions, and keyframes. Keep controllers and generated layers organized and named predictably.

Prefer robust, editable controls over hard-coded values when the project needs iteration. Avoid unnecessary layer proliferation and fragile expressions.

## Script safety

Validate the active composition and required layers before making changes. Avoid destructive project-wide edits without explicit user approval. Provide clear failure messages and preserve the user's original project when possible.

## Verification

Run the script in the target AE version. Inspect the timeline, keyframes, expressions, layer order, and rendered output. A script that executes without error is not proof that the animation looks correct.

## Distribution

Check licensing for fonts, plugins, footage, templates, and third-party scripts before packaging or selling a project.
