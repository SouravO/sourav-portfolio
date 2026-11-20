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
