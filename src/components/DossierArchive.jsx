import { useState, useRef } from 'react'
import {
  ShieldCheck,
  Scroll,
  ArrowRight,
  EnvelopeSimple,
  CheckCircle,
  Sparkle,
  Briefcase,
  GraduationCap,
  Cpu,
  BookmarkSimple
} from '@phosphor-icons/react'
import { profile } from '../data/portfolio'
import '../dossier-archive.css'

export default function DossierArchive() {
  const [activeTab, setActiveTab] = useState('identity')
  const tabListRef = useRef(null)

  const tabs = [
    {
      id: 'identity',
      label: '01 // Identity & Clearance',
      shortLabel: '01 // Identity',
      icon: <ShieldCheck size={18} weight="bold" />,
      tag: 'ORIGIN & SPECS',
    },
    {
      id: 'missions',
      label: '02 // Field Mission Logs',
      shortLabel: '02 // Missions',
      icon: <Briefcase size={18} weight="bold" />,
      tag: 'CHRONOLOGY',
    },
    {
      id: 'creed',
      label: '03 // The Builder’s Creed',
      shortLabel: '03 // Creed',
      icon: <Scroll size={18} weight="bold" />,
      tag: 'OPERATING PRINCIPLES',
    },
  ]

  // Keyboard navigation for accessible tabs (ArrowLeft / ArrowRight)
  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      const nextIndex = (index + 1) % tabs.length
      setActiveTab(tabs[nextIndex].id)
      const tabElements = tabListRef.current?.querySelectorAll('[role="tab"]')
      tabElements?.[nextIndex]?.focus()
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      const prevIndex = (index - 1 + tabs.length) % tabs.length
      setActiveTab(tabs[prevIndex].id)
      const tabElements = tabListRef.current?.querySelectorAll('[role="tab"]')
      tabElements?.[prevIndex]?.focus()
    }
  }

  return (
    <section id="about" className="dossier-archive-section" aria-labelledby="dossier-heading">
      <div className="dossier-container">
        {/* Section Top Header */}
        <div className="dossier-section-heading">
          <div className="dossier-eyebrow">
            <BookmarkSimple size={15} weight="bold" />
            <span>CONFIDENTIAL ARCHIVE // EYES ONLY</span>
          </div>
          <h2 id="dossier-heading" className="dossier-main-title">
            The Builder’s <span>Dossier.</span>
          </h2>
          <p className="dossier-lead">
            Classified field file: engineering background, technical leadership at Day One Studio, and core operating principles.
          </p>
        </div>

        {/* Physical Manila Folder Case */}
        <div className="manila-folder-wrapper">
          {/* Top Folder Tab & Binder Clips */}
          <div className="folder-top-flange">
            <div className="binder-clip-left" aria-hidden="true" />
            <div className="folder-label-tag">
              <span className="folder-serial">ARCHIVE #DO-2026</span>
              <span className="folder-subject">SUBJECT: SOURAV</span>
            </div>
            <div className="folder-red-seal" aria-hidden="true">
              <span className="red-string-clasp" />
            </div>
          </div>

          {/* Staggered Manila Index Tabs */}
          <div
            className="dossier-tabs"
            role="tablist"
            aria-label="Dossier Chapters"
            ref={tabListRef}
          >
            {tabs.map((tab, idx) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  tabIndex={isActive ? 0 : -1}
                  className={`dossier-tab-button ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  <span className="tab-title">
                    <span className="tab-title-full">{tab.label}</span>
                    <span className="tab-title-short">{tab.shortLabel}</span>
                  </span>
                  <span className="tab-tag">{tab.tag}</span>
                </button>
              )
            })}
          </div>

          {/* Manila Case Paper Leaf / Sheet */}
          <div className="manila-paper-sheet">
            {/* Watermark and Coffee Stain effects */}
            <div className="manila-coffee-stain" aria-hidden="true" />
            <div className="manila-watermark" aria-hidden="true">TOP SECRET</div>

            {/* TAB 1: IDENTITY & CLEARANCE */}
            <div
              id="panel-identity"
              role="tabpanel"
              aria-labelledby="tab-identity"
              hidden={activeTab !== 'identity'}
              className="dossier-panel panel-identity"
            >
              <div className="identity-layout">
                {/* Photo & Clearance Card */}
                <div className="dossier-photo-card">
                  <div className="photo-tape-top" aria-hidden="true" />
                  <div className="photo-tape-bottom" aria-hidden="true" />
                  <div className="dossier-photo-frame">
                    <img
                      src="/illustrations/workshop.webp"
                      alt="Sourav working at workstation in illustrated workshop"
                      width="512"
                      height="512"
                      className="dossier-photo"
                      loading="eager"
                    />
                    <div className="photo-stamp">VERIFIED OPERATIVE</div>
                  </div>
                  <div className="dossier-meta-badge">
                    <span className="meta-rank">CLEARANCE LEVEL 4+</span>
                    <span className="meta-role">STUDIO ARCHITECT & CTO</span>
                  </div>
                </div>

                {/* Dossier Briefing & Core Stats */}
                <div className="dossier-brief-content">
                  <div className="brief-header">
                    <div className="brief-stamp-row">
                      <span className="stamp-classified">CLASSIFIED</span>
                      <span className="stamp-date">FIELD RECORD: 2020–PRESENT</span>
                    </div>
                    <h3>Engineer. Technical Lead. <em>Product Builder.</em></h3>
                  </div>

                  <p className="brief-narrative">
                    Operates across the full product loop — from interface craft and system architecture down to databases and distributed services.
                  </p>

                  <p className="brief-detail">
                    At <strong>Day One Venture Studio</strong>, leads technical architecture across startup MVPs, internal operating tools, and venture-backed platforms. Balances clean software craftsmanship with real business velocity.
                  </p>

                  {/* Fact Grid */}
                  <div className="dossier-facts-grid">
                    <div className="fact-box">
                      <span className="fact-val">4+ Years</span>
                      <span className="fact-lbl">Active Production Experience</span>
                    </div>
                    <div className="fact-box">
                      <span className="fact-val">Full-Stack</span>
                      <span className="fact-lbl">Interface to Infrastructure</span>
                    </div>
                    <div className="fact-box">
                      <span className="fact-val">Venture CTO</span>
                      <span className="fact-lbl">Day One Studio Technical Lead</span>
                    </div>
                    <div className="fact-box">
                      <span className="fact-val">Autonomous</span>
                      <span className="fact-lbl">AI & Agentic Workflows</span>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="dossier-cta-bar">
                    <a
                      href={`mailto:${profile.email}`}
                      className="dossier-action-link"
                      aria-label="Initiate Channel // Talk through a product idea"
                    >
                      <EnvelopeSimple size={18} weight="bold" />
                      <span>Initiate Channel // Talk through a product idea</span>
                      <ArrowRight size={16} weight="bold" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* TAB 2: FIELD MISSION LOGS */}
            <div
              id="panel-missions"
              role="tabpanel"
              aria-labelledby="tab-missions"
              hidden={activeTab !== 'missions'}
              className="dossier-panel panel-missions"
            >
              <div className="missions-header">
                <div className="missions-badge">CHRONOLOGICAL FIELD DISPATCHES</div>
                <h3>The Builder’s Journey</h3>
                <p>Four operational milestones from foundational computing to autonomous agentic architectures.</p>
              </div>

              <div className="timeline-dossier-list">
                {/* Milestone 1 */}
                <div className="mission-item">
                  <div className="mission-status-col">
                    <span className="mission-index">LOG // 01</span>
                    <span className="mission-status status-verified">VERIFIED</span>
                  </div>
                  <div className="mission-content-col">
                    <div className="mission-title-row">
                      <h4>Start With the Foundations</h4>
                      <span className="mission-context"><GraduationCap size={16} /> Education (2018–2022)</span>
                    </div>
                    <p className="mission-text">
                      B.Tech in Computer Science & Engineering at MES College of Engineering. Focused on core computer science, algorithms, relational database fundamentals, and software engineering discipline.
                    </p>
                    <div className="mission-tags">
                      <span>CS Fundamentals</span>
                      <span>Algorithms</span>
                      <span>Relational Modeling</span>
                    </div>
                  </div>
                </div>

                {/* Milestone 2 */}
                <div className="mission-item">
                  <div className="mission-status-col">
                    <span className="mission-index">LOG // 02</span>
                    <span className="mission-status status-deployed">DEPLOYED</span>
                  </div>
                  <div className="mission-content-col">
                    <div className="mission-title-row">
                      <h4>Learn by Building in the Trenches</h4>
                      <span className="mission-context"><Cpu size={16} /> Full-Stack Engineering</span>
                    </div>
                    <p className="mission-text">
                      Full-stack application development with Angular, Node.js, Express, and MongoDB. Engineered responsive user interfaces, structured RESTful service contracts, and robust multi-tier data architectures.
                    </p>
                    <div className="mission-tags">
                      <span>Angular</span>
                      <span>Node.js</span>
                      <span>Express</span>
                      <span>MongoDB</span>
                    </div>
                  </div>
                </div>

                {/* Milestone 3 */}
                <div className="mission-item current-mission">
                  <div className="mission-status-col">
                    <span className="mission-index">LOG // 03</span>
                    <span className="mission-status status-active">ACTIVE COMMAND</span>
                  </div>
                  <div className="mission-content-col">
                    <div className="mission-title-row">
                      <h4>Think Beyond the Code</h4>
                      <span className="mission-context"><Briefcase size={16} /> Technical Leadership</span>
                    </div>
                    <p className="mission-text">
                      CTO and technical leadership at <strong>Day One Venture Studio</strong>. Led end-to-end platform architecture, startup MVP development, internal team management software (Day One CRM), and technical strategy for portfolio ventures.
                    </p>
                    <div className="mission-tags highlight-tags">
                      <span>Venture CTO</span>
                      <span>System Architecture</span>
                      <span>MVP Acceleration</span>
                      <span>Team Leadership</span>
                    </div>
                  </div>
                </div>

                {/* Milestone 4 */}
                <div className="mission-item">
                  <div className="mission-status-col">
                    <span className="mission-index">LOG // 04</span>
                    <span className="mission-status status-frontier">FRONTIER</span>
                  </div>
                  <div className="mission-content-col">
                    <div className="mission-title-row">
                      <h4>Keep Exploring the Horizon</h4>
                      <span className="mission-context"><Sparkle size={16} /> Product & Agentic Workflows</span>
                    </div>
                    <p className="mission-text">
                      Next-generation product development with React 19, Next.js, and TypeScript. Pioneering agentic development environments, multi-agent collaboration (Codex, Antigravity, OpenCode), and human-in-the-loop autonomous coding workflows.
                    </p>
                    <div className="mission-tags">
                      <span>Next.js</span>
                      <span>TypeScript</span>
                      <span>Supabase</span>
                      <span>AI Multi-Agent Workflows</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TAB 3: THE BUILDER'S CREED */}
            <div
              id="panel-creed"
              role="tabpanel"
              aria-labelledby="tab-creed"
              hidden={activeTab !== 'creed'}
              className="dossier-panel panel-creed"
            >
              <div className="creed-header">
                <div className="creed-stamp">OPERATING DIRECTIVES // FIELD PRINCIPLES</div>
                <h3>The Builder’s Creed</h3>
                <p>Non-negotiable engineering principles honed across years of startup builds and system design.</p>
              </div>

              <div className="creed-stickies-grid">
                {/* Directive 1 */}
                <div className="sticky-note sticky-yellow">
                  <div className="pin-head" aria-hidden="true" />
                  <span className="directive-number">DIRECTIVE // 01</span>
                  <h4>Architecture is a product decision.</h4>
                  <p>
                    Clean code without product understanding is vanity. Every database schema, caching strategy, and API contract exists to make the product faster, more resilient, and more valuable to real users.
                  </p>
                  <div className="sticky-footnote">#ProductFirst #ZeroVanity</div>
                </div>

                {/* Directive 2 */}
                <div className="sticky-note sticky-blue">
                  <div className="pin-head" aria-hidden="true" />
                  <span className="directive-number">DIRECTIVE // 02</span>
                  <h4>Velocity without technical debt.</h4>
                  <p>
                    Move at startup speed without cutting fatal corners. Solid architectural primitives set up early allow teams to ship new capabilities in days rather than rewriting everything three months later.
                  </p>
                  <div className="sticky-footnote">#ModularPrimitives #ShipWithCraft</div>
                </div>

                {/* Directive 3 */}
                <div className="sticky-note sticky-pink">
                  <div className="pin-head" aria-hidden="true" />
                  <span className="directive-number">DIRECTIVE // 03</span>
                  <h4>Master the entire loop.</h4>
                  <p>
                    Great builders understand the full journey — from 120fps micro-interactions and accessible markup on the screen down to database index optimization, edge caching, and server security.
                  </p>
                  <div className="sticky-footnote">#InterfaceToInfrastructure</div>
                </div>

                {/* Directive 4 */}
                <div className="sticky-note sticky-green">
                  <div className="pin-head" aria-hidden="true" />
                  <span className="directive-number">DIRECTIVE // 04</span>
                  <h4>Curiosity is the ultimate engine.</h4>
                  <p>
                    Never settle into comfortable patterns. When the software landscape evolves — whether towards agentic workflows, autonomous systems, or new interaction paradigms — dive in, build, and master it.
                  </p>
                  <div className="sticky-footnote">#AlwaysBuilding #AgenticPioneer</div>
                </div>
              </div>
            </div>

            {/* Folder Footer Bar */}
            <div className="manila-folder-footer">
              <div className="footer-doc-stamp">
                <CheckCircle size={15} weight="bold" />
                <span>DOC REF: SRV-ARCHIVE-V4</span>
              </div>
              <div className="footer-classification">
                <span>CLASSIFICATION: UNRESTRICTED PORTFOLIO FILE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
