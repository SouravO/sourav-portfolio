import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { useScroll, useMotionValueEvent } from 'motion/react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowDown, ArrowRight, CaretLeft, CaretRight, Globe } from '@phosphor-icons/react'
import { projects } from '../data/portfolio'
import '../book3d.css'

const artwork = {
  cyd: '/illustrations/deals.webp', crm: '/illustrations/crm.webp',
  notwo: '/illustrations/cover.webp', versa: '/illustrations/workshop.webp',
}
const clamp = (n) => Math.max(0, Math.min(1, n))
const compactQuery = '(max-width: 1000px)'
const subscribeCompact = (callback) => {
  const query = window.matchMedia(compactQuery)
  query.addEventListener('change', callback)
  return () => query.removeEventListener('change', callback)
}
const getCompact = () => window.matchMedia(compactQuery).matches
// Cover: first 20%. Each page holds for 75% of its interval before turning.
const pagePosition = (index, count) => .2 + (index + .15) * .8 / count

function StoryPage({ project: p, index }) {
  return <div className="folio-page folio-story">
    <div className="folio-running"><span>The builder’s adventures</span><span>Chapter {String(index + 1).padStart(2, '0')}</span></div>
    <p className="folio-category">{p.category}</p>
    <h3>{p.name}</h3>
    <p className="folio-quote">{p.summary}</p>
    <p className="folio-description">{p.description}</p>
    <div className="folio-role"><span>My part in the story</span><p>{p.role || 'Product planning & technical architecture'}</p></div>
    <p className="folio-stack">{p.stack.join(' / ')}</p>
    <div className="folio-actions">
      {p.slug && <Link to={`/work/${p.slug}`} aria-label={`Read case study: ${p.name}`}>Read case study <ArrowRight size={17} weight="bold" /></Link>}
      {p.url && <a href={p.url} target="_blank" rel="noreferrer" aria-label={`Visit site: ${p.name}`}>Visit site <Globe size={17} /></a>}
    </div>
    <div className="folio-footer"><strong>{p.status}</strong><span>{index * 2 + 1}</span></div>
  </div>
}

function ArtPage({ project: p, index }) {
  return <div className={`folio-page folio-art folio-art-${p.id}`}>
    <div className="folio-running"><span>{p.kind === 'concept' ? 'From the sketchbook' : 'Inside the build'}</span><span>Sourav / Selected work</span></div>
    <div className="folio-main-panel"><img src={artwork[p.id]} alt={`Comic illustration for ${p.name}`} width="1024" height="1024" loading="lazy" /><p>{p.kind === 'concept' ? 'An idea taking shape…' : 'Every build starts with a problem.'}</p></div>
    <div className="folio-small-panels">
      <div><span>{p.kind === 'concept' ? 'The concept' : 'The challenge'}</span><p>{p.flow[0]}</p></div>
      <div><span>{p.kind === 'concept' ? 'The proposed direction' : 'The connection'}</span><p>{p.flow.at(-1)}</p><ArrowRight size={26} weight="bold" aria-hidden="true" /></div>
    </div>
    <p className="folio-art-note">{p.kind === 'concept' ? 'Planning & architecture only. These capabilities are proposed, not shipped.' : 'An illustrated explanation of the product — not a product screenshot.'}</p>
    <div className="folio-footer"><span>To the next chapter…</span><span>{index * 2 + 2}</span></div>
  </div>
}

function Cover() {
  return <div className="folio-cover-art">
    <div className="folio-cover-top"><span>Sourav presents</span><span>Selected work</span></div>
    <h3>The builder’s<br /><em>adventures</em></h3>
    <img src="/illustrations/workshop.webp" alt="" width="1024" height="1024" />
    <p className="folio-cover-burst">Ideas.<br />Code.<br />Action!</p>
    <p className="folio-cover-bottom">Four project stories. One curious builder.</p>
  </div>
}

function MobilePage({ page }) {
  const index = Math.floor(page / 2)
  return page % 2 === 0
    ? <StoryPage project={projects[index]} index={index} />
    : <ArtPage project={projects[index]} index={index} />
}

export default function Book3D() {
  const compact = useSyncExternalStore(subscribeCompact, getCompact, () => false)
  const count = compact ? projects.length * 2 : projects.length
  const { hash } = useLocation()
  const sectionRef = useRef(null)
  const bookRef = useRef(null)
  const [scene, setScene] = useState({ page: 0, index: 0, turning: false, half: false, open: false })
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })

  const updateScene = useCallback((value) => {
    const opening = clamp((value - .025) / .175)
    const chapter = clamp((value - .2) / .8) * count
    const page = Math.min(count - 1, Math.floor(chapter))
    const index = compact ? Math.floor(page / 2) : page
    const fraction = chapter - page
    const turn = page < count - 1 ? clamp((fraction - .75) / .25) : 0
    if (bookRef.current) {
      bookRef.current.style.setProperty('--lift', opening)
      bookRef.current.style.setProperty('--cover-visibility', opening >= 1 ? 'hidden' : 'visible')
      bookRef.current.style.setProperty('--cover-angle', `${-180 * clamp((opening - .25) / .75)}deg`)
      bookRef.current.style.setProperty('--turn-angle', `${-180 * turn}deg`)
    }
    const next = { page, index, turning: turn > 0 && turn < 1, half: turn >= .5, open: opening > .64 }
    setScene(prev => Object.keys(next).every(key => prev[key] === next[key]) ? prev : next)
  }, [compact, count])
  useMotionValueEvent(scrollYProgress, 'change', updateScene)
  useEffect(() => {
    const frame = requestAnimationFrame(() => updateScene(scrollYProgress.get()))
    return () => cancelAnimationFrame(frame)
  }, [scrollYProgress, updateScene])

  useEffect(() => {
    if (hash !== '#concepts' || window.matchMedia('(max-height: 500px), (prefers-reduced-motion: reduce)').matches) return
    const frame = requestAnimationFrame(() => {
      const section = sectionRef.current
      if (section) window.scrollTo({ top: section.getBoundingClientRect().top + window.scrollY + pagePosition(compact ? 4 : 2, count) * (section.offsetHeight - innerHeight), behavior: 'instant' })
    })
    return () => cancelAnimationFrame(frame)
  }, [hash, compact, count])

  function goToPage(index) {
    const section = sectionRef.current
    if (!section) return
    const target = Math.max(0, Math.min(count - 1, index))
    const start = section.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: start + pagePosition(target, count) * (section.offsetHeight - innerHeight), behavior: 'instant' })
  }

  const turning = scene.turning && (compact ? scene.page < count - 1 : scene.index < projects.length - 1)
  const left = Math.min(3, scene.index + (turning && scene.half ? 1 : 0))
  const right = Math.min(3, scene.index + (turning ? 1 : 0))
  return <section id="work" ref={sectionRef} className="folio-section" aria-labelledby="folio-title">
    <div className="folio-sticky">
      <header className="folio-heading"><div><p>THE PROJECT ISSUE</p><h2 id="folio-title">Good work. <span>Great stories.</span></h2></div><a href="#about" className="folio-skip">Continue to experience <ArrowDown size={16} /></a></header>
      <div className="folio-desktop">
        <div className="folio-table" aria-hidden="true"><span className="folio-table-note">The builder’s desk</span><span className="folio-pencil" /></div>
        <div className="folio-perspective">
          <div className="folio-book" ref={bookRef} data-open={scene.open} data-page={scene.page} data-compact={compact}>
            <div className="folio-board" aria-hidden="true" />
            {compact && <div className="folio-rings" aria-hidden="true">
              {Array.from({ length: 7 }, (_, i) => <i key={i} />)}
            </div>}
            <div className="folio-paper-bed" aria-hidden="true" />
            {!compact && <div className="folio-spread">
              <div className="folio-left" inert={!scene.open || turning}><StoryPage project={projects[left]} index={left} /></div>
              <div className="folio-right"><ArtPage project={projects[right]} index={right} /></div>
            </div>}
            {compact && <div className="folio-mobile-sheet" inert={!scene.open || turning}><MobilePage page={Math.min(count - 1, scene.page + (turning ? 1 : 0))} /></div>}
            <div className="folio-gutter" aria-hidden="true" />
            {turning && <div className="folio-turn" aria-hidden="true" inert>
              <div className="folio-face folio-front">{compact ? <MobilePage page={scene.page} /> : <ArtPage project={projects[scene.index]} index={scene.index} />}</div>
              <div className="folio-face folio-back">{compact ? <MobilePage page={scene.page + 1} /> : <StoryPage project={projects[scene.index + 1]} index={scene.index + 1} />}</div>
            </div>}
            <div className="folio-cover" aria-hidden="true" inert><div className="folio-face folio-front"><Cover /></div><div className="folio-face folio-back"><StoryPage project={projects[0]} index={0} /></div></div>
          </div>
        </div>
        <nav className="folio-nav" aria-label="Project book chapters">
          <button onClick={() => goToPage(scene.page - 1)} disabled={scene.page === 0} aria-label={compact ? "Previous page" : "Previous project"}><CaretLeft size={18} /></button>
          {projects.map((p, i) => <button key={p.id} onClick={() => goToPage(compact ? i * 2 : i)} aria-current={scene.open && scene.index === i ? 'step' : undefined}><span>{String(i + 1).padStart(2, '0')}</span><span className="folio-chapter-name">{p.short || p.name}</span></button>)}
          <button onClick={() => goToPage(scene.open ? scene.page + 1 : 0)} disabled={scene.page === count - 1} aria-label={scene.open ? (compact ? 'Next page' : 'Next project') : 'Open project book'}><CaretRight size={18} /></button>
        </nav>
        <p className="folio-instruction" role="status">{scene.open ? `${projects[scene.index].name}${compact ? ` · ${scene.page % 2 ? 'Illustration' : 'Story'} · ${scene.page + 1}/${count}` : ' · Scroll to turn the page, or choose a chapter'}` : 'Scroll to open the book, or choose a chapter'}</p>
      </div>
      <div className="folio-reading">
        {projects.map((p, i) => <article key={p.id} className="folio-reading-spread" id={p.id === 'notwo' ? 'concepts' : undefined}><StoryPage project={p} index={i} /><ArtPage project={p} index={i} /></article>)}
      </div>
    </div>
  </section>
}
