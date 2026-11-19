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
} from '@phosphor-icons/react'
import { projects, profile, skills, journey } from './data/portfolio'
import AdventureHero from './components/AdventureHero'
import FlowDiagram from './components/FlowDiagram'
import Reveal from './components/Reveal'
import './App.css'
import './comic.css'
const Workspace = lazy(() => import('./components/Workspace'))

function RouteEffects() {
  const { pathname, hash } = useLocation()
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
  }, [pathname, hash])
  return null
}

function Header() {
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
          ['Workspace', '/#workspace'],
          ['About', '/#about'],
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

function ProjectArt({ project }) {
  return <div className={`project-art project-art-${project.id}`}>
    <img src={`/illustrations/${project.id === 'cyd' ? 'deals' : 'crm'}.webp`} alt={project.id === 'cyd' ? 'Comic illustration of discovering deals on a phone in a city marketplace' : 'Comic illustration of a developer connecting systems in a control room'} width="1024" height="1024" loading="lazy" />
    <div className="art-title" aria-hidden="true"><span>{project.id === 'cyd' ? 'CHECK YOUR' : 'DAY ONE'}</span><strong>{project.id === 'cyd' ? 'DEALS' : 'CRM'}</strong></div>
    <span className="art-label">{project.id === 'cyd' ? 'A LIVE DEAL-DISCOVERY PRODUCT' : 'A SHARED SYSTEM FOR STARTUP TEAMS'}</span>
  </div>
}

function Work() {
  const [expanded, setExpanded] = useState(null)
  return (
    <section id="work" className="section work-section">
      <Reveal>
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK / THE STORIES SO FAR</p>
          <h2>Real builds. <span>Real stories.</span></h2>
          <p>Real products. Complex problems. Thoughtful systems.</p>
        </div>
      </Reveal>
      <div className="featured-projects">
        {projects.slice(0, 2).map((p, i) => (
          <Reveal
            className={`project-feature project-feature-${p.id}`}
            delay={i * 0.08}
            key={p.id}
          >
            <Link className="project-visual-link" to={`/work/${p.slug}`}>
              <span className="sr-only">Read {p.name} case study. </span>
              <ProjectArt project={p} />
              <span className="panel-read">Read the story</span>
              <span className="project-open">
                <Plus size={22} />
              </span>
            </Link>
            <div className="project-info">
              <span className="project-category">
                {p.category}
                <span>
                  {p.kind === 'live' && <span className="status-dot" />}
                  {p.status}
                </span>
              </span>
              <Link to={`/work/${p.slug}`}>
                <h3>{p.name}</h3>
              </Link>
              <p>{p.summary}</p>
              <div className="project-tags">
                {p.stack.slice(0, 3).map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="concepts" id="concepts">
        <div className="concepts-heading">
          <h3>On the drawing board.</h3>
          <span>Architecture & product explorations</span>
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
        <p className="eyebrow">THE ORIGIN STORY</p>
        <h2>
          Curious by default.
          <br />
          <span className="text-muted">Builder by choice.</span>
        </h2>
        <p>{profile.bio}</p>
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
        {journey.map((item, i) => (
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
        <h2>
          A toolkit, <span className="text-muted">not a comfort zone.</span>
        </h2>
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
          Have a product to build or a tricky problem to solve?
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

function Home() {
  const [, setActive] = useState(1)
  return <>
    <AdventureHero />
    <div className="chapter-strip"><span>ENGINEER BY TRADE.</span><Asterisk size={24} weight="bold" /><span>BUILDER BY INSTINCT.</span><Asterisk size={24} weight="bold" /><span>BASED IN INDIA.</span></div>
    <Work />
    <section id="workspace" className="section workspace-section">
      <div className="workshop-spread">
        <Reveal className="workshop-portrait">
          <p className="caption meanwhile">Meanwhile, behind the builds…</p>
          <img src="/illustrations/workshop.webp" alt="Sourav thinking through a product at his laptop in an illustrated workshop" width="1024" height="1024" loading="lazy" />
          <div className="portrait-caption"><h2>Curiosity is my <span>superpower.</span></h2><p>Engineer. Technical lead.<br />Product builder. Based in India.</p><Link to="/#about" className="text-link">Read my origin story <Plus size={18} /></Link></div>
        </Reveal>
        <div className="workshop-desk">
          <Reveal><div className="section-heading"><p className="eyebrow">OPEN THE NOTEBOOK</p><h2>The <span>workshop.</span></h2><p>Pick a project. See how I think.</p></div></Reveal>
          <Suspense fallback={<div className="workspace-loading">Opening the workspace…</div>}><Workspace onPerspectiveChange={setActive} /></Suspense>
        </div>
      </div>
    </section>
    <About />
    <Toolkit />
    <Contact />
  </>
}

function CaseStudy({ id }) {
  const p = projects.find((project) => project.id === id)
  const next = projects.find((project) => project.slug && project.id !== id)
  return (
    <article className="case-study">
      <section className="case-intro">
        <Link className="text-link" to="/#work">
          Back to selected work
        </Link>
        <p className="eyebrow">
          {p.category} · {p.status}
        </p>
        <h1>{p.name}</h1>
        <p className="case-subtitle">{p.summary}</p>
        <div className="case-meta">
          <div>
            <span>Contribution</span>
            <strong>{p.role}</strong>
          </div>
          <div>
            <span>Technology</span>
            <strong>{p.stack.join(' · ')}</strong>
          </div>
          {p.url && (
            <a
              className="button secondary"
              href={p.url}
              target="_blank"
              rel="noreferrer"
            >
              Visit live project <Globe size={17} />
            </a>
          )}
        </div>
      </section>
      <ProjectArt project={p} />
      <div className="case-content">
        <Reveal className="case-text">
          <h2>The problem</h2>
          <p>{p.problem}</p>
        </Reveal>
        <Reveal className="case-text">
          <h2>My contribution</h2>
          <p>{p.contribution}</p>
        </Reveal>
        <Reveal className="case-flow">
          <h2>How it connects</h2>
          <p>A simplified view of the product flow.</p>
          <FlowDiagram project={p} />
        </Reveal>
        <Reveal className="case-text">
          <h2>What’s in the product</h2>
          <ul className="capability-list">
            {p.capabilities.map((item) => (
              <li key={item}>
                <Check size={18} />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="case-note">
          <h2>Current status & context</h2>
          <p>{p.planned}</p>
        </Reveal>
        <Link className="next-project" to={`/work/${next.slug}`}>
          <span>Keep exploring</span>
          <strong>{next.name}</strong>
          <Plus size={30} />
        </Link>
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
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <RouteEffects />
        <div id="top" />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className="site-shell">
          <Header />
          <main id="main">
            <Routes>
              <Route path="/" element={<Home />} />
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
      </MotionConfig>
    </BrowserRouter>
  )
}
