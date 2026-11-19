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
