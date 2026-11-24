# Changelog

## 2026-11-23 — PORT-049
- Added Microsoft Clarity analytics script (`zi20e6ts2s`) to the `<head>` of `index.html`.
- Verified production build and linting.

## 2026-11-23 — PORT-048
- Added Sourav's new project, "AI WhatsApp Assistant", built with React and Go.
- Added project entry to `src/data/portfolio.js` with 'Built · Live' status, 'Full-stack development & AI integration' role, and capabilities/perspectives.
- Added 'Go' to Systems skills and 'whatsapp-ai' to AI sources.
- Generated and added custom vintage comic illustration `whatsapp-ai.png` in `assets/illustrations/builders-adventures/` and optimized `public/illustrations/whatsapp-ai.webp`.
- Updated `src/components/Book3D.jsx` and `src/components/ProjectsPage.jsx` with artwork mappings, 5-project chapter flow, and updated cover copy.
- Updated Playwright test suites (`tests/book.spec.js`, `tests/projects.spec.js`, `tests/actions.spec.js`, `tests/portfolio.spec.js`) to test the 5-project shelf and dynamic turn intervals; all 35 tests pass.

## 2026-11-19
- Initialized six persistent project memory documents under .ai per AGENTS.md.
- Recorded the verified starter architecture and initial Git state. No application changes.

## 2026-11-19 — PORT-001
- Replaced Vite starter screen with a dark, animated portfolio for Sourav O.
- Added two detailed case studies, expandable concept work, career journey, toolkit, email/copy contact, and responsive navigation.
- Added lazy reactive 3D core, mobile activation, static/reduced-motion/WebGL fallback, and lifecycle cleanup.
- Added curated project/agent perspectives, functional local terminal, and lazy AI chat with cancellation, source links, retries, quota/error states, and disclosure.
- Added protected OpenAI/Redis endpoint, server-local dev adapter, Vercel routing/security configuration, env example, tests, and setup/release documentation.
- Verified build/lint, 8 API tests, 6 browser tests, mobile axe scan, and local Lighthouse. Live services/public deployment remain unconfigured.

## 2026-11-19 — PORT-003
- Transformed character illustrations into a 3D Apple Memoji / Pixar-style cartoon avatar across three poses (`focus`, `connect`, `welcome`).
- Preserved Sourav's likeness (swept curly hair, mustache, beard, medium brown skin tone, modern dark outfit with lime piping).
- Processed, keyed, and compiled new high-resolution responsive WebP assets (`public/character/*.webp` and `*-mobile.webp`).
- Updated `CharacterSequence.jsx` alt text and verified with ESLint, 8 API unit tests, and 7 Playwright browser tests.

## 2026-11-19 — PORT-004
- Redesigned homepage, navigation, project panels, workspace, origin story, toolkit, contact, and case studies with vintage comic typography, paper textures, halftone backgrounds, ink borders, red/yellow colors, and speech balloons.
- Restored likeness-based comic character artwork as new responsive WebP assets, preserving previous Memoji assets. Added an origin-story portrait.
- Verified lint/build, 8 API tests, 7 browser tests, zero violations in mobile axe scan, and desktop/mobile screenshots. Corrected mobile spacing, contrast and logo accessible naming.

## PORT-006
Created four high-fidelity adventure-comic UI concept sections and an implementation direction document from the user’s cover reference. Saved the new classic-comic focus character master from PORT-005. No runtime source changes in this milestone.

## 2026-11-20 — PORT-007
- Built the approved adventure-comic portfolio: corrected full-scene cover, illustrated project stories, live workshop spread, origin/toolkit, and sunset contact finale.
- Generated seven production illustrations, optimized WebP derivatives, media-specific cover preloads, matching favicon and raster social preview.
- Preserved functional routing, project facts, concept disclosures, curated perspectives, terminal, chat and email copy. Replaced the retired sticky pose story with direct scrolling and restrained reduced-motion-aware parallax.
- Lint/build and eight API tests pass; eight Playwright tests pass, including phone/tablet/desktop overflow, real clipboard copy, mock AI success/cancellation, and zero violations in mobile/desktop/case-study axe scans. Reviewed desktop/mobile/whole-page screenshots.

## 2026-11-20 — PORT-008
- Restructured content for a clearer visitor journey inspired by the supplied portfolio reference.
- Added a personal product-value hero, verified evidence band, fuller project descriptions/contributions and live link, leadership-first experience, stack context, and a build approach section.
- Moved workshop after professional proof; added repeatable /?mode=chat#workspace assistant entry, Experience navigation and clearer contact copy. Comic artwork/finale preserved.
- Verified lint/build, 8 API tests and 9 browser tests with responsive/axe checks; visually reviewed desktop and full-page renders.

## 2026-11-20 — PORT-009
- Rebuilt work index as horizontal editorial features with role/stack/actions and interactive product maps.
- Redesigned both case-study pages with compact project facts, chapter navigation, clearer reading layout, built scope and context.
- Condensed repetitive approach content; preserved hero, finale, concepts, workspace, contact and API.
- Lint/build, 8 API tests and 10 browser tests pass; mobile/desktop/case axe zero violations. Reviewed work and case screenshots.

## 2026-11-20 — PORT-010
- Built cinematic Marvel Studios-inspired comic flipbook intro bumper (`MarvelIntro.jsx`, `intro.css`) with accelerating comic panel flipping across authentic project artwork, halftone overlays, 2.39:1 letterboxing, iconic red comic logo slam with inner animated art, light sweep, and accessible Skip [ESC] controls.
- Implemented real-time Web Audio API soundscape synthesizer (`audioEngine.js`): generates 80s Vice City sunset synthwave BGM (rolling 16th-note analog bassline, lush detuned chords, shimmering arp, retro kick/snare pulse), comic flutter SFX, and sub-bass impact boom with 0 KB external audio files and zero copyright issues.
- Added retro 80s car stereo tuner dock (`ViceCityRadio.jsx`, `radio.css`) with play/pause, volume mute, animated HTML equalizer bars, WCAG AA compliance (> 13:1 contrast), and one-click intro replay button.
- Added dedicated intro triggers to header and hero edition bar; added new Playwright test covering full intro lifecycle, escape skip, and audio controls.
- Lint/build pass, 8 API tests pass, 11 Playwright browser tests pass. All axe scans pass with zero violations.

## 2026-11-20 — PORT-011
- Added image-first cinematic handoff from comic intro/title to the exact responsive hero artwork and crop, then staggered navigation/headline/caption reveal.
- Fixed phase changes restarting montage timers; added bounded decode fallback, resize exit, scroll lock, inert background and focused keyboard skip.
- Automatic ordinary homepage entry on every load; reduced-motion and deep-link entry remain direct.
- Lint/build, eight API tests and 14 scoped browser tests pass; desktop/mobile crop alignment and screenshots verified. Pre-existing unrelated untracked cinema tests preserved.

## 2026-11-20 — PORT-012
- Generated three consistent Sourav comic illustrations: sketchbook idea, laptop build, and forward stride; preserved sources/alpha masters/prompts and added reproducible alpha WebP/QA pipeline.
- Rebuilt the initial montage as three directed comic shots with camera moves, live display typography, distinct scene colors, panel spread and printed title reveal.
- Preserved the approved exact-art landing settle/dissolve and staggered navbar/copy reveal, skip/focus/scroll cleanup and reduced-motion/deep-link access.
- Verified asset alpha over four backgrounds, 320/390/1440px story compositions, final hero match within 2px, slow asset/resize exit, accessibility and existing feature checks. Lint/build and eight API tests pass; 11 portfolio plus five opening browser cases pass in scoped runs.

## 2026-11-20 — PORT-013
- Replaced the rejected cutout/slide opening with four new cinematic graphic-novel scenes, art-only accelerating cuts, a dimensional comic-sheet camera move, and artwork-filled lettering resolving into a metallic SOURAV O title.
- Preserved the exact responsive landing-image handoff and staggered navbar/copy reveal; added decoded-cover fallback for unavailable/slow illustrations.
- Saved source art, exact image_gen prompts, asset report and direction; added reproducible desktop/mobile compression script. Retained previous art/history.
- Fixed transient tablet navigation overflow before fonts load and tightened the 320px radio dock.
- Lint/build, eight API tests and 16 scoped browser cases pass. Reviewed desktop/mobile art/panel/title/landing captures and recorded an end-to-end preview.

## 2026-11-20 — PORT-014
- Changed cinematic metallic/art-filled title to SOURAV and its loading monogram to S per user preference.
- Production build and existing 320px title browser check pass; effects and landing transition unchanged.

## 2026-11-20 — PORT-015
- Standardized current website name to Sourav across header/footer/hero, shared profile, page/social metadata, SVG preview, assistant instructions and README.
- Build, eight API tests and homepage navigation browser check pass; no remaining Sourav O name references in current runtime/public content.

## 2026-11-20 — PORT-018
- Rebuilt Work as a scroll-pinned physical comic on a drawing table, with cover lift/tilt/opening, readable story/art spreads, two-sided page turns and chapter navigation.
- Added responsive/reduced-motion reading layouts, preserved real statuses/routes and concept entry, and fixed page stretching/cover layering/text-fit issues found in browser review.
- Repaired inactive FlipBook lint issues, refreshed portfolio work selectors and added five focused book tests.
- Lint/build and eight API tests pass; 21 current browser cases pass. Old cinema invitation tests remain stale and documented. No commit/deployment.

## 2026-11-20 — PORT-019
- Fixed exposed dark backing during cover opening/reverse with a paper lining layer.
- Added animated phone/tablet book: eight readable story/art leaves, native scroll page turns, chapter jumps and touch page controls. Preserved desktop/reduced-motion behavior and project links.
- Tuned 320x568 layout, prevented fallback-font panel overflow and guarded resize during turns.
- Lint/build pass; 19 book+portfolio browser checks pass, with final spacing rechecked through all eight book cases. No commit/deployment.

PORT-020 completed. The compact project book uses a portrait spiral notebook with seven visible rings, a layered paper edge and scroll-driven top-hinged cover and sheets. Book3D.jsx and book3d.css implement the change. Lint, build and all eight book browser tests passed, including phone fit, touch navigation and reduced motion. No outstanding implementation work. Next action is optional mobile visual review.

PORT-021. Desktop leaves bend along the spine and compact leaves curl over the top rings. Five connected CSS strips carry aligned slices of each printed face. Eased rotation and shading follow scroll in either direction. The underlying desktop story changes upon landing. Page controls animate the scroll. Lint and build passed. Book suite exercised desktop, mobile, navigation and reduced motion.


## 2026-11-21 — PORT-032
- Redesigned Experience as “Same me. Different chapters.” with warm cork, red thread, a central Sourav portrait, four career chapters, and three personal interests.
- Generated seven separate comic portraits with consistent likeness and distinct outfits/scenes; saved masters, prompts, responsive WebPs and preparation script.
- Added readable tablet/phone layouts, measured thread endpoints, optional torch, reduced-motion-aware entrance/hover, and a keyboard-accessible native chapter inspector.
- Added responsive/keyboard/focus/image-fallback/thread-alignment/accessibility coverage; existing portfolio/book behavior retained.

## 2026-11-21 — PORT-033
- Refocused Experience (#about) content on work experience: profile plus four confirmed chapters (education 2018–2022, electronic media software engineering, Day One Venture Studio CTO/technical leadership, current 4+ years full-stack/product building and agentic exploration).
- Removed gaming/travel/music personal clues and personal-life framing; updated board copy, labels, and inspector to professional experience while keeping corkboard/threads/torch/dialog interaction.
- Adjusted responsive 5-card layout/CSS and updated life-board tests to the new work-experience contract. Lint, build, 8 API tests, and 4 focused Playwright life-board tests pass.

## 2026-11-21 — PORT-034
- Removed toolkit (`#toolkit`, “From interface to infrastructure.”) and workshop/workspace (`#workspace`, interactive perspectives/terminal/AI chat) sections from home/navigation and deleted their CTAs/links.
- Updated hero, experience footer, approach note, and data sources to remove workspace/toolkit references; updated portfolio and opening tests for the reduced section flow.
- Lint, build, 8 API tests, and 18 Playwright tests (portfolio, life-board, opening) pass. No commit/deployment.


## 2026-11-21 — PORT-036
- Added /projects illustrated comic archive with four project stories, accessible filters, expandable scope, evidence links and contact CTA.
- Added navigation/home book entry points, page metadata, active nav state and direct-route Vercel rewrite.
- Lint/build, 9 portfolio and 2 archive browser tests pass; responsive and desktop/mobile axe checks pass; screenshots reviewed. Existing bundle advisory remains. No commit/deployment.


## 2026-11-21 — PORT-037
- Restricted soundtrack and controls to cinematic intro; removed persistent landing player.
- Show original synthwave/106 BPM details; stop music scheduler and suspend audio on completion/skip/cleanup.
- Made intro controls keyboard reachable; preserved mute state on replay. Lint/build and all 14 opening/portfolio checks pass across scoped runs, including natural completion/audio shutdown and control axe scan. Existing bundle advisory remains; no deployment.


## 2026-11-21 — PORT-038
- Removed book-turn lag and boundary remounting with persistent prepared faces, synchronized geometry/visibility, consistent short scroll smoothing and stale-frame cleanup on jumps/resize.
- Retained desktop/spiral motion, artwork, chapter controls, accessibility and reduced-motion reading.
- Lint/build and all 20 book/portfolio tests pass, including new desktop/phone continuous-scroll stability, no additional book-art requests and unavailable-art checks. Reviewed recorded boundary captures and verified resizing/chapter jumps. Existing bundle advisory remains. No commit/deployment.


## 2026-11-21 — PORT-039
- Kept desktop story endpaper visible beneath opening cover to eliminate exposed blank sheet during initial scroll and reverse.
- Expanded opening regression to edge-on progress and printed-content visibility. Lint/build, all 11 book tests and focused rerun pass; screenshot reviewed. Existing bundle advisory and unrelated board callback error recorded in handoff. No commit/deployment.


## 2026-11-21 — PORT-040
- Corrected initial opening footprint: left side stays collapsed until cover passes spine, then unfolds with rotation in either scroll direction. Supersedes PORT-039 fill approach.
- Shared cover-projected geometry drives backing and printed spread clipping. Lint/build and all 12 book tests pass; opening screenshot reviewed. No commit/deployment.


## 2026-11-21 — PORT-041
- Replaced archive card labels with Contribution / Technical focus across all four projects.
- Lint/build pass; existing bundle advisory remains. No commit/deployment.


## 2026-11-21 — PORT-042
- Rewrote CYD build details with concise contribution, four action-led scope bullets and clearly planned automation.
- Restored visible disc markers/spacing across archive scope lists. Lint/build and two responsive/accessibility archive tests pass; existing bundle advisory remains. No commit/deployment.


## 2026-11-21 — PORT-043
- Removed requested explanatory sentence below project cards and unused styling. Build passes; existing bundle advisory remains. No commit/deployment.


## 2026-11-21 — PORT-044
- Rewrote NOTWO/Versa descriptions and removed repeated CRM/concept notes beneath archive scope lists.
- Kept status/proposed-workflow labels and CYD planned-next note. Lint/build and both archive tests pass; existing bundle advisory remains. No commit/deployment.


## 2026-11-21 — PORT-045
- Audited public-route actions; fixed repeat destination scrolling/focus, client-side CRM navigation from experience dialog, and detached board callback handling.
- Added route/anchor and action regressions; refreshed stale CYD copy assertion. All 37 current browser cases pass across scoped runs, plus lint/build and 8 API tests. Both external project destinations return 200. Existing build advisory remains. No commit/deployment.


## 2026-11-21 — PORT-046
- Removed cinematic intro/music/replay from active website, plus ink mode and torch. Homepage loads directly.
- Removed repeated artwork/process disclaimers; simplified archive/footer/CRM copy and corrected obsolete workspace SEO/social metadata. Comic identity and useful interactions preserved.
- Replaced intro tests with direct-entry/no-clutter regressions; deleted obsolete cinema tests. Lint/build, 8 API tests and all 35 browser cases pass across scoped runs. Existing build advisory remains. No commit/deployment.


## 2026-11-21 — PORT-047
- Credited the user's confirmed CYD cofounder role in CYD-only content: shared data (case study, book, archive, AI grounding), with hero/profile/experience/metadata unchanged.
- Refreshed CYD product copy from the live checkyourdeals.com homepage and /about page: authorized sources, validation and freshness limits, last-checked prices, reference-price vs observed-price distinction, partner-store checkout, categories/sales/trending/price comparisons; ProductMap CYD views updated without changing control labels.
- Kept "automation is planned" wording and all existing status labels intact; added regression assertions for cofounder and verified facts. Lint/build, 8 API tests and all 35 browser cases pass; diff check passes. No commit/deployment.

## 2026-11-23 — PORT-050
- Re-enabled the Marvel Studios-inspired comic intro on initial homepage load (`/`) with Esc skip controls and Vice City audio engine integration.
- Updated `src/App.jsx`, restored `tests/opening.spec.js`, and added test isolation hooks for full suite stability.
- Lint, production build, and all 36 Playwright browser tests pass. No automatic commit/deployment.

## 2026-11-24 — PORT-052
- Fixed hero cover image framing: removed accidental global `object-position: 50% 100%` in `src/comic.css` that anchored the illustration to the bottom edge, pushing the character's head/face off-screen on desktop viewports; set desktop framing to `object-position: 50% 20%`.
- Elaborated CYD case-study challenge text in `src/data/portfolio.js` to detail consumer and market deal fragmentation without self-referential project explanations.
- Lint, build, and Playwright regressions pass. No automatic commit/deployment.

## 2026-11-23 — PORT-051
- Replaced Check Your Deals description, contribution, built scope and roadmap with the user's exact copy in `src/data/portfolio.js`; kept role and technical focus unchanged.
- Aligned CYD `ProductMap` text and `README.md`, and updated CYD regression assertions in `tests/portfolio.spec.js`.
- Tightened short-phone story margins in `src/book3d.css` so the longer CYD copy fits a 320x568 notebook leaf.
- Lint, build, 8 unit tests, 36 browser tests and diff check pass; prior uncommitted work preserved. No commit/deployment.
