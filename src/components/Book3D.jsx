import { useEffect, useRef, useState } from 'react'
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
// Opening ends at .2. Each spread holds for .15, then turns for .05.
const chapterPosition = (index) => .23 + index * .2

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

export default function Book3D() {
  const { hash } = useLocation()
  const sectionRef = useRef(null)
  const bookRef = useRef(null)
  const [scene, setScene] = useState({ index: 0, turning: false, half: false, open: false })
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    const opening = clamp((value - .025) / .175)
    const chapter = clamp((value - .2) / .8) * 4
    const index = Math.min(3, Math.floor(chapter))
    const fraction = chapter - index
    const turn = index < 3 ? clamp((fraction - .75) / .25) : 0
    if (bookRef.current) {
      bookRef.current.style.setProperty('--lift', opening)
      bookRef.current.style.setProperty('--cover-visibility', opening >= 1 ? 'hidden' : 'visible')
      bookRef.current.style.setProperty('--cover-angle', `${-180 * clamp((opening - .25) / .75)}deg`)
      bookRef.current.style.setProperty('--turn-angle', `${-180 * turn}deg`)
    }
    const next = { index, turning: turn > 0 && turn < 1, half: turn >= .5, open: opening > .64 }
    setScene(prev => Object.keys(next).every(key => prev[key] === next[key]) ? prev : next)
  })

  useEffect(() => {
    if (hash !== '#concepts' || window.matchMedia('(max-width: 1000px), (max-height: 600px), (prefers-reduced-motion: reduce)').matches) return
    const frame = requestAnimationFrame(() => {
      const section = sectionRef.current
      if (section) window.scrollTo({ top: section.getBoundingClientRect().top + window.scrollY + chapterPosition(2) * (section.offsetHeight - innerHeight), behavior: 'instant' })
    })
    return () => cancelAnimationFrame(frame)
  }, [hash])

  function goTo(index) {
    const section = sectionRef.current
    if (!section) return
    const target = Math.max(0, Math.min(3, index))
    const start = section.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: start + chapterPosition(target) * (section.offsetHeight - innerHeight), behavior: 'instant' })
  }

  const left = Math.min(3, scene.index + (scene.turning && scene.half ? 1 : 0))
  const right = Math.min(3, scene.index + (scene.turning ? 1 : 0))
  return <section id="work" ref={sectionRef} className="folio-section" aria-labelledby="folio-title">
    <div className="folio-sticky">
      <header className="folio-heading"><div><p>THE PROJECT ISSUE</p><h2 id="folio-title">Good work. <span>Great stories.</span></h2></div><a href="#about" className="folio-skip">Continue to experience <ArrowDown size={16} /></a></header>
      <div className="folio-desktop">
        <div className="folio-table" aria-hidden="true"><span className="folio-table-note">The builder’s desk</span><span className="folio-pencil" /></div>
        <div className="folio-perspective">
          <div className="folio-book" ref={bookRef} data-open={scene.open}>
            <div className="folio-board" aria-hidden="true" />
            <div className="folio-spread">
              <div className="folio-left" inert={!scene.open || scene.turning}><StoryPage project={projects[left]} index={left} /></div>
              <div className="folio-right"><ArtPage project={projects[right]} index={right} /></div>
            </div>
            <div className="folio-gutter" aria-hidden="true" />
            {scene.turning && <div className="folio-turn" aria-hidden="true" inert>
              <div className="folio-face folio-front"><ArtPage project={projects[scene.index]} index={scene.index} /></div>
              <div className="folio-face folio-back"><StoryPage project={projects[scene.index + 1]} index={scene.index + 1} /></div>
            </div>}
            <div className="folio-cover" aria-hidden="true" inert><div className="folio-face folio-front"><Cover /></div><div className="folio-face folio-back"><StoryPage project={projects[0]} index={0} /></div></div>
          </div>
        </div>
        <nav className="folio-nav" aria-label="Project book chapters">
          <button onClick={() => goTo(scene.index - 1)} disabled={scene.index === 0} aria-label="Previous project"><CaretLeft size={18} /></button>
          {projects.map((p, i) => <button key={p.id} onClick={() => goTo(i)} aria-current={scene.open && scene.index === i ? 'step' : undefined}><span>{String(i + 1).padStart(2, '0')}</span>{p.short || p.name}</button>)}
          <button onClick={() => goTo(scene.open ? scene.index + 1 : 0)} disabled={scene.index === 3} aria-label={scene.open ? 'Next project' : 'Open project book'}><CaretRight size={18} /></button>
        </nav>
        <p className="folio-instruction" role="status">{scene.open ? `${projects[scene.index].name} · Scroll to turn the page, or choose a chapter` : 'Scroll to open the book, or choose a chapter'}</p>
      </div>
      <div className="folio-reading">
        {projects.map((p, i) => <article key={p.id} className="folio-reading-spread" id={p.id === 'notwo' ? 'concepts' : undefined}><StoryPage project={p} index={i} /><ArtPage project={p} index={i} /></article>)}
      </div>
    </div>
  </section>
}
