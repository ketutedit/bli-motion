# Scene Structure Template

Use this structure when converting a storyboard into structured data for a motion-graphic engine.

```json
{
  "scene_id": "scene_01",
  "title": "Scene title",
  "purpose": "The single idea this scene communicates",
  "duration_seconds": 5,
  "background": {
    "type": "solid",
    "value": "#101827"
  },
  "layers": [
    {
      "id": "main_object",
      "type": "shape",
      "role": "primary_visual",
      "content": {},
      "transform": {
        "x": 0,
        "y": 0,
        "scale": 1,
        "rotation": 0,
        "opacity": 1
      },
      "animation": {
        "property": "scale",
        "from": 0.8,
        "to": 1,
        "start_seconds": 0,
        "duration_seconds": 0.6,
        "easing": "ease_out"
      }
    }
  ],
  "voiceover": {
    "text": "",
    "start_seconds": 0,
    "end_seconds": 5
  },
  "on_screen_text": [],
  "transition_out": {
    "type": "content_motivated_transition",
    "duration_seconds": 0.5
  }
}
```

## Rules
- This is an illustrative schema, not a final engine contract.
- Keep scene timing and all animation timing in seconds unless the target engine specifies otherwise.
- Use stable, unique layer IDs within a scene.
- Use explicit units and coordinate conventions in the production implementation.
- Do not invent unsupported layer types, properties, or easing names.
- Separate semantic intent (role/purpose) from renderer-specific implementation.
- Validate all values against the actual engine schema before rendering.