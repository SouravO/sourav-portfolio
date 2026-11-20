import { useState, useRef, useCallback } from 'react'
import { ArrowClockwise, Sparkle, ShieldCheck, Cpu } from '@phosphor-icons/react'
import '../character-deck.css'

const cards = [
  {
    id: 'architect',
    num: '01',
    code: 'SRV-ARCH-01',
    edition: 'STUDIO LEAD ED.',
    rarity: 'ULTRA RARE ★★★',
    title: 'The Studio Architect',
    archetype: 'Day One Venture Studio · Technical Lead',
    quote: '“Connecting product discovery to bulletproof system architecture.”',
    image: '/illustrations/workshop.webp',
    badge: 'LEAD',
    stats: [
      { label: 'System Design', value: 98 },
      { label: '0→1 Product Strategy', value: 96 },
      { label: 'Venture Leadership', value: 95 },
    ],
    mission: 'Day One Venture Studio',
    missionRole: 'Technical Lead & Platform Architect',
    narrative:
      '4+ years directing startup technical strategy, shaping product roadmaps, and architecting resilient internal systems and customer-facing MVPs.',
    tags: ['System Architecture', 'Next.js', 'Supabase', 'PostgreSQL', 'Technical Leadership', 'MVP Strategy'],
    icon: ShieldCheck,
  },
  {
    id: 'craftsman',
    num: '02',
    code: 'SRV-CRAFT-02',
    edition: 'RUNTIME SPECIALIST',
    rarity: 'SECRET RARE ★★★',
    title: 'The Full-Stack Craftsman',
    archetype: 'Interface & Distributed Runtime Specialist',
    quote: '“Interface is the promise; the runtime architecture is the delivery.”',
    image: '/illustrations/deals.webp',
    badge: 'CORE',
    stats: [
      { label: 'React / Next.js', value: 96 },
      { label: 'APIs & Databases', value: 94 },
      { label: 'Performance & Polish', value: 93 },
    ],
    mission: 'Consumer & Operational Platforms',
    missionRole: 'Full-Stack Software Engineer',
    narrative:
      'From affiliate deal discovery at Check Your Deals to multi-role operations at Day One CRM. Deep foundation starting with Node, Express, MongoDB, evolving into TypeScript & modern cloud data layers.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS', 'Supabase', 'MongoDB'],
    icon: Cpu,
  },
  {
    id: 'pioneer',
    num: '03',
    code: 'SRV-AGENT-03',
    edition: 'AI FRONTIER ED.',
    rarity: 'HOLO FOIL ★★★',
    title: 'The Agentic Pioneer',
    archetype: 'Autonomous AI Workflows & Systems',
    quote: '“Orchestrating autonomous agents into dependable production software.”',
    image: '/illustrations/cover.webp',
    badge: 'FUTURE',
    stats: [
      { label: 'Agentic Workflows', value: 95 },
      { label: 'Generative UI & UX', value: 94 },
      { label: 'Multi-Agent Protocols', value: 97 },
    ],
    mission: 'Future-Facing Software Engineering',
    missionRole: 'Agentic Systems & Automation Lead',
    narrative:
      'Pioneering collaborative development with autonomous coding agents (Codex, Antigravity, OpenCode). Architect of the interactive AI workspace, context memory systems, and automated test-driven synthesis.',
    tags: ['Autonomous Agents', 'AI Workflows', 'Automation Protocols', 'React Architecture', 'Context Systems'],
    icon: Sparkle,
  },
]

function HoloCard({ card }) {
  const [flipped, setFlipped] = useState(false)
  const slabRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const el = slabRef.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const normX = (x / rect.width - 0.5) * 2 // -1 to 1
    const normY = (y / rect.height - 0.5) * 2 // -1 to 1

    const rotX = -normY * 12
    const rotY = normX * 12

    el.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`
    el.style.setProperty('--glare-x', `${(x / rect.width) * 100}%`)
    el.style.setProperty('--glare-y', `${(y / rect.height) * 100}%`)
  }, [])

  const handleMouseLeave = useCallback(() => {
    const el = slabRef.current
    if (!el) return
    el.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  }, [])

  const toggleFlip = (e) => {
    if (e) e.stopPropagation()
    setFlipped((prev) => !prev)
  }

  const IconComp = card.icon

  return (
    <div
      className={`holo-card-wrap ${flipped ? 'is-flipped' : ''}`}
      onClick={toggleFlip}
    >
      <div
        className="holo-card-slab"
        ref={slabRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="holo-card-inner">
          {/* Card Front */}
          <article className="holo-card-face holo-card-front">
            <div className="card-slab-header">
              <span className="card-slab-edition" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <IconComp size={13} weight="bold" />
                {card.edition}
              </span>
              <span className="card-slab-rarity">{card.rarity}</span>
            </div>

            <div className="card-art-frame">
              <img
                src={card.image}
                alt=""
                className="card-art-img"
                width="600"
                height="400"
                loading="eager"
              />
              <span className="card-art-badge">{card.badge}</span>
              <div className="card-holo-glare" aria-hidden="true" />
            </div>

            <div className="card-content">
              <h3 className="card-role-title">{card.title}</h3>
              <p className="card-archetype">{card.archetype}</p>
              <p className="card-quote">{card.quote}</p>

              <div className="card-stats-box">
                {card.stats.map((st) => (
                  <div key={st.label} className="card-stat-row">
                    <span className="stat-label">{st.label}</span>
                    <div className="stat-bar-track">
                      <div className="stat-bar-fill" style={{ width: `${st.value}%` }} />
                    </div>
                    <span className="stat-value">{st.value}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="card-flip-prompt"
                onClick={toggleFlip}
                aria-label={`Inspect Dossier & Stats - ${card.title}`}
              >
                <ArrowClockwise size={13} weight="bold" />
                <span>Inspect Dossier & Stats - {card.title}</span>
              </button>
            </div>
          </article>

          {/* Card Back */}
          <aside className="holo-card-face holo-card-back">
            <div className="card-back-header">
              <div>
                <h4>{card.title}</h4>
                <span>{card.archetype}</span>
              </div>
              <span className="card-back-number">#{card.num}</span>
            </div>

            <div className="card-back-section">
              <p className="card-back-label">CORE MISSION & ROLE</p>
              <p className="card-back-mission">{card.missionRole}</p>
              <p className="card-back-label" style={{ marginTop: '6px' }}>ORGANIZATION</p>
              <p className="card-back-narrative">{card.mission}</p>
            </div>

            <div className="card-back-section">
              <p className="card-back-label">VERIFIED FIELD BRIEF</p>
              <p className="card-back-narrative">{card.narrative}</p>
            </div>

            <div className="card-back-section">
              <p className="card-back-label">SYSTEM SPECIALIZATION</p>
              <div className="card-back-tags">
                {card.tags.map((tg) => (
                  <span key={tg}>{tg}</span>
                ))}
              </div>
            </div>

            <div className="card-back-footer">
              <div className="card-barcode">
                <div className="barcode-lines" aria-hidden="true" />
                <span className="barcode-code">{card.code}</span>
              </div>
              <button
                type="button"
                className="card-flip-back-btn"
                onClick={(e) => {
                  e.stopPropagation()
                  setFlipped(false)
                }}
              >
                ← Flip Card
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default function CharacterDeck() {
  return (
    <section id="about" className="deck-section" aria-labelledby="deck-heading">
      <header className="deck-header">
        <span className="deck-eyebrow">
          <Sparkle size={14} weight="fill" /> COLLECTOR'S VAULT // ISSUE NO. 04
        </span>
        <h2 id="deck-heading" className="deck-title">
          The Builder’s <span>Character Deck.</span>
        </h2>
        <p className="deck-subtitle">
          Three facets of one product engineer: 4+ years of technical leadership at Day One Venture Studio,
          bulletproof full-stack execution, and autonomous agentic systems.
        </p>
        <span className="deck-instruction">
          ★ Hover to inspect 3D foil reflection · Click or tap any card to flip & inspect stat dossier
        </span>
      </header>

      <div className="deck-grid" role="region" aria-label="Collectible Character Cards">
        {cards.map((card) => (
          <HoloCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  )
}
