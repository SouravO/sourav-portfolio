import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Books, Globe, Plus } from '@phosphor-icons/react'
import { projects } from '../data/portfolio'
import './ProjectsPage.css'

const art = { cyd: 'deals', crm: 'crm', notwo: 'cover', versa: 'workshop' }
const filters = [['all', 'All projects'], ['built', 'Built & live'], ['concept', 'Concepts']]

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all')
  const visible = projects.filter(p => filter === 'all' || (filter === 'built' ? p.kind !== 'concept' : p.kind === 'concept'))
  return (
    <div className="project-archive">
      <header className="archive-cover">
        <div className="archive-masthead"><span>SOURAV / THE COMPLETE COLLECTION</span><Books size={26} aria-hidden="true" /><span>PRODUCTS · SYSTEMS · POSSIBILITIES</span></div>
        <div className="archive-cover-layout">
          <div className="archive-cover-copy">
            <p className="eyebrow">FROM THE BUILDER’S DESK</p>
            <h1>Every project.<br /><span>A new world.</span></h1>
            <p>Commerce, startup operations, skin technology, and publishing. Explore what I’ve built, the systems I’ve shaped, and the ideas still on the drawing board.</p>
            <a href="#collection" className="archive-cover-link">Open the collection</a>
          </div>
          <div className="archive-cover-art">
            <img src="/illustrations/workshop.webp" alt="Comic illustration of Sourav building at his desk" width="1024" height="1024" />
            <p className="archive-art-caption">Different problems. The same curiosity.</p>
          </div>
        </div>
        <p className="archive-printer-line">4 PROJECT STORIES <span>REAL BUILDS & CLEARLY LABELED CONCEPTS</span></p>
      </header>

      <section id="collection" className="archive-collection" aria-labelledby="collection-title">
        <div className="archive-collection-heading"><div><p className="eyebrow">PICK YOUR NEXT READ</p><h2 id="collection-title">The project shelf.</h2></div><p>Open a story. Look under the hood.</p></div>
        <div className="archive-controls">
          <div className="archive-filters" role="group" aria-label="Filter projects">
            {filters.map(([value, label]) => <button key={value} type="button" aria-pressed={filter === value} onClick={() => setFilter(value)}>{label}</button>)}
          </div>
          <p role="status" className="archive-count">{visible.length} {visible.length === 1 ? 'story' : 'stories'} on the shelf</p>
        </div>
        <div className="archive-shelf">
          {visible.map(p => <article className={`archive-issue archive-issue-${p.id}`} key={p.id}>
            <div className="archive-issue-art">
              <img src={`/illustrations/${art[p.id]}.webp`} alt="" width="1024" height="1024" loading="lazy" />
              <p className="archive-category">{p.category}</p>
              <p className="archive-status">{p.status}</p>
            </div>
            <div className="archive-issue-copy">
              <h3>{p.name}</h3><p className="archive-tagline">{p.summary}</p><p className="archive-description">{p.description}</p>
              <dl><div><dt>My part</dt><dd>{p.role || 'Product planning & technical architecture'}</dd></div><div><dt>{p.kind === 'concept' ? 'Exploring' : 'Working with'}</dt><dd>{p.stack.join(' / ')}</dd></div></dl>
              <details className="archive-notes"><summary>{p.kind === 'concept' ? 'Inside the concept' : 'Inside the build'}<Plus size={18} aria-hidden="true" /></summary>
                <div>{p.contribution && <p>{p.contribution}</p>}<p className="archive-notes-label">{p.kind === 'concept' ? 'Proposed workflow' : 'Built scope'}</p><ul>{(p.capabilities || p.flow).map(item => <li key={item}>{item}</li>)}</ul><p>{p.planned || p.perspectives.Engineering}</p></div>
              </details>
              <div className="archive-issue-links">
                {p.slug && <Link to={`/work/${p.slug}`}>Read {p.short} case study</Link>}
                {p.url && <a href={p.url} target="_blank" rel="noreferrer">{p.kind === 'concept' ? 'Visit related site' : 'Visit live product'}<Globe size={18} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>}
              </div>
            </div>
          </article>)}
        </div>
        <p className="archive-art-note">Illustrated project worlds, not product screenshots. Concept workflows describe proposed capabilities.</p>
      </section>
      <section className="archive-end" aria-labelledby="archive-end-title"><p className="eyebrow">ROOM FOR ANOTHER STORY</p><h2 id="archive-end-title">What should we build next?</h2><p>Hiring an engineer, growing a technical team, or shaping a product? Let’s talk about what you have in mind.</p><Link to="/#contact" className="button primary">Start a conversation</Link><Link to="/" className="archive-home">Back to Sourav’s story</Link></section>
    </div>
  )
}
