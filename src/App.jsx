import { useCallback, useEffect, useState } from 'react'
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
  EnvelopeSimple,
  Code,
  Plus,
  Copy,
  Check,
  List,
  X,
  Globe,
} from '@phosphor-icons/react'
import { projects, profile } from './data/portfolio'
import AdventureHero from './components/AdventureHero'
import Book3D from './components/Book3D'
import ProductMap from './components/ProductMap'
import Reveal from './components/Reveal'
import MarvelIntro from './components/MarvelIntro'
import DetectiveBoard from './components/DetectiveBoard'
import ProjectsPage from './components/ProjectsPage'
import './App.css'
import './comic.css'
import './work.css'
import './intro.css'
import './radio.css'
import './book3d.css'

function RouteEffects() {
  const { pathname, hash, search } = useLocation()
  useEffect(() => {
    const project = projects.find((p) =>
      pathname.endsWith(p.slug || '__none__'),
    )
    document.title = project
      ? `${project.name} · Sourav`
      : pathname === '/projects' ? 'Projects · Sourav' : 'Sourav · Engineer & Product Builder'
    document.querySelector('meta[name="description"]').content = project
      ? project.description
      : pathname === '/projects' ? 'Explore Sourav’s project collection: live products, internal systems, and clearly labeled architecture concepts.' : 'Sourav is a full-stack software engineer, technical lead, and product builder. Explore real projects, architecture, and experience.'
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
        Sourav<span className="wordmark-edition" aria-hidden="true">THE BUILDER’S ADVENTURES</span>
        <span className="wordmark-symbol">
          <Asterisk size={24} weight="bold" />
        </span>
      </Link>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">
        {[
          ['Work', '/#work'],
          ['Projects', '/projects'],
          ['Experience', '/#about'],
        ].map(([title, href]) => (
          <Link
            key={title}
            to={href}
            onClick={() => setOpen(false)}
            aria-current={
              href === '/projects' ? (location.pathname === href ? 'page' : undefined) : (location.pathname === '/' && location.hash === href.slice(1) ? 'location' : undefined)
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
        Sourav <Asterisk size={14} />
      </Link>
      <span>Words, code & a little comic-book magic. Made in India.</span>
      <a href="#top">Back to top</a>
    </footer>
  )
}

function Home({ onPlayIntro }) {
  return <>
    <AdventureHero onPlayIntro={onPlayIntro} />
    <div className="profile-evidence" aria-label="Experience at a glance">
      <div><strong>4+ years</strong><span>Building software</span></div>
      <div><strong>Full stack</strong><span>Interfaces, APIs & data</span></div>
      <div><strong>Technical leadership</strong><span>Day One Venture Studio</span></div>
    </div>
    <Book3D />
    <DetectiveBoard />
    <aside id="approach" className="build-note"><p className="eyebrow">MY APPROACH</p><p>Understand the workflow. Connect the system. Build, review, and improve.</p></aside>
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
    if (window.sessionStorage?.getItem('skip_intro_test')) return false
    return !window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
  })
  const [entryRevealed, setEntryRevealed] = useState(false)

  const triggerIntro = () => {
    if (window.location.pathname === '/') window.scrollTo({ top: 0, behavior: 'instant' })
    setEntryRevealed(false)
    setPlayIntro(true)
  }

  const handleIntroComplete = useCallback(() => {
    setPlayIntro(false)
    setEntryRevealed(true)
  }, [])

  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <RouteEffects />
        {playIntro && (
          <MarvelIntro onComplete={handleIntroComplete} />
        )}
        <div id="top" />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className={`site-shell ${playIntro ? 'entry-pending' : ''} ${entryRevealed ? 'entry-revealed' : ''}`} inert={playIntro ? true : undefined}>
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
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </BrowserRouter>
  )
}
