import { useCallback, useEffect, useRef, useState } from 'react'
import soundscape from '../audio/audioEngine'
import ViceCityRadio from './ViceCityRadio'

const SCENES = ['midnight', 'portrait', 'street', 'rooftop']
const COMIC_PAGES = ['street', 'midnight', 'portrait', 'rooftop', 'portrait', 'midnight', 'rooftop', 'street', 'midnight']
const artSource = (id) => `/illustrations/cinema/${id}${innerWidth <= 600 ? '-mobile' : ''}.webp`

export default function MarvelIntro({ onComplete }) {
  const [phase, setPhase] = useState('prelude')
  const [shotIndex, setShotIndex] = useState(0)
  const [landing, setLanding] = useState(null)
  const [sceneSources, setSceneSources] = useState({})
  const skipRef = useRef(null)
  const finished = useRef(false)

  const handleFinish = useCallback(() => {
    if (finished.current) return
    finished.current = true
    soundscape.stopAll()
    onComplete?.()
  }, [onComplete])

  // One timeline per mount: phase changes must never restart the story.
  useEffect(() => {
    soundscape.startBgm()
    let active = true
    const timers = new Set()
    const later = (fn, delay) => {
      const id = setTimeout(() => { timers.delete(id); if (active) fn() }, delay)
      timers.add(id)
    }
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    skipRef.current?.focus({ preventScroll: true })

    const captureLanding = async () => {
      const hero = document.querySelector('.adventure-cover')
      const img = hero?.querySelector('.cover-picture img')
      if (!hero || !img) return null
      try { await img.decode() } catch { return null }
      if (!active) return null
      const box = hero.getBoundingClientRect()
      const image = img.getBoundingClientRect()
      const border = parseFloat(getComputedStyle(hero).borderLeftWidth) || 0
      const left = box.left + border
      const top = box.top + border
      const width = box.width - border * 2
      const height = Math.min(box.height - border * 2, image.bottom - top)
      const style = getComputedStyle(img)
      return {
        frame: { left, top, width, height,
          '--landing-x': `${innerWidth / 2 - (left + width / 2)}px`,
          '--landing-y': `${innerHeight / 2 - (top + height / 2)}px`,
          '--landing-scale': Math.max(innerWidth / width, innerHeight / height) * 1.06 },
        image: { left: image.left - left, top: image.top - top,
          width: image.width, height: image.height,
          objectFit: style.objectFit, objectPosition: style.objectPosition },
        src: img.currentSrc,
      }
    }
    // Decode the actual responsive hero before the final shot.
    const ready = captureLanding()
    const resolveToLanding = () => {
      setPhase('logo')
      soundscape.playImpact()
      later(async () => {
        // Preserve the approved, exact-art landing handoff.
        const shot = await Promise.race([ready, new Promise(resolve => later(() => resolve(null), 1800))])
        if (!active) return
        setLanding(shot)
        setPhase('landing')
        later(() => setPhase('settle'), 100)
        later(() => setPhase('resolve'), 2000)
        later(handleFinish, 2350)
      }, 1900)
    }
    const playStory = () => {
      if (!active) return
      setPhase('story')
      soundscape.playPageFlip(0.5)
      later(() => { setShotIndex(1); soundscape.playPageFlip(0.65) }, 950)
      later(() => { setShotIndex(2); soundscape.playPageFlip(0.8) }, 1800)
      later(() => { setShotIndex(3); soundscape.playPageFlip(0.95) }, 2500)
      later(() => {
        setPhase('pages')
        soundscape.playPageFlip(1.1)
        later(() => soundscape.playPageFlip(1.2), 450)
        later(() => soundscape.playPageFlip(1.3), 850)
      }, 3200)
      later(resolveToLanding, 4700)
    }
    // Use only decoded illustrations. Missing/slow art falls back to the real cover.
    const images = SCENES.map(id => {
      const image = new Image()
      image.src = artSource(id)
      return image
    })
    const artReady = Promise.all(images.map(image => image.decode().catch(() => {})))
    Promise.race([artReady, new Promise(resolve => later(resolve, 1400))]).then(() => {
      if (!active) return
      const fallback = document.querySelector('.cover-picture img')?.currentSrc || '/illustrations/cover.webp'
      setSceneSources(Object.fromEntries(SCENES.flatMap((scene, index) => (
        images[index].complete && images[index].naturalWidth ? [] : [[scene, fallback]]
      ))))
      later(playStory, 100)
    })
    const onKey = event => {
      if (event.key === 'Escape') {
        event.preventDefault()
        handleFinish()
      }
      if (event.key === 'Tab') {
        const buttons = [...skipRef.current.closest('[role=dialog]').querySelectorAll('button')]
        const index = buttons.indexOf(document.activeElement)
        event.preventDefault()
        buttons[(index + (event.shiftKey ? -1 : 1) + buttons.length) % buttons.length]?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    // Resizing invalidates the measured match; reveal the responsive page safely.
    window.addEventListener('resize', handleFinish)
    return () => {
      active = false
      soundscape.stopAll()
      timers.forEach(clearTimeout)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', handleFinish)
      document.body.style.overflow = previousOverflow
      if (previousFocus?.isConnected && previousFocus !== document.body) previousFocus.focus({ preventScroll: true })
    }
  }, [handleFinish])

  return (
    <div
      className={`marvel-intro-container phase-${phase}`}
      role="dialog"
      aria-modal="true"
      aria-label="Cinematic comic introduction"
      onClick={handleFinish}
    >
      <div onClick={event => event.stopPropagation()}><ViceCityRadio /></div>
      {landing && (
        <div className="intro-landing-frame" style={landing.frame} aria-hidden="true">
          <img src={landing.src} style={landing.image} alt="" />
          <div className="intro-landing-wash" />
        </div>
      )}
      {/* Cinematic Anamorphic Letterbox Bars */}
      <div className="letterbox-bar bar-top" />
      <div className="letterbox-bar bar-bottom" />

      {/* Comic Halftone & Film Grain Overlay */}
      <div className="intro-grain-overlay" aria-hidden="true" />
      <div className="intro-vignette" aria-hidden="true" />

      {/* Skip Button */}
      <button
        ref={skipRef}
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

      <div className="cinema-world" aria-hidden="true">
        <div className="cinema-prelude"><span>S</span></div>
        <div className="cinema-sequence">
          {SCENES.map((scene, index) => (
            <div key={scene} className={`cinema-shot cinema-shot-${scene} ${index === shotIndex ? 'is-current' : ''}`}>
              <picture>
                <source media="(max-width: 600px)" srcSet={sceneSources[scene] || `/illustrations/cinema/${scene}-mobile.webp`} />
                <img className="cinema-art" data-scene={scene} src={sceneSources[scene] || `/illustrations/cinema/${scene}.webp`} alt="" />
              </picture>
            </div>
          ))}
        </div>
        <div className="comic-camera">
          <div className="comic-sheet">
            {COMIC_PAGES.map((scene, index) => (
              <div className={`comic-cell comic-cell-${index}`} key={`${scene}-${index}`}>
                <picture>
                  <source media="(max-width: 600px)" srcSet={sceneSources[scene] || `/illustrations/cinema/${scene}-mobile.webp`} />
                  <img className="cinema-art" data-scene={scene} src={sceneSources[scene] || `/illustrations/cinema/${scene}.webp`} alt="" />
                </picture>
              </div>
            ))}
          </div>
        </div>
        <div className="cinema-shutter" />
      </div>
      <div className="studio-atmosphere" aria-hidden="true" />
      <div className="studio-stage" aria-hidden="true">
        <div className="studio-frame">
          <span className="studio-name">SOURAV</span>
          <span className="studio-art-name">SOURAV</span>
          <div className="studio-reflection" />
        </div>
        <span className="studio-caption">THE BUILDER’S ADVENTURES</span>
      </div>
    </div>
  )
}
