import { lazy, Suspense, useEffect, useState } from 'react'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import {
  Asterisk,
  Cube,
  EnvelopeSimple,
  Code,
  TreeStructure,
  Plus,
  Minus,
  Copy,
  Check,
  List,
  X,
  Globe,
  ChatCircleText,
} from '@phosphor-icons/react'
import { projects, profile, skills, journey } from './data/portfolio'
import AdventureHero from './components/AdventureHero'
import FlowDiagram from './components/FlowDiagram'
import ProductMap from './components/ProductMap'
import Reveal from './components/Reveal'
import MarvelIntro from './components/MarvelIntro'
import ViceCityRadio from './components/ViceCityRadio'
import './App.css'
import './comic.css'
import './work.css'
import './intro.css'
import './radio.css'
const Workspace = lazy(() => import('./components/Workspace'))

function RouteEffects() {
  const { pathname, hash, search } = useLocation()
  useEffect(() => {
    const project = projects.find((p) =>
      pathname.endsWith(p.slug || '__none__'),
    )
    document.title = project
      ? `${project.name} · Sourav O`
      : 'Sourav O · Engineer & Product Builder'
    document.querySelector('meta[name="description"]').content = project
      ? project.description
      : 'Sourav O is a full-stack software engineer, technical lead, and product builder. Explore real projects, architecture, and an interactive AI workspace.'
    const id = setTimeout(() => {
      if (hash) {
        const target = document.getElementById(hash.slice(1))
        if (target) {
          target.scrollIntoView()
          target.setAttribute('tabindex', '-1')
          target.focus({ preventScroll: true })
        }
      } else window.scrollTo({ top: 0, behavior: 'instant' })
    }, 40)
    return () => clearTimeout(id)
  }, [pathname, hash, search])
  return null
}

function Header({ onReplayIntro }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => {
    if (!open) return
    function key(event) {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', key)
    return () => window.removeEventListener('keydown', key)
  }, [open])
  return (
    <header className="header">
      <Link
        to="/"
        className="wordmark"
        onClick={() => setOpen(false)}
      >
        Sourav O<span className="wordmark-edition" aria-hidden="true">THE BUILDER’S ADVENTURES</span>
        <span className="wordmark-symbol">
          <Asterisk size={24} weight="bold" />
        </span>
      </Link>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">
        {[
          ['Work', '/#work'],
          ['Experience', '/#about'],
          ['Workspace', '/#workspace'],
        ].map(([title, href]) => (
          <Link
            key={title}
            to={href}
            onClick={() => setOpen(false)}
            aria-current={
              location.hash === href.slice(1) ? 'location' : undefined
            }
          >
            {title}
          </Link>
        ))}
        {onReplayIntro && (
          <button
            type="button"
            className="header-intro-pill"
            onClick={() => {
              setOpen(false)
              onReplayIntro()
            }}
          >
            🎬 INTRO
          </button>
        )}
        <Link
          to="/#contact"
          className="nav-contact"
          onClick={() => setOpen(false)}
        >
          Let’s talk <EnvelopeSimple size={16} />
        </Link>
      </nav>
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        {open ? <X size={24} /> : <List size={24} />}
      </button>
    </header>
  )
}

function Work() {
  const [expanded, setExpanded] = useState(null)
  return (
    <section id="work" className="section work-section">
      <Reveal>
        <div className="section-heading">
          <p className="eyebrow">PRODUCT ENGINEERING / CASE STUDIES</p>
          <h2>Selected <span>work.</span></h2>
          <p>Two different problems. Product thinking and engineering through the whole build.</p>
        </div>
      </Reveal>
      <div className="featured-projects work-features">
        {projects.slice(0, 2).map((p) => (
          <article className={`work-feature project-feature-${p.id}`} key={p.id}>
            <div className="work-story project-info">
              <div className="work-meta"><span>{p.category}</span><span className="work-status">{p.status}</span></div>
              <h3>{p.name}</h3>
              <p className="work-hook">{p.summary}</p>
              <p className="work-description">{p.description}</p>
              <dl className="work-role"><dt>My contribution</dt><dd>{p.role}</dd></dl>
              <div className="work-stack">{p.stack.map(item => <span key={item}>{item}</span>)}</div>
              <div className="work-actions">
                <Link className="work-read" to={`/work/${p.slug}`} aria-label={`Read case study for ${p.name}`}>Read case study <Plus size={19} /></Link>
                {p.url ? <a className="work-live" href={p.url} target="_blank" rel="noreferrer">Visit live product <Globe size={16} /></a> : <span className="work-internal">Built for internal use</span>}
              </div>
            </div>
            <div className="work-explainer"><div className="work-art-stamp" aria-hidden="true"><img src={`/illustrations/${p.id === 'cyd' ? 'deals' : 'crm'}.webp`} alt="" width="1024" height="1024" loading="lazy" /><span>{p.id === 'cyd' ? 'DISCOVERY → DESTINATION' : 'PEOPLE → EXECUTION'}</span></div><ProductMap project={p} /></div>
          </article>
        ))}
      </div>
      <div className="concepts" id="concepts">
        <div className="concepts-heading">
          <h3>On the drawing board.</h3>
          <span>Early ideas, clearly marked as planning and concepts.</span>
        </div>
        {projects.slice(2).map((p) => (
          <div className="concept-row" key={p.id}>
            <button
              aria-expanded={expanded === p.id}
              aria-controls={`concept-${p.id}`}
              onClick={() => setExpanded(expanded === p.id ? null : p.id)}
            >
              <span className="concept-name">{p.name}</span>
              <span className="concept-category">{p.category}</span>
              <span className="concept-status">{p.status}</span>
              {expanded === p.id ? <Minus size={21} /> : <Plus size={21} />}
            </button>
            {expanded === p.id && (
              <div id={`concept-${p.id}`} className="concept-details">
                <p>{p.description}</p>
                <FlowDiagram project={p} compact />
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-link"
                  >
                    Visit product website <Globe size={16} />
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section about-section">
      <Reveal className="about-statement">
        <p className="eyebrow">EXPERIENCE / THE PERSON BEHIND THE BUILDS</p>
        <h2>
          Engineer. Technical lead.
          <br />
          <span>Product-minded builder.</span>
        </h2>
        <p>{profile.bio}</p>
        <p className="experience-context">At Day One Venture Studio, my work has included technical leadership, startup product planning, and the architecture of internal systems.</p>
        <Link to="/#contact" className="text-link experience-contact">Talk through a product idea <EnvelopeSimple size={17} /></Link>
        <div className="about-facts">
          <div>
            <strong>3+ years</strong>
            <span>Building software</span>
          </div>
          <div>
            <strong>Full stack</strong>
            <span>From interface to infrastructure</span>
          </div>
        </div>
      </Reveal>
      <div className="journey">
        {[journey[2], journey[1], journey[3], journey[0]].map((item, i) => (
          <Reveal className="journey-item" key={item.label} delay={i * 0.04}>
            <span className="journey-mark" aria-hidden="true" />
            <p className="journey-label">{item.label}</p>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Toolkit() {
  return (
    <section id="toolkit" className="section toolkit-section">
      <Reveal>
        <p className="eyebrow">THE STACK / TOOLS I BUILD WITH</p>
        <h2>From interface <span>to infrastructure.</span></h2>
        <p className="toolkit-intro">React and Next.js on the screen. Node.js and Supabase behind it. Architecture and product thinking to connect them.</p>
      </Reveal>
      <div className="toolkit-grid">
        {skills.map((group, i) => (
          <Reveal key={group.name} delay={i * 0.07}>
            <div className="toolkit-icon">
              {i === 0 ? (
                <Code size={25} />
              ) : i === 1 ? (
                <TreeStructure size={25} />
              ) : (
                <Cube size={25} />
              )}
            </div>
            <h3>{group.name}</h3>
            <p>{group.description}</p>
            <div className="skill-list">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)
  useEffect(() => {
    if (!copied) return
    const id = setTimeout(() => setCopied(false), 2500)
    return () => clearTimeout(id)
  }, [copied])
  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setCopyError(false)
    } catch {
      setCopyError(true)
    }
  }
  return (
    <section id="contact" className="contact-section">
      <picture className="contact-picture" aria-hidden="true"><source media="(max-width: 600px)" srcSet="/illustrations/finale-mobile.webp" /><img src="/illustrations/finale.webp" alt="" width="1536" height="1024" loading="lazy" /></picture>
      <Reveal>
        <h2>To be continued…</h2>
        <p className="contact-subtitle">Your idea. Our next chapter.</p>
      </Reveal>
      <div className="contact-bottom">
        <p>
          Hiring, building a product, or looking for a technical collaborator? Let’s start a conversation.
        </p>
        <a className="button primary contact-cta" href={`mailto:${profile.email}`}>Let’s talk</a>
        <div className="email-group">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <button
            onClick={copy}
            aria-label={copied ? 'Email copied' : 'Copy email address'}
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
          </button>
          <span className="copy-status" role="status">
            {copied
              ? 'Copied'
              : copyError
                ? 'Please copy the email manually.'
                : ''}
          </span>
        </div>
      </div>
      <p className="caption finale-caption">The next adventure starts with a hello.</p>
    </section>
  )
}
function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="footer-name">
        Sourav O <Asterisk size={14} />
      </Link>
      <span>Words, code & a little comic-book magic. Made in India.</span>
      <a href="#top">Back to top</a>
    </footer>
  )
}

function Home({ onPlayIntro }) {
  const [, setActive] = useState(1)
  const { search, key: entryKey } = useLocation()
  const workspaceMode = new URLSearchParams(search).get('mode') === 'chat' ? 'chat' : 'explore'
  return <>
    <AdventureHero onPlayIntro={onPlayIntro} />
    <div className="profile-evidence" aria-label="Experience at a glance">
      <div><strong>3+ years</strong><span>Building software</span></div>
      <div><strong>Full stack</strong><span>Interfaces, APIs & data</span></div>
      <div><strong>Technical leadership</strong><span>Day One Venture Studio</span></div>
    </div>
    <Work />
    <About />
    <Toolkit />
    <aside id="approach" className="build-note"><p className="eyebrow">MY APPROACH</p><p>Understand the workflow. Connect the system. Build, review, and improve.</p><Link to="/#workspace" className="text-link">Explore a technical perspective <Plus size={17} /></Link></aside>
    <section id="workspace" className="section workspace-section">
      <div className="workshop-spread">
        <Reveal className="workshop-portrait">
          <p className="caption meanwhile">Meanwhile, behind the builds…</p>
          <img src="/illustrations/workshop.webp" alt="Sourav thinking through a product at his laptop in an illustrated workshop" width="1024" height="1024" loading="lazy" />
          <div className="portrait-caption"><h2>Curiosity is my <span>superpower.</span></h2><p>Explore the decisions behind a build, from the product problem to the engineering.</p><Link to="/?mode=chat#workspace" className="text-link">Ask about my work <ChatCircleText size={18} /></Link></div>
        </Reveal>
        <div className="workshop-desk">
          <Reveal><div className="section-heading"><p className="eyebrow">GO DEEPER / EXPLORE OR ASK</p><h2>The <span>workshop.</span></h2><p>Choose a project and a perspective, try a terminal command, or ask about my experience.</p></div></Reveal>
          <Suspense fallback={<div className="workspace-loading">Opening the workspace…</div>}><Workspace key={`${workspaceMode}-${entryKey}`} initialMode={workspaceMode} onPerspectiveChange={setActive} /></Suspense>
        </div>
      </div>
    </section>
    <Contact />
  </>
}

function CaseStudy({ id }) {
  const p = projects.find((project) => project.id === id)
  const next = projects.find((project) => project.slug && project.id !== id)
  const chapters = [['challenge', 'The challenge'], ['contribution', 'My contribution'], ['system', 'Inside the product'], ['scope', 'Built scope'], ['context', 'Status & context']]
  return (
    <article className={`case-study case-editorial case-editorial-${id}`}>
      <Link className="case-back" to="/#work">Back to selected work</Link>
      <header className="case-cover" id="overview">
        <div className="case-cover-copy"><p className="eyebrow">{p.category} / CASE STUDY</p><h1>{p.name}</h1><p className="case-deck">{p.summary}</p><p className="case-description">{p.description}</p>
          <div className="case-cover-actions">{p.url ? <a className="work-read" href={p.url} target="_blank" rel="noreferrer">Visit live project <Globe size={17} /></a> : <span className="case-internal-label">Built & used internally</span>}<a className="text-link" href="#system">Explore the product map <Plus size={17} /></a></div>
        </div>
        <aside className="case-facts" aria-label="Project facts"><img src={`/illustrations/${id === 'cyd' ? 'deals' : 'crm'}.webp`} alt="" width="1024" height="1024" /><dl><div><dt>Status</dt><dd>{p.status}</dd></div><div><dt>My role</dt><dd>{p.role}</dd></div><div><dt>Technology</dt><dd>{p.stack.join(' · ')}</dd></div></dl></aside>
      </header>
      <div className="case-reading-layout">
        <nav className="case-index" aria-label="Case study sections"><p>IN THIS STORY</p>{chapters.map(([anchor, label]) => <a key={anchor} href={`#${anchor}`}>{label}</a>)}<Link to="/#contact" className="case-index-contact">Discuss a similar build <EnvelopeSimple size={16} /></Link></nav>
        <div className="case-body">
          <section id="challenge" className="case-chapter"><p className="eyebrow">THE CHALLENGE</p><h2>{id === 'cyd' ? 'Offers everywhere. A fragmented search.' : 'Many roles. One connected workflow.'}</h2><p>{p.problem}</p></section>
          <section id="contribution" className="case-chapter"><p className="eyebrow">MY CONTRIBUTION</p><h2>{id === 'cyd' ? 'From discovery to the destination.' : 'Connecting the people and the platform.'}</h2><p>{p.contribution}</p><div className="case-role-note"><Code size={22} /><span>{p.role}</span></div></section>
          <section id="system" className="case-chapter case-system"><p className="eyebrow">INSIDE THE PRODUCT</p><h2>See how the pieces connect.</h2><p>Choose a view to explore the product’s key workflows.</p><ProductMap project={p} headingLevel={3} /></section>
          <section id="scope" className="case-chapter"><p className="eyebrow">BUILT SCOPE</p><h2>What’s in the product.</h2><ul className="case-capabilities">{p.capabilities.map(item => <li key={item}><Check size={19} /><span>{item}</span></li>)}</ul></section>
          <section id="context" className="case-chapter case-context"><p className="eyebrow">STATUS & CONTEXT</p><h2>{id === 'cyd' ? 'Live, with more on the drawing board.' : 'Internal work, explained in public.'}</h2><p>{p.planned}</p></section>
          <div className="case-end"><span>THE NEXT STORY</span><Link to={`/work/${next.slug}`}><strong>{next.name}</strong><Plus size={28} /></Link><Link className="case-back" to="/#work">All selected work</Link></div>
        </div>
      </div>
    </article>
  )
}

function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">PAGE NOT FOUND</p>
      <h1>A little off track.</h1>
      <p>Let’s get you back to the work.</p>
      <Link className="button primary" to="/">
        Back home
      </Link>
    </section>
  )
}

export default function App() {
  const [playIntro, setPlayIntro] = useState(() => {
    if (typeof window === 'undefined') return false
    if (window.location.hash || (window.location.pathname && window.location.pathname !== '/')) return false
    if (navigator.webdriver) return false
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return false
    try {
      const hasSeen = window.sessionStorage?.getItem('marvel_intro_played')
      return !hasSeen
    } catch {
      return false
    }
  })

  const triggerIntro = () => {
    setPlayIntro(true)
  }

  const handleIntroComplete = () => {
    setPlayIntro(false)
  }

  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <RouteEffects />
        {playIntro && (
          <MarvelIntro onComplete={handleIntroComplete} forcePlay={playIntro} />
        )}
        <div id="top" />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className="site-shell">
          <Header onReplayIntro={triggerIntro} />
          <main id="main">
            <Routes>
              <Route path="/" element={<Home onPlayIntro={triggerIntro} />} />
              <Route
                path="/work/check-your-deals"
                element={<CaseStudy id="cyd" />}
              />
              <Route
                path="/work/day-one-crm"
                element={<CaseStudy id="crm" />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <ViceCityRadio onReplayIntro={triggerIntro} />
      </MotionConfig>
    </BrowserRouter>
  )
}
