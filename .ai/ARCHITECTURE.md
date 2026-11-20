# Architecture

Updated 2026-11-19 for PORT-001.

## Frontend

React 19 + Vite 8, JavaScript ES modules, React Router, Tailwind v4 Vite integration, and custom CSS. Shared public content in src/data/portfolio.js feeds the routes, curated perspectives, terminal, and server model context. Self-hosted Geist Sans/Mono via Fontsource; one Phosphor icon family. CSS tokens define palette and z-index layers.

Routes: /, /work/check-your-deals, /work/day-one-crm, plus client not-found view. Route effects update title/description, scroll destinations, and anchor focus. Vercel rewrites /work paths to the SPA; the API and static assets retain their own paths.

Motion handles entry/reveal and scroll-driven geometric effects. The retired PORT-004 homepage imported ScrollStory: a native-scroll CSS-sticky stage, chapter-dependent text and system/project overlays, keyboard range scrubbing, pause control, ink mode, and a speech interaction. CharacterSequence maps progress to three alpha illustrated poses using discrete cuts, with ref-based DOM updates rather than continuous React state. Magnetic links and Tilt project artwork use Motion values/springs and respect reduced motion.

The active hero has no WebGL dependency. The old CoreVisual/CoreScene components and installed dependencies are retained but no longer imported into the production app. Workspace and Chat remain separately lazy-loaded. Local terminal commands never call the API.

Character assets: built-in image generation, user photos as likeness references; three chroma-magenta source images and full-resolution alpha masters in assets/sourav-motion, responsive 900/450px WebP in public/character. scripts/prepare_character.py and the vendored dominance-v2 chroma_key.py deterministically create derivatives (Pillow/NumPy). No source personal photos are published.

Video motion brief and budget selected chroma-video for a planned 5-second/48FPS continuous sequence. Generation through the locally configured ZenMux MiniMax H3 endpoint failed with 403 access_denied. No master/interpolation/encoded video exists. Saved prompts/keyframes and sanitized failure record support continuation; the shipped comic alternative must not be described as continuous video.

## API

api/chat.js is the Vercel Node entrypoint. server/chat.js contains validation, grounding instructions, structured model request/response handling, and atomic distributed quotas. The dev Vite plugin supplies a local /api/chat adapter; vite preview serves static frontend only.

POST /api/chat takes question (1–1,000 characters), up to six bounded user/assistant history entries, and a known projectId. Body maximum 16 KB. Response: answer, allowlisted sources, remaining hourly allowance. Errors use JSON with 400/403/405/413/415/429/503; Retry-After on quota exhaustion. Responses are no-store.

OpenAI Responses API with store:false, strict JSON schema, default configurable gpt-5-mini, minimal reasoning, 600 maximum output tokens, 20-second timeout, no retries/tools. Grounded in shared public data, not a vector database or live browsing. Agent roles are presentation perspectives, not actual autonomous workers. Model behavior requires live evaluation before production and cannot guarantee freedom from hallucination.

Upstash Redis REST runs one Lua operation to check and reserve both quotas atomically. HMAC-hashed trusted IP/network identity; visitor window lasts 3,600 seconds from first request; site counter expires at UTC midnight. Default five/hour and 100/day. Redis timeout or missing configuration fails closed for AI while curated UI stays available. Failed/canceled requests retain their quota reservation. No raw IP or chat content stored by application. Generic error logging only.

Secrets are server-only env variables documented in .env.example and README. AI_ENABLED is the kill switch. Chat conversation lives in component memory and is sent to OpenAI only on explicit live question submission. Vercel forwarded IP trust applies only to platform deployments; local adapter uses socket address.

## Verification

Node test runner for API logic; Playwright Chromium and axe for browser/accessibility checks. No provider credentials committed. Vercel preview/live OpenAI/Redis integration remains configuration-dependent. Local Lighthouse results are lab measurements, not hosted guarantees. The retired Three.js chunk is absent from the current build; no chunk-size warning is emitted for the comic redesign.

## PORT-004 visual system
Self-hosted Fontsource Bangers and Comic Neue accompany Geist. `src/comic.css`, imported after the legacy structural styles, owns the printed-paper palette, panel treatments, responsive hero layout, and site-wide comic surfaces. Legacy hardcoded green/dark CSS values are mapped to shared theme tokens. Six `public/character/comic-*.webp` responsive derivatives reuse the reference-based comic alpha masters under `assets/sourav-motion/alpha/comic-backup/`. Memoji assets remain preserved. CharacterSequence uses the comic derivatives; About includes a lazy welcome portrait. Existing routes, API, workspace and discrete pose-switching behavior remain unchanged.

## PORT-007 current frontend (2026-11-20)
`AdventureHero.jsx` replaces the ScrollStory import on the homepage. Semantic H1, caption, CTA, and an accessible ink-mode button overlay a separately generated street illustration with a corrected upright character pose. Motion scroll values animate the background subtly; reduced motion is static. No sticky hero or pose scrubbing is active. Retired components/assets remain preserved.

`src/comic.css` implements the approved vermilion/petrol-blue/newsprint comic system over the existing structural stylesheet. ProjectArt now uses separate illustrative project images and live HTML titles; case-study routes share those assets. A portrait/workshop grid frames the existing lazy Workspace. Existing About/journey/toolkit content remains. Contact overlays live heading, email/copy controls, and narration on a separate sunset illustration.

Seven generated source masters (five desktop/shared, two dedicated mobile compositions) are under `assets/illustrations/builders-adventures/`. `scripts/prepare_adventure_assets.py` only resizes/compresses them into `public/illustrations/*.webp`; it does not synthesize poses or edit backgrounds. Main cover preload is media-specific; other illustrations lazy-load. `public/social-preview.jpg` and favicon match the new palette. All UI text remains HTML rather than baked into concept screenshots.

API and route contracts unchanged. Eight Playwright cases now validate the current design, replacing retired chapter/pose assertions. Checks include 320/375/390/768/1024/1440 widths, mobile image selection, no overflow, concept/case routes, terminal, mock chat and unavailable API, clipboard copy, reduced-motion behavior and mobile/desktop/case-study axe scans.

## PORT-008 content and entry flow
Homepage sections now follow cover → evidence band → work/concepts → experience → toolkit → approach → workshop → contact. Layout/copy in App.jsx/AdventureHero.jsx changed without altering shared project facts or server APIs. Workspace accepts an initialMode prop set to chat only for the allowlisted mode=chat query. The keyed instance uses the navigation entry key so repeat direct Ask links reopen chat; current component-local chat history clears on remount. RouteEffects also tracks location.search for deep-link scrolling/focus. Browser suite now has nine cases, including narrative order and chat deep-link entry/repeat/reload.

## PORT-009 work and case-study components
`ProductMap.jsx` is a shared stateful, keyboard-native flow explainer for CYD/CRM. Three native aria-pressed buttons select public-safe workflow descriptions, icons and nodes; unique useId controls and a polite live region announce the selection. Copy distinguishes planned CYD automation and internal CRM scope; it is not a functional reproduction or screenshot of either product. Heading level is configurable for correct work/case nesting.

`src/work.css`, imported after comic.css, scopes the editorial work rows and case-reader layout. CaseStudy uses actual semantic sections (#challenge, #contribution, #system, #scope, #context), sticky desktop nav and wrapping mobile links. Previous ProjectArt renderer is removed from active code. Shared project data/API and route paths unchanged; the concept FlowDiagram remains available.

## PORT-011 cinematic entry
App owns entry-active and reveal state, with stable completion callback. MarvelIntro owns a single mount-scoped cancelable timeline, decodes the current hero image and snapshots its rendered bounds/object fit/position for a fixed matching-art layer. CSS transforms settle that shot into the underlying responsive hero; overlay dissolves and CSS staggers live UI. No generated/encoded video or new dependency. During entry, body scroll locks and content/radio are inert; skip focus is contained and restored on cleanup. Resize skips stale geometry. Image decode race is bounded. Root entry plays every normal load; reduced-motion and deep-link entry bypass. Feature tests set explicit skip_intro_test session flag; real opening tests exercise automatic entry without webdriver gating.

## PORT-012 character-led opening
MarvelIntro now drives prelude → three SHOTS (idea/build/stride, 1.25s each) → panel spread (0.6s) → title (1.2s) → unchanged PORT-011 landing match/settle/dissolve. New picture/source elements choose desktop/mobile alpha WebP; source-matched decoding has a 1.2s cap. Shot transitions and camera/text animation use CSS transform/opacity; no generated continuous character motion, encoded video, sprite atlas or new runtime dependency. Three generated #FF00FF reference-based sources and alpha masters are preserved under assets/illustrations/intro; scripts/prepare_intro_assets.py uses the existing dominance-v2 helper to key and compress derivatives into public/illustrations/intro. All backgrounds/grids/rays/type remain page-owned. Removed intro references to character files already deleted at session start. Final currentSrc/crop snapshot and delayed landing UI reveal remain intact.

## PORT-013 active cinematic opening
PORT-012's cutout slide direction is rejected/superseded. Active scenes are opaque, full-environment graphic-novel images under public/illustrations/cinema. MarvelIntro drives bounded decode prelude → four accelerating art-only shots → transform/perspective comic-sheet flight → artwork-filled text pullback/silver studio title → unchanged PORT-011 matched hero settle/dissolve/reveal. React sceneSources state assigns the decoded landing cover for failed/slow scenes; both picture sources and CSS title variables choose mobile derivatives. No canvas, new package or production video asset; motion is browser CSS over generated stills. Source masters/prompts/report/direction live under assets/illustrations/cinema; scripts/prepare_cinema_assets.py resizes/compresses only. Previous cutout art/pipeline remain historical. Narrow tablet header and 320px radio spacing fixes keep controls inside the viewport, including fallback-font loading.

## PORT-018 active project book
App.jsx renders Book3D.jsx as the homepage work section. book3d.css scopes all active styling to folio-*; the older ComicBook/FlipBook implementations are preserved but inactive. Motion useScroll with target start/start to end/end drives CSS custom properties directly; React state only tracks discrete project/turn-half/open changes. Native CSS sticky/perspective/rotateY supplies pinning, opening and paired front/back leaf faces. No new library, video, generated asset or WebGL. StoryPage/ArtPage share portfolio.js facts across the desktop book and CSS-exclusive reading layout. Width <=1000px, height <=600px and reduced motion select unpinned stacked spreads. Book chapter buttons scroll to known reading holds; useLocation handles desktop #concepts entry. Hidden flipping faces are inert/aria-hidden; active case links live in the base spread. Tests/book.spec.js adds five behavior/layout/accessibility checks. Legacy tests/cinema.spec.js is stale; current intro coverage is opening.spec.js.
