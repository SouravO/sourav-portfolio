import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { Asterisk } from '@phosphor-icons/react'

export default function AdventureHero({ onPlayIntro }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const [ink, setInk] = useState(false)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])
  return (
    <section ref={ref} className={`adventure-cover ${ink ? 'ink-mode' : ''}`} aria-labelledby="cover-title">
      <motion.picture className="cover-picture" style={reduced ? {} : { y }}>
        <source media="(max-width: 600px)" srcSet="/illustrations/cover-mobile.webp" />
        <img src="/illustrations/cover.webp" alt="Sourav in a red shirt, standing naturally with a laptop on an illustrated city street" width="1536" height="1024" fetchPriority="high" />
      </motion.picture>
      <div className="cover-edition">
        <span>THE SOURAV COLLECTION</span>
        <div className="cover-edition-controls">
          {onPlayIntro && (
            <button
              type="button"
              className="cover-intro-pill"
              onClick={onPlayIntro}
            >
              🎬 MARVEL INTRO
            </button>
          )}
          <button onClick={() => setInk(!ink)} aria-pressed={ink}>
            INK MODE <span>{ink ? 'ON' : 'OFF'}</span>
          </button>
        </div>
      </div>
      <div className="cover-title-wrap">
        <p className="caption cover-kicker">Sourav / Full-stack engineer & technical lead</p>
        <h1 id="cover-title"><span>Ideas into</span><strong>real products.</strong></h1>
      </div>
      <div className="cover-intro">
        <p className="caption">I’m Sourav. I build the interfaces, APIs, and systems that turn a product idea into something people can use.</p>
        <Link to="/#work" className="button primary">Explore the work <Asterisk size={22} weight="bold" /></Link>
      </div>
      <p className="caption cover-note">Every good product starts with a little curiosity.</p>
      <span className="cover-credit">STORY & CODE BY SOURAV</span>
    </section>
  )
}
