# Character origin opening

Driver: discrete page-entry/replay state. No scroll scrubbing or synthesized continuous character motion.
Storyboard: bounded decode prelude → idea (1.25s) → build (1.25s) → stride (1.25s) → three-panel spread (0.6s) → title (1.2s) → existing PORT-011 matching hero landing/settle/dissolve (2.35s). Actual character poses are still illustrations; CSS supplies camera movement and text entrances.
Visual purpose: curiosity becomes hands-on work, then forward momentum. A character-led sequence replaces rapid repeated project-art flashes. Palette stays within the approved warm paper/petrol blue/vermilion identity.
Input response: initial entry advances a single cancelable timeline; replay restarts it; skip/keyboard/resize immediately reveal the page and cancel pending timers.
Art: three independent generated character illustrations on #FF00FF. Keying uses existing dominance-v2 defaults, magenta (255,0,255), offline Alpha extraction and despill. PNG masters + desktop 1000×1500/mobile 600×900 alpha WebP. No video master, interpolation, atlas or model-generated scene background is needed for discrete still shots.
Background owner: CSS page layers. Halftone, lines, orbit and grid are independent of character alpha; no chroma background is displayed at runtime.
Rest state: entry prelude while decoding, then first shot. Load race bound: 1.2s. No video autoplay resource.
Reduced motion: automatic entry bypasses; optional replay hides the moving story and presents static prelude/title with no camera animation before handoff. Final hero and UI remain readable without motion.
Final frame invariant: PORT-011 captures actual hero currentSrc, computed object fit/position and rendered bounds. Do not replace this final shot with newly generated art. Header and hero copy reveal only after it settles.
QA: inspect source poses and actual encoded WebP over cream/black/blue/red; verify responsive story compositions and final alignment in browser, skip/cleanup, reduced-motion/deep links, and existing feature/accessibility checks.
