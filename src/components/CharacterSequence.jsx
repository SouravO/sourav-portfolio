import { useEffect, useRef } from 'react'
import { useMotionValueEvent } from 'motion/react'

const poses = [
  { name: 'focus', src: '/character/comic-focus.webp' },
  { name: 'connect', src: '/character/comic-connect.webp' },
  { name: 'welcome', src: '/character/comic-welcome.webp' },
]

// Likeness-based comic character pose cuts across the scroll story.
export default function CharacterSequence({ progress, paused = false }) {
  const image = useRef(null)
  const lastPose = useRef(0)
  function showPose(value) {
    const index = paused ? 0 : value < 0.32 ? 0 : value < 0.67 ? 1 : 2
    if (!image.current || index === lastPose.current) return
    lastPose.current = index
    image.current.srcset = `/character/comic-${poses[index].name}-mobile.webp 450w, ${poses[index].src} 900w`
    image.current.src = poses[index].src
    image.current.dataset.pose = poses[index].name
  }
  useMotionValueEvent(progress, 'change', showPose)
  useEffect(() => {
    if (paused) {
      image.current.srcset =
        '/character/comic-focus-mobile.webp 450w, /character/comic-focus.webp 900w'
      image.current.src = poses[0].src
      image.current.dataset.pose = 'focus'
      lastPose.current = 0
      return
    }
    const preload = poses.slice(1).map((pose) => {
      const img = new Image()
      img.decoding = 'async'
      img.fetchPriority = 'low'
      img.src = window.matchMedia('(max-width: 767px)').matches
        ? `/character/comic-${pose.name}-mobile.webp`
        : pose.src
      return img
    })
    return () =>
      preload.forEach((img) => {
        img.onload = null
      })
  }, [paused])
  return (
    <div className="character-sequence">
      <img
        ref={image}
        className="character-poster"
        src={poses[0].src}
        srcSet="/character/comic-focus-mobile.webp 450w, /character/comic-focus.webp 900w"
        sizes="(max-width: 767px) 42svh, 650px"
        decoding="async"
        data-pose="focus"
        alt="Ink-drawn comic portrait of Sourav at his laptop, with swept curly hair and a mustache"
        width="900"
        height="900"
        fetchPriority="high"
      />
    </div>
  )
}
