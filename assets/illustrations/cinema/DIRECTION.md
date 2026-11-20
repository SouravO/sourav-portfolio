# PORT-013 — Ink on film

The user rejected PORT-012's cutout images and slide-like presentation. Replace that aesthetic with full-scene cinematic graphic-novel key art: dark petrol/indigo shadows, warm amber practical light, vermilion shirt accents, detailed ink rendering and environmental depth. These are complete scene illustrations rather than isolated motion sprites; no chroma-key/video-generation workflow is used.

## Sequence

Bounded decode prelude (maximum 1.4 seconds) → midnight keyboard close-up (950ms) → portrait (850ms) → rain street (700ms) → rooftop (700ms) → 1.5s dimensional camera move across a 3×3 comic sheet → 1.9s artwork-filled letter pullback resolving to a silver SOURAV O studio mark on deep red → existing PORT-011 exact hero-image settle/dissolve (2.35s) → navbar and live hero copy.

No motivational slide copy, repeated cutout poses or circular character backdrops. Motion uses CSS transforms, perspective and art-filled text. The montage accelerates, while the title takes time to settle. No full-screen white flash/strobe effect. Existing synthesized page/impact sounds remain, subject to browser audio restrictions.

This is a browser-rendered cinematic sequence made from generated stills, not AI-generated continuous character motion. A recorded local preview may be saved under ignored test-results/cinematic-opening.webm. It is not a required production asset.

## Assets and reproduction

- Source masters: source/{midnight,portrait,street,rooftop}.png, preserved unchanged.
- Built-in image_gen used separately for every scene, with the existing approved cover as identity/outfit reference. Exact shared and per-scene prompts: PROMPTS.md.
- Rebuild runtime assets: python3 scripts/prepare_cinema_assets.py (Pillow). Resizing/compression only.
- Runtime: public/illustrations/cinema, 1536×1024 desktop / 1152×768 mobile WebP. About 1.87 MiB desktop / 1.01 MiB mobile total. Mobile picture sources and title-animation CSS variables both choose mobile files.
- Decode is capped. Missing/slow assets use the actual decoded landing cover as fallback. Skip/resize exits and clears timers/scroll/inert state. Automatic entry bypasses reduced-motion/deep-link visits; optional reduced-motion replay is static.
- The last frame is always captured from the actual responsive hero currentSrc and computed crop. Do not substitute a generated scene for this final shot.

## Verification

Opening tests cover all four art loads, panel/title stages, 320px title bounds, missing/slow-art cover fallback, keyboard/inert/scroll cleanup, reduced motion/deep links, source/crop matching within 2px, UI reveal, and desktop/mobile axe checks. Portfolio regression tests cover existing routes, workspace, contact, responsive layouts and audio controls. User visual acceptance remains separate from passing automated checks.
