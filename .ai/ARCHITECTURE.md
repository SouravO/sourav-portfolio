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
