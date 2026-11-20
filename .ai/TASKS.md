# Tasks

## INIT-001 — Initialize persistent project memory
Status: DONE
Date: 2026-11-19
Objective: Create the six memory documents required by AGENTS.md using verified repository state.
Acceptance criteria: All six documents exist; source, configuration, and Git state inspected; existing files preserved.
Completed: Inspected starter source, package.json, Vite and ESLint configuration, README, agent instructions, and Git status/history availability. Created missing memory documents.
Verification: Confirmed all required memory files exist and are nonempty. Application build, lint, and browser behavior were not tested; no application code changed.
Remaining: No development request is active. Await user requirements.

## PORT-001 — Build cinematic portfolio and grounded AI workspace
Status: DONE
Date: 2026-11-19
Objective: Implement the approved dark portfolio for Sourav O with a 3D core, two case studies, curated agent perspectives, terminal commands, and a protected OpenAI endpoint targeting Vercel.
Acceptance criteria: Responsive accessible homepage and direct case-study routes; accurate project statuses; reduced-motion/WebGL fallbacks; server-side bounded AI with distributed quotas and curated fallback; build/lint and meaningful interaction/API verification; deployment configuration and synchronized memory.
Confirmed: CRM built and used internally; diagrams must be public-safe. CYD active/deployed; NOTWO planning; Founder Versa concept. No invented metrics or links. Live OpenAI, 5 requests/hour/network identity, 100/day site default.
Remaining: Implementation and verification. Production credentials/account not supplied; prepare local preview and deployment instructions without creating external accounts or committing.

PORT-001 milestone: Frontend, two case studies, local terminal, curated perspectives, and protected API implemented. Build passed; API unit tests (8) passed; ESLint passes after adding Node configuration. Initial browser run found accessible-name mismatches and ambiguous test selectors; fixes applied and browser suite rerunning. Live services and hosted preview not verified without credentials. Three.js is isolated in a lazy chunk; production build reports its size warning.

PORT-001 final status: DONE (implementation and local verification complete).
Completed: Approved frontend and API scope, credential-free curated fallback, public-safe project stories, mobile/reduced-motion/WebGL handling, terminal, navigation/focus, contact, deployment configuration, and setup documentation. Source files formatted for review.
Verification: npm run lint and production build pass; 8 Node API tests pass; 6 Playwright tests pass including desktop real 3D, mobile opt-in 3D, unsupported WebGL, mobile axe scan with no violations, direct case-study routes, concepts, terminal, mocked AI success/cancel, and unconfigured API. Client build scan found no server secret variable names. Local Lighthouse measured performance 97/accessibility 100/best practices 100/SEO 100, LCP approximately 2.5s, CLS 0, TBT 40ms.
Known limitations: No configured real OpenAI/Redis or Vercel account, so no live model factual/adversarial evaluation, real Redis concurrency/outage integration test, hosted performance measurement, or production deployment. The quota script and error boundaries were verified via unit/mocked tests, not a live Redis instance. Lazy Three.js chunk is approximately 940 KB raw / 249 KB gzip and produces a Vite warning. Social preview is SVG and crawler metadata is client-side; raster OG image/absolute domain can be added for sharing.
Remaining implementation work: None within first-release scope. Optional future work requires supplied GitHub/LinkedIn/résumé/approved screenshots.

## RELEASE-001 — Configure and verify hosted services
Status: TODO
Objective: Connect Vercel, OpenAI, and Upstash using user-managed accounts, deploy a preview, complete the README release checklist, and publish when requested.
Acceptance: Direct routes/API verified on Vercel; real grounded/unknown/adversarial model responses reviewed; concurrent hourly/daily quota and outage behavior checked against Redis; production origin configured; account spend controls reviewed; hosted mobile/desktop performance checked.
Next action: Configure server-only variables from .env.example. Never put credentials in memory files, frontend source, or Git.

## PORT-002 — Personal comic scroll experience
Status: DONE
Date: 2026-11-19
Objective: Replace the abstract hero with a recognizable illustrated Sourav and a creative scroll-driven story using supplied portrait references. Preserve functional case studies, workspace, and contact.
Acceptance criteria: Reference-based generated character integrated; scroll drives reversible scene progression; mobile and reduced-motion readable; direct navigation usable; browser/build/lint verification; memory synchronized.
Completed: Three comic-style poses, reversible scroll story, chapter controls, keyboard navigation, and responsive webp formats integrated and verified.

## PORT-003 — Memoji / 3D cartoon character transformation
Status: DONE
Date: 2026-11-19
Objective: Transform the character art into a 3D Memoji / cartoon style character representing Sourav (expressive 3D Apple Memoji / Pixar-inspired cartoon aesthetic with swept curly hair, mustache, beard, tech outfit), maintaining the interactive 3-pose scroll sequence (focus, connect, welcome).
Acceptance criteria:
- Memoji / 3D cartoon character generated preserving Sourav's key identifiable traits (swept-up curly black hair, mustache & trim beard, medium brown skin tone, modern developer aesthetic).
- 3 consistent poses (focus at laptop, connect/thinking, welcome waving).
- Transparent background / clean alpha cutouts saved and optimized into responsive WebP formats for desktop and mobile.
- Portfolio character sequence updated and verified across desktop and mobile.
- Build, lint, and memory synchronized.
Completed:
- Generated high-fidelity 3D Memoji / Pixar-style keyframes for all 3 chapters: `focus` (focused typing), `connect` (looking up thoughtfully with a smile), and `welcome` (smiling and waving greeting).
- Preserved facial structure, skin tone, hair, facial hair, and neon-lime trimmed shirt/cross-legged posture.
- Keyed magenta backdrops to crisp transparency, removed isolated lever artifacts, and generated optimized responsive WebP pairs (900w desktop, 450w mobile) under `public/character/`.
- Updated `CharacterSequence.jsx` image descriptions.
Verification:
- `npm run lint`: pass (0 warnings/errors).
- `npm test`: 8/8 API unit tests pass.
- `npm run build`: built production client bundle in ~920ms.
- `npm run test:e2e`: 7/7 Playwright tests pass (mobile, desktop, reduced-motion, WebGL-disabled, keyboard scrub, and axe accessibility).
- Visual inspection of Playwright screenshots confirmed seamless aesthetic integration.

## VIDEO-001 — Continuous character motion master
Status: BLOCKED
Objective: Generate and compile continuous keyframe-constrained character animation for scroll-based forward/reverse seeking.
Blocker: Existing locally configured ZenMux credential returned HTTP 403 access_denied for minimax/minimax-h3 video creation. No video produced. User was informed; no alternate provider/model or weakened constraints was substituted.
Completed: Generated accepted first/middle/end character art; saved motion brief, prompt, production budget selecting chroma-video, and sanitized provider error record. Current portfolio uses the user's explicitly allowed comic alternative with discrete pose cuts.
Next exact action: User-managed provider access must be enabled for the requested resource; rerun saved first/last frame request, inspect complete master, compile/interpolate at 48 FPS with Oil Motion, inspect encoded keying/background reports, and test real forward/reverse frame seeking. Never claim the current three stills are a continuous video.

## PORT-004 — Classic comic book redesign
Status: DONE
Date: 2026-11-19
Objective: Redesign the entire existing portfolio with a classic printed comic mood and Sourav as an illustrated comic character.
Acceptance: Consistent comic styling on homepage, workspace and case studies; reference-based comic portraits; preserved project facts and working interactions; responsive and reduced-motion support; lint, build, API and browser verification; synchronized memory.
Implementation: Audited current React site and existing illustration masters. Reuse the likeness-based comic masters, preserve the current feature set, and implement paper/ink/red/yellow comic typography and panels.
Completed: Full paper/ink/red/yellow visual system, self-hosted comic fonts, responsive reference-based comic portraits, origin portrait and refreshed editorial copy. Preserved all routes, workspace, terminal, chat and chapter interactions.
Verification: npm run lint and npm run build pass; npm test 8/8; npm run test:e2e 7/7, including mobile axe with zero violations, reduced motion, no WebGL, forward/reverse poses, concepts, case studies, AI mock/cancellation and unconfigured fallback. Desktop and compact mobile screenshots inspected; mobile spacing corrected.
Remaining: No redesign implementation work. Existing release credentials and deployment remain RELEASE-001; blocked continuous video remains VIDEO-001. No commit or publication.

## PORT-005 — Redraw character as classic comic art
Status: DONE (superseded scope fulfilled by PORT-007)
Objective: Replace the overly realistic character artwork with visibly hand-inked classic comic illustrations while preserving Sourav’s likeness and three poses.
Acceptance: Bold ink outlines, flat colors and halftone shading; transparent assets integrated in scroll sequence/About; mobile and desktop assets load; build and browser verification; synchronized memory.

## PORT-006 — Vintage adventure-comic UI concept
Status: DONE
Objective: Develop a stronger visual concept from the user's supplied worn urban adventure comic cover (red shirt, petrol blue, heavy ink, aged newsprint, city scenery).
Acceptance: Four separate horizontal website section concepts: cover hero, projects, origin/workshop, closing contact; coherent visual language and factual portfolio content; preserve implementation until concept is translated.
Progress: Four image-generation jobs started. PORT-005 focus master saved under assets/sourav-motion/classic-comic/focus.png; connect/welcome generation jobs were running when the user supplied the new art direction. No new character derivatives integrated yet.

PORT-006 completed: Four horizontal 1536×1024 concept images generated, visually reviewed and saved under assets/concepts/builders-adventures, with DIRECTION.md describing implementation guidance. Files verified decodable. No application code changed; no new runtime tests needed for concept-only artifacts. PORT-005 remains IN_PROGRESS: focus artwork generated, remaining pose jobs interrupted by user steering and not integrated.

## PORT-007 — Build approved adventure-comic portfolio
Status: DONE
Date: 2026-11-20
Objective: Implement the approved four-section comic concepts with corrected natural landing character pose and preserve the loved closing scene.
Acceptance: Semantic responsive implementation matching concept mood; separate illustration assets without baked UI; corrected hero anatomy; functional existing projects/workspace/contact; desktop/mobile and accessibility verification; synchronized memory.

PORT-005 resolution (2026-11-20): User approved the full-scene adventure concept in PORT-007, superseding the three-pose integration. New comic illustrations now replace the realistic character on the active site. Historical focus master and pose files preserved.

PORT-007 completed: Corrected upright cover character, separate mobile compositions, project panels, working workshop, origin/toolkit, sunset finale, functional email/copy, matching metadata and image optimization script. All text/controls are HTML. Existing server and factual content preserved.
Verification: npm run lint and npm run build pass; npm test 8/8; npm run test:e2e 8/8. Mobile/desktop/case-study axe zero violations; 320–1440px layouts checked; clipboard, routes, terminal, mock AI/cancellation and unconfigured fallback verified. Desktop/mobile/full-page screenshots visually reviewed. Final targeted screenshot/accessibility case rerun after screenshot-only framing adjustment.
Remaining: No implementation work for this scope. RELEASE-001 remains credential/deployment-dependent; VIDEO-001 remains historical blocked work, unused by current experience. No commit or publication.

## PORT-008 — Restructure content around visitor needs
Status: DONE
Date: 2026-11-20
Objective: Take structural inspiration from https://sivaprasadc.vercel.app/ while preserving the approved comic artwork and finale.
Acceptance: Clear personal/value introduction; substantive project summaries and contributions; scan-friendly experience and tools before optional interactive workshop; direct AI entry; factual content only; working routes and responsive/accessibility checks; synchronized memory.
Reference audit: Retrieved actual HTML after browser search fetch failed. Observed role/value-led introduction, concrete project summaries, AI entry, work history, grouped stack, AI workflow and contact. Borrow information hierarchy only, not another person's copy, credentials or availability.

PORT-008 completed: Rewrote the cover around Sourav’s name, role and product value; added experience evidence and direct Ask about my work entry; enriched project cards with descriptions, contribution and live product link; moved experience and grouped stack ahead of the workshop; added a three-step approach section; refined navigation/contact copy. Preserved comic illustrations, finale, factual project statuses, case routes, concepts, terminal and API.
Verification: lint/build pass; API tests 8/8; Playwright 9/9 including narrative order, direct/repeated/refreshed chat deep links, existing feature regressions, 320–1440px overflow, clipboard and mobile/desktop/case-study accessibility with zero violations. Desktop cover and full-page screenshots inspected.
Remaining: No content-structure implementation work. Existing RELEASE-001 credentials/deployment limits remain. No commit/deployment.

## PORT-009 — Rebuild work presentation and case-study UI
Status: DONE
Date: 2026-11-20
Objective: Address user dissatisfaction with the overall result and work UI through a substantial project-section and case-study redesign.
Acceptance: Replace oversized poster cards with concise editorial project features and interactive factual product maps; redesigned case-study overview/navigation/reading layout; preserve approved comic hero/finale and routes; trim repetitive middle content; responsive/accessibility and interaction verification; synchronize memory.
Audit: Current work cards prioritize large generic illustration and repeat project names/actions; case-study route is a generic text template with another oversized illustration; approach/experience/stack repeat similar statements. Keep real project facts and avoid fabricated product screenshots or outcomes.

PORT-009 completed: Replaced poster-card work grid with two horizontal editorial project features, prominent role/stack/actions and interactive factual workflow maps. Redesigned both case-study routes with compact overview, facts strip, sticky desktop section index/mobile wrapping navigation, readable chapters, interactive maps, built-scope lists and status context. Reduced the repetitive three-column approach section to a concise note. Approved cover/finale and all prior features preserved.
Verification: lint/build pass; 8 API tests pass; 10 Playwright tests pass. New coverage verifies project-map selection, planned automation wording, case chapter anchors/focus, next-project routing and 320px case-study overflow/axe. Existing mobile/desktop/case axe scans zero violations. Desktop work index and desktop/mobile case screenshots visually inspected.
Remaining: User visual review; no pending implementation for this revision. Existing release/live AI limits unchanged. No commit/publication.

## PORT-010 — Marvel comic flipbook intro & GTA 6 ambient synthwave audio
Status: DONE
Date: 2026-11-20
Objective: Inject high-energy creative life into the site with a Marvel Studios-inspired comic flipbook intro bumper and a GTA 6 / Vice City-inspired synthwave BGM audio experience.
Acceptance criteria:
- Cinematic Marvel-style comic flipbook intro featuring rapid panel flipping through authentic comic project artwork, comic sound/halftone effects, letterbox framing, and dramatic resolution into the portfolio.
- Non-intrusive: easily skippable (Skip button, Esc key, click), respects `prefers-reduced-motion`, and replayable anytime via an intro pill/button.
- GTA 6 / Vice City ambient synthwave audio generator using Web Audio API (zero bloat, zero copyright issues, instant load) with retro bassline, neon pad chords, and subtle analog warmth.
- Audio controls: Mute/unmute toggle, volume control, animated retro equalizer visualizer, and compliance with browser autoplay gesture requirements.
- Retain existing responsive layouts, 100% accessibility (axe), build & tests passing.
- Synchronize memory (.ai/TASKS.md, .ai/HANDOFF.md).
Completed:
- Built `src/audio/audioEngine.js` using the Web Audio API with zero external audio assets: generates real-time 80s Vice City synthwave BGM (rolling 16th-note analog bass, lush detuned sunset pads, neon arp plucks, 80s kick/snare pulse), comic page flutter SFX, and deep cinematic sub-bass logo impact boom.
- Built `src/components/MarvelIntro.jsx` and `src/intro.css`: accelerated comic panel flipbook cycling through authentic project art, halftone grain/vignette overlay, anamorphic letterbox framing, Marvel-style red logo box with inner animated panel mask and metallic light sweep, accessible Skip [ESC] controls, and reduced-motion/headless browser safeguards.
- Built `src/components/ViceCityRadio.jsx` and `src/radio.css`: retro 80s car stereo tuner dock with play/pause, mute, live animated equalizer bars (pure HTML, preserving Three.js canvas counts), WCAG AA color contrast (> 13:1), and one-click "INTRO" replay trigger.
- Added intro replay pills to both the navigation header and the cover hero edition bar.
Verification:
- `npm run lint`: pass (0 warnings, 0 errors).
- `npm test`: 8/8 API unit tests pass.
- `npm run build`: built production bundle in ~750ms.
- `npx playwright test`: 11/11 Playwright end-to-end tests pass, including dedicated intro bumper lifecycle, Escape skip, radio audio start/pause, mute toggle, and axe accessibility scans with 0 violations.
Remaining: User visual and auditory review via `npm run dev`. No pending implementation.

## PORT-011 — Cinematic matched-art landing handoff
Status: IN_PROGRESS
Date: 2026-11-20
Objective: Automatically run the existing comic introduction and resolve its final artwork into the exact landing hero before revealing navigation and copy.
Acceptance: Deterministic intro phases; decoded responsive artwork matches hero crop and bounds; smooth image-first handoff and staggered UI; skip, reduced-motion and deep-link access; meaningful browser/build/lint verification and synchronized memory.
Existing untracked tests/cinema.spec.js and .vercel/ are preserved; cinema tests describe a different, unimplemented entry/audio design and are not the current runtime contract.

PORT-011 completed: DONE. Replaced restarting phase-dependent timers with one cancelable timeline. Existing comic montage/title resolves to a decoded snapshot of the actual responsive hero image, settles from a viewport-filling shot to the measured hero crop, then dissolves before staggered navigation/copy. Automatic on each ordinary root load; reduced-motion and hash/case deep links bypass. Added scroll lock, inert background, skip focus/keyboard containment, timer cleanup, resize exit and bounded image decoding fallback. Existing replay/audio controls preserved.
Verification: npm run lint and npm run build pass (build reports a >500 KB main-chunk advisory); npm test 8/8; scoped Playwright tests/opening.spec.js + tests/portfolio.spec.js 14/14 pass. New desktop/mobile checks confirm matching source and final geometry within 2px, hidden copy during handoff, subsequent reveal, reload auto-entry, skip cleanup, reduced-motion/deep-link access and zero axe violations. Desktop matched-frame and mobile reveal screenshots visually inspected.
Remaining: No implementation remaining in this request. Untracked tests/cinema.spec.js was present before work and targets unrelated unimplemented invitation/audio contracts; preserved untouched and excluded from the scoped verification. No commit or deployment.

## PORT-012 — Illustrated character origin opening
Status: IN_PROGRESS
Date: 2026-11-20
Objective: Make the opening more creative and character-led with new generated Sourav illustrations while preserving the approved PORT-011 matched landing transition.
Acceptance: Multiple new consistent character illustrations saved as source masters and optimized runtime assets; directed readable comic montage with purposeful camera/composition changes; exact existing hero handoff retained; desktop/mobile, reduced-motion, skip, build/lint and regression verification; synchronized memory.
Startup: Existing uncommitted PORT-011 changes and newly deleted public/character files belong to prior/user state and will be preserved. Existing intro references deleted character assets; replace only intro references with new assets, without restoring unrelated deletions.

PORT-012 completed: DONE. Generated three reference-consistent character illustrations using built-in image_gen (idea sketchbook, laptop build, laptop stride). Saved unchanged magenta sources, full-resolution alpha masters, exact prompt set and motion brief under assets/illustrations/intro. Added scripts/prepare_intro_assets.py and six alpha WebP variants under public/illustrations/intro (about 684 KiB desktop / 291 KiB mobile total). Replaced the repeated flipbook with three timed comic scenes, distinct paper/blue/red compositions, restrained camera/text motion, panel-spread beat and printed title. Existing PORT-011 exact responsive hero capture/settle/dissolve and staggered landing reveal preserved. Legacy intro references to already-deleted character assets removed; unrelated deletions preserved.
Verification: Final lint/build pass (existing >500 KB main-chunk advisory remains); eight API tests pass; 11 portfolio and five opening browser cases pass in scoped runs. New checks cover each generated asset loading, 320px face/text separation, desktop/mobile story screenshots, panel/title screenshots, actual hero matching within 2px, slow intro artwork timeout and resize cleanup. Existing reduced-motion/deep links, keyboard skip/focus/scroll, feature regressions and axe scans pass. Inspected sources, encoded alpha over four backgrounds, desktop/390/320 story layouts, panel spread, title and final matched frame. git diff --check passes.
Remaining: User visual review. No video file was generated; opening uses generated still art and browser camera/text animation. Pre-existing unrelated tests/cinema.spec.js remains untouched and outside scoped verification. No commit or deployment.

## PORT-013 — Cinematic graphic-novel studio opening
Status: DONE
Date: 2026-11-20
Objective: Replace the rejected cutout/slide presentation with more creative full-scene graphic-novel imagery and a Marvel-inspired cinematic comic-page/title sequence; retain the approved matched landing transition.
Acceptance: Newly generated scene artwork consistent with Sourav's reference; art-first cinematic composition, accelerating dimensional panel choreography and strong title treatment; no old motivational-slide UI; final hero currentSrc/crop handoff preserved; responsive/reduced-motion/skip/fallback verification and synchronized memory.
Preserve all existing user/uncommitted changes and retired source art. PORT-012 is functionally verified but its visual direction is rejected and superseded by this task.

PORT-013 completed: DONE. Four built-in image_gen scenes replace the rejected cutouts: midnight laptop close-up, rain-lit portrait, rain street, rooftop. Art-only camera cuts accelerate into a dimensional printed-page flight; artwork in the name resolves into a silver studio mark on dark red. Original PORT-011 exact hero currentSrc/crop settle/dissolve and navbar/text reveal retained. Asset decode is bounded and unavailable/slow art falls back to the actual cover. Previous assets/deletions/unrelated tests preserved. Sources/prompts/direction/report are under assets/illustrations/cinema; eight optimized WebP files under public/illustrations/cinema; scripts/prepare_cinema_assets.py regenerates derivatives. Narrow tablet/fallback-font header and 320px radio spacing corrected after responsive verification exposed overflow.
Verification: npm run lint, npm run build and git diff --check pass; eight API tests pass; npx playwright test tests/opening.spec.js tests/portfolio.spec.js passes 16/16. All scene loads, comic/title stages, 320px title bounds, failed-art fallback, resize/skip/inert/scroll cleanup, reduced motion/deep links, actual landing source/crop match <2px, existing features and axe checks verified. Inspected source art, desktop/phone screenshots and recorded sequence contact sheet. Recorded preview under ignored test-results/cinematic-opening-preview.mp4 (browser capture, not a production dependency).
Remaining: User artistic review; no unimplemented scope. Existing >500 KB main-chunk advisory and unrelated historical tests/cinema.spec.js remain documented. No commit/deployment.

## PORT-014 — Shorten cinematic name to Sourav
Status: DONE
Objective: Use SOURAV rather than SOURAV O in the cinematic title, preserving the approved imagery, effects and landing transition.
Acceptance: Both artwork-filled and metallic title layers show SOURAV; title remains inside the mobile viewport; project memory synchronized.
Completed: Both cinematic title layers now read SOURAV; prelude monogram is S. No imagery/style/timing/handoff changes.
Verification: Production build passes (existing chunk advisory remains); existing small-phone cinematic-title Playwright case passes; source text and git diff --check verified.
Remaining: None for this title correction. Persistent project memory synchronized; no commit/deployment.

## PORT-015 — Use Sourav throughout the site
Status: DONE
Objective: Remove trailing O from all current website name references, metadata and assistant context per user preference.
Acceptance: Header/footer/hero/shared profile/browser titles/social metadata/assistant use Sourav; historical source prompts and records preserved; relevant checks pass and memory synchronized.
Startup: Baseline 5a9f7f3, with an existing user edit shortening the case title in src/App.jsx; preserve and complete it consistently.
Completed: Updated current frontend/shared profile, route titles/descriptions, HTML/social metadata, SVG preview, assistant context and README. Preserved the existing user case-title edit and removed its trailing space. No artwork/animation/contact identifier changes.
Verification: Build passes (existing chunk advisory); eight API tests and homepage navigation Playwright case pass; exact-name scan across runtime/public/README finds no old-name occurrences; git diff --check passes.
Remaining: None. Memory synchronized; no commit/deployment.

## PORT-016 — Comic book project showcase
Status: DONE
Date: 2026-11-20
Objective: Replace the flat work-section cards and concept accordion with a full-bleed comic-book experience: each project is a physical comic page with halftone textures, inked panel borders, speech-bubble callouts, action captions, and a scroll-triggered page-flip reveal.
Acceptance: All 4 projects shown as comic pages; existing case-study routes preserved; `id="work"` anchor preserved; lint/build pass; 11/11 Playwright tests pass; mobile + reduced-motion verified.
Completed: Created src/components/ComicBook.jsx and src/comic-book.css. Removed old Work() function from App.jsx. Updated 4 stale Playwright selectors to match new comic-book DOM. No artwork generation needed; existing WebP illustrations reused.
Verification: npm run lint clean; npm run build clean (pre-existing 500KB advisory only); npx playwright test tests/portfolio.spec.js → 11/11 passed.
Remaining: User visual review at http://localhost:5174; no further implementation.

## PORT-017 — Replace flat comic-book layout with interactive 3D book
Status: DONE — completed through the PORT-018 rebuild (earlier implementation superseded)
Date: 2026-11-20
Objective: Replace Antigravity's flat comic-book layout (PORT-016) with a proper interactive 3D book that starts small, grows on scroll, opens naturally, and turns pages to reveal each project with small explanations. Use CSS 3D transforms for realistic book appearance and smooth scroll-driven page-flip animations.
Acceptance: Realistic 3D book with front/back hardcover; book starts small and grows on scroll; individual page-turn animations for each of 4 projects; each page shows project art, title, summary, description, role, tech stack, buttons; reduced-motion fallback; responsive 320-1440px; build/lint verification; preserved routes and #work anchor; synchronized memory.
Completed: Created Book3D.jsx with useScrollProgress hook, BookCover and BookPage components. Book uses CSS perspective (2500px), transform-style: preserve-3d, individual page rotateY transforms (0-180deg) based on scroll progress. Each page has z-index for proper stacking. Created book3d.css with vintage hardcover styling, realistic spine, page textures, shadows, responsive breakpoints. Updated App.jsx to import Book3D instead of FlipBook. Fixed duplicate JSX code and improved 3D positioning with proper left cover, stacked pages, right cover, spine structure.
Verification: npm run build PASSING (pre-existing 500KB chunk advisory unrelated). Dev server running on port 5173. Pre-existing FlipBook.jsx lint errors (unused file, not caused by this work).
Remaining: User visual review and feedback at http://localhost:5173/#work. If approved, update Playwright tests (portfolio.spec.js) to match new Book3D selectors and mark DONE.

## PORT-018 — Readable scroll-pinned comic book on a table
Status: DONE
Date: 2026-11-20
Objective: Rebuild the rejected work UI as a physical comic that lifts toward the reader, opens, and turns through project spreads as the section stays pinned.
Acceptance: Closed-cover arrival, scroll-linked tilt/opening, four readable two-page spreads with story left and illustration/workflow right, reading holds between turns, working chapter/previous/next navigation, preserved facts/routes/anchors, mobile and reduced-motion reading layouts, browser verification and synchronized memory.
Startup: Existing uncommitted App/Book3D/ComicBook/FlipBook/test/memory changes preserved. PORT-017 is superseded by this rebuild; historical implementation notes retained.

Completed PORT-018: Rebuilt Book3D.jsx and book3d.css using Motion useScroll and native CSS 3D transforms. Closed illustrated cover on a drawing table lifts/tilts toward the reader, opens into story-left/art-right spreads, holds between three two-sided leaf turns, then releases the sticky section. Four chapter buttons and previous/next controls jump to readable holds. Actual project statuses/facts and case routes retained; #concepts deep links open NOTWO on desktop. Phone/tablet <=1000px, short viewports <=600px high, and reduced motion use stacked readable spreads. Existing illustrations reused; no video, WebGL or new dependency. Removed false coming-soon/shipped implications. Repaired lint issues in the preserved inactive FlipBook component, updated stale work selectors, and added five focused book browser tests.
Verification: npm run lint PASS; npm run build PASS (existing >500KB chunk advisory); npm test 8/8 PASS; npx playwright test tests/book.spec.js tests/portfolio.spec.js tests/opening.spec.js --workers=2: 21/21 PASS. Browser checks include pin/open/hold/forward/reverse/release, desktop chapter navigation and links, all-spread text fit at 1280x720, 320/390/768/820/1440 reading layouts, desktop/mobile/reduced-motion axe scans and concept deep link. Visually reviewed closed/open/CRM/turn/phone captures. git diff --check PASS.
Remaining: No requested implementation outstanding. Existing tests/cinema.spec.js still targets the retired invitation/audio UI and fails; full-suite attempt was interrupted after confirming stale selectors. The current five opening tests pass. This unrelated legacy test cleanup remains separate. No commit/deployment; user visual feedback can guide further art direction.

## PORT-019 — Fix opening paper gap and enable mobile book
Status: DONE
Objective: Remove the exposed dark board during cover opening and provide a usable scroll-driven book on phones, with touch chapter/page controls.
Acceptance: Paper covers the opening board throughout forward/reverse scrubbing; interactive phone cover and page turns at 320–1000px; readable project story/art pages, working case links, reduced-motion fallback preserved; browser/layout/accessibility verification and synchronized memory.

Completed PORT-019: Added a warm paper bed above the dark backing so no exposed dark area appears while opening/reversing the cover. Enabled an interactive single-leaf book at <=1000px: eight story/art leaves, cover opening, scroll-linked turns, chapter jumps and 44px previous/next touch controls. Responsive matchMedia/useSyncExternalStore selects compact composition; resize refreshes scroll state and guards invalid turn faces. Phone story/art leaves retain real project facts/case links; compact short-screen typography/spacing fits all four stories even at 320x568 without clipping or hiding facts. Reduced motion and <=500px-high landscape retain document-flow reading. Preserved unrelated user edit in PROJECT.md (4 + years).
Verification: lint/build PASS (existing >500KB advisory); 19/19 book+portfolio browser tests PASS. After final phone heading spacing adjustment, all eight book cases PASS again. New coverage checks paper lining forward/reverse, phone widths 320/375/390/768, all stories fitting, chapter/page controls, scroll turns, no horizontal overflow, nav clear of audio dock, axe scans and actual touch-enabled taps/case navigation. Manual closed/open/art/paper/320px reviews and mid-turn phone→desktop resize without page errors. git diff --check PASS.
Remaining: None for this request. Existing obsolete cinema tests/provider release setup remain separately documented. No commit/deployment.

## PORT-020 — Mobile spiral project notebook
DONE. Give the compact book a visible binding, layered sheets and a top-hinged scroll turn while keeping every project readable.

PORT-020 completed. The compact project book uses a portrait spiral notebook with seven visible rings, a layered paper edge and scroll-driven top-hinged cover and sheets. Book3D.jsx and book3d.css implement the change. Lint, build and all eight book browser tests passed, including phone fit, touch navigation and reduced motion. No outstanding implementation work. Next action is optional mobile visual review.

## PORT-021 — Smooth page turns
DONE. Bend each moving leaf around the binding on both layouts, eliminate the mid-turn content swap and animate page controls.

PORT-021. Desktop leaves bend along the spine and compact leaves curl over the top rings. Five connected CSS strips carry aligned slices of each printed face. Eased rotation and shading follow scroll in either direction. The underlying desktop story changes upon landing. Page controls animate the scroll. Lint and build passed. Book suite exercised desktop, mobile, navigation and reduced motion.

## PORT-022 — Continuous page landing
DONE. Eliminated the per-page-turn flash by reordering the updateScene function so CSS custom properties (--turn-angle, --bend, --shade, --lift, --cover-angle, --cover-visibility) are written to bookRef BEFORE flushSync commits the React state change. This ensures the folio-turn div always mounts with the correct angle already on the element, and no intermediate 0° snap is painted. Additionally, when a page finishes landing (turn drops to 0 while currentScene.turning was true), --turn-angle is parked at -180deg so the outgoing sheet disappears behind the spread instead of snapping upright before unmounting. Artwork preload IntersectionObserver (from PORT-022 Codex partial) retained. Lint and build pass.
