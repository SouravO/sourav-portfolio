import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Globe, ArrowRight, CaretLeft, CaretRight } from '@phosphor-icons/react'
import { projects } from '../data/portfolio'
import '../book.css'

/* ── Illustration map ─────────────────────────────────────── */
const artMap = {
  cyd:   '/illustrations/deals.webp',
  crm:   '/illustrations/crm.webp',
  notwo: '/illustrations/cover.webp',
  versa: '/illustrations/workshop.webp',
}

const accentMap = {
  cyd:   '#e8a020',
  crm:   '#1a9e7a',
  notwo: '#c43060',
  versa: '#7c4dcc',
}

/* ── Page content ─────────────────────────────────────────── */
function PageRight({ project: p, pageNum }) {
  const accent = accentMap[p.id] || accentMap.versa
  const isConcept = p.kind === 'concept'
  return (
    <div className="book-page-content book-page-content-right" style={{ '--page-accent': accent }}>
      {/* header strip */}
      <div className="bk-header">
        <span className="bk-issue">THE BUILDER'S ADVENTURES</span>
        <span className="bk-pnum">{pageNum}</span>
      </div>

      {/* art panel */}
      <div className="bk-art-panel">
        <img src={artMap[p.id]} alt="" loading="lazy" />
        <div className="bk-halftone" aria-hidden="true" />
        {isConcept && <div className="bk-concept-stamp" aria-label="Concept">NEXT ISSUE</div>}
      </div>

      {/* category eyebrow */}
      <p className="bk-eyebrow">{p.category}</p>

      {/* title */}
      <h3 className="bk-title">{p.name}</h3>

      {/* speech bubble */}
      <div className="bk-speech" role="note">
        <p>{p.summary}</p>
      </div>

      {/* description */}
      <p className="bk-desc">{p.description}</p>

      {/* stack tags */}
      <div className="bk-stack" aria-label="Stack">
        {p.stack.slice(0, 4).map(s => <span key={s}>{s}</span>)}
      </div>

      {/* cta */}
      <div className="bk-cta">
        {!isConcept && p.slug && (
          <Link to={`/work/${p.slug}`} className="bk-btn bk-btn-primary" aria-label={`Read case study: ${p.name}`}>
            Case study <ArrowRight size={14} weight="bold" />
          </Link>
        )}
        {p.url && (
          <a href={p.url} target="_blank" rel="noreferrer" className="bk-btn bk-btn-secondary">
            Visit site <Globe size={13} />
          </a>
        )}
      </div>

      {/* action caption */}
      <div className="bk-caption" aria-label={`Status: ${p.status}`}>{p.status}</div>
    </div>
  )
}

function PageLeft({ project: p }) {
  /* left side shows project number + a teaser of the previous read */
  const accent = accentMap[p.id] || accentMap.versa
  return (
    <div className="book-page-content book-page-content-left" style={{ '--page-accent': accent }}>
      <div className="bk-left-art">
        <img src={artMap[p.id]} alt="" loading="lazy" />
        <div className="bk-halftone" />
      </div>
      <p className="bk-left-name">{p.name}</p>
      <p className="bk-left-label">Previously read</p>
    </div>
  )
}

/* ── Cover page face ──────────────────────────────────────── */
function CoverFace() {
  return (
    <div className="book-page-content book-cover-face">
      <div className="bk-cover-art">
        <img src="/illustrations/cover.webp" alt="" loading="lazy" />
        <div className="bk-halftone" />
      </div>
      <div className="bk-cover-copy">
        <p className="bk-cover-eyebrow">ISSUE #1 · 2024</p>
        <h2 className="bk-cover-title">The Builder's<br /><span>Adventures</span></h2>
        <p className="bk-cover-sub">Selected work · Product engineering · Case studies</p>
      </div>
    </div>
  )
}

/* ── Back of page — halftone paper ───────────────────────── */
function PageBack() {
  return (
    <div className="book-page-content book-page-back">
      <div className="bk-back-dots" aria-hidden="true" />
      <div className="bk-back-label" aria-hidden="true">THE BUILDER'S ADVENTURES · 2024</div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════ */
export default function FlipBook() {
  /*
   * State: pageIndex = number of pages flipped (0 = cover closed)
   * Total flippable pages = projects.length (4)
   * When pageIndex === projects.length → all pages flipped → back cover visible
   */
  const TOTAL_PAGES = projects.length          // 4
  const SCROLL_PER_PAGE = 1.2                  // viewport heights to scroll per flip
  const TOTAL_SCROLL = TOTAL_PAGES * SCROLL_PER_PAGE

  const sectionRef  = useRef(null)
  const stickyRef   = useRef(null)
  const [pageIndex, setPageIndex]     = useState(0)   // how many pages have flipped
  const [flipAngle, setFlipAngle]     = useState(0)   // 0–180 of the in-progress flip
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  /* respect prefers-reduced-motion */
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  /* scroll → page flip driver */
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    function onScroll() {
      const { top, height } = section.getBoundingClientRect()
      const viewH = window.innerHeight
      // progress: 0 at section top, 1 at section bottom
      const scrolled = -top / (height - viewH)
      const clamped  = Math.max(0, Math.min(1, scrolled))

      // how far through total scroll are we
      const raw     = clamped * TOTAL_SCROLL        // 0 → TOTAL_SCROLL
      const flipped = Math.floor(raw / SCROLL_PER_PAGE)   // whole flips done
      const partial = (raw % SCROLL_PER_PAGE) / SCROLL_PER_PAGE  // 0–1 within current flip

      const newPageIndex = Math.min(flipped, TOTAL_PAGES)
      const newAngle     = newPageIndex < TOTAL_PAGES
        ? Math.round(partial * 180)
        : 180

      setPageIndex(newPageIndex)
      setFlipAngle(newAngle)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    const initialFrame = requestAnimationFrame(onScroll)
    return () => {
      cancelAnimationFrame(initialFrame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [TOTAL_PAGES, SCROLL_PER_PAGE, TOTAL_SCROLL])

  /* manual nav (arrow buttons / keyboard) */
  function goTo(n) {
    const target = Math.max(0, Math.min(TOTAL_PAGES, n))
    const section = sectionRef.current
    if (!section) return
    const viewH    = window.innerHeight
    const scrollTop = section.offsetTop + (target / TOTAL_SCROLL) * (section.offsetHeight - viewH)
    window.scrollTo({ top: scrollTop, behavior: reducedMotion ? 'instant' : 'smooth' })
  }

  /* ── render ─────────────────────────────────────────────── */
  /*
   * Pages on the RIGHT (unflipped) stack from bottom: last project on bottom, first on top
   * Pages on the LEFT  (flipped)   stack from top: first project flipped → at top of left stack
   * Active page = projects[pageIndex] is currently flipping
   */

  const donePages  = projects.slice(0, pageIndex)      // already flipped
  const activePage = pageIndex < TOTAL_PAGES ? projects[pageIndex] : null
  const upcoming   = projects.slice(pageIndex + 1)     // still on right stack (not yet flipped)

  /* angle for in-progress page — reduced motion: instant snap */
  const liveAngle = reducedMotion ? (flipAngle >= 90 ? 180 : 0) : flipAngle

  return (
    <section
      id="work"
      ref={sectionRef}
      className="flipbook-section"
      aria-label="Selected work"
      /* total height drives how long the sticky stays */
      style={{ '--scroll-height': `${(TOTAL_PAGES + 1) * SCROLL_PER_PAGE * 100}vh` }}
    >
      {/* ── sticky book stage ─────────────────────────────── */}
      <div className="flipbook-sticky" ref={stickyRef}>

        {/* ── section heading (above book) ──────────────── */}
        <div className="flipbook-heading">
          <p className="fb-eyebrow">PRODUCT ENGINEERING / CASE STUDIES</p>
          <h2 className="fb-title">Selected <span>work.</span></h2>
        </div>

        {/* ── 3D book ───────────────────────────────────── */}
        <div
          className="book-stage"
          role="region"
          aria-label={`Project ${Math.min(pageIndex + 1, TOTAL_PAGES)} of ${TOTAL_PAGES}`}
          aria-live="polite"
        >
          <div className="book-3d">

            {/* LEFT side — read pages */}
            <div className="book-side book-left">
              {/* cover back (always at bottom of left) */}
              <div className="book-leaf book-leaf-cover-back" aria-hidden="true">
                <PageBack />
              </div>
              {/* already-flipped pages stacked, lowest index at bottom */}
              {donePages.map((p, i) => (
                <div
                  key={p.id}
                  className="book-leaf book-leaf-done"
                  style={{ '--stack-offset': `${i * 0.4}px` }}
                  aria-hidden="true"
                >
                  <PageLeft project={p} />
                </div>
              ))}
            </div>

            {/* SPINE */}
            <div className="book-spine" aria-hidden="true">
              <span>THE BUILDER'S ADVENTURES</span>
            </div>

            {/* RIGHT side — upcoming pages + cover */}
            <div className="book-side book-right">
              {/* upcoming pages stacked, next-to-flip on top */}
              {[...upcoming].reverse().map((p, i, arr) => (
                <div
                  key={p.id}
                  className="book-leaf book-leaf-upcoming"
                  style={{ '--stack-offset': `${(arr.length - 1 - i) * 0.4}px` }}
                  aria-hidden="true"
                >
                  <PageRight project={p} pageNum={projects.indexOf(p) + 1} />
                </div>
              ))}

              {/* cover — always at bottom of right stack */}
              <div className="book-leaf book-leaf-cover" aria-hidden={pageIndex > 0}>
                <CoverFace />
              </div>
            </div>

            {/* ── ACTIVE FLIPPING PAGE ───────────────────── */}
            {activePage && (
              <div
                className={`book-leaf book-leaf-active${liveAngle > 90 ? ' passed-spine' : ''}`}
                style={{ '--flip-angle': `${liveAngle}deg` }}
                aria-hidden="true"
              >
                {/* Front face — project content */}
                <div className="book-face book-face-front">
                  <PageRight project={activePage} pageNum={pageIndex + 1} />
                </div>
                {/* Back face — halftone paper */}
                <div className="book-face book-face-back">
                  <PageBack />
                </div>
              </div>
            )}

          </div>
        </div>

        {/* ── progress dots + nav arrows ───────────────── */}
        <div className="flipbook-nav" aria-label="Book navigation">
          <button
            className="fb-nav-btn"
            onClick={() => goTo(pageIndex - 1)}
            disabled={pageIndex === 0}
            aria-label="Previous page"
          >
            <CaretLeft size={18} weight="bold" />
          </button>

          <div className="fb-dots" role="tablist" aria-label="Projects">
            {projects.map((p, i) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={i < pageIndex || (i === pageIndex && flipAngle >= 90)}
                aria-label={p.name}
                className={`fb-dot${i < pageIndex ? ' read' : ''}${i === pageIndex ? ' active' : ''}`}
                onClick={() => goTo(i + 1)}
              />
            ))}
          </div>

          <button
            className="fb-nav-btn"
            onClick={() => goTo(pageIndex + 1)}
            disabled={pageIndex >= TOTAL_PAGES}
            aria-label="Next page"
          >
            <CaretRight size={18} weight="bold" />
          </button>
        </div>

        {/* ── scroll hint ───────────────────────────────── */}
        {pageIndex === 0 && flipAngle < 20 && (
          <p className="fb-scroll-hint" aria-hidden="true">
            Scroll to turn the page ↓
          </p>
        )}

        {/* ── current project label (accessible live region) ─ */}
        {activePage && (
          <div className="fb-current-label" aria-live="polite">
            <span className="fb-current-name">{activePage.name}</span>
            <span className="fb-current-cat"> · {activePage.category}</span>
          </div>
        )}
      </div>
    </section>
  )
}
