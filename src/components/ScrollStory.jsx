import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react'
import {
  Asterisk,
  Code,
  Cube,
  Stack,
  Sparkle,
  Plus,
  Play,
  Pause,
} from '@phosphor-icons/react'
import CharacterSequence from './CharacterSequence'
import Magnetic from './Magnetic'
import './ScrollStory.css'

export default function ScrollStory() {
  const story = useRef(null)
  const slider = useRef(null)
  const currentChapter = useRef(0)
  const reduce = useReducedMotion()
  const [chapter, setChapter] = useState(0)
  const [bubble, setBubble] = useState(false)
  const [motionEnabled, setMotionEnabled] = useState(true)
  const [ink, setInk] = useState(false)
  const { scrollYProgress } = useScroll({
    target: story,
    offset: ['start start', 'end end'],
  })
  const firstOpacity = useTransform(scrollYProgress, [0, 0.2, 0.35], [1, 1, 0])
  const secondOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.38, 0.55, 0.7],
    [0, 1, 1, 0],
  )
  const thirdOpacity = useTransform(scrollYProgress, [0.56, 0.76, 1], [0, 1, 1])
  const characterX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['0%', '3%', '-4%'],
  )
  const characterRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-3, 1, -1],
  )
  const characterScale = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    [1, 1.05, 0.96],
  )
  const diagramScale = useTransform(
    scrollYProgress,
    [0.15, 0.43, 0.68],
    [0.7, 1, 1.08],
  )
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    const next = value < 0.32 ? 0 : value < 0.67 ? 1 : 2
    if (next !== currentChapter.current) {
      currentChapter.current = next
      setChapter(next)
    }
    if (slider.current) slider.current.value = String(Math.round(value * 100))
  })
  function seek(value) {
    const top = story.current.getBoundingClientRect().top + window.scrollY
    const distance = story.current.offsetHeight - window.innerHeight
    window.scrollTo({ top: top + distance * value, behavior: 'instant' })
  }
  const still = reduce || !motionEnabled
  return (
    <section
      ref={story}
      className={`scroll-story ${still ? 'story-still' : ''} ${ink ? 'ink-mode' : ''}`}
      aria-labelledby="story-title"
      data-chapter={chapter}
    >
      <div className="story-stage">
        <div className="story-grain" aria-hidden="true" />
        <div className="story-meta">
          <span>
            <span className="story-cross">✳</span> THE ADVENTURES OF A SOFTWARE ENGINEER
          </span>
          <button
            className="ink-toggle"
            onClick={() => setInk(!ink)}
            aria-pressed={ink}
          >
            INK MODE <span>{ink ? 'ON' : 'OFF'}</span>
          </button>
        </div>
        <span className="story-backtype" aria-hidden="true">
          BUILD!
        </span>
        <div className="story-copy-wrap">
          <motion.div
            className={`story-copy story-copy-first ${chapter === 0 || still ? 'chapter-active' : ''}`}
            style={still ? { opacity: 1 } : { opacity: firstOpacity }}
            inert={!still && chapter !== 0}
          >
            <p className="story-kicker">
              NOT ALL HEROES WEAR CAPES. SOME WRITE CODE.
            </p>
            <h1 id="story-title">
              Hey, I’m
              <br />
              <span>Sourav.</span>
              <span className="name-star">
                <Asterisk weight="light" />
              </span>
            </h1>
            <p className="story-description">
              Full-stack engineer. Technical lead.
              <br />
              Turning complicated ideas into products that work.
            </p>
            <Magnetic>
              <Link to="/#work" className="button primary story-cta">
                Explore my work <Stack size={18} />
              </Link>
            </Magnetic>
          </motion.div>
          <motion.div
            className={`story-copy story-copy-process ${chapter === 1 ? 'chapter-active' : ''}`}
            style={still ? { display: 'none' } : { opacity: secondOpacity }}
            inert={chapter !== 1}
          >
            <p className="story-kicker">Behind every good product</p>
            <h2>
              Connect
              <br />
              the <span>dots.</span>
            </h2>
            <p className="story-description">
              Interfaces. APIs. Data. The business behind it.
              <br />I like understanding the whole picture.
            </p>
            <Link to="/#workspace" className="button secondary">
              Inside my workspace <Cube size={18} />
            </Link>
          </motion.div>
          <motion.div
            className={`story-copy story-copy-products ${chapter === 2 ? 'chapter-active' : ''}`}
            style={still ? { display: 'none' } : { opacity: thirdOpacity }}
            inert={chapter !== 2}
          >
            <p className="story-kicker">From a sketch to something real</p>
            <h2>
              Make it
              <br />
              <span>happen.</span>
            </h2>
            <p className="story-description">
              Commerce platforms. Startup systems.
              <br />
              Built with intent, from the inside out.
            </p>
            <Link to="/#work" className="button primary">
              Explore my work <Stack size={18} />
            </Link>
          </motion.div>
        </div>
        <div className="story-scene">
          <div className="scene-disc" aria-hidden="true">
            <div className="scene-disc-inner" />
          </div>
          <div className="scene-cross scene-cross-a" aria-hidden="true">
            +
          </div>
          <div className="scene-cross scene-cross-b" aria-hidden="true">
            +
          </div>
          <motion.div
            className="scene-systems"
            style={
              still
                ? { display: 'none' }
                : { opacity: secondOpacity, scale: diagramScale }
            }
            aria-hidden="true"
          >
            <span className="system-wire wire-a" />
            <span className="system-wire wire-b" />
            <span className="system-wire wire-c" />
            <span className="system-token token-interface">
              <Code size={17} />
              Interface
            </span>
            <span className="system-token token-api">
              <Cube size={17} />
              API
            </span>
            <span className="system-token token-data">
              <Stack size={17} />
              Data
            </span>
          </motion.div>
          <motion.div
            className="character-layer"
            style={
              still
                ? {}
                : {
                    x: characterX,
                    rotate: characterRotate,
                    scale: characterScale,
                  }
            }
          >
            <CharacterSequence progress={scrollYProgress} paused={still} />
          </motion.div>
          <Magnetic className="speech-position">
            <button
              className="character-speech"
              onClick={() => setBubble(!bubble)}
              aria-label={`${bubble ? 'Let’s make it happen.' : 'Got a wild idea?'} Talk to comic Sourav`}
            >
              <span>
                {bubble ? 'Let’s make it happen.' : 'Got a wild idea?'}
              </span>
              <Sparkle size={17} />
            </button>
          </Magnetic>
          <motion.div
            className="scene-projects"
            style={still ? { display: 'none' } : { opacity: thirdOpacity }}
            inert={chapter !== 2}
          >
            <Link to="/work/check-your-deals">
              <span className="scene-project-icon">C</span>
              <span>
                <strong>Check Your Deals</strong>
                <small>Live product</small>
              </span>
              <Plus size={17} />
            </Link>
            <Link to="/work/day-one-crm">
              <span className="scene-project-icon">D</span>
              <span>
                <strong>Day One CRM</strong>
                <small>Built & used internally</small>
              </span>
              <Plus size={17} />
            </Link>
          </motion.div>
        </div>
        <div className="story-bottom">
          <div className="story-chapters" aria-label="Story chapters">
            {['The person', 'The process', 'The products'].map((label, i) => (
              <button
                key={label}
                onClick={() => seek(i === 0 ? 0 : i === 1 ? 0.48 : 0.95)}
                className={chapter === i ? 'active' : ''}
                aria-current={chapter === i ? 'step' : undefined}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="story-playback">
            <button
              className="motion-toggle"
              aria-label={
                motionEnabled ? 'Pause story motion' : 'Enable story motion'
              }
              onClick={() => {
                seek(0)
                setMotionEnabled(!motionEnabled)
              }}
            >
              {motionEnabled ? <Pause size={14} /> : <Play size={14} />}
            </button>
            <label htmlFor="story-scrub">Your scroll. My story.</label>
            <input
              disabled={still}
              ref={slider}
              id="story-scrub"
              aria-label="Scrub character story"
              type="range"
              min="0"
              max="100"
              defaultValue="0"
              onChange={(event) => seek(Number(event.target.value) / 100)}
            />
          </div>
        </div>
        <motion.div
          className="story-progress"
          aria-hidden="true"
          style={still ? {} : { width: lineWidth }}
        />
      </div>
    </section>
  )
}
