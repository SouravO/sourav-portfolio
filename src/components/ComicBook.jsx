import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Globe, ArrowRight } from '@phosphor-icons/react'
import { projects } from '../data/portfolio'
import '../comic-book.css'

// ── Illustration map ──────────────────────────────────────────
const artMap = {
  cyd:   { src: '/illustrations/deals.webp',    caption: 'DISCOVERY → DESTINATION' },
  crm:   { src: '/illustrations/crm.webp',      caption: 'PEOPLE → EXECUTION'       },
  notwo: { src: '/illustrations/cover.webp',    caption: 'SKIN SCIENCE → SOFTWARE'  },
  versa: { src: '/illustrations/workshop.webp', caption: 'PURCHASE → PROTECTED READ' },
}

// Per-project accent colors (CSS custom property injected on the page element)
const accentMap = {
  cyd:   { h: '38',  s: '90%', l: '52%' }, // amber
  crm:   { h: '174', s: '55%', l: '38%' }, // teal
  notwo: { h: '340', s: '65%', l: '48%' }, // rose
  versa: { h: '262', s: '55%', l: '50%' }, // violet
}

// Issue cover captions
const issueCaption = [
  { word: 'FOUR', label: 'projects' },
  { word: 'TWO',  label: 'live builds' },
  { word: 'ONE',  label: 'engineer' },
]

// ── useFlipReveal — IntersectionObserver page-flip on scroll ──
function useFlipReveal(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible')
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.08 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])
}

// ── IssueCover — dramatic splash page ────────────────────────
function IssueCover() {
  const ref = useRef(null)
  useFlipReveal(ref)
  return (
    <div className="cb-issue-cover cb-page" ref={ref}>
      <div className="cb-cover-art" aria-hidden="true">
        <img
          src="/illustrations/cover.webp"
          alt=""
          width="1024"
          height="1024"
          loading="lazy"
        />
        <div className="cb-halftone" aria-hidden="true" />
        <div className="cb-cover-corner" aria-hidden="true">
          <span>THE BUILDER'S</span>
          <span>ADVENTURES</span>
        </div>
      </div>

      <div className="cb-cover-copy">
        <p className="cb-publisher" aria-label="Issue">
          <span className="cb-issue-num">ISSUE #1</span>
          <span className="cb-issue-year">2024</span>
        </p>
        <h2 className="cb-cover-title">
          Selected<br />
          <span>Work.</span>
        </h2>
        <p className="cb-cover-deck">
          Product engineering and technical leadership — from the first idea to the working application.
        </p>
        <div className="cb-cover-stats" aria-label="At a glance">
          {issueCaption.map(({ word, label }) => (
            <div key={label} className="cb-stat">
              <strong>{word}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="cb-action-caption cb-cover-caption" aria-hidden="true">
          PRODUCT ENGINEERING / CASE STUDIES
        </div>
      </div>
    </div>
  )
}

// ── ComicPage — one page per project ─────────────────────────
function ComicPage({ project: p, pageNum }) {
  const ref = useRef(null)
  useFlipReveal(ref)
  const art    = artMap[p.id]  || artMap.versa
  const accent = accentMap[p.id] || accentMap.versa
  const isConcept = p.kind === 'concept'

  const pageStyle = {
    '--page-accent-h': accent.h,
    '--page-accent-s': accent.s,
    '--page-accent-l': accent.l,
  }

  return (
    <article
      ref={ref}
      className={`cb-page cb-project-page cb-project-${p.id}${isConcept ? ' cb-is-concept' : ''}`}
      style={pageStyle}
      aria-label={`Project: ${p.name}`}
    >
      {/* Page number gutter */}
      <div className="cb-page-gutter" aria-hidden="true">
        <span className="cb-page-num">{pageNum}</span>
        <span className="cb-page-spine" />
      </div>

      {/* Panel 1 — Art */}
      <div className="cb-panel cb-panel-art" aria-hidden="true">
        <img
          src={art.src}
          alt=""
          width="1024"
          height="1024"
          loading="lazy"
        />
        <div className="cb-halftone" />
        <div className="cb-panel-label">{art.caption}</div>
        {isConcept && (
          <div className="cb-concept-stamp" aria-label="Concept project">
            COMING<br />NEXT<br />ISSUE
          </div>
        )}
      </div>

      {/* Panel 2 — Story */}
      <div className="cb-panel cb-panel-story">
        <div className="cb-panel-inner">
          <p className="cb-eyebrow">{p.category}</p>
          <h3 className="cb-project-name">{p.name}</h3>

          {/* Speech bubble — hook quote */}
          <div className="cb-speech" role="note" aria-label="Project hook">
            <p>{p.summary}</p>
          </div>

          <p className="cb-description">{p.description}</p>

          {/* Role callout */}
          {p.role && (
            <div className="cb-role-block">
              <span className="cb-role-label">MY ROLE</span>
              <span className="cb-role-value">{p.role}</span>
            </div>
          )}

          {/* Stack tags */}
          <div className="cb-stack" aria-label="Tech stack">
            {p.stack.map((item) => (
              <span key={item} className="cb-tag">{item}</span>
            ))}
          </div>

          {/* Action strip — status */}
          <div className="cb-action-caption" aria-label={`Status: ${p.status}`}>
            {p.status}
          </div>
        </div>
      </div>

      {/* Panel 3 — CTA */}
      <div className="cb-panel cb-panel-cta">
        <div className="cb-panel-inner">
          {isConcept ? (
            <>
              <p className="cb-concept-note">
                Early-stage concept and architecture planning. Clearly marked as a future build.
              </p>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="cb-btn cb-btn-secondary"
                >
                  Visit product site <Globe size={15} />
                </a>
              )}
              <div className="cb-next-issue-teaser" aria-hidden="true">
                MORE IN A<br />FUTURE ISSUE…
              </div>
            </>
          ) : (
            <>
              <p className="cb-cta-prompt">Explore the full story behind this build.</p>
              <Link
                to={`/work/${p.slug}`}
                className="cb-btn cb-btn-primary"
                aria-label={`Read case study for ${p.name}`}
              >
                Read case study <ArrowRight size={16} weight="bold" />
              </Link>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="cb-btn cb-btn-secondary"
                >
                  Visit live product <Globe size={15} />
                </a>
              )}

              {/* Flow tags */}
              {p.flow && (
                <div className="cb-flow" aria-label="Product flow">
                  {p.flow.map((step, i) => (
                    <span key={step} className="cb-flow-step">
                      {step}
                      {i < p.flow.length - 1 && (
                        <span className="cb-flow-arrow" aria-hidden="true">→</span>
                      )}
                    </span>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  )
}

// ── BackCover — end of issue ──────────────────────────────────
function BackCover() {
  const ref = useRef(null)
  useFlipReveal(ref)
  return (
    <div className="cb-back-cover cb-page" ref={ref} aria-label="End of issue">
      <div className="cb-back-inner">
        <div className="cb-action-caption cb-back-caption" aria-hidden="true">
          END OF ISSUE #1
        </div>
        <h3 className="cb-back-title">The adventure<br /><span>continues…</span></h3>
        <p className="cb-back-deck">
          Two concepts in development. More builds in progress. The next chapter starts with a conversation.
        </p>
        <Link to="/#workspace" className="cb-btn cb-btn-primary">
          Explore the workshop
        </Link>
        <Link to="/#contact" className="cb-btn cb-btn-ghost">
          Let's talk
        </Link>
      </div>
      <div className="cb-back-art" aria-hidden="true">
        <img
          src="/illustrations/workshop.webp"
          alt=""
          width="1024"
          height="1024"
          loading="lazy"
        />
        <div className="cb-halftone" />
      </div>
    </div>
  )
}

// ── ComicBook — main export ───────────────────────────────────
export default function ComicBook() {
  return (
    <section id="work" className="cb-section" aria-label="Selected work">
      <IssueCover />
      {projects.map((p, i) => (
        <ComicPage key={p.id} project={p} pageNum={i + 1} />
      ))}
      <BackCover />
    </section>
  )
}
