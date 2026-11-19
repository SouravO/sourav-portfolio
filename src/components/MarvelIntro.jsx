import { useCallback, useEffect, useRef, useState } from 'react'
import soundscape from '../audio/audioEngine'

const PANELS = [
  { src: '/illustrations/cover.webp', alt: 'The Builder Adventures Cover' },
  { src: '/illustrations/deals.webp', alt: 'Check Your Deals Comic Panel' },
  { src: '/illustrations/crm.webp', alt: 'Day One CRM Comic Panel' },
  { src: '/illustrations/workshop.webp', alt: 'The Workshop Workbench' },
  { src: '/illustrations/finale.webp', alt: 'Sunset City Finale' },
  { src: '/character/comic-focus.webp', alt: 'Focus Keyframe' },
  { src: '/character/comic-connect.webp', alt: 'Connect Keyframe' },
  { src: '/character/comic-welcome.webp', alt: 'Welcome Keyframe' },
]

export default function MarvelIntro({ onComplete, forcePlay = false }) {
  const isReduced = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
  const isAutomated = typeof navigator !== 'undefined' && (navigator.webdriver || window.sessionStorage?.getItem('skip_intro_test'))

  const [phase, setPhase] = useState(() => {
    if (forcePlay) return 'flipping'
    if (isAutomated || isReduced) return 'closed'
    return 'flipping'
  })

  const [panelIdx, setPanelIdx] = useState(0)
  const timerRef = useRef(null)
  const flipSpeedRef = useRef(140) // ms between flips (accelerates down to 28ms)
  const flipsCountRef = useRef(0)

  const handleFinish = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setPhase('closed')
    try {
      window.sessionStorage?.setItem('marvel_intro_played', 'true')
    } catch (err) {
      void err
    }
    // Autostart the GTA 6 synthwave ambient audio upon completing the intro
    soundscape.startBgm()
    onComplete?.()
  }, [onComplete])

  // Handle Esc, Space, or Enter to skip
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        handleFinish()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleFinish])

  useEffect(() => {
    if (phase === 'closed') return

    let active = true

    const runFlip = () => {
      if (!active) return
      setPanelIdx((prev) => (prev + 1) % PANELS.length)
      flipsCountRef.current++

      // Play subtle page flip audio blip
      soundscape.playPageFlip(Math.min(1.5, 0.6 + flipsCountRef.current * 0.05))

      // Accelerate rapidly like Marvel Studios flipbook
      flipSpeedRef.current = Math.max(28, flipSpeedRef.current * 0.88)

      if (flipsCountRef.current < 26) {
        timerRef.current = setTimeout(runFlip, flipSpeedRef.current)
      } else {
        // Trigger Stage 2: Logo slam
        setPhase('logo')
        soundscape.playImpact()

        // After 1.5s of logo showcase, resolve into the site
        timerRef.current = setTimeout(() => {
          if (!active) return
          setPhase('resolve')
          // Smooth finish after letterbox open
          timerRef.current = setTimeout(() => {
            if (!active) return
            handleFinish()
          }, 550)
        }, 1500)
      }
    }

    timerRef.current = setTimeout(runFlip, flipSpeedRef.current)

    return () => {
      active = false
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [phase, handleFinish])

  if (phase === 'closed') return null

  return (
    <div
      className={`marvel-intro-container phase-${phase}`}
      role="dialog"
      aria-modal="true"
      aria-label="Cinematic comic introduction"
      onClick={handleFinish}
    >
      {/* Cinematic Anamorphic Letterbox Bars */}
      <div className="letterbox-bar bar-top" />
      <div className="letterbox-bar bar-bottom" />

      {/* Comic Halftone & Film Grain Overlay */}
      <div className="intro-grain-overlay" aria-hidden="true" />
      <div className="intro-vignette" aria-hidden="true" />

      {/* Skip Button */}
      <button
        type="button"
        className="intro-skip-btn"
        onClick={(e) => {
          e.stopPropagation()
          handleFinish()
        }}
        aria-label="Skip cinematic introduction"
      >
        <span>SKIP</span>
        <kbd>ESC</kbd>
      </button>

      {/* Stage 1: The Rapid Comic Panel Flipbook */}
      <div className="intro-flipbook" aria-hidden="true">
        {PANELS.map((p, idx) => (
          <div
            key={p.src}
            className={`flip-frame ${idx === panelIdx ? 'active' : ''}`}
            style={{ backgroundImage: `url(${p.src})` }}
          />
        ))}
        <div className="comic-halftone-grid" />
      </div>

      {/* Stage 2: The Iconic Marvel-Style Red Logo Slam */}
      <div className="marvel-logo-stage" aria-hidden="true">
        <div className="marvel-red-box">
          <div className="logo-text-mask">
            <span className="marvel-logo-text">SOURAV O</span>
            {/* Rapid flashing panels inside the letters */}
            <div
              className="logo-inner-panels"
              style={{
                backgroundImage: `url(${PANELS[(panelIdx + 2) % PANELS.length].src})`,
              }}
            />
          </div>
          <div className="logo-light-sweep" />
        </div>
        <div className="marvel-subtitle-strip">
          <span>THE BUILDER’S ADVENTURES</span>
        </div>
      </div>
    </div>
  )
}
