import { memo, useCallback, useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react'
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
    <div className="folio-main-panel"><img src={artwork[p.id]} alt={`Comic illustration for ${p.name}`} width="1024" height="1024" loading="eager" decoding="async" /><p>{p.kind === 'concept' ? 'An idea taking shape…' : 'Every build starts with a problem.'}</p></div>
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

// Connected strips share an edge. Each carries its own slice of the same
// full-size printed face, so text follows the curve of the paper.
function PaperStrip({ part = 0, front, back, compact }) {
  const axis = compact ? 'top' : 'left'
  const extent = compact ? 'height' : 'width'
  const slice = (offset) => ({ [axis]: `${-100 * offset}%`, [extent]: '500%' })
  return <div className="folio-strip" style={{ '--part': part }}>
    <div className="folio-strip-face"><div style={slice(part)}>{front}</div></div>
    <div className="folio-strip-face folio-back"><div style={slice(4 - part)}>{back}</div></div>
    {part < 4 && <PaperStrip part={part + 1} front={front} back={back} compact={compact} />}
  </div>
}

// Every face stays mounted. Scroll only selects prepared surfaces; no image or
// five-strip subtree is created at the moment a page starts turning.
const BookSurfaces = memo(function BookSurfaces({ compact, count }) {
  return <>
    {!compact && <div className="folio-spread">
      {projects.map((project, index) => <div key={project.id} className="folio-story-surface" data-story={index} hidden inert><StoryPage project={project} index={index} /></div>)}
      {projects.map((project, index) => <div key={project.id} className="folio-art-surface" data-art={index} hidden inert><ArtPage project={project} index={index} /></div>)}
    </div>}
    {compact && Array.from({ length: count }, (_, page) => <div key={page} className="folio-mobile-surface" data-leaf={page} hidden inert><MobilePage page={page} /></div>)}
    {Array.from({ length: count - 1 }, (_, page) => <div key={page} className="folio-turn-surface" data-turn={page} hidden aria-hidden="true" inert>
      <PaperStrip compact={compact}
        front={compact ? <MobilePage page={page} /> : <ArtPage project={projects[page]} index={page} />}
        back={compact ? null : <StoryPage project={projects[page + 1]} index={page + 1} />} />
    </div>)}
  </>
})

export default function Book3D() {
  const compact = useSyncExternalStore(subscribeCompact, getCompact, () => false)
  const count = compact ? projects.length * 2 : projects.length
  const { hash } = useLocation()
  const sectionRef = useRef(null)
  const bookRef = useRef(null)
  const [scene, setScene] = useState({ page: 0, index: 0, turning: false, open: false })
  const currentScene = useRef(scene)
  const surfacesRef = useRef([])
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })

  const targetProgress = useRef(0)
  const animatedProgress = useRef(0)
  const lastTimeRef = useRef(0)
  const isRunningRef = useRef(false)
  const animIdRef = useRef(null)

  const applyProgress = useCallback((value, force = false) => {
    const opening = clamp((value - .025) / .175)
    const chapter = clamp((value - .2) / .8) * count
    const page = Math.min(count - 1, Math.floor(chapter))
    const index = compact ? Math.floor(page / 2) : page
    const fraction = chapter - page
    const phase = page < count - 1 ? clamp((fraction - .64) / .36) : 0
    const turn = phase * phase * (3 - 2 * phase)
    const next = { page, index, turning: turn > 0 && turn < 1, open: opening > .64 }
    const changed = Object.keys(next).some(key => currentScene.current[key] !== next[key])

    if (bookRef.current) {
      // Visibility, active face, and geometry change together in this frame.
      if (force || changed) for (const surface of surfacesRef.current) {
        const kind = surface.dataset.story !== undefined ? 'story' : surface.dataset.art !== undefined ? 'art' : surface.dataset.leaf !== undefined ? 'leaf' : 'turn'
        const position = Number(surface.dataset[kind])
        const selected = kind === 'story' ? position === index : kind === 'art' ? position === Math.min(projects.length - 1, index + (next.turning ? 1 : 0)) : kind === 'leaf' ? position === Math.min(count - 1, page + (next.turning ? 1 : 0)) : position === page && next.turning
        surface.hidden = !selected
        surface.inert = kind === 'turn' || !selected || !next.open || next.turning
        surface.setAttribute('aria-hidden', String(kind === 'turn' || !selected))
        surface.classList.toggle({ story: 'folio-left', art: 'folio-right', leaf: 'folio-mobile-sheet', turn: 'folio-turn' }[kind], selected)
      }
      bookRef.current.dataset.open = String(next.open)
      bookRef.current.dataset.page = String(page)
      bookRef.current.style.setProperty('--lift', opening)
      bookRef.current.style.setProperty('--cover-visibility', opening >= 1 ? 'hidden' : 'visible')
      bookRef.current.style.setProperty('--cover-angle', `${-180 * clamp((opening - .25) / .75)}deg`)
      bookRef.current.style.setProperty('--bend', `${Math.sin(Math.PI * turn) * 9}deg`)
      bookRef.current.style.setProperty('--shade', Math.sin(Math.PI * turn))
      bookRef.current.style.setProperty('--turn-angle', `${-180 * turn}deg`)
    }
    if (changed) {
      currentScene.current = next
      setScene(next)
    }
  }, [compact, count])

  // A short, frame-rate independent catch-up follows native scroll equally in
  // holds and turns. Large jumps settle immediately instead of queuing leaves.
  const startLoop = useCallback(() => {
    if (isRunningRef.current) return
    isRunningRef.current = true
    lastTimeRef.current = performance.now()

    const step = (now) => {
      const dt = lastTimeRef.current ? Math.min((now - lastTimeRef.current) / 1000, 0.05) : 0.016
      lastTimeRef.current = now

      const target = targetProgress.current
      const current = animatedProgress.current
      const diff = target - current

      if (Math.abs(diff) < 0.0004) {
        animatedProgress.current = target
        applyProgress(target)
        isRunningRef.current = false
        animIdRef.current = null
        return
      }

      const nextProgress = Math.abs(diff) > .12 ? target : current + diff * (1 - Math.exp(-dt / .025))
      animatedProgress.current = nextProgress
      applyProgress(nextProgress)

      animIdRef.current = requestAnimationFrame(step)
    }

    animIdRef.current = requestAnimationFrame(step)
  }, [applyProgress])

  const cancelLoop = useCallback(() => {
    if (animIdRef.current) cancelAnimationFrame(animIdRef.current)
    animIdRef.current = null
    isRunningRef.current = false
  }, [])

  useLayoutEffect(() => {
    surfacesRef.current = [...bookRef.current.querySelectorAll('[data-story], [data-art], [data-leaf], [data-turn]')]
    cancelLoop()
    const initial = scrollYProgress.get()
    targetProgress.current = initial
    animatedProgress.current = initial
    applyProgress(initial, true)
    const onResize = () => {
      cancelLoop()
      const section = sectionRef.current
      const progress = clamp((window.scrollY - (section.getBoundingClientRect().top + window.scrollY)) / Math.max(1, section.offsetHeight - innerHeight))
      targetProgress.current = progress
      animatedProgress.current = progress
      applyProgress(progress, true)
    }
    window.addEventListener('resize', onResize)
    return () => { cancelLoop(); window.removeEventListener('resize', onResize) }
  }, [applyProgress, cancelLoop, scrollYProgress])

  useEffect(() => {
    const images = []
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      for (const src of Object.values(artwork)) {
        const image = new Image()
        image.src = src
        images.push(image)
        image.decode().catch(() => {})
      }
    }, { rootMargin: '100% 0px' })
    observer.observe(sectionRef.current)
    return () => {
      observer.disconnect()
      images.length = 0
    }
  }, [])

  useMotionValueEvent(scrollYProgress, 'change', (val) => {
    targetProgress.current = val
    startLoop()
  })

  useEffect(() => {
    if (hash !== '#concepts' || window.matchMedia('(max-height: 500px), (prefers-reduced-motion: reduce)').matches) return
    const frame = requestAnimationFrame(() => {
      const section = sectionRef.current
      if (section) window.scrollTo({ top: section.getBoundingClientRect().top + window.scrollY + pagePosition(compact ? 4 : 2, count) * (section.offsetHeight - innerHeight), behavior: 'instant' })
    })
    return () => cancelAnimationFrame(frame)
  }, [hash, compact, count])

  const goToPage = useCallback((index) => {
    const section = sectionRef.current
    if (!section) return
    const target = Math.max(0, Math.min(count - 1, index))
    const pos = pagePosition(target, count)
    cancelLoop()
    targetProgress.current = pos
    animatedProgress.current = pos
    applyProgress(pos)
    const start = section.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: start + pos * (section.offsetHeight - innerHeight), behavior: 'instant' })
  }, [count, applyProgress, cancelLoop])

  return <section id="work" ref={sectionRef} className="folio-section" aria-labelledby="folio-title">
    <div className="folio-sticky">
      <header className="folio-heading"><div><p>THE PROJECT ISSUE</p><h2 id="folio-title">Good work. <span>Great stories.</span></h2></div><div className="folio-browse"><Link to="/projects" className="folio-skip">Browse all projects</Link><a href="#about" className="folio-skip">Continue to experience <ArrowDown size={16} /></a></div></header>
      <div className="folio-desktop">
        <div className="folio-table" aria-hidden="true"><span className="folio-table-note">The builder’s desk</span><span className="folio-pencil" /></div>
        <div className="folio-perspective">
          <div className="folio-book" ref={bookRef} data-compact={compact}>
            <div className="folio-board" aria-hidden="true" />
            {compact && <div className="folio-rings" aria-hidden="true">
              {Array.from({ length: 7 }, (_, i) => <i key={i} />)}
            </div>}
            <div className="folio-paper-bed" aria-hidden="true" />
            <BookSurfaces compact={compact} count={count} />
            <div className="folio-gutter" aria-hidden="true" />
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
