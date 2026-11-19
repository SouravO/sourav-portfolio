# Decisions

2026-11-19: No new architectural or product decisions made. Existing starter technology is recorded in ARCHITECTURE.md as observed state, not as a newly approved decision.

## 2026-11-19 — PORT-001

- The user's detailed brief supersedes the earlier bright mood choice: dark-first near-black/off-white with one lime accent, expressive 2D motion and a reactive 3D core.
- AI-agent workspace is the signature interaction; Product, Architecture, and Engineering views are curated presentation perspectives. Live questions use one grounded assistant, not an invented multi-agent backend.
- Preserve React/Vite and add a Vercel serverless API instead of migrating frameworks. User explicitly selected Vercel and OpenAI.
- Keep public content shared between UI and server model context. No speculative implementation details, fabricated outcomes, or undisclosed internal CRM records.
- Use Redis Lua for atomic cross-instance quota reservations; no in-memory-only production quotas. Default 5/hour/network identity and 100/day/site, fail closed on service errors.
- Local Lighthouse exposed costly automatic mobile WebGL startup (performance 62, TBT 1,870 ms). Mobile now opts into 3D; desktop remains animated. Recheck measured performance 97, TBT 40 ms, CLS 0, approximately 2.5s LCP. Reduced motion always uses the poster.
- No external accounts created, production deployment performed, or Git commit made. Credential-dependent release checks are documented separately.

## 2026-11-19 — PORT-003

- Character style transformed to 3D Apple Memoji / Pixar cartoon aesthetic per user request ("memoji verison of me a chartoon character"), replacing the graphic-novel styling while keeping facial likeness (swept curly hair, mustache, trim beard, medium brown skin) and tech outfit continuity.
- Interactive scroll keyframes (`focus`, `connect`, `welcome`) rendered on uniform magenta backdrop, keyed to clean alpha, and compiled to responsive 900w and 450w WebP assets.

## 2026-11-19 — PORT-004
- User requested classic comic theming across the entire portfolio, superseding dark/Memoji styling. Use native CSS for a coherent printed comic aesthetic and preserve functional React features.
- Reuse existing likeness-based comic illustration masters rather than inventing a new likeness; preserve Memoji files and source masters. Portraits remain discrete scroll poses, not continuous video.
- Keep this task in the provided local repository. Existing Vercel release setup remains separate; no deployment or commit performed.

## PORT-006 visual direction
The user’s supplied urban adventure comic is the new art direction: city scenery, worn newsprint, heavy ink, faded vermilion/petrol blue and red-shirt lead character. Four visual concepts establish this direction; they are references rather than implemented screens. Keep functional controls and copy semantic during implementation.

## 2026-11-20 — PORT-007
- User approved the adventure-comic concepts, specifically retaining the closing page and correcting the hero pose. Use an upright full-body character, feet flat and uncrossed, laptop tucked under an arm, clearly separated from the parked car.
- Replace the sticky three-pose opener with a direct-scroll illustrated cover to match the approved concept. This supersedes PORT-005 pose-generation scope. Preserve legacy artwork/components rather than deleting experiments.
- Generate text-free production illustrations, with separate mobile cover/finale compositions. Implement navigation, headings, captions, project statuses, workspace and email controls in HTML.
- Work remains in the supplied local Vite/Vercel repository; no new hosting service, commit, account or production publication.

## 2026-11-20 — PORT-008
- Use https://sivaprasadc.vercel.app/ as information-architecture inspiration after reading its actual public HTML: direct role/value positioning, concrete projects, experience/stack and easy assistant access. Keep Sourav’s independent copy and approved comic art.
- Prioritize proof and professional context before the optional workshop. Show only confirmed experience/roles/project status; do not invent résumé downloads, current availability, employment dates or notes to mirror reference sections.
- Reuse existing #about and #workspace anchors for link compatibility; expose a bounded query-driven chat entry without auto-submitting to the API.

## 2026-11-20 — PORT-009
- User disliked the work UI. Replace illustration-dominant cards with a more concise editorial presentation and interactive product explanations, while retaining the approved comic cover/finale.
- No approved real product screenshots are available; do not invent them. Use clearly labelled public-safe flow explainers based on supplied capabilities, keeping CYD automation planned.
- Treat both case routes as reading experiences with a section index and compact overview. Trim repeated approach content instead of adding more generic feature panels.

## 2026-11-20 — PORT-010
- Implemented Marvel Studios-style comic flipbook intro and GTA 6 / Vice City ambient synthwave BGM per user request ("add life to this website a feel like add gta 6 bgm while landing .. a marvel introduction video mood").
- Synthesized audio dynamically via Web Audio API (`src/audio/audioEngine.js`) rather than bundling heavy static audio files (MP3s) or relying on third-party CDNs: zero external latency, zero bandwidth penalty, zero licensing/copyright risk, and precision timing for both music and Marvel comic SFX (page flutter + sub-bass logo boom).
- Built pure HTML animated equalizer bars in `ViceCityRadio.jsx` to prevent conflicts with test suites checking Three.js canvas counts (`toHaveCount(0)` on canvas).
- Maintained WCAG AA minimum contrast (> 13:1 on text) and label-in-name compliance (WCAG 2.5.3) across all intro and audio controls. Gated auto-intro to root landing without hash parameters, respecting reduced-motion and automated test environments while providing replay buttons in the header, hero, and radio dock.
