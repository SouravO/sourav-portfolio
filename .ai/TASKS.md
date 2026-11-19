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
