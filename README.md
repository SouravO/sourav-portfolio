# Sourav · Portfolio

Vintage adventure-comic React + Vite portfolio with an illustrated street-scene cover, two case studies, an interactive workshop, an origin story, and a sunset contact finale. All headings and controls are live HTML; illustrations are separate optimized assets.

## Local development

Requires Node.js 22+ and npm.

```sh
npm install
npm run dev
```

Open the Local URL printed by Vite. The dev server includes `/api/chat`; no separate backend is needed. The site and curated interactions work without credentials. `npm run preview` serves the production frontend only; use Vercel preview deployment for a production API smoke test.

```sh
npm run build
npm run lint
npm test
npx playwright install chromium
npm run test:e2e
```

Ten browser tests cover cover navigation and ink mode, responsive artwork at phone/tablet/desktop sizes, direct case studies, concept disclosures, curated perspectives, terminal commands, mocked chat success/cancellation, unconfigured AI, email copy, and reduced motion. Mobile, desktop, and case-study axe accessibility scans run in the suite. API unit tests exercise endpoint validation, model request boundaries, safe sources, quotas, and error behavior. Live model accuracy and live Redis remain release checks.

Illustration masters are in `assets/illustrations/builders-adventures/`; optimized WebP files are in `public/illustrations/`. Rebuild derivatives with `python3 scripts/prepare_adventure_assets.py` (Pillow required). The mobile cover and finale are separately generated compositions. The hero uses restrained scroll parallax, with a static reduced-motion fallback.

## Live AI configuration

Copy `.env.example` to `.env.local`, then configure the server-only values. Do not paste keys into frontend source or prefix them with `VITE_`.

- `AI_ENABLED=true` enables live requests; otherwise the API returns an honest unavailable response.
- `OPENAI_API_KEY` and optional `OPENAI_MODEL` (default `gpt-5-mini`). The configured model must support the Responses API, strict JSON-schema output, and minimal reasoning effort.
- `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` connect the distributed rate limiter.
- `RATE_LIMIT_SECRET`: generate a random value, for example `openssl rand -hex 32`. Used to HMAC visitor network identities. Raw IPs are not stored in Redis.
- `AI_HOURLY_LIMIT=5` and `AI_DAILY_LIMIT=100` set request allowances. Hourly windows last 3,600 seconds from the first reserved request; daily site counters expire at midnight UTC. Shared networks share an allowance.
- `ALLOWED_ORIGIN` is the exact public origin without a trailing slash. Configure separately for preview and production.

One atomic Redis Lua script checks and increments both quotas before calling OpenAI. Redis failure disables live AI rather than bypassing limits. Reserved requests, including failed/canceled model calls, count toward quotas; cancellation does not guarantee cancellation of provider billing. Limits constrain requests, not a fixed dollar spend. OpenAI account/project budget settings should be configured separately.

Requests are capped at 16 KB; questions at 1,000 characters; history at six messages; output at 600 tokens; model calls time out after 20 seconds without retries. Provider outputs are schema-constrained and source links are resolved from a server allowlist. The assistant has no browsing, execution, or external action tools. Prompt rules discourage unsupported claims, but model answers still require evaluation and may be wrong.

Chat history exists in component memory and is discarded when the chat unmounts or tab closes. Submitted questions and bounded history go to OpenAI with `store:false`. Application logs contain only a generic failure message, not questions, answers, keys, or IPs. Hosting/provider infrastructure may apply its own logging and retention policies. The local terminal never calls OpenAI.

## Deploy to Vercel

Import this repository as a Vite project. `vercel.json` configures the frontend build, direct case-study routing, and `/api/chat` serverless function. No framework migration is required. Set server variables in the Vercel project and deploy a preview first. The API trusts Vercel's platform-supplied forwarded client IP only when `VERCEL=1`; local development uses the connection address. Do not reuse that assumption on an untrusted custom proxy.

Preview checklist:

1. Load `/` and both `/work/...` routes directly and refresh them.
2. Confirm the curated workspace and terminal work with AI disabled.
3. Configure credentials and test a relevant question, an unknown fact, an unrelated question, and an instruction-override attempt. Confirm sources and project-status distinctions.
4. With a temporary low allowance, verify concurrent requests cannot exceed the hourly or daily cap. Verify Redis outage and provider timeout behavior. Restore production allowances afterward.
5. Review mobile and desktop, keyboard access, reduced motion, and WebGL fallback. Run Lighthouse against the production preview; targets are LCP ≤2.5s and CLS ≤0.1, not guarantees across devices.
6. Set the production origin, review OpenAI spend settings, and promote the verified preview.

Production publication and real provider checks require your service accounts and credentials. None are included in this repository.

## Editing content and visuals

`src/data/portfolio.js` is the shared public content source for pages, workspace, and server AI grounding. Update project status there when facts change. Keep public content only: the complete file is accessible to visitors and sent as model context.

CYD is deployed and in development; its automation plans remain explicitly planned. CRM is built and internally used; visuals are explanatory and public-safe. NOTWO and Founder Versa remain planning/concept work. Project artwork is typography and explanatory flows, not a claimed screenshot of a product. There are no invented social profiles, metrics, or testimonials.

The retired PORT-004 homepage was a CSS-sticky, native-scroll story. Motion values control geometric scene/typography effects; React state changes only for discrete chapters and toggles. Three generated illustrated poses use deliberate comic cuts. This is **not** a continuous generated video or rigged 3D likeness. Mobile and reduced-motion views retain the identity, readable copy, and direct project navigation. The previously built abstract Three.js components are retained in source but no longer imported or included in the application build. Workspace and Chat stay lazy-loaded. The z-index scale is defined as CSS tokens in `src/index.css`: header 20, keyboard skip link 30.

### Historical character artwork and motion production

Built-in image generation created three reference-based character illustrations from the supplied photos. Only generated artwork is published; original personal photos and the other person in the office reference are not published. `public/character/` holds responsive 900px/450px alpha WebP assets. High-resolution chroma-key originals, alpha masters, prompt descriptions, a motion brief, and QA background matrix are retained under `assets/sourav-motion/`.

Regenerate deterministic derivatives with `python3 scripts/prepare_character.py` (requires Pillow and NumPy). It applies the vendored Oil Motion dominance-v2 keying helper, then exports alpha masters and responsive WebP. The page owns its background. No identities, anatomy, or poses are synthesized by the processing script.

A MiniMax H3 request through the existing local ZenMux configuration returned **403 access_denied**. No video master was generated, no paid model alternative or reduced constraints were silently substituted, and no fake intermediate frames are claimed. Status is recorded in `assets/sourav-motion/qa/video-generation-status.json`. To finish a continuous clip, enable the requested provider resource, rerun the saved start/end-constrained prompt through the Oil Motion skill, then complete the 48 FPS interpolation, all-keyframe encoding, alpha/keying QA, and browser forward/reverse seek validation before replacing the comic cuts.

Historical interaction references: [React Bits](https://reactbits.dev/) and [21st.dev](https://21st.dev/). Magnetic links and project tilt are original Motion implementations inspired by these interaction categories, not copied library components.

The SVG social preview is a local design asset; social platforms that require raster Open Graph images need a PNG/JPEG export and an absolute deployed image URL before sharing. Per-case-study metadata is updated client-side; crawler-specific SSR/pre-rendering is outside this release.

Performance measurements are local lab checks, not hosted guarantees. Current results and verification limits are recorded in `.ai/HANDOFF.md`; the previous abstract-hero score does not describe this redesign.

Persistent project state and continuation instructions live in `.ai/` and `AGENTS.md`. No automatic commits are made.

## Current visual implementation (2026-11-20)
The approved adventure-comic concept is implemented by `AdventureHero.jsx` and `src/comic.css`. Earlier ScrollStory/CharacterSequence, magnetic/tilt components and pose/video assets are retained as historical experiments and are not imported by the current homepage. The approved full-scene illustrations replace the previous three-pose character experience. The corrected cover character stands naturally with both feet on the ground and holds a laptop. No continuous character animation is claimed.

## Visitor content flow (PORT-008)
The homepage introduces Sourav’s role/value, substantiates it with real projects and contributions, then presents experience, stack and build approach before the optional workshop and contact finale. Structural inspiration: https://sivaprasadc.vercel.app/; copy and professional facts remain Sourav’s. `/?mode=chat#workspace` opens the assistant without submitting a question; repeated navigation reinitializes its local state.

## Work presentation (PORT-009)
The work index uses editorial project rows and interactive explanatory maps rather than illustration-heavy poster cards. `src/components/ProductMap.jsx` shares the factual workflow UI across index and case studies. `src/work.css` contains the work/case presentation. The maps are labelled as explanations, not screenshots. Detail pages have a responsive chapter index; existing route paths and public project data remain unchanged.

### Cinematic comic opening

The homepage runs an art-first graphic-novel sequence: late-night keyboard close-up → portrait → rain-lit city → rooftop → a dimensional camera move across comic pages → artwork-filled SOURAV lettering resolving into a metallic studio mark → the exact responsive landing hero. The final hero settle and staggered navbar/copy reveal remain intact. `MarvelIntro.jsx` controls the cancelable timeline; `intro.css` owns the camera/title motion. It is a browser-rendered sequence of generated illustrations, not an encoded production video.

Source masters, exact built-in image_gen prompts, asset report and direction are saved in `assets/illustrations/cinema/`. Run `python3 scripts/prepare_cinema_assets.py` (Pillow) to regenerate desktop/mobile WebP under `public/illustrations/cinema/`. Full scenes replace the rejected PORT-012 cutout presentation; previous art remains preserved. New scene transfer totals about 1.87 MiB desktop / 1.01 MiB mobile. Loading is bounded; missing/slow art falls back to the landing cover. Reduced-motion/deep-link visits bypass automatic entry; Skip/Escape and replay remain available.

Focused verification: `npx playwright test tests/opening.spec.js tests/portfolio.spec.js`. Existing untracked `tests/cinema.spec.js` predates these revisions and describes a separate invitation/audio contract; it is preserved and excluded from this verification.
