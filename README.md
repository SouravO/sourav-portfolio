# Sourav O · Portfolio

Dark React + Vite portfolio with a personal comic scroll story, two case studies, curated agent perspectives, a local terminal, and a server-side OpenAI assistant.

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

Seven browser tests cover chapter navigation and reversal, keyboard scrubbing, three comic poses, ink mode, compact mobile layouts, direct case studies, curated perspectives, terminal commands, mocked chat success/cancellation, unconfigured AI, reduced motion, and operation without WebGL. The mobile axe accessibility scan runs in the suite. Unit tests exercise endpoint validation, model request boundaries, safe sources, quota decisions, and error behavior. They do not establish the factual accuracy of every live model response or a live Redis deployment.

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

The homepage is a CSS-sticky, native-scroll story. Motion values control geometric scene/typography effects; React state changes only for discrete chapters and toggles. Three generated illustrated poses use deliberate comic cuts. This is **not** a continuous generated video or rigged 3D likeness. Mobile and reduced-motion views retain the identity, readable copy, and direct project navigation. The previously built abstract Three.js components are retained in source but no longer imported or included in the application build. Workspace and Chat stay lazy-loaded. The z-index scale is defined as CSS tokens in `src/index.css`: header 20, keyboard skip link 30.

### Character artwork and motion production

Built-in image generation created three reference-based character illustrations from the supplied photos. Only generated artwork is published; original personal photos and the other person in the office reference are not published. `public/character/` holds responsive 900px/450px alpha WebP assets. High-resolution chroma-key originals, alpha masters, prompt descriptions, a motion brief, and QA background matrix are retained under `assets/sourav-motion/`.

Regenerate deterministic derivatives with `python3 scripts/prepare_character.py` (requires Pillow and NumPy). It applies the vendored Oil Motion dominance-v2 keying helper, then exports alpha masters and responsive WebP. The page owns its background. No identities, anatomy, or poses are synthesized by the processing script.

A MiniMax H3 request through the existing local ZenMux configuration returned **403 access_denied**. No video master was generated, no paid model alternative or reduced constraints were silently substituted, and no fake intermediate frames are claimed. Status is recorded in `assets/sourav-motion/qa/video-generation-status.json`. To finish a continuous clip, enable the requested provider resource, rerun the saved start/end-constrained prompt through the Oil Motion skill, then complete the 48 FPS interpolation, all-keyframe encoding, alpha/keying QA, and browser forward/reverse seek validation before replacing the comic cuts.

Interaction references: [React Bits](https://reactbits.dev/) and [21st.dev](https://21st.dev/). Magnetic links and project tilt are original Motion implementations inspired by these interaction categories, not copied library components.

The SVG social preview is a local design asset; social platforms that require raster Open Graph images need a PNG/JPEG export and an absolute deployed image URL before sharing. Per-case-study metadata is updated client-side; crawler-specific SSR/pre-rendering is outside this release.

Performance measurements are local lab checks, not hosted guarantees. Current results and verification limits are recorded in `.ai/HANDOFF.md`; the previous abstract-hero score does not describe this redesign.

Persistent project state and continuation instructions live in `.ai/` and `AGENTS.md`. No automatic commits are made.
