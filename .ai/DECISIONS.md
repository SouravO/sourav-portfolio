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

## 2026-11-20 — PORT-011
- Preserve the existing Marvel-inspired montage/title and illustrations. Match its final shot directly to the actual rendered hero currentSrc/crop rather than approximating with a separate exported frame. Existing opening is browser animation, not a video file.
- User requested automatic cinematic entry on website load: remove previous session-once and webdriver bypass. Keep accessibility/deep-link bypasses; use an explicit test fixture flag for unrelated feature tests.
- Reveal navigation and live hero text only after the artwork settles; retain the existing audio system and replay controls. No new media service or generation required.

## 2026-11-20 — PORT-012
- User approved the smooth landing handoff and asked for a more creative opening with new character illustrations. Keep the PORT-011 match invariant and redesign only the preceding sequence.
- Replace rapid repeated project-art flips with three readable, character-led scenes: curiosity, hands-on building, forward momentum. Reuse the approved red-shirt likeness, ink/halftone treatment and paper/petrol-blue/vermilion palette. Three separate image_gen calls use the current cover as identity/style reference.
- Generate isolated stills on magenta, extract alpha offline using the existing keyer and animate camera/text in CSS. This is an illustrated cinematic opening, not a newly generated video or continuous pose interpolation. No provider access/API key required.
- Preserve prior work and pre-existing public/character deletions; do not restore unrelated legacy files. The intro now owns independent assets.

## 2026-11-20 — PORT-013
- User explicitly rejected PORT-012 artwork and reiterated a Marvel introduction/cinematic feel. Treat prior cutout/large-copy direction as superseded, while preserving its source files and the positively received PORT-011 landing handoff.
- Generate four complete graphic-novel scenes rather than isolated character sprites: macro laptop work, rain-lit portrait, city street and rooftop. Use the approved landing cover as identity/outfit reference with finer ink/paint rendering, dramatic amber light and dark petrol shadows. Built-in image_gen; no API/provider work required.
- Use accelerating cinematic cuts and a continuous dimensional comic-sheet camera move, followed by artwork inside the name resolving to a metallic mark on deep red. Remove motivational slide captions and circular character backdrops. Preserve skip, reduced-motion/direct-link entry, audio controls and final actual-hero snapshot.
- Missing/slow art uses the landing cover after a bounded wait. Preserve existing unrelated deleted character files and untracked cinema invitation tests. No commit or deployment.

## 2026-11-20 — PORT-018
- Rebuild the rejected work section around an actual reading sequence: closed book on table, lift/open, four two-page project spreads, timed reading holds, reversible physical page turns, release. Use existing comic visual assets and real shared project facts.
- This is geometric motion of live HTML pages; native CSS 3D and installed Motion provide precise scroll mapping. No image/video generation required. Keep links/text semantic and usable; decorative turning duplicates are inert.
- Prefer readable stacked pages on <=1000px widths, <=600px viewport height and reduced motion. Narrow tablet inspection exposed text clipping in scaled spreads; do not shrink text further to force the desktop animation.
- Keep chapter selection/previous/next and a direct experience link so the long pinned section is optional to navigate. Preserve #work/#concepts and case-study routes.
- Preserve inactive experiments; fix their small lint issues without deleting user work. Leave unrelated obsolete cinema tests documented instead of changing approved intro behavior.

## 2026-11-20 — PORT-019
- The reported black patch is exposed backing while left-story visibility is delayed; cover that geometric gap with a separate paper lining, retaining real page/cover layers.
- User explicitly requested mobile animation, superseding PORT-018's static compact-only decision. Show a full-size story leaf then full-size art leaf, rather than shrinking desktop spreads. Preserve native scroll and add touch-sized page controls.
- Keep reduced motion and very short landscape (<=500px) in static document-flow mode. Fit smallest portrait phones through spacing and hiding only decorative running headers, without removing project facts.

PORT-020 completed. The compact project book uses a portrait spiral notebook with seven visible rings, a layered paper edge and scroll-driven top-hinged cover and sheets. Book3D.jsx and book3d.css implement the change. Lint, build and all eight book browser tests passed, including phone fit, touch navigation and reduced motion. No outstanding implementation work. Next action is optional mobile visual review.


## 2026-11-21 — PORT-032
- User approved comic portraits, detective mood, career plus personality, and a readable scrolling phone board. Their “all” answer selected gaming, travel and music; do not invent personal anecdotes, accomplishments or destinations.
- Preserve the existing approved likeness/style and generate seven independent conceptual scenes with different outfits/settings. Retain the central portrait and all prior art; source prompts and reproducible WebP preparation are checked in.
- Replace compressed surveillance copy and unsupported performance/employment-date claims with concise documented facts. Only the confirmed college dates are displayed; current agent work remains experimentation.
- Use a native modal dialog for keyboard focus containment and background inertness. Keep torch optional/off and avoid touch tracking that interferes with scrolling.
- The user's approved vertical mobile plan supersedes PORT-031's single-viewport constraint. Measure thread endpoints from real pin positions instead of guessing responsive SVG coordinates.

## 2026-11-21 — PORT-033
- User requested experience content focus on work experience. Reframe #about from mixed life/personal board to professional experience while retaining the existing corkboard/inspector interaction style and `#about` anchor.
- Remove personal-interest clues (gaming/travel/music) and unsupported personal narrative from experience. Present only confirmed milestones: education (2018–2022, MES), software engineering in electronic media/broadcasting, CTO/technical leadership at Day One Venture Studio, and current 4+ years full-stack/product building with ongoing human-reviewed agentic exploration.
- Reuse existing life-board illustrations for matching chapters/profile and preserve responsive/thread/torch/dialog/fallback behavior; update tests to the new contract. No invented employers, dates, metrics, or anecdotes.

## 2026-11-21 — PORT-034
- User requested removal of two sections: “From interface to infrastructure.” (toolkit) and “The workshop.” (workspace). Removed from homepage and navigation rather than replacing, per request.
- Removed dependent in-site CTAs/routes (`#toolkit`, `#workspace`, chat-mode workspace entry points) and updated tests/docs to the new flow. Left unused component/CSS artifacts and backend chat code untouched for potential future cleanup to minimize unrelated churn. No commit/deployment.


## 2026-11-21 — PORT-036
- Implement requested separate creative projects page as a comic publisher archive matching existing art and typography; retain homepage book.
- Showcase all four documented projects from shared data, with built/live and concept filters, always visible status labels and proposed-versus-shipped disclosures. Concepts expand inline; existing built-project case-study routes remain. No invented achievements or product screenshots.
- Work in current local repository and existing Vercel setup. Preserve unrelated untracked Strengths.jsx/Strengths.css without restoring removed homepage integration.


## 2026-11-21 — PORT-037
- User requested music only during introduction with music details visible, stopping on landing. Move existing player into intro rather than retaining an inactive global dock.
- Label procedural music accurately as original synthwave at 106 BPM rather than a GTA recording. Retain play/pause/mute and user mute preference on replay. Suspend all audio on every intro exit, including skip/resize/unmount.


## 2026-11-21 — PORT-038
- User reported both pauses and flashes after book turns on desktop/mobile; preserve approved visual design and fix render/scroll mechanics.
- Prepare all four desktop spreads/eight compact leaves and decorative turn surfaces once per layout. Accept a bounded increase in initial DOM to eliminate five-strip remount/decode work during page transitions. Hidden surfaces remain inert and accessibility-hidden.
- Drive visible surfaces and geometry synchronously in the animation frame, with React reserved for chapter/status UI. Replace special turn throttling with consistent short smoothing; large scroll jumps settle immediately. Preserve existing art preload and paper fallback without gating navigation on asset success.


## 2026-11-21 — PORT-040
- User clarified: remove premature left opening area, gradually unfold with cover. Supersedes PORT-039 fill-only interpretation.
- Separate lift/position from footprint. Derive footprint from cover cosine projection after crossing 90 degrees; synchronize board, paper and spread clipping in same frame, retaining compact layout.


## 2026-11-21 — PORT-046
- User requested removing Marvel intro and unnecessary prompt-like website content. Remove entire cinematic/audio entry/replay, ink mode and torch; keep the approved comic art/book and useful navigation. Supersedes previous cinematic/music/control requirements.
- Remove redundant artwork/process disclaimers across active pages; preserve factual built/internal/concept/planned status. Clean stale workspace metadata. Retain unused historical intro source/assets rather than deleting unrelated artwork (experience profile reuses cinema portrait).
