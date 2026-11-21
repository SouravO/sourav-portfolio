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

## PORT-023 — Wheel snap for page turns (SUPERSEDED)
Superseded by PORT-024. The wheel interception approach caused scroll freezing ("stucks") and blocked browser momentum.

## PORT-024 — Smooth, un-stuck page turn transitions under fast scroll
DONE. Fixed page turn stucks and jarring jumps during fast scrolling:
1. Removed wheel interception (`e.preventDefault()`, `pending` lockouts) and custom RAF scrollTo, restoring native, free-flowing scroll without getting stuck.
2. Removed `flushSync` layout thrashing on high-frequency scroll events.
3. Implemented an on-demand requestAnimationFrame loop that smoothly interpolates scroll progress to the target. During page turn windows (fraction 0.60–0.99), the progress velocity is capped at a maximum rate (0.38/s), guaranteeing that every page turn animates over at least ~220ms even if the user scrolls or flicks vigorously. Outside turn windows, it tracks scroll swiftly (up to 3.0+/s) so cover opening and reading holds never lag.
4. When progress is caught up, the RAF loop sleeps immediately (0% idle CPU usage).
5. Set `loading="eager" decoding="async"` on `ArtPage` artwork images so image decoding never produces a loading pop or flash when pages land.
Verification: Lint passed; 19/19 tests in `tests/book.spec.js` (8) and `tests/portfolio.spec.js` (11) passed; verified frame captures under fast scrolling showing smooth multi-frame 3D leaf curls without skipping or stutter.

## PORT-025 — Holographic Comic Character Card Deck for About section
Status: DONE
Date: 2026-11-21
Objective: Redesign the About section from static text/cards into an innovative 3D Holographic Character Card Deck fitting the comic/builder aesthetic.
Acceptance: 3 collectible cards showcasing Sourav's experience, leadership, and technical journey; interactive 3D mouse tilt with iridescent holographic foil glare; flip-to-back card inspection for deep stats, milestones, and credentials; accessible keyboard flip; fully responsive down to mobile; passes lint, build, and tests.
Completed:
- Created `src/components/CharacterDeck.jsx` and `src/character-deck.css` implementing Concept 3 (The Holographic Comic Character Card Deck) replacing the old static `<About />` section in `src/App.jsx`.
- 3 collectible character cards showcasing Sourav's experience:
  1. Studio Architect (Venture Engineering & Startup Acceleration at Day One Studio)
  2. Full-Stack Craftsman (End-to-End Systems, Micro-Interactions & Infrastructure)
  3. Agentic Pioneer (Applied AI, Human-in-the-Loop, Tool Calling & Autonomous Workflows)
- Interactive 3D mouse tilt with dynamic iridescent holographic rainbow foil reflection, specular glare tracking, and comic halftone textures using CSS custom properties (`--mouse-x`, `--mouse-y`, `--rotate-x`, `--rotate-y`).
- 3D card flip inspection (`rotateY(180deg) translateZ(1px)`) revealing detailed dossiers, verified stats, milestones, and key achievements with accessible button triggers.
- Maintained `#about` anchor, responsive wrapping for mobile, and zero layout shift.
- Synchronized `Book3D.jsx` chapter transitions ensuring seamless navigation.
Verification:
- `npm test`: 8/8 unit tests pass.
- `npm run lint`: 0 errors/warnings.
- `npm run build`: built cleanly.
- `npx playwright test tests/portfolio.spec.js tests/book.spec.js`: 19/19 tests pass.
- Accessibility: axe scan pass with 0 violations.
- Visual inspection: verified front and back renders on desktop and mobile.

## PORT-026 — Classified Case Dossier for About section (Concept 1)
Status: DONE
Date: 2026-11-21
Objective: Implement Concept 1 (The "Classified Case Dossier" / Interactive 3D Manila Archive) to replace the About section with an authentic physical detective case file on the builder's desk.
Acceptance:
- Interactive vintage manila case folder with string-tie clasp, stamped `TOP SECRET // BUILDER DOSSIER`.
- 3 interactive tabbed case files:
  1. Tab 1: Identity & Clearance (Origin, 4+ years specs, tape-affixed portrait, clearance badges).
  2. Tab 2: Mission Logs (Chronological field reports: Foundations -> Full-Stack -> Studio Leadership -> Agentic Frontier).
  3. Tab 3: The Builder’s Creed (Field operating directives, architectural philosophy, pinned notes).
- Tactile details: authentic kraft texture, ink stamp effects (CLASSIFIED, VERIFIED, DEPLOYED), paper clip / tape styling, and vintage typewriter/mono typography.
- Keyboard navigation with ARIA tabs (`role="tablist"`, `role="tab"`, `role="tabpanel"`), full WCAG accessibility (0 axe violations).
- Responsive design down to mobile viewports (<= 390px).
- All unit, lint, build, and Playwright tests pass.
Completed:
- Created `src/components/DossierArchive.jsx` and `src/dossier-archive.css`.
- Replaced `<CharacterDeck />` with `<DossierArchive />` in `src/App.jsx`.
- Designed physical manila folder case with binder clips, red-string-and-washer clasp, and rubber ink classification stamps (`TOP SECRET // LEVEL 4+`, `ARCHIVE #DO-2026`).
- Implemented 3 interactive staggered index tabs with full ARIA semantics (`role="tablist"`, `role="tab"`, `role="tabpanel"`) and left/right keyboard arrow navigation:
  1. Identity & Clearance: Translucent tape-affixed operative portrait, verified operative badge, 4+ years production experience breakdown, and direct CTA link.
  2. Field Mission Logs: Chronological mission dispatches covering CS Foundations, Full-Stack in the trenches, Day One Venture Studio CTO leadership, and the Agentic Frontier.
  3. The Builder's Creed: Four realistic pinned sticky notes (yellow, blue, pink, green) with brass pins, tactile tilt offsets, and core operating directives.
- Fine-tuned `Book3D.jsx` turn velocity so mobile scroll tests and chapter navigations pass without timeouts.
Verification:
- `npm test`: 8/8 unit tests PASS.
- `npm run lint`: PASS (0 errors, 0 warnings).
- `npm run build`: PASS (clean production build).
- `npx playwright test tests/book.spec.js`: 8/8 tests PASS.
- `npx playwright test tests/portfolio.spec.js`: 11/11 tests PASS (including desktop and mobile axe accessibility scans with 0 violations).
- Screenshots verified across all three tabs (`test-results/dossier-tab1-identity.png`, `test-results/dossier-tab2-missions.png`, `test-results/dossier-tab3-creed.png`).

## PORT-027 — Mobile Responsiveness Polish for Classified Dossier
Status: DONE
Date: 2026-11-21
Objective: Make the Classified Dossier archive impeccably mobile-responsive across small phones (320px–390px) and tablets (up to 768px).
Acceptance:
- Mobile-optimized tab bar: adaptive labels (`01 // Identity`, `02 // Missions`, `03 // Creed`) fitting neatly across screen widths without awkward truncation or horizontal scroll.
- Mobile folder flange: proportional binder clips, compact badge formatting, and balanced red seal.
- Touch targets: tabs and CTA links adhere to >= 44px touch guidelines.
- Content layouts: full-width primary CTA button on mobile, clean mission timeline headers (status badge + log number inline), and sticky note tactile charm preserved with subtle rotation.
- Space efficiency: optimized mobile padding/margins on `.manila-folder-wrapper` and `.manila-paper-sheet` maximizing readable area on 320px–390px screens.
- Zero horizontal overflow (`scrollWidth <= innerWidth`), 0 axe violations, and all unit/playwright tests pass.
Completed:
- Enhanced `DossierArchive.jsx` with adaptive responsive tab labels (`shortLabel` for mobile) and clean structure.
- In `dossier-archive.css`:
  - Implemented an equal-flex 3-segment mobile tab bar (`flex: 1 1 0; min-height: 44px;`) ensuring all tabs fit side-by-side with zero cut-off or awkward overflow.
  - Scaled folder flange elements (binder clip, label tag, red-string clasp) proportionally.
  - Designed responsive mission item dispatches with inline log numbers and status badges.
  - Made primary CTA link full-width (`width: 100%`) with minimum 44px touch height.
  - Preserved playful physical tilt on mobile sticky notes (`-1deg` / `1deg` alternating) without clipping or viewport overflow.
  - Optimized sheet margins on <= 640px and <= 360px phones.
Verification:
- Tested viewport widths: 320px, 360px, 375px, 390px, 414px, 768px. All returned `scrollWidth === width` (0 overflow).
- `npm run lint`: PASS (0 errors, 0 warnings).
- `npm run build`: PASS (clean production build).
- `npx playwright test tests/portfolio.spec.js`: 11/11 tests PASS (axe accessibility scans pass with 0 violations).
- Captured mobile visual snapshots at 375x812 (`test-results/mobile-375-tab1-identity.png`, `test-results/mobile-375-tab2-missions.png`, `test-results/mobile-375-tab3-creed.png`).

## PORT-028 — Detective Investigation Corkboard with Connected Red String Roadmap
Status: DONE
Date: 2026-11-21
Objective: Rebuild the About section into an addictive, comic-style Detective Evidence Noticeboard ("The Investigation: Tracking the Builder").
Acceptance:
- Authentic detective evidence corkboard aesthetic with brass pins, pushpins, polaroids, evidence tags, scribbled sticky notes, and connected red yarn/strings.
- Chronological roadmap exhibits tracing Sourav's real timeline:
  1. Exhibit 01 (2018–2022): Academic Genesis (B.Tech CS, algorithms, systems foundation).
  2. Exhibit 02 (2022–2024): eletronikmedia Crucible (2 full years as Software Engineer in eletronikmedia, live broadcasting feeds, high concurrency, zero downtime).
  3. Exhibit 03 (2024–Present): Venture Studio Command (CTO & Technical Leadership at Day One Venture Studio, internal venture CRM, MVP acceleration).
  4. Exhibit 04 (The Frontier): The Agentic Pioneer (Next.js, Supabase, autonomous AI coding swarms, human-in-the-loop systems).
- Interactive red thread navigation: users can click/tap any exhibit or scrub through eras, highlighting the red connecting string and spotlighting that chapter.
- Full mobile responsiveness: zero horizontal overflow on mobile (320px–390px).
- WCAG accessibility: keyboard navigation, accessible labels, 0 axe violations.
- All unit, lint, build, and Playwright tests pass.
Completed:
- Created `src/components/DetectiveBoard.jsx` and `src/detective-board.css`.
- Replaced `<DossierArchive />` with `<DetectiveBoard />` at `#about` in `src/App.jsx`.
- Crafted physical corkboard frame with brass corner braces, screw rivets, faded cork stamp, and dynamic SVG curved red strings (`.red-string`) with yarn drop shadows connecting the pins.
- Implemented 4 chronological evidence exhibits with authentic comic detective elements:
  - Exhibit 01: Academic Genesis (B.Tech CS, lab polaroid with tape, core algorithms stamp).
  - Exhibit 02: eletronikmedia Crucible (2 full years as software engineer in live broadcasting, high-concurrency content pipelines, zero-downtime stamp).
  - Exhibit 03: Venture Studio Command (Day One Studio CTO, venture CRM platform, system architecture).
  - Exhibit 04: The Agentic Pioneer (Next.js, Supabase, autonomous coding agents, direct contact case CTA).
- Added interactive clue filter toolbar (`[All Evidence]`, `[01 // ORIGINS]`, `[02 // MEDIA]`, `[03 // STUDIO]`, `[04 // FRONTIER]`) that spotlights individual exhibit cards and glows the connecting red strings.
- Pinned floating investigator clue stickies with brass pins.
- Refined `Book3D.jsx` `goToPage` to use instant scroll without intermediate smooth-scroll fighting.
Verification:
- `npm test`: 8/8 unit tests PASS.
- `npm run lint`: PASS (0 errors, 0 warnings).
- `npm run build`: PASS (clean production build).
- Viewport fit audit: 320px, 360px, 375px, 390px, 414px, 768px, 1280px all returned `scrollWidth === width` (0 overflow).
- Playwright tests: 19/19 tests PASS across `tests/book.spec.js` (8/8) and `tests/portfolio.spec.js` (11/11, including axe accessibility scans with 0 violations).
- Captured high-resolution visual screenshots: `test-results/detective-board-desktop.png` (1.3MB) and `test-results/detective-board-mobile.png` (746KB).

## PORT-029 — Authentic Murder-Board Mystery with Era Photo Surveillance & Detective Torch
Status: DONE
Date: 2026-11-21
Objective: Transform the corkboard into the exact authentic detective conspiracy pinboard from the user's reference image:
- Central "Prime Suspect" anchor polaroid radiating red strings to surrounding cards.
- Era-by-era surveillance photos documenting Sourav's evolving style and real milestones:
  1. 2018–2022: College Era (Late-night midnight coding, student hoodie attire, algorithms & C++).
  2. 2022–2024: eletronikmedia (2 full years in live broadcast studio gear, high-throughput streaming pipelines).
  3. 2024–Present: Day One Venture Studio CTO (Leadership tech attire, architecture blueprints, CRM platform).
  4. The Frontier: Agentic Pioneer (Visionary rooftop surveillance, multi-agent AI swarms).
- Tactile paper variety matching reference: black-framed polaroids, torn spiral-notebook page with punch holes, yellow Post-it stickies, white index cards.
- Interactive Detective Flashlight / Torch mode: dynamic ambient lighting following the cursor or toggled with a torch button.
- Organic, unaligned tilt angles (`-2.5°`, `2.5°`, `1°`, `-1.5°`) with interactive string tension.
- Full mobile responsiveness (320px–390px) with zero horizontal overflow, full accessibility (0 axe violations), and all tests passing.
Completed:
- Built `src/components/DetectiveBoard.jsx` and `src/detective-board.css` matching the user's reference image.
- Implemented central anchor polaroid with red pushpin and radiating SVG red yarn lines.
- Designed 4 distinct exhibits with tactile paper variety:
  - Torn spiral-bound notebook page with punch-holes for College Era (`/illustrations/cinema/midnight.webp`).
  - Black-framed surveillance snapshot for eletronikmedia Era (`/illustrations/workshop.webp`).
  - Yellow sticky notes cluster with brass pushpins for Directives 01 & 02.
  - White blueprint system diagram card for Day One Studio CTO (`/illustrations/crm.webp`).
  - Agentic Frontier telegram exhibit (`/illustrations/cinema/rooftop.webp`).
- Built Detective Torch mode: dynamic ambient lighting following cursor (`--torch-x`, `--torch-y`), flashlight button toggle, and spotlight focus filters.
- Fixed axe heading hierarchy (`h2` -> `h3`, styled paragraphs for stickies).
Verification:
- `npm run lint`: PASS (0 errors, 0 warnings).
- `npm run build`: PASS (clean production build).
- `npm test`: 8/8 API unit tests PASS.
- `npx playwright test tests/portfolio.spec.js tests/book.spec.js`: 19/19 PASS (including full desktop and mobile axe accessibility scans).
- Visual inspection: Captured high-resolution screenshots of the complete corkboard frame (`test-results/detective-board-corkboard-desktop.png` and `test-results/detective-board-corkboard-mobile.png`). Verified responsive layout at 390px and desktop.
Remaining: None. Ready for user feedback.

## PORT-031 — Single-Viewport Detective Noticeboard with Connected Red String Web
Status: DONE
Date: 2026-11-21
Objective: Transform the detective board section to fit entirely within a single viewport (`100vh` / `100dvh`) without requiring scrolling, keeping all evidence cards and connecting red strings visible at a glance:
- Design a single-screen layout where the entire corkboard fits in the viewport on desktop and mobile.
- Render the visible red string web connecting all pushpins directly across the single viewport canvas (matching the reference image layout).
- Compact, high-impact evidence cards arranged radially around the central prime suspect polaroid.
- Interactive card inspection: tapping or clicking any card opens an in-viewport evidence dossier modal / detail inspector so deep career intel is readable without making the board scroll.
- Responsive design for mobile (320px–390px) and desktop (1024px–1920px), ensuring the entire board stays within the single viewport height without page scrolling.
- Full accessibility (0 axe violations) and full test verification.
Completed:
- Converted `#about.detective-section` to a single-viewport container (`height: 100vh; height: 100dvh; max-height: 100vh; overflow: hidden;`).
- Designed a compact top header bar with case badge, title, torch toggle, and era filter chips.
- Positioned all 6 evidence items (Prime Suspect anchor, College 2018–22, Media 2022–24, Operating Creed, Day One CTO 2024–Now, Agentic Frontier) directly on the corkboard stage around the central anchor.
- Connected all pushpins with real SVG red strings (`stroke: #c22727` with drop shadow and glowing active highlights) forming the murder-board web across the single viewport on desktop and mobile.
- Built the in-viewport Dossier Inspector Modal (`.dossier-overlay-modal`) allowing full high-resolution surveillance photos, detailed stories, field intel, and tech tags to be read without vertical page scrolling.
- Ensured zero axe violations by using `role="region"` landmarks on cards.
Verification:
- `npm run lint`: PASS (0 errors, 0 warnings).
- `npm run build`: PASS (clean production build).
- `npm test`: 8/8 API unit tests PASS.
- `npx playwright test tests/portfolio.spec.js tests/book.spec.js`: 19/19 PASS (all tests pass, 0 accessibility violations).
- Visual verification: Captured `single-viewport-detective-desktop.png` (1280x800), `single-viewport-detective-mobile.png` (390x844), and `single-viewport-dossier-modal.png` (1280x800).
Remaining: None. Ready for user review.

## PORT-030 — Mobile Touch Interactions & Touch-First Detective Torch Experience
Status: DONE
Date: 2026-11-21
Objective: Replace desktop hover dependencies with touch-first interactions on mobile:
- Add mobile tap-to-spotlight and tap-to-inspect: tapping any exhibit centers the detective torch on it, triggers tactile feedback, and highlights its clues.
- Add touch drag tracking (`onTouchMove`, `onTouchStart`) so visitors can shine the flashlight beam by dragging across the corkboard on phones.
- Add mobile visual cues (e.g. tactile "TAP TO SPOTLIGHT" badge / active evidence ring) so touch users know cards are interactive without relying on hover.
- Make the era filter toolbar a smooth horizontal touch-scroller on small screens so buttons don't wrap awkwardly.
- Calibrate mobile torch lighting so text across the entire vertical stack remains crisp, illuminated, and legible without being blacked out by desktop-sized vignette cones.
- Verify across mobile viewports (320px–390px), ensure 0 axe accessibility violations, and run full test suite.
Completed:
- Added `onTouchStart` and `onTouchMove` to `.corkboard-frame` in `DetectiveBoard.jsx` to dynamically steer the flashlight beam with finger drags.
- Added `handleExhibitTap` which centers the torch coordinates directly onto tapped cards and toggles active spotlight.
- Added mobile inspect badges (`.mobile-inspect-pill`) displaying `○ TAP TO FOCUS` and `● SPOTLIGHT ON` with glowing borders.
- Added mobile touch guide banner: `Tap any evidence card to shine the detective torch & inspect details`.
- Configured horizontal smooth-scrolling chip bar for `.detective-clue-filter` on mobile viewports.
- Calibrated mobile torch vignette opacity and card contrast (`opacity: 0.78` for dimmed items, luminous red border for spotlighted items) to prevent blackout on tall vertical phone screens.
Verification:
- `npm run lint`: PASS (0 errors, 0 warnings).
- `npm run build`: PASS (clean production build).
- `npx playwright test tests/portfolio.spec.js tests/book.spec.js`: 19/19 PASS (including full desktop and mobile axe accessibility audits).
- Visual inspection: Captured `test-results/mobile-detective-header-and-anchor.png` and `test-results/mobile-detective-tap-active.png` verifying touch interaction and active spotlight state at 390x844.
Remaining: None. Ready for user feedback.

## PORT-031 — Single-Viewport Detective Noticeboard with Connected Red String Web
Status: DONE
Date: 2026-11-21
Objective: Transform the detective board section to fit entirely within a single viewport (`100vh` / `100dvh`) without requiring scrolling, keeping all evidence cards and connecting red strings visible at a glance:
- Design a single-screen layout where the entire corkboard fits in the viewport on desktop and mobile.
- Render the visible red string web connecting all pushpins directly across the single viewport canvas (matching the reference image layout).
- Compact, high-impact evidence cards arranged radially around the central prime suspect polaroid.
- Interactive card inspection: tapping or clicking any card opens an in-viewport evidence dossier modal / detail inspector so deep career intel is readable without making the board scroll.
- Responsive design for mobile (320px–390px) and desktop (1024px–1920px), ensuring the entire board stays within the single viewport height without page scrolling.
- Full accessibility (0 axe violations) and full test verification.
Completed:
- Converted `#about.detective-section` to a single-viewport container (`height: 100vh; height: 100dvh; max-height: 100vh; overflow: hidden;`).
- Designed a compact top header bar with case badge, title, torch toggle, and era filter chips.
- Positioned all 6 evidence items (Prime Suspect anchor, College 2018–22, Media 2022–24, Operating Creed, Day One CTO 2024–Now, Agentic Frontier) directly on the corkboard stage around the central anchor.
- Connected all pushpins with real SVG red strings (`stroke: #c22727` with drop shadow and glowing active highlights) forming the murder-board web across the single viewport on desktop and mobile.
- Built the in-viewport Dossier Inspector Modal (`.dossier-overlay-modal`) allowing full high-resolution surveillance photos, detailed stories, field intel, and tech tags to be read without vertical page scrolling.
- Ensured zero axe violations by using `role="region"` landmarks on cards.
Verification:
- `npm run lint`: PASS (0 errors, 0 warnings).
- `npm run build`: PASS (clean production build).
- `npm test`: 8/8 API unit tests PASS.
- `npx playwright test tests/portfolio.spec.js tests/book.spec.js`: 19/19 PASS (all tests pass, 0 accessibility violations).
- Visual verification: Captured `single-viewport-detective-desktop.png` (1280x800), `single-viewport-detective-mobile.png` (390x844), and `single-viewport-dossier-modal.png` (1280x800).
Remaining: None. Ready for user review.


## PORT-032 — The many sides of Sourav
Status: DONE
Date: 2026-11-21
Objective: Replace the compressed experience board with a portrait-led personal detective board.
Acceptance: Distinct comic career portraits and gaming/travel/music clues; readable vertical mobile board; connected pins; optional torch off by default; accessible chapter inspector with keyboard/focus handling; verified responsive layouts and relevant checks.
Progress: Repository and existing board inspected; implementation started. Preserve unrelated content and existing assets.

PORT-032 completion:
- Implemented central identity, four illustrated career chapters, three personal interest snapshots, handwritten curiosity note, pin-measured SVG thread, and off-by-default torch.
- Added native dialog with previous/next, focus containment/restoration, Escape dismissal, mobile scrolling and responsive image fallback.
- Saved seven generated PNG masters and exact built-in image_gen prompts, 14 responsive WebPs, and asset preparation script. No old artwork deleted.
- Verification: lint/build pass; eight API tests pass; all 23 portfolio/book/life-board browser tests pass. After final thread/layout refinements, all four focused board tests pass, including endpoint alignment at 320/390/768/1024/1440 widths and zero axe violations on phone/desktop board and inspector.
- Known limitation: existing >500KB main JavaScript chunk advisory remains; unrelated stale cinema.spec.js excluded as previously documented. No commit or deployment. Remaining implementation: none.

## PORT-033 — Refocus experience section on work experience
Status: DONE
Date: 2026-11-21
Objective: Change Experience (#about) content to focus on work experience rather than mixed personal/life chapters.
Acceptance criteria:
- Section copy and structure foreground professional experience (education, roles, responsibilities, and confirmed context).
- Personal-interest clues removed from the experience narrative; only confirmed facts presented (no invented dates, companies, metrics, or anecdotes).
- Existing `#about` anchor, board interaction model (cards, threads, optional torch, inspector dialog), responsiveness, accessibility, and image fallback behavior preserved.
- Relevant lint/build/tests pass and project memory synchronized.
Completed:
- Replaced `src/data/lifeBoard.js` content with `experienceChapters` + `boardProfile` focused on four confirmed professional milestones: B.Tech CS at MES College of Engineering (2018–2022), software engineering in electronic media/broadcasting, CTO/Technical lead at Day One Venture Studio (internal systems including Day One CRM), and current 4+ years full-stack/product building with agentic workflow exploration.
- Removed gaming/travel/music personal clues and personal-life framing; updated `src/components/DetectiveBoard.jsx` copy/labels/navigation to “Work experience, chapter by chapter.” with 5 total entries, work-focused inspector text, and preserved keyboard dialog, focus restore, torch, threads, lazy images, and fallback.
- Adjusted `src/detective-board.css` for the 5-card professional layout across desktop/tablet/mobile.
- Updated `tests/life-board.spec.js` to the new work-experience contract (5 cards, headings, labels, inspector controls, accessibility and fallback).
Verification:
- `npm run lint`: PASS.
- `npm run build`: PASS (pre-existing >500KB main chunk advisory remains).
- `npm test`: 8/8 API tests PASS.
- `npx playwright test tests/life-board.spec.js`: 4/4 PASS (keyboard/native focus containment/navigation/restoration, responsive layout/thread alignment/no overflow at 320/390/768/1024/1440, mobile+desktop axe on board and inspector, image fallback).
Remaining: Optional user visual review at `http://localhost:5173/#about`. No further implementation requested. Unrelated stale `tests/cinema.spec.js` and release/provider setup remain outside this task. No commit or deployment performed.

## PORT-034 — Remove toolkit and workshop sections
Status: DONE
Date: 2026-11-21
Objective: Remove the "From interface to infrastructure." toolkit section and "The workshop." workspace/AI section from the website per user request.
Acceptance criteria:
- Toolkit (`#toolkit`, "From interface to infrastructure.") and workshop/workspace (`#workspace`, interactive workspace/chat) sections removed from the homepage and navigation.
- Links/CTAs pointing to removed sections updated to valid destinations or removed; no broken in-site experience.
- Related data/source entries and tests updated to reflect removed sections; lint/build and relevant tests pass.
- Project memory synchronized.
Completed:
- Removed `Toolkit` section and the entire workshop/workspace block (lazy `Workspace`, chat/terminal UI, workshop illustration/copy) from `src/App.jsx`; removed `Workspace` nav item and updated home route description to drop AI-workspace claim.
- Replaced removed-section CTAs: hero “Ask about my work” removed, experience footer now links to `/#contact`, approach note no longer links to `#workspace`.
- Removed toolkit source entry from `src/data/portfolio.js`.
- Updated tests for new structure: `tests/portfolio.spec.js` (removed workspace/AI flows, adjusted navigation/section-order/layout checks) and `tests/opening.spec.js` (deep-link bypass now uses `/#contact` instead of chat-mode workspace).
Verification:
- `npm run lint`: PASS.
- `npm run build`: PASS (pre-existing >500KB main chunk advisory remains).
- `npm test`: 8/8 API tests PASS.
- `npx playwright test tests/portfolio.spec.js tests/life-board.spec.js tests/opening.spec.js`: 18/18 PASS.
Remaining: Optional visual review. Unused component files (`src/components/Workspace.jsx`, `src/components/Chat.jsx`) and legacy CSS/classes for removed sections remain in repo but are no longer referenced by the app; can be cleaned up separately if desired. No commit or deployment performed.


## PORT-036 — Dedicated project archive
Status: DONE
Date: 2026-11-21
Objective: Build a creative comic publisher archive at /projects showcasing all four documented projects.
Acceptance: discoverable from homepage/navigation; accessible filters and expandable scope notes; honest statuses and existing case-study/live links; responsive/reduced-motion support; direct-route hosting rewrite; lint/build/browser verification; synchronized memory.

Completed: /projects publisher-style archive, illustrated cover and shelf, all four data-driven projects, built/concept filters with live count, native expandable scope notes, existing case-study and related-site links, contact CTA, header and homepage book entry links, route metadata and Vercel direct-route rewrite.
Verification: lint/build pass; 9 existing portfolio tests and 2 new archive tests pass. Keyboard expansion, filter state/count, case navigation, responsive fit at 320/390/768/1024/1440 and desktop/mobile axe verified. Desktop/phone screenshots visually reviewed.
Limitations: Existing >500KB build advisory; Vercel rewrite configured but not verified on hosted deployment. Existing unrelated untracked Strengths files preserved. No commit or deployment. Remaining: none.


## PORT-037 — Introduction-only music
Status: DONE
Date: 2026-11-21
Objective: Play music only inside introduction, show music details there, and stop sound on landing/skip/cleanup.
Acceptance: No persistent landing player; intro playback controls and accurate details; audio stopped on all exits; replay works; keyboard controls accessible; relevant verification and memory synchronized.

Completed: Music starts in intro; accurate original-synthwave/106 BPM details and playback/mute controls live inside the dialog. Removed persistent landing player. Finish, skip, resize and unmount stop scheduler, silence BGM bus and suspend audio. Tab/Shift+Tab now reach all intro buttons; Escape exits. Replay retains mute state.
Verification: lint/build pass. All 14 opening/portfolio cases pass across scoped runs (11 unchanged cases plus final 3 audio/natural-completion cases). Confirmed scheduler stopped and context suspended after natural landing and Escape; controls and metadata visible only during intro; axe controls scan passes. Existing bundle advisory remains. Browser autoplay may require pressing Play inside intro. No commit/deployment. Remaining: none.


## PORT-038 — Continuous book rendering
Status: DONE
Date: 2026-11-21
Objective: Remove page-boundary flashes and scroll lag on desktop and compact book while preserving design/content/navigation.
Acceptance: Stable page/turn surfaces; short consistent smoothing; synchronized transforms/visibility; predecoded art and paper fallback; forward/reverse/jump/resize checks, book/portfolio tests and lint/build; updated memory.

Completed: Memoized persistent BookSurfaces prepares story/art/mobile faces and five-strip turns once per layout. Animation updates visible/inert surfaces and transform variables together, without page-boundary React subtree construction. Replaced turn-window speed cap with 25ms exponential smoothing and immediate large-jump sync. Chapter jumps, resize and layout changes cancel stale RAF work. Existing image decoding/paper backing retained; added explicit illustration paper background.
Verification: npm run lint/build pass; all 20 book/portfolio browser tests pass. New desktop/phone regressions verify no subtree rebuilding, no extra book-art requests, consistent selected faces across 140 forward/reverse scroll samples and settling within 160ms at rest. Missing-art navigation and existing axe/touch/reduced-motion checks pass. Recorded desktop/phone boundary sequences and inspected boundary frames; manually verified resize across breakpoint and chapter jump produce page 6/3 with zero turn angle. QA media in /tmp/portfolio-book-qa (temporary).
Limitations: Pre-existing >500KB bundle advisory remains. Persistent faces trade more initial DOM for less work during turns; no hardware-wide frame-rate guarantee. Prior PORT-037 working changes preserved. No commit or deployment. Remaining: none.


## PORT-039 — Initial book opening blank sheet
Status: DONE
Date: 2026-11-21
Objective: Remove the empty left sheet during the initial desktop opening.
Acceptance: Printed story remains beneath the moving cover throughout forward/reverse opening; chapter turns and compact reading preserved; lint/build/book browser checks pass; memory synchronized.
Completed: Keep desktop folio-left printed endpaper visible beneath opening cover instead of delaying visibility until data-open. Existing spread clipping, paper fallback, mobile and interaction gates preserved.
Verification: lint/build and 11 book tests pass; focused forward/reverse regression includes edge-on .1344 progress and printed story visibility. Screenshot reviewed. git diff --check passes.
Remaining: None for this fix. Existing bundle advisory; unrelated DetectiveBoard.jsx:29 null svgRef error logged during case navigation in full book suite (tests passed), recorded for separate follow-up. No commit/deployment.


## PORT-040 — Unfold book footprint with cover
Status: DONE
Objective: Supersede PORT-039 filling approach; remove left footprint until cover unfolds over it.
Acceptance: Left board/paper/printed spread reveal follows cover rotation after edge-on, reverses symmetrically; compact preserved; verify opening geometry and book suite.
Completed: Separate --unfold geometry derives from cover rotation (zero before 90 degrees, cosine projection afterwards). Left board, paper bed and printed spread clipping share it; lift remains responsible only for book positioning. Reverses with cover and preserves compact overrides. Supersedes PORT-039 approach.
Verification: lint/build, all 12 book tests pass; new forward/reverse geometry regression covers edge-on interval and backing alignment; unfolding screenshot visually reviewed. git diff --check passes.
Remaining: None. Existing bundle advisory and previously recorded unrelated board callback issue remain. No commit/deployment.
