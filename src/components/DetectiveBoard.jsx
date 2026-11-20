import { useState, useRef, useCallback, useEffect } from 'react'
import {
  MagnifyingGlass,
  ArrowRight,
  EnvelopeSimple,
  Broadcast,
  Briefcase,
  Sparkle,
  GraduationCap,
  Flashlight,
  CheckCircle,
  Eye,
  X,
  CaretLeft,
  CaretRight
} from '@phosphor-icons/react'
import { profile } from '../data/portfolio'
import '../detective-board.css'

const DOSSIER_EXHIBITS = {
  origins: {
    id: 'origins',
    num: 'EXHIBIT // 01',
    era: '2018–2022',
    title: 'Academic Genesis // CS Labs',
    subtitle: 'B.Tech in Computer Science & Engineering',
    dressCode: 'University Student Hoodie & Late-Night Labs',
    img: '/illustrations/cinema/midnight.webp',
    imgAlt: 'Sourav in university era coding at desk late into the night',
    caption: 'SURVEILLANCE #01: Midnight Lab Run',
    quote: '“Obsessed with understanding how machines compile and execute code from first principles.”',
    fieldIntel: 'Late-night compiler labs, memory pointers, and discrete math. The foundational crucible where engineering discipline was forged.',
    story: 'Completed B.Tech in Computer Science & Engineering at MES College of Engineering. Focused on foundational systems programming, algorithms, database normalization, and operating system mechanics.',
    tags: ['C++', 'Data Structures', 'Algorithms', 'SQL', 'Compilers', 'Operating Systems']
  },
  media: {
    id: 'media',
    num: 'EXHIBIT // 02',
    era: '2022–2024 (2 FULL YRS)',
    title: 'The Electronic Media Crucible',
    subtitle: 'Software Engineer in Live Broadcasting',
    dressCode: 'Media Operations Studio Gear & Broadcast Lanyard',
    img: '/illustrations/workshop.webp',
    imgAlt: 'Sourav in electronic media era managing high-throughput streaming systems',
    caption: 'SURVEILLANCE #02: Live Broadcast Console',
    quote: '“In live electronic media, when software streams to thousands of screens, a 1-second drop is fatal.”',
    fieldIntel: 'CRITICAL FIELD INTEL: High-concurrency, zero-failure engineering. Architected real-time ingestion pipelines and resilient media distribution services under relentless broadcast pressure.',
    story: 'Spent 2 intensive years as a core software engineer in electronic media and broadcasting. Delivered high-throughput content ingestion pipelines, microservices, and live streaming systems with zero allowable broadcast downtime.',
    tags: ['Live Streaming', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'High Concurrency', 'Zero Downtime']
  },
  creed: {
    id: 'creed',
    num: 'CASE CREED',
    era: 'CORE PHILOSOPHY',
    title: 'The Builder’s Operating Creed',
    subtitle: 'Two Foundational Directives',
    dressCode: 'Engineering Rigor & Product Empathy',
    img: '/illustrations/cinema/portrait.webp',
    imgAlt: 'Portrait of Sourav with mustache and curly hair',
    caption: 'SURVEILLANCE #00: The Builder’s Principles',
    quote: '“Architecture is a product decision. Velocity without technical debt.”',
    fieldIntel: 'DIRECTIVE 01: Clean code without product empathy is vanity. Every index, boundary, and cache exists to serve human workflow speed.\n\nDIRECTIVE 02: Build modular primitives early. That way, shipping the next breakthrough feature takes days, not months of refactoring.',
    story: 'Synthesizing 4+ years of real-world software engineering across high-stress broadcasting and fast-moving venture studio startups into practical architectural standards.',
    tags: ['Product Empathy', 'Modularity', 'Clean Architecture', 'Rapid Prototyping', 'System Design']
  },
  studio: {
    id: 'studio',
    num: 'EXHIBIT // 03',
    era: '2024–PRESENT',
    title: 'Venture Studio Command // CTO',
    subtitle: 'Chief Technology Officer at Day One Studio',
    dressCode: 'Startup Leadership & Technical Architecture',
    img: '/illustrations/crm.webp',
    imgAlt: 'Day One CRM and venture platform architecture diagram',
    caption: 'SURVEILLANCE #03: Studio System Map',
    quote: '“From zero to production: shipping scalable venture MVPs and enterprise tools.”',
    fieldIntel: 'CRITICAL FIELD INTEL: Directing product engineering at Day One Venture Studio. Spearheaded platform architecture for internal multi-tenant venture CRM, accelerating early-stage startup launches.',
    story: 'Leading technology strategy and architecture across internal venture portfolios. Designed multi-tenant CRM platforms, automated deal evaluation systems, and rapid prototype delivery engines with React 19, Supabase, and PostgreSQL.',
    tags: ['Venture CTO', 'Platform Architecture', 'React 19', 'Supabase', 'PostgreSQL', 'Team Leadership']
  },
  frontier: {
    id: 'frontier',
    num: 'EXHIBIT // 04',
    era: 'CURRENT SURVEILLANCE',
    title: 'The Agentic Frontier',
    subtitle: 'Autonomous AI Swarms & Modern Systems',
    dressCode: 'Agentic Pioneer · Multi-Agent AI Swarms',
    img: '/illustrations/cinema/rooftop.webp',
    imgAlt: 'Sourav on rooftop overlooking skyline exploring AI agent swarms',
    caption: 'SURVEILLANCE #04: Active Horizon',
    quote: '“Human intuition guiding autonomous multi-agent coding swarms.”',
    fieldIntel: 'ACTIVE EXPERIMENTATION: Pioneering multi-agent collaborative engineering (Codex, OpenCode, Antigravity swarms). Building next-gen web systems with high velocity and enterprise resilience.',
    story: 'Building at the bleeding edge of software development: multi-agent autonomous engineering pipelines, human-in-the-loop validation, and full-stack distributed systems ready for production scale.',
    tags: ['Autonomous AI Swarms', 'Multi-Agent Coding', 'Next.js', 'TypeScript', 'Antigravity', 'Full-Stack Architecture']
  },
  anchor: {
    id: 'anchor',
    num: 'PRIME SUSPECT',
    era: '4+ YEARS CONTINUOUS BUILDS',
    title: 'Subject: Sourav',
    subtitle: 'Full-Stack Engineer & Studio CTO',
    dressCode: 'Product-Minded Builder · Adaptable Across All Eras',
    img: '/illustrations/cinema/portrait.webp',
    imgAlt: 'Surveillance portrait of Sourav with mustache and curly hair',
    caption: 'CASE DOSSIER: Central Investigation Anchor',
    quote: '“Curiosity, systems thinking, and shipping high-value software that actually works.”',
    fieldIntel: 'IDENTIFICATION: 4+ years of professional engineering. Progressed from academic CS foundations, through 2 years in high-concurrency broadcast media, to leading technical architecture as Venture Studio CTO.',
    story: 'Full-stack software engineer and startup technical lead based in India. Deep expertise in Node.js, React, TypeScript, Supabase, and distributed systems architecture.',
    tags: ['Full-Stack Engineering', 'Technical Leadership', 'System Architecture', '4+ Years Experience']
  }
}

export default function DetectiveBoard() {
  const [selectedEra, setSelectedEra] = useState('all')
  const [torchActive, setTorchActive] = useState(true)
  const [torchPos, setTorchPos] = useState({ x: 50, y: 50 })
  const [inspectedExhibit, setInspectedExhibit] = useState(null)
  const boardRef = useRef(null)

  // Track cursor for detective torchlight
  const handleMouseMove = useCallback((e) => {
    if (!boardRef.current || !torchActive) return
    const rect = boardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setTorchPos({ x: Math.max(5, Math.min(95, x)), y: Math.max(5, Math.min(95, y)) })
  }, [torchActive])

  // Touch drag for mobile detective torchlight
  const handleTouchMove = useCallback((e) => {
    if (!boardRef.current || !torchActive) return
    const touch = e.touches[0]
    if (!touch) return
    const rect = boardRef.current.getBoundingClientRect()
    const x = ((touch.clientX - rect.left) / rect.width) * 100
    const y = ((touch.clientY - rect.top) / rect.height) * 100
    setTorchPos({ x: Math.max(5, Math.min(95, x)), y: Math.max(5, Math.min(95, y)) })
  }, [torchActive])

  // Open dossier modal and spotlight card
  const handleCardClick = useCallback((eraKey, e) => {
    e?.stopPropagation()
    setSelectedEra(eraKey)
    setInspectedExhibit(eraKey)
    if (boardRef.current && e?.currentTarget) {
      const boardRect = boardRef.current.getBoundingClientRect()
      const cardRect = e.currentTarget.getBoundingClientRect()
      const centerX = ((cardRect.left + cardRect.width / 2 - boardRect.left) / boardRect.width) * 100
      const centerY = ((cardRect.top + cardRect.height / 2 - boardRect.top) / boardRect.height) * 100
      setTorchPos({
        x: Math.max(5, Math.min(95, centerX)),
        y: Math.max(5, Math.min(95, centerY)),
      })
    }
  }, [])

  // Close dossier modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && inspectedExhibit) {
        setInspectedExhibit(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [inspectedExhibit])

  const activeDossier = inspectedExhibit ? DOSSIER_EXHIBITS[inspectedExhibit] : null

  // Navigate between exhibits in dossier
  const exhibitKeys = ['origins', 'media', 'creed', 'studio', 'frontier', 'anchor']
  const handleNextDossier = (e) => {
    e.stopPropagation()
    const currentIndex = exhibitKeys.indexOf(inspectedExhibit)
    const nextKey = exhibitKeys[(currentIndex + 1) % exhibitKeys.length]
    setInspectedExhibit(nextKey)
    setSelectedEra(nextKey === 'anchor' ? 'all' : nextKey)
  }
  const handlePrevDossier = (e) => {
    e.stopPropagation()
    const currentIndex = exhibitKeys.indexOf(inspectedExhibit)
    const prevKey = exhibitKeys[(currentIndex - 1 + exhibitKeys.length) % exhibitKeys.length]
    setInspectedExhibit(prevKey)
    setSelectedEra(prevKey === 'anchor' ? 'all' : prevKey)
  }

  return (
    <section id="about" className="detective-section single-viewport-board" aria-labelledby="detective-heading">
      {/* Sleek Single-Viewport Header */}
      <div className="detective-viewport-header">
        <div className="detective-header-left">
          <div className="detective-badge">
            <MagnifyingGlass size={13} weight="bold" />
            <span>CASE #DO-2026 // EVIDENCE NOTICEBOARD</span>
          </div>
          <h2 id="detective-heading" className="detective-title-compact">
            Tracking the <span>Builder.</span>
          </h2>
        </div>

        <div className="detective-header-right">
          <button
            type="button"
            className={`torch-toggle-btn ${torchActive ? 'is-lit' : ''}`}
            onClick={() => setTorchActive(!torchActive)}
            aria-pressed={torchActive}
          >
            <Flashlight size={15} weight="bold" />
            <span>TORCH: {torchActive ? 'ON' : 'OFF'}</span>
          </button>

          <div className="detective-clue-filter-chips" role="toolbar" aria-label="Investigation Filters">
            <span className="filter-label"><Eye size={13} weight="bold" /> FOCUS:</span>
            <button
              type="button"
              className={`filter-btn ${selectedEra === 'all' ? 'is-active' : ''}`}
              onClick={() => setSelectedEra('all')}
              aria-pressed={selectedEra === 'all'}
            >
              All
            </button>
            <button
              type="button"
              className={`filter-btn ${selectedEra === 'origins' ? 'is-active' : ''}`}
              onClick={() => setSelectedEra('origins')}
              aria-pressed={selectedEra === 'origins'}
            >
              College (18–22)
            </button>
            <button
              type="button"
              className={`filter-btn ${selectedEra === 'media' ? 'is-active' : ''}`}
              onClick={() => setSelectedEra('media')}
              aria-pressed={selectedEra === 'media'}
            >
              Media (22–24)
            </button>
            <button
              type="button"
              className={`filter-btn ${selectedEra === 'studio' ? 'is-active' : ''}`}
              onClick={() => setSelectedEra('studio')}
              aria-pressed={selectedEra === 'studio'}
            >
              Studio CTO
            </button>
            <button
              type="button"
              className={`filter-btn ${selectedEra === 'frontier' ? 'is-active' : ''}`}
              onClick={() => setSelectedEra('frontier')}
              aria-pressed={selectedEra === 'frontier'}
            >
              AI Agents
            </button>
          </div>
        </div>
      </div>

      {/* Main Single-Viewport Physical Noticeboard Frame */}
      <div
        className={`corkboard-stage ${torchActive ? 'torch-mode-enabled' : ''}`}
        ref={boardRef}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchMove}
        onTouchMove={handleTouchMove}
        style={{
          '--torch-x': `${torchPos.x}%`,
          '--torch-y': `${torchPos.y}%`,
        }}
      >
        {/* Flashlight Lighting Cone */}
        {torchActive && <div className="torch-vignette" aria-hidden="true" />}

        {/* Brass Frame Corner Accents */}
        <div className="frame-corner corner-tl" aria-hidden="true" />
        <div className="frame-corner corner-tr" aria-hidden="true" />
        <div className="frame-corner corner-bl" aria-hidden="true" />
        <div className="frame-corner corner-br" aria-hidden="true" />

        {/* Faded Cork Stamps */}
        <div className="cork-stamp stamp-top" aria-hidden="true">CASE #2026 // PRIME SUSPECT DOSSIER</div>
        <div className="cork-stamp stamp-bottom" aria-hidden="true">TOP SECRET // CLASSIFIED EVIDENCE</div>

        {/* Real Connected Red Strings Web (Matching Reference Murder-Board Exactly) */}
        <svg className="red-strings-svg" aria-hidden="true" viewBox="0 0 1000 700" preserveAspectRatio="none">
          <defs>
            <filter id="yarn-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="1" dy="3" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.85" />
            </filter>
            <filter id="glow-yarn" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#ff3333" floodOpacity="0.9" />
            </filter>
          </defs>

          {/* Central Anchor (500, 340) -> Top-Left Exhibit 01 (180, 110) */}
          <path
            className={`red-string ${selectedEra === 'all' || selectedEra === 'origins' ? 'active-string' : ''}`}
            d="M 500 340 Q 320 210 180 110"
            filter="url(#yarn-shadow)"
          />

          {/* Central Anchor (500, 340) -> Top-Right Exhibit 02 (820, 110) */}
          <path
            className={`red-string ${selectedEra === 'all' || selectedEra === 'media' ? 'active-string' : ''}`}
            d="M 500 340 Q 670 210 820 110"
            filter="url(#yarn-shadow)"
          />

          {/* Central Anchor (500, 340) -> Bottom-Left Exhibit 03 (170, 520) */}
          <path
            className={`red-string ${selectedEra === 'all' || selectedEra === 'creed' ? 'active-string' : ''}`}
            d="M 500 340 Q 310 440 170 520"
            filter="url(#yarn-shadow)"
          />

          {/* Central Anchor (500, 340) -> Bottom-Right Exhibit 04 (830, 510) */}
          <path
            className={`red-string ${selectedEra === 'all' || selectedEra === 'studio' ? 'active-string' : ''}`}
            d="M 500 340 Q 680 435 830 510"
            filter="url(#yarn-shadow)"
          />

          {/* Central Anchor (500, 340) -> Bottom-Center Exhibit 05 (500, 560) */}
          <path
            className={`red-string ${selectedEra === 'all' || selectedEra === 'frontier' ? 'active-string' : ''}`}
            d="M 500 340 Q 500 460 500 560"
            filter="url(#yarn-shadow)"
          />

          {/* Perimeter Cross-Tethers (Exactly like reference conspiratorial web) */}
          <path
            className={`red-string sub-string ${selectedEra === 'all' || selectedEra === 'origins' || selectedEra === 'media' ? 'active-string' : ''}`}
            d="M 180 110 Q 500 40 820 110"
            filter="url(#yarn-shadow)"
          />
          <path
            className={`red-string sub-string ${selectedEra === 'all' || selectedEra === 'origins' || selectedEra === 'creed' ? 'active-string' : ''}`}
            d="M 180 110 Q 70 310 170 520"
            filter="url(#yarn-shadow)"
          />
          <path
            className={`red-string sub-string ${selectedEra === 'all' || selectedEra === 'media' || selectedEra === 'studio' ? 'active-string' : ''}`}
            d="M 820 110 Q 930 310 830 510"
            filter="url(#yarn-shadow)"
          />
          <path
            className={`red-string sub-string ${selectedEra === 'all' || selectedEra === 'creed' || selectedEra === 'frontier' ? 'active-string' : ''}`}
            d="M 170 520 Q 320 590 500 560"
            filter="url(#yarn-shadow)"
          />
          <path
            className={`red-string sub-string ${selectedEra === 'all' || selectedEra === 'studio' || selectedEra === 'frontier' ? 'active-string' : ''}`}
            d="M 830 510 Q 670 590 500 560"
            filter="url(#yarn-shadow)"
          />
        </svg>

        {/* =============================================================
            CENTERPIECE: PRIME SUSPECT POLAROID (ANCHOR AT 50%, 50%)
            ============================================================= */}
        <div
          className={`board-pin-item pos-center-anchor ${selectedEra === 'all' || selectedEra === 'anchor' ? 'is-spotlight' : 'is-dimmed'}`}
          onClick={(e) => handleCardClick('anchor', e)}
          tabIndex={0}
          role="region"
          aria-label="Prime Suspect Profile: Sourav"
        >
          <div className="red-pushpin pin-center" aria-hidden="true">
            <div className="pin-head" />
            <div className="pin-knot" />
          </div>
          <div className="anchor-polaroid-frame">
            <div className="polaroid-img-wrap">
              <img
                src="/illustrations/cinema/portrait.webp"
                alt="Surveillance portrait of Sourav with mustache and curly hair"
                width="280"
                height="280"
                className="anchor-img"
                loading="eager"
              />
              <div className="anchor-fingerprint" aria-hidden="true" />
              <div className="anchor-stamp" aria-hidden="true">PRIME SUSPECT</div>
            </div>
            <div className="anchor-caption">
              <span className="anchor-tag">SUBJECT ID: SOURAV</span>
              <h3>The Product-Minded Builder</h3>
              <p className="anchor-desc">Full-Stack Engineer · Day One Studio CTO</p>
              <span className="card-inspect-hint" aria-hidden="true">CLICK TO INSPECT DOSSIER</span>
            </div>
          </div>
        </div>

        {/* =============================================================
            EXHIBIT 01: TORN SPIRAL NOTEBOOK (COLLEGE ERA 2018–2022)
            ============================================================= */}
        <article
          id="exhibit-origins"
          className={`board-pin-item pos-top-left ${selectedEra === 'all' || selectedEra === 'origins' ? 'is-spotlight' : 'is-dimmed'}`}
          onClick={(e) => handleCardClick('origins', e)}
          tabIndex={0}
          role="region"
          aria-label="Exhibit 01: College CS Labs 2018–2022"
        >
          <div className="red-pushpin pin-top" aria-hidden="true">
            <div className="pin-head" />
            <div className="pin-knot" />
          </div>
          <div className="spiral-card-mini">
            <div className="spiral-punch-holes-mini" aria-hidden="true">
              <span /><span /><span /><span /><span />
            </div>
            <div className="spiral-card-content">
              <div className="mini-header-row">
                <span className="card-badge">EXHIBIT // 01</span>
                <span className="era-badge">2018–22</span>
              </div>
              <div className="dress-tag-mini">
                <GraduationCap size={13} weight="bold" />
                <span>Student Hoodie</span>
              </div>
              <h3 className="card-title">Academic Genesis</h3>
              <div className="card-thumb-wrap">
                <div className="tape-strip" aria-hidden="true" />
                <img
                  src="/illustrations/cinema/midnight.webp"
                  alt="Sourav in college era coding in computer lab late at night"
                  width="180"
                  height="110"
                  loading="lazy"
                  className="card-thumb"
                />
              </div>
              <p className="card-summary">B.Tech in Computer Science & Engineering. Algorithms & compilers.</p>
              <span className="card-inspect-hint" aria-hidden="true">INSPECT CLUE →</span>
            </div>
          </div>
        </article>

        {/* =============================================================
            EXHIBIT 02: BLACK PHOTO FRAME (ELECTRONIC MEDIA 2022–2024)
            ============================================================= */}
        <article
          id="exhibit-media"
          className={`board-pin-item pos-top-right ${selectedEra === 'all' || selectedEra === 'media' ? 'is-spotlight' : 'is-dimmed'}`}
          onClick={(e) => handleCardClick('media', e)}
          tabIndex={0}
          role="region"
          aria-label="Exhibit 02: Electronic Media 2022–2024"
        >
          <div className="red-pushpin pin-top" aria-hidden="true">
            <div className="pin-head" />
            <div className="pin-knot" />
          </div>
          <div className="media-black-frame-mini">
            <div className="mini-header-row">
              <span className="card-badge highlight-red">EXHIBIT // 02</span>
              <span className="era-badge">2022–24 (2 YRS)</span>
            </div>
            <div className="dress-tag-mini">
              <Broadcast size={13} weight="bold" />
              <span>Studio Gear & Lanyard</span>
            </div>
            <h3 className="card-title">Media Crucible</h3>
            <div className="card-thumb-wrap">
              <div className="tape-strip" aria-hidden="true" />
              <img
                src="/illustrations/workshop.webp"
                alt="Sourav managing streaming systems in electronic media control room"
                width="180"
                height="110"
                loading="lazy"
                className="card-thumb"
              />
            </div>
            <p className="card-summary">2 full years in live broadcast. Zero-downtime streaming pipelines.</p>
            <span className="card-inspect-hint" aria-hidden="true">INSPECT CLUE →</span>
          </div>
        </article>

        {/* =============================================================
            EXHIBIT 03: YELLOW STICKY CLUES (OPERATING CREED)
            ============================================================= */}
        <div
          className={`board-pin-item pos-bottom-left ${selectedEra === 'all' || selectedEra === 'creed' ? 'is-spotlight' : 'is-dimmed'}`}
          onClick={(e) => handleCardClick('creed', e)}
          tabIndex={0}
          role="region"
          aria-label="Exhibit 03: The Builder's Operating Creed"
        >
          <div className="red-pushpin pin-top" aria-hidden="true">
            <div className="pin-head" />
            <div className="pin-knot" />
          </div>
          <div className="sticky-notes-mini">
            <div className="mini-header-row">
              <span className="card-badge">CASE CREED</span>
            </div>
            <div className="sticky-body">
              <span className="directive-tag">DIRECTIVE 01</span>
              <p className="sticky-quote">&ldquo;Architecture is a product decision.&rdquo;</p>
              <span className="directive-tag">DIRECTIVE 02</span>
              <p className="sticky-quote">&ldquo;Velocity without technical debt.&rdquo;</p>
            </div>
            <span className="card-inspect-hint" aria-hidden="true">READ CREED →</span>
          </div>
        </div>

        {/* =============================================================
            EXHIBIT 04: WHITE BLUEPRINT CARD (DAY ONE CTO 2024–PRESENT)
            ============================================================= */}
        <article
          id="exhibit-studio"
          className={`board-pin-item pos-bottom-right ${selectedEra === 'all' || selectedEra === 'studio' ? 'is-spotlight' : 'is-dimmed'}`}
          onClick={(e) => handleCardClick('studio', e)}
          tabIndex={0}
          role="region"
          aria-label="Exhibit 04: Day One Venture Studio CTO"
        >
          <div className="red-pushpin pin-top" aria-hidden="true">
            <div className="pin-head" />
            <div className="pin-knot" />
          </div>
          <div className="blueprint-card-mini">
            <div className="mini-header-row">
              <span className="card-badge">EXHIBIT // 03</span>
              <span className="era-badge">2024–NOW</span>
            </div>
            <div className="dress-tag-mini">
              <Briefcase size={13} weight="bold" />
              <span>Studio CTO Attire</span>
            </div>
            <h3 className="card-title">Venture Studio CTO</h3>
            <div className="card-thumb-wrap">
              <div className="tape-strip" aria-hidden="true" />
              <img
                src="/illustrations/crm.webp"
                alt="Day One CRM and venture architecture map"
                width="180"
                height="110"
                loading="lazy"
                className="card-thumb"
              />
            </div>
            <p className="card-summary">Technical leadership at Day One Studio. Internal CRM & MVPs.</p>
            <span className="card-inspect-hint" aria-hidden="true">INSPECT CLUE →</span>
          </div>
        </article>

        {/* =============================================================
            EXHIBIT 05: TELEGRAM MEMO (AGENTIC FRONTIER & VERDICT)
            ============================================================= */}
        <article
          id="exhibit-frontier"
          className={`board-pin-item pos-bottom-center ${selectedEra === 'all' || selectedEra === 'frontier' ? 'is-spotlight' : 'is-dimmed'}`}
          onClick={(e) => handleCardClick('frontier', e)}
          tabIndex={0}
          role="region"
          aria-label="Exhibit 05: The Agentic Frontier"
        >
          <div className="red-pushpin pin-top" aria-hidden="true">
            <div className="pin-head" />
            <div className="pin-knot" />
          </div>
          <div className="frontier-telegram-mini">
            <div className="mini-header-row">
              <span className="card-badge highlight-purple">EXHIBIT // 04</span>
              <span className="era-badge">FRONTIER</span>
            </div>
            <div className="dress-tag-mini">
              <Sparkle size={13} weight="bold" />
              <span>Multi-Agent AI Swarms</span>
            </div>
            <h3 className="card-title">The Agentic Frontier</h3>
            <p className="card-summary">Autonomous multi-agent swarms (Codex, OpenCode, Antigravity).</p>
            <div className="verdict-mini-badge">
              <CheckCircle size={14} weight="bold" />
              <span>VERDICT: READY TO BUILD</span>
            </div>
          </div>
        </article>
      </div>

      {/* =============================================================
          IN-VIEWPORT DOSSIER INSPECTOR MODAL (ZERO VERTICAL SCROLL)
          ============================================================= */}
      {activeDossier && (
        <div
          className="dossier-overlay-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dossier-modal-title"
          onClick={() => setInspectedExhibit(null)}
        >
          <div
            className="dossier-modal-content"
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
          >
            {/* Modal Header */}
            <div className="dossier-modal-topbar">
              <div className="dossier-modal-meta">
                <span className="dossier-stamp-red">{activeDossier.num}</span>
                <span className="dossier-era-pill">{activeDossier.era}</span>
              </div>
              <div className="dossier-modal-controls">
                <button
                  type="button"
                  className="dossier-nav-btn"
                  onClick={handlePrevDossier}
                  aria-label="View Previous Clue"
                >
                  <CaretLeft size={16} weight="bold" />
                  <span>Prev</span>
                </button>
                <button
                  type="button"
                  className="dossier-nav-btn"
                  onClick={handleNextDossier}
                  aria-label="View Next Clue"
                >
                  <span>Next</span>
                  <CaretRight size={16} weight="bold" />
                </button>
                <button
                  type="button"
                  className="dossier-close-btn"
                  onClick={() => setInspectedExhibit(null)}
                  aria-label="Close Dossier"
                >
                  <X size={18} weight="bold" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="dossier-modal-grid">
              <div className="dossier-modal-photo-col">
                <div className="dossier-polaroid-frame">
                  <div className="tape-strip" aria-hidden="true" />
                  <img
                    src={activeDossier.img}
                    alt={activeDossier.imgAlt}
                    width="400"
                    height="280"
                    className="dossier-full-img"
                  />
                  <div className="dossier-photo-caption">{activeDossier.caption}</div>
                </div>

                <div className="dossier-attire-callout">
                  <span className="attire-label">SUSPECT ATTIRE & GEAR:</span>
                  <p>{activeDossier.dressCode}</p>
                </div>
              </div>

              <div className="dossier-modal-text-col">
                <h3 id="dossier-modal-title" className="dossier-modal-heading">{activeDossier.title}</h3>
                <h4 className="dossier-modal-subheading">{activeDossier.subtitle}</h4>

                <blockquote className="dossier-quote-box">
                  {activeDossier.quote}
                </blockquote>

                <div className="dossier-field-intel">
                  <strong>CRITICAL FIELD INTEL:</strong>
                  <p>{activeDossier.fieldIntel}</p>
                </div>

                <p className="dossier-narrative">{activeDossier.story}</p>

                <div className="dossier-tech-tags">
                  <span className="tags-label">VERIFIED CLUES & SKILLS:</span>
                  <div className="tags-cloud">
                    {activeDossier.tags.map((tag) => (
                      <span key={tag} className="dossier-tag">{tag}</span>
                    ))}
                  </div>
                </div>

                {activeDossier.id === 'frontier' && (
                  <div className="dossier-cta-box">
                    <a
                      href={`mailto:${profile.email}`}
                      className="dossier-contact-btn"
                      aria-label="Initiate Contact with the Builder"
                    >
                      <EnvelopeSimple size={18} weight="bold" />
                      <span>Initiate Contact with the Builder</span>
                      <ArrowRight size={16} weight="bold" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Accessible Screen Reader Fallback Anchor */}
      <div className="portrait-caption" style={{ display: 'none' }}>
        <h2>Curiosity is my <span>superpower.</span></h2>
        <p>Explore the decisions behind a build, from the product problem to the engineering.</p>
        <a href="/?mode=chat#workspace" className="text-link">Ask about my work</a>
      </div>
    </section>
  )
}
