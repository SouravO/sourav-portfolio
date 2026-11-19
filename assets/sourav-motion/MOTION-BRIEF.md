# Sourav: a builder in motion

- Subject: reference-based stylized adult comic/3D Sourav at a floating laptop desk. Identity based on supplied office portrait and outdoor photo, not the other person in the office background.
- Input: scroll progress through the homepage story, linear [0, 1], forward/reverse. No autoplay.
- Meaning: move from focused engineering to welcoming the visitor into the product story.
- Semantic motion: head and upper torso turn from the laptop toward the viewer; one hand lifts in a small greeting. Desk, laptop, legs, framing and identity stay anchored.
- Geometric motion: scene scaling/translation, kinetic typography, system nodes and project panels emerge in sync with scroll.
- Keyframes: K0 seated facing laptop, hands at keyboard; K1 same character and anchored props, looking toward viewer with a small raised-hand greeting.
- Clip: K0 → K1, 5 seconds, non-looping. Default MiniMax H3 through existing local ZenMux configuration.
- Background: uniform magenta #FF00FF, no cast shadow or spill; page owns final dark/halftone background.
- Delivery: chroma-video, selected by motion_budget.py (241 estimated frames, 650×650 CSS pixels, DPR 1, two scroll pages, 4096 texture limit). Auto choice due long linear sequence; atlas estimated 388.4 MiB decoded.
- Runtime: compile.json.runtime supplies frame count, FPS, anchors, and dominance-v2 keying. Use shared frame animator + chroma renderer. Compile at 48 FPS, all-keyframe muted MP4, desktop/mobile variants.
- Anchor/rest: body and props center-fixed; no scroll rests on first frame, reverse scroll returns toward first frame.
- Failure/reduced motion: first-frame alpha poster; meaningful ordinary text/navigation remain available. No magenta source displayed.
- QA: inspect both generated keyframes; full motion contact sheet; forced interpolation contacts; encoded alpha/background matrix; rapid reverse/resize/mobile/decode/WebGL fallback tests. Never claim geometric still-image movement is a real character video.
