# Handoff

Updated 2026-11-23 for PORT-049.

## Current state
PORT-049 DONE: Added Microsoft Clarity tracking snippet (`zi20e6ts2s`) to `index.html` inside `<head>`.
- Preserved existing preloads, metadata, and scripts.

## Verification
- `npm run lint`: PASS (0 errors, 0 warnings).
- `npm run build`: PASS (clean production build, JS ~504KB, CSS ~120KB).
- `npm test`: 8/8 API unit tests PASS.
- `git diff --check`: PASS (clean whitespace).

## Files changed this task
`index.html`, `.ai/TASKS.md`, `.ai/HANDOFF.md`, `.ai/CHANGELOG.md`.

## Limitations and next exact action
No requested work remains. Clarity will start reporting sessions once deployed to production. No automatic commit or deployment.

## Git state
Startup HEAD 68c2b79 + uncommitted PORT-047, PORT-048, and PORT-049 changes. All prior changes preserved.

---
## Previous handoff (historical)

# Handoff

Updated 2026-11-23 for PORT-048.

## Current state
PORT-048 DONE: Integrated Sourav's new project, "AI WhatsApp Assistant", built with React and Golang.
- Defined the project in `src/data/portfolio.js` with status "Built · Live", kind "built", full-stack development and AI integration role, and stack ['Go', 'React', 'WhatsApp API', 'LLMs', 'PostgreSQL']. Added 'Go' to systems skills and 'whatsapp-ai' to sources.
- Generated custom comic-style master artwork (`assets/illustrations/builders-adventures/whatsapp-ai.png`) and optimized derivative (`public/illustrations/whatsapp-ai.webp`, 244 KB) matching the Builder's Adventures aesthetic (brush inking, Ben Day halftone dots, aged newsprint texture, no text).
- Updated `src/components/Book3D.jsx` to map `whatsapp-ai` artwork, update cover text to "Five project stories", and dynamically resolve concept deep-link offsets.
- Updated `src/components/ProjectsPage.jsx` to map artwork, update shelf counter to "5 PROJECT STORIES", and include conversational AI in the header description.
- Updated test suites across `tests/book.spec.js`, `tests/projects.spec.js`, `tests/actions.spec.js`, and `tests/portfolio.spec.js` for 5-project shelves and dynamic scroll intervals.

## Verification
- `npm run lint`: PASS (0 errors, 0 warnings).
- `npm run build`: PASS (clean production build, JS ~504KB, CSS ~120KB).
- `npm test`: 8/8 API unit tests PASS.
- `npx playwright test`: 35/35 browser tests PASS across all suites (book, projects, actions, portfolio, life-board, opening).
- `git diff --check`: PASS (clean whitespace).

## Files changed this task
`src/data/portfolio.js`, `src/components/Book3D.jsx`, `src/components/ProjectsPage.jsx`, `assets/illustrations/builders-adventures/whatsapp-ai.png`, `public/illustrations/whatsapp-ai.webp`, `tests/{book,projects,actions,portfolio}.spec.js`, and all `.ai` memory documents.

## Limitations and next exact action
No requested work remains. Optional user visual review of the 3D book at `http://localhost:5173/#work` and projects archive at `http://localhost:5173/projects`. No automatic commit or deployment.

## Git state
Startup HEAD 68c2b79 + uncommitted PORT-047 changes + PORT-048 changes. All prior changes preserved.

---
## Previous handoff (historical)

# Handoff

Updated 2026-11-21 for PORT-047.

## Current state
PORT-047 DONE: User confirmed they are a cofounder of Check Your Deals and supplied https://checkyourdeals.com/. Scoped the cofounder credit to CYD content only (per user choice): shared CYD data now feeds the case study, comic book, /projects archive and server AI grounding with "Cofounder & full-stack development" and cofounder-led contribution copy. The live homepage and /about page were read; CYD description, problem, capabilities, flow, perspectives and the CYD ProductMap views now use verified public facts (authorized sources, detail validation, freshness limits, last-checked times, source reference prices vs observations, partner-store checkout, categories/sales/trending/price comparisons). Overall identity wording, hero, experience board, header/footer and metadata are unchanged. "Automation is planned" remains verbatim. PORT-046 direct entry/no intro remains the active runtime contract.

## Verification
Lint and production build pass (existing >500KB advisory; JS ~502KB, CSS ~120KB). npm test 8/8. Full Playwright suite 35/35 passed, including new cofounder assertions on the CYD case study, book story page and archive card, plus preserved planned-status, product-map-label, responsive and axe checks. git diff --check passes. No live prices, counts, timestamps or screenshots were added; live site was read-only.

## Files changed this task
src/data/portfolio.js (CYD entry only); src/components/ProductMap.jsx (cyd views); tests/{portfolio,book,projects}.spec.js; README.md; all six .ai memory documents. Prior PORT-046 changes preserved.

## Limitations and next exact action
No requested work remains. Optional user copy review at /work/check-your-deals, /#work and /projects, then Git checkpoint. Intro/audio source and assets remain inactive historical artifacts; do not delete all cinema art because experience profile reuses portrait.webp. No commit/deployment.

## Git state
Startup HEAD 68c2b79. An external commit ce49a09 ("edits") captured the prior PORT-041–046 working-tree changes during this session; those edits were preserved, not reset or discarded. PORT-047 changes remain uncommitted on top of ce49a09. No commit made by this task.

---
## Previous handoff (historical)

# Handoff

Updated 2026-11-21 for PORT-045.

## Current state
PORT-045 DONE: Audited all actions on active public routes (home, archive, both case studies, not-found). Fixed repeat same-route/hash clicks by adding location.key to RouteEffects dependencies, so logo/section navigation scrolls/focuses again. Experience inspector CRM link now uses React Router Link and unlocks body on exit without document reload. Threads RAF guards detached/unmounted refs, addressing previously logged navigation-time error. Existing filters, details, book navigation, intro/audio, ink mode, experience previous/next/close/torch, mobile menu, anchors, contact/copy and case maps remain functional; no dead control required removal.

## Verification
Lint/build, 8 API tests pass. All 37 current browser cases pass across scoped runs: broad run passed 36, repeat navigation test expectation corrected for root scroll padding + section margin, then all 5 action tests passed. Book (12), experience (4), opening (5), portfolio (9), archive (2), actions (5). New audit checks all route/anchor targets, repeated navigation, mobile archive actions, every experience card and no-reload/unlocked CRM exit, all map/chapter actions. External HTTP checks: CYD redirects to www then 200; NOTWO 200. Actual clipboard copy verified; no email sent.

## Files changed this task
src/App.jsx; src/components/DetectiveBoard.jsx; tests/actions.spec.js (new); tests/portfolio.spec.js (stale copy assertion); .ai/TASKS.md, HANDOFF.md, CHANGELOG.md.

## Limitations and next exact action
No requested work remains. Optional device review and Git checkpoint. Existing build chunk advisory remains. External availability and native mail/browser audio permissions remain visitor-environment dependent. Excluded obsolete cinema.spec.js per historical documentation; opening.spec.js is current intro contract. No commit/deployment.

## Git state
Startup HEAD 68c2b79 with uncommitted PORT-041–044 JSX/CSS/data/test/memory edits. Preserved them; only added listed audit fixes/tests/memory. No resets or unrelated deletions.

---
## Previous handoff (historical)

# Handoff

Updated 2026-11-21 for PORT-044.

## Current state
PORT-044 DONE: Rewrote NOTWO description around skincare concept/MVP planning and Versa around book purchases/verified reading access. Removed marked trailing explanatory paragraphs from CRM and concept archive details. Kept live CYD planned-next note; concept status and proposed-workflow labels remain visible. Original engineering/context data retained for other consumers.

## Verification
Lint/build and both archive tests pass, including responsive/axe checks. Updated workflow assertion to replace removed paragraph assertion. Existing bundle advisory remains. No requested work remains.

## Files and Git state
Changed src/data/portfolio.js, src/components/ProjectsPage.jsx, tests/projects.spec.js and .ai/TASKS.md, HANDOFF.md, CHANGELOG.md. Prior uncommitted PORT-041–043 edits preserved. No commit/deployment.

## Next exact action
Optional copy review at /projects and Git checkpoint after review.

---
## Previous handoff (historical)

# Handoff

Updated 2026-11-21 for PORT-043.

## Current state
PORT-043 DONE: Removed requested sentence below archive cards (“Illustrated project worlds…”), plus its unused .archive-art-note CSS rule.

## Verification
Production build passes; diff check passes. Existing bundle advisory remains. No requested work remains.

## Files and Git state
Changed src/components/ProjectsPage.jsx, ProjectsPage.css and .ai/TASKS.md, HANDOFF.md, CHANGELOG.md. Prior PORT-041/042 uncommitted copy/bullet changes preserved. No commit/deployment.

## Next exact action
Optional user review at /projects; Git checkpoint after review.

---
## Previous handoff (historical)

# Handoff

Updated 2026-11-21 for PORT-042.

## Current state
PORT-042 DONE: CYD expanded build copy rewritten concisely; four scope bullets describe browse, search/categories, product details and affiliate destinations. Automation remains explicitly planned. Archive scope lists now explicitly use disc markers and item spacing (CSS reset previously hid markers). Shared data change also flows to CYD case study.

## Verification
Lint/build and both projects.spec.js tests pass, including responsive and axe checks. Existing bundle advisory remains. No work remains for this request.

## Files and Git state
Changed src/data/portfolio.js, src/components/ProjectsPage.css and .ai/TASKS.md, HANDOFF.md, CHANGELOG.md. Prior uncommitted PORT-041 JSX and memory updates preserved. No commit/deployment.

## Next exact action
Optional review of expanded CYD card at /projects; Git checkpoint after review. Prior unrelated board callback issue recorded in historical handoff.

---
## Previous handoff (historical)

# Handoff

Updated 2026-11-21 for PORT-041.

## Current state
PORT-041 DONE: All four /projects archive cards use Contribution and Technical focus instead of My part and Working with/Exploring. Card content/statuses unchanged.

## Verification
Lint/build pass; shared card template confirms all four receive the same labels. Existing build chunk advisory remains. No remaining work for this request.

## Files and Git state
Startup working tree clean. Changed src/components/ProjectsPage.jsx and .ai/TASKS.md, HANDOFF.md, CHANGELOG.md. No commit/deployment.

## Next exact action
Optional user copy review and Git checkpoint. Prior unrelated board callback issue remains documented below.

---
## Previous handoff (historical)

# Handoff

Updated 2026-11-21 for PORT-040.

## Current state
PORT-040 DONE. User clarified that the exposed left area must be removed and unfold gradually with the cover, superseding PORT-039 filling fix. New --unfold is zero until cover passes 90 degrees, then follows its horizontal cosine projection to full width. Board left edge, paper bed and printed spread clipping use this shared geometry. --lift still positions/scales the book; compact overrides retained.

## Verification
Lint/build and all 12 book tests PASS. New regression checks forward/reverse cover projection, no left expansion before edge-on, and aligned paper/board bounds. Mid-opening screenshot reviewed; diff check passes.

## Files changed
src/components/Book3D.jsx; src/book3d.css; tests/book.spec.js; .ai/TASKS.md, HANDOFF.md, DECISIONS.md, CHANGELOG.md. No product scope change.

## Issues and next action
No requested work remains. Optional user visual review at /#work and Git checkpoint. Existing bundle advisory remains; previously recorded unrelated DetectiveBoard.jsx:29 null svgRef callback error remains outside this fix. No commit/deployment.

## Git state
HEAD 07d9c3c. Prior PORT-039 uncommitted changes preserved and refined by PORT-040. Only listed task files modified.

---
## Previous handoff (historical)

# Handoff

Updated 2026-11-21 for PORT-039.

## Current state
PORT-039 DONE: Desktop opening now retains printed left story beneath rotating cover, removing the blank paper exposed before data-open. Existing paper backing/clipping and compact animation remain.

## Verification
Lint/build and all 11 book tests PASS. Expanded opening regression checks printed story visibility around edge-on rotation (.1344), forward/reverse. Focused rerun passes; screenshot reviewed. git diff --check passes.

## Files changed
src/book3d.css; tests/book.spec.js; .ai/TASKS.md, HANDOFF.md, CHANGELOG.md. No architecture/product scope change.

## Known issues and next action
No remaining work for requested opening fix. Optional visual review at /#work, then Git checkpoint. Existing build chunk advisory remains. Full book run logged unrelated DetectiveBoard.jsx:29 svgRef.current null error during case navigation, although all tests passed; inspect callback cleanup if addressing experience board separately.

## Git state
Startup clean at 07d9c3c. Only above task files changed; no commit/deployment.

---
## Previous handoff (historical)

# Handoff

Updated 2026-11-21 for PORT-038.

## Current state
PORT-038 DONE: Project book uses persistent memoized page faces/turn strips and synchronous frame-driven visibility and geometry. No per-turn face remounting; 25ms consistent smoothing replaces turn-specific speed cap, with immediate sync for large scroll jumps. Resize/layout changes and chapter jumps cancel stale RAF work. Artwork decoding, paper fallback, content, scroll-section length, links, reduced-motion reading and visual style preserved.

## Verification
Lint/build PASS; all 20 book/portfolio browser cases PASS. New phone/desktop regressions watch prepared DOM across 140 forward/reverse samples: zero rebuilt subtrees, no new book-art requests, valid visible layers and settled initial page/zero angle within 160ms. Failed-art test retains content/paper and navigation. Existing axe, touch, chapter, concept-link and reduced-motion checks pass. Recorded boundary runs and inspected desktop/phone frames in /tmp/portfolio-book-qa (temporary); manually verified breakpoint resizing and final chapter reset (compact page 6/desktop page 3, angle 0).

## Files changed this task
src/components/Book3D.jsx; src/book3d.css; tests/book.spec.js; .ai/TASKS.md, HANDOFF.md, ARCHITECTURE.md, DECISIONS.md, CHANGELOG.md. Product scope unchanged.

## Limitations
Existing >500KB build advisory remains. Persistent faces increase bounded initial DOM in exchange for less turn-time work. Local Chromium checks do not guarantee identical frame rates on every device. No commit/deployment.

## Next exact action
Optional user review at /#work with slow/fast forward/reverse scrolling on their devices. No requested implementation remains. Recommend a Git checkpoint after review.

## Git state
Startup HEAD 5e447f0. Existing uncommitted PORT-037 source/test/memory changes preserved. Current tree additionally contains PORT-038 book/CSS/test and memory changes. No reset or unrelated edits.

---
## Previous handoff (historical)

# Handoff

Updated 2026-11-21 for PORT-037.

## Current state
PORT-037 DONE: Intro-only original synthwave soundtrack (106 BPM). Music controls/details render inside MarvelIntro; no persistent landing dock. Intro starts BGM; completion/skip/resize/unmount stop scheduling, silence BGM bus and suspend audio context. Play restores gain, mute preference retained, and Tab/Shift+Tab traverse skip/play/mute controls. Existing header/hero replay retained.

## Verification
Lint/build PASS. All 14 opening/portfolio cases pass across scoped runs: 11 unchanged cases and final 3 targeted audio/natural-completion cases. Tests confirm context suspended and scheduler stopped on desktop/phone natural completion and Escape, controls only inside intro, keyboard navigation and control axe scan. Tests import actual Vite-loaded audio module URL to avoid inspecting a separate HMR module instance. Existing >500KB bundle advisory remains. Autoplay may require pressing Play, depending on browser policy. No commit/deployment.

## Files changed
src/App.jsx, src/components/MarvelIntro.jsx, ViceCityRadio.jsx, src/audio/audioEngine.js, src/radio.css, tests/opening.spec.js, tests/portfolio.spec.js, all six .ai documents.

## Next exact action
Optional user review of intro music/landing silence. No requested work remains. Recommend Git checkpoint after review.

## Git state
Startup working tree clean; current changes are PORT-037 only. Prior project archive present and preserved. No automatic commit or deployment.

---
## Previous handoff (historical)

# Handoff

Updated 2026-11-21 for PORT-036.

## Current state
PORT-036 DONE: Dedicated /projects comic publisher archive shows all four projects from shared data. Illustrated cover and two-column shelf (single column on phones), built/concept filters with announced count, native keyboard-accessible scope disclosures, honest status labels, existing case-study/live/related-site links and contact CTA. Header Projects link and homepage book Browse all projects link provide discovery. Homepage book retained. Archive bypasses automatic homepage intro and has specific title/description. Vercel direct-route rewrite added.

## Verification
Lint/build PASS; existing >500KB bundle advisory remains. All 9 portfolio tests and 2 new archive tests PASS. Verified filtering, keyboard expansion, concept disclosure, case-study/navigation links, no horizontal overflow at 320/390/768/1024/1440px and zero desktop/mobile axe violations. Desktop/phone full-page screenshots reviewed in test-results/projects-*.png. Hosted rewrite not live-tested; no deployment.

## Files changed
src/components/ProjectsPage.jsx, ProjectsPage.css; src/App.jsx; src/components/Book3D.jsx; vercel.json; tests/projects.spec.js; all six .ai documents.

## Next exact action
Optional user review at http://localhost:5173/projects. No requested implementation remains. Recommend Git checkpoint after review; no commit or deployment performed.

## Git state
Startup HEAD 8baffee. Pre-existing untracked src/components/Strengths.jsx and Strengths.css preserved untouched; prior strengths integration was absent in source and not restored. Other current changes belong to PORT-036.

---
## Previous handoff (historical)

# Handoff

Updated 2026-11-21 for PORT-034.

## Current state
PORT-034 DONE: Removed the “From interface to infrastructure.” toolkit section (`#toolkit`) and “The workshop.” workspace/AI section (`#workspace`) from the homepage. Header nav now has Work/Experience/Contact only. Home flow is hero → evidence band → work → experience → approach note → contact. Experience footer CTA links to `/#contact`; hero no longer links to chat/workspace. Toolkit source entry removed from `src/data/portfolio.js`. Interactive AI workspace/chat/terminal UI is no longer rendered by the app (components remain in repo but unused).

## Verification
- `npm run lint`: PASS.
- `npm run build`: PASS (pre-existing >500KB main chunk advisory remains).
- `npm test`: 8/8 API tests PASS.
- `npx playwright test tests/portfolio.spec.js tests/life-board.spec.js tests/opening.spec.js`: 18/18 PASS (updated tests for removed sections/links).

## Files changed (this task)
- `src/App.jsx` — removed Toolkit/workspace blocks, lazy Workspace, related nav/CTAs/imports; updated home description.
- `src/components/AdventureHero.jsx` — removed workspace ask link.
- `src/components/DetectiveBoard.jsx` — footer CTA → contact.
- `src/data/portfolio.js` — removed toolkit source entry.
- `tests/portfolio.spec.js`, `tests/opening.spec.js` — aligned with removed sections/flows.
- `.ai/TASKS.md`, `.ai/HANDOFF.md`, `.ai/PROJECT.md`, `.ai/CHANGELOG.md`, `.ai/DECISIONS.md` — synchronized.

## Next exact action
Optional visual review at `http://localhost:5173/` (confirm removed sections and contact flow). Optional cleanup of now-unused `src/components/Workspace.jsx`, `src/components/Chat.jsx` and related CSS if desired.

## Git state
HEAD 99fad56 (unchanged). Working tree includes prior uncommitted PORT-032/033 artifacts plus PORT-034 edits: modified `.ai/*`, `src/App.jsx`, `src/components/AdventureHero.jsx`, `src/components/DetectiveBoard.jsx`, `src/data/portfolio.js`, `tests/opening.spec.js`, `tests/portfolio.spec.js`, plus previously untracked `src/data/lifeBoard.js`, `tests/life-board.spec.js`, `assets/illustrations/life-board/`, `public/illustrations/life-board/`, `scripts/prepare_life_board_assets.py`. No commit or deployment performed.

---
## Previous handoff — superseded by PORT-034

# Handoff

Updated 2026-11-21 for PORT-033.

## Current state
PORT-033 DONE: Experience (#about) is now focused on **work experience** while keeping the detective/corkboard presentation. `src/data/lifeBoard.js` provides a central profile card plus four confirmed professional chapters: Education — B.Tech Computer Science, MES College of Engineering, Kuttippuram (2018–2022); Software engineer in electronic media/broadcasting; CTO/Technical lead at Day One Venture Studio (including Day One CRM, built and used internally); and current 4+ years full-stack/product building with ongoing, human-reviewed agentic workflow exploration.

Personal-interest clues (gaming/travel/music) and personal-life framing were removed. `src/components/DetectiveBoard.jsx` now renders 5 work-experience entries with “Work experience, chapter by chapter.” copy, work-focused labels/details, measured red threads, optional torch (off by default), responsive board layout, lazy responsive images with portrait fallback, and a native dialog inspector with keyboard opening, focus containment/inert background behavior, Escape/previous/next, and opener focus restoration.

## Verification
- `npm run lint`: PASS.
- `npm run build`: PASS (pre-existing >500KB main chunk advisory remains).
- `npm test`: 8/8 API tests PASS.
- `npx playwright test tests/life-board.spec.js`: 4/4 PASS (keyboard/open/close/nav/focus restoration, torch toggle, 5 cards and pin-aligned threads at 320/390/768/1024/1440 with no horizontal overflow, mobile+desktop axe on board and inspector, image fallback preserving details/keyboard access).

## Files changed (this task)
- `src/data/lifeBoard.js` — work-experience chapters/profile data (replaced personal chapters/clues).
- `src/components/DetectiveBoard.jsx` — work-experience UI/copy, 5-entry board/threads/inspector.
- `src/detective-board.css` — 5-card responsive layout/styling adjustments.
- `tests/life-board.spec.js` — updated work-experience contract.
- `.ai/TASKS.md`, `.ai/HANDOFF.md`, `.ai/PROJECT.md`, `.ai/ARCHITECTURE.md`, `.ai/DECISIONS.md`, `.ai/CHANGELOG.md` — synchronized project memory.

## Next exact action
Optional user visual review at `http://localhost:5173/#about`. No requested implementation remains.

## Git state
HEAD 99fad56 (unchanged). Working tree includes prior uncommitted PORT-032 artifacts plus PORT-033 edits: modified `.ai/*`, `src/components/DetectiveBoard.jsx`, `src/detective-board.css`; untracked `src/data/lifeBoard.js`, `tests/life-board.spec.js`, `assets/illustrations/life-board/`, `public/illustrations/life-board/`, `scripts/prepare_life_board_assets.py`. No commit or deployment performed. Recommend a Git checkpoint after review.

---
## Previous handoff — superseded by PORT-033

# Handoff

Updated 2026-11-21 for PORT-032.

## Current state
PORT-032 DONE: Experience (#about) is a portrait-led personal detective board, “Same me. Different chapters.” Four career portraits (college, eletronikmedia, Day One leadership, current experimentation), a central approved Sourav portrait and gaming/travel/music snapshots. Distinct scenes generated with built-in image_gen; exact prompts and PNG masters retained. Only confirmed college dates shown; no historical photo claims or invented travel stories.

Desktop: warm physical corkboard with angled paper portraits and measured red threads. <=900px: scrolling two-column layout; <=540px: single-column readable board. Optional torch defaults off and leaves touch scrolling alone. Native dialog supports keyboard opening, browser focus containment/inert background, Escape, previous/next and opener focus restoration. Images lazy-load with responsive sources and portrait fallback. Reduced motion disables decorative transitions/entrance.

## Verification
- Lint and production build pass; eight API tests pass. Existing >500KB main chunk advisory remains.
- All 23 tests across portfolio.spec.js, book.spec.js and life-board.spec.js pass. After final thread/layout refinements, all four focused board tests pass again, including real endpoint alignment and 320/390/768/1024/1440 responsive coverage.
- Zero axe violations on mobile/desktop board and open inspector; existing whole-page/case-study axe tests pass.
- Reviewed generated portraits, desktop/phone boards and phone inspector screenshots in test-results/life-*.png.
- Unrelated stale cinema.spec.js and provider deployment setup remain outside this task.

## Files changed
- src/components/DetectiveBoard.jsx, src/detective-board.css, src/data/lifeBoard.js
- assets/illustrations/life-board/{PROMPTS.json,source/*.png}, public/illustrations/life-board/*.webp
- scripts/prepare_life_board_assets.py, tests/life-board.spec.js and all six project-memory documents

## Next exact action
Optional user visual review at http://localhost:5173/#about. No requested implementation remains. Do not restore PORT-031's compressed single-screen phone layout.

## Git state
Startup HEAD 99fad56; startup working tree clean. Current working tree contains only PORT-032 source, assets, tests, script and memory changes. No commit or deployment performed. Recommend a Git checkpoint after review. Existing server at port 5173 retained; redundant server started at 5174 was stopped.

---
## Previous handoff — historical, superseded for Experience by PORT-032

# Handoff

Updated 2026-11-21 for PORT-031.

## Current verified state
PORT-031 DONE: Delivered **Single-Viewport Detective Noticeboard with Connected Red String Web** ([src/components/DetectiveBoard.jsx](file:///Users/sourav/Documents/works/sourav-portfolio/src/components/DetectiveBoard.jsx), [src/detective-board.css](file:///Users/sourav/Documents/works/sourav-portfolio/src/detective-board.css)):
- **Single-Viewport Architecture (Zero Vertical Scrolling)**:
  - Constrained `#about.detective-section` to a single viewport (`height: 100vh; height: 100dvh; max-height: 100vh; overflow: hidden;`).
  - Compact header bar with investigation badge, title, torch toggle, and era filter chips.
  - The physical `.corkboard-stage` fills the remaining viewport height, showcasing the entire conspiracy evidence board at once.
- **Physical Connected Red Strings Web (Matching User Reference Image Exactly)**:
  - SVG red strings (`stroke: #c22727` with drop shadow and glowing active state) connect the center "PRIME SUSPECT" polaroid pushpin to all satellite evidence pushpins:
    - Center (50%, 50%) -> College CS Labs (Top-Left)
    - Center (50%, 50%) -> eletronikmedia 2 Yrs (Top-Right)
    - Center (50%, 50%) -> Operating Creed Stickies (Bottom-Left)
    - Center (50%, 50%) -> Day One Studio CTO (Bottom-Right)
    - Center (50%, 50%) -> Agentic Frontier Memo (Bottom-Center)
    - Perimeter cross-connecting strings between outer cards.
  - Fully visible and active on both desktop and mobile viewports.
- **In-Viewport Evidence Dossier Inspector**:
  - Tapping or clicking any card opens the confidential dossier modal (`.dossier-overlay-modal`) directly over the board with zero page scroll.
  - Displays high-resolution surveillance photos, attire lore, field intel quotes, narrative story, verified skill tags, next/previous clue navigation, and Escape key dismissal.
- **Full WCAG Accessibility**:
  - Used `role="region"` with accessible labels on cards, resolving all `label-content-name-mismatch` axe issues.
  - 100% compliant: 0 axe violations on both mobile and desktop.

## Verification
- `npm run lint`: PASS (0 errors, 0 warnings).
- `npm run build`: PASS (clean production build).
- `npm test`: 8/8 API unit tests PASS.
- `npx playwright test tests/portfolio.spec.js tests/book.spec.js`: 19/19 PASS (all tests pass cleanly).
- Visual verification: Captured and inspected:
  - Desktop single-viewport noticeboard: `test-results/single-viewport-detective-desktop.png` (1280x800).
  - Mobile single-viewport noticeboard: `test-results/single-viewport-detective-mobile.png` (390x844).
  - In-viewport dossier modal: `test-results/single-viewport-dossier-modal.png` (1280x800).

## Files changed
- `src/components/DetectiveBoard.jsx` (single viewport structure, dossier modal, connected red string web)
- `src/detective-board.css` (single viewport styles, responsive constellation coordinates, modal styling)
- `.ai/TASKS.md`, `.ai/HANDOFF.md` (synchronized)

## Next action
Invite user to review the single-viewport noticeboard and connected red strings live at `http://localhost:5173/#about`.

PORT-022 DONE. Eliminated the page-turn flash by reordering updateScene: CSS vars (--turn-angle, --bend, --shade, etc.) are now written to bookRef BEFORE flushSync, so the folio-turn div always mounts/unmounts with the correct angle. Additionally, on page landing (turn→0 while was turning), --turn-angle parks at -180deg so the sheet hides behind the spread instead of snapping to 0° before unmounting. Lint and build pass. Working tree has uncommitted PORT-021 and PORT-022 updates.

PORT-021. Desktop leaves bend along the spine and compact leaves curl over the top rings. Five connected CSS strips carry aligned slices of each printed face. Eased rotation and shading follow scroll in either direction. The underlying desktop story changes upon landing. Page controls animate the scroll. Book3D.jsx and book3d.css modified locally. No outstanding implementation steps.

PORT-020 completed. The compact project book uses a portrait spiral notebook with seven visible rings, a layered paper edge and scroll-driven top-hinged cover and sheets. Book3D.jsx and book3d.css implement the change. Lint, build and all eight book browser tests passed, including phone fit, touch navigation and reduced motion. No outstanding implementation work. Next action is optional mobile visual review. Working tree contains uncommitted PORT-019 and PORT-020 updates.

Updated 2026-11-20 for PORT-019.

## Current verified state
PORT-019 DONE: fixed the user-reported dark opening page area and enabled the animated book on phones/tablets. This supersedes PORT-018's compact-screen static-only behavior.

A folio-paper-bed layer above the backing follows the book expansion and supplies warm paper wherever the opening cover previously exposed the dark board. Desktop spreads/cover/turn holds are preserved. At <=1000px, render one full-size leaf: project story followed by illustration (eight leaves). The mobile cover and turning leaf use full-width faces; page holds and native scroll remain reversible. Compact chapter buttons jump to each project's story; previous/next advance a single leaf. Touch targets are >=44px. Short-phone spacing includes 320x568, with page text/links and navigation clear of the radio dock. Enlarged text can still scroll within a compact leaf rather than clip. Reduced motion and viewport height <=500px retain static reading layout.

Motion scroll update is useCallback-backed and refreshed on responsive mode changes. useSyncExternalStore observes compact media state. Guards prevent rendering a nonexistent desktop next-project face when resizing a mobile turn. #concepts now opens the planning chapter on both animated modes; static reading uses the original article anchor.

## Verification
- npm run lint and npm run build PASS; pre-existing main chunk >500KB advisory remains.
- 19/19 tests in book.spec.js (8) + portfolio.spec.js (11) PASS. Final small-phone heading spacing then verified with all 8 book cases passing again.
- Tests cover opening/reverse paper lining, desktop pin/turn/release, 320/375/390/768 mobile page sequence, story fit, chapter/page navigation, no horizontal overflow, radio clearance, accessibility and touch-enabled case-link navigation.
- Manual visual review: desktop opening at reported angle, 390px story/art and final 320x568 NOTWO page. Phone→desktop resize during last-project turn emitted no page errors. git diff --check PASS.
- Existing stale cinema.spec.js and provider release configuration remain as previously documented; no unrelated behavior changes.

## Files changed / next action
src/components/Book3D.jsx, src/book3d.css, tests/book.spec.js and all six .ai memory documents. Preserve the user's concurrent PROJECT.md edit changing experience text to “4 + years”. No dependencies/assets generated.
Next exact action: optional visual review at http://127.0.0.1:5173/#work, including phone width. No requested implementation remains.

## Git state
Verified startup/current HEAD d79e64e No commit/deployment performed in this task. Working tree has the book component/CSS/tests and memory edits; unrelated user PROJECT.md edit preserved.

---
## Previous handoff — historical, superseded where noted above

# Handoff

Updated 2026-11-20 for PORT-018.

## Current verified state
PORT-018 is DONE; PORT-017's rejected implementation is superseded. The homepage Work section is a physical comic on a warm drawing table: illustrated closed cover → scroll-linked lift/tilt/opening → four two-page spreads → release into About. Story/role/stack/status and real case links occupy the left page; existing comic art, workflow panels and captions occupy the right. Long reading holds separate two-sided page turns. Previous/next and chapter buttons jump to holds; native page scrolling remains available and reversible. No scroll interception.

Motion useScroll measures ['start start', 'end end']; progress writes CSS variables on the book ref. React only changes discrete scene states. Opening is 0–.2; each project gets .2 with its final quarter reserved for a turn (except the last). Cover is hidden after opening so it cannot obscure subsequent project stories. Fixed minmax(0,1fr) grid track prevents content from stretching the physical pages. All styles use folio-* names, avoiding the preserved old book experiments.

At <=1000px width, <=600px viewport height, or reduced motion: unpinned stacked story/art pages keep text and links readable. #work and case routes remain; desktop #concepts opens NOTWO while the reading layout uses its article anchor. Art is illustrative, not a product screenshot. Concepts remain explicitly proposed, CRM internal, CYD live/in development.

## Verification
- Lint and production build pass; pre-existing >500KB bundle advisory remains.
- Eight API tests pass.
- 21 browser tests pass across book.spec.js (5), portfolio.spec.js (11), opening.spec.js (5).
- Checked desktop reading/turn/reverse/release, chapter navigation, case links, concept deep links, laptop text fit, 320/390/768/820/1440 layouts and axe accessibility.
- Reviewed closed/open/CRM/turn/phone screenshots. git diff --check passes.
- The wildcard browser suite still includes stale tests/cinema.spec.js targeting the retired invitation/soundtrack UI. Confirmed failures; interrupted that run and verified the current suites above. Do not change current intro behavior to satisfy obsolete selectors.

## Files changed this session
src/components/Book3D.jsx, src/book3d.css, src/components/FlipBook.jsx (inactive lint cleanup), tests/book.spec.js (new), tests/portfolio.spec.js (work selectors), and .ai/{TASKS,HANDOFF,PROJECT,ARCHITECTURE,DECISIONS,CHANGELOG}. Existing uncommitted App.jsx/ComicBook/FlipBook/CSS changes were preserved. No new runtime dependencies, generation, commit or deployment.

## Next exact action
Optional user visual review at http://127.0.0.1:5173/#work (dev server started this session). No required work remains for PORT-018. If requested, clean up obsolete cinema tests separately; keep opening.spec.js as the current intro contract. Production AI/provider setup remains as previously documented.

## Git state
Verified HEAD df1e0a2. Working tree remains dirty with prior App.jsx changes, modified project memory/tests, and untracked Book3D/ComicBook/FlipBook CSS/components plus new book tests. No existing changes discarded and no commit made. Recommend a checkpoint after visual review.

---
## Previous handoff — historical, superseded by PORT-018

# Handoff

Updated 2026-11-20 for PORT-017.

## Current state
PORT-017 is IN_PROGRESS. Antigravity's PORT-016 flat comic-book layout has been replaced with an interactive 3D book experience that grows and reveals projects on scroll:
- **3D book component** — realistic hardcover book using CSS 3D transforms with proper perspective
- **Scroll-driven animations** — book starts small (60% scale), grows to full size as user scrolls, opens naturally
- **Page-turn mechanics** — each of 4 project pages flips individually with smooth rotateY transforms based on scroll progress
- **Front/back covers** — vintage hardcover styling with title, subtitle, edition on front; summary text on back
- **Realistic spine** — vertical text, proper shadows and depth
- **Project pages** — each page shows: illustration, category, title, summary quote, description, role, tech stack (4 items), action buttons, status
- **"COMING SOON" stamps** on concept projects (NOTWO, Founder Versa)
- **Reduced-motion fallback** — stacked card layout for users who prefer reduced motion
- **Responsive** — optimized breakpoints for desktop, tablet, mobile (320px+)

Technical implementation: `useScrollProgress` hook tracks scroll position (0-1), calculates book scale/rotation and individual page flip progress. Each page has its own z-index for proper stacking. Book uses CSS perspective (2500px) with transform-style: preserve-3d.

Existing routes, case-study pages, `id="work"` anchor, and all other sections unchanged.

## Files changed
`src/components/Book3D.jsx` (new, replaces ComicBook), `src/book3d.css` (new, replaces comic-book.css), `src/App.jsx` (imports Book3D instead of FlipBook, imports book3d.css).

Superseded/unused: `ComicBook.jsx`, `comic-book.css`. Pre-existing lint errors remain in `FlipBook.jsx` (not touched).

## Verification
npm run build: PASSING (pre-existing 500KB chunk advisory unrelated to this work).
npm run lint: 3 errors in pre-existing FlipBook.jsx (unused file, not caused by PORT-017).
Dev server: running on port 5173.

## Continuation
Awaiting user visual review at http://localhost:5173/#work. Implementation complete but user reported "alignment and all are not good" - fixed duplicate JSX code, improved 3D positioning with proper cover/page/spine structure, enhanced CSS with better shadows/textures/spacing. Build now passes.

Next actions:
1. User visual testing and feedback on scroll behavior, page layout, responsive breakpoints
2. If approved: update tests (portfolio.spec.js selectors), mark PORT-017 DONE
3. If adjustments needed: iterate on timing, positioning, or content layout

## Git state
Baseline 5a9f7f3. Current working tree contains all PORT-017 changes plus all prior uncommitted PORT-007–016 work. No commit/deployment performed. Recommend a git checkpoint after user visual approval.
