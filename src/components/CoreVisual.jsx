import { Component, lazy, Suspense, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'
const CoreScene = lazy(() => import('./CoreScene'))

class SceneBoundary extends Component {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  componentDidCatch() {
    this.props.onFailure()
  }
  render() {
    return this.state.failed ? null : this.props.children
  }
}

export default function CoreVisual({ active = 0 }) {
  const reduce = useReducedMotion()
  const container = useRef(null)
  const [visible, setVisible] = useState(false)
  const [failed, setFailed] = useState(false)
  const [enabled, setEnabled] = useState(false)
  const [ready, setReady] = useState(false)
  useEffect(() => {
    if (reduce || !window.matchMedia('(min-width: 768px)').matches) return
    const timer = setTimeout(() => setEnabled(true), 900)
    return () => clearTimeout(timer)
  }, [reduce])
  useEffect(() => {
    if (!enabled || !visible || ready || failed) return
    const timer = setTimeout(() => setFailed(true), 12000)
    return () => clearTimeout(timer)
  }, [enabled, visible, ready, failed])
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: '120px' },
    )
    observer.observe(container.current)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={container} className="core-visual">
      <span className="sr-only">
        An interconnected sculptural core representing product, architecture,
        and engineering.
      </span>
      <img
        className="core-poster"
        src="/core-poster.svg"
        alt=""
        width="640"
        height="640"
        fetchPriority="high"
      />
      {!reduce && visible && enabled && !failed && (
        <div className="core-canvas" aria-hidden="true">
          <SceneBoundary onFailure={() => setFailed(true)}>
            <Suspense fallback={null}>
              <CoreScene
                active={active}
                onFailure={() => setFailed(true)}
                onReady={() => setReady(true)}
              />
            </Suspense>
          </SceneBoundary>
        </div>
      )}
      {!reduce && !ready && !failed && (
        <button
          className="core-enable"
          onClick={() => setEnabled(true)}
          disabled={enabled}
        >
          {enabled ? 'Loading 3D…' : 'Explore in 3D'}
        </button>
      )}
      {failed && (
        <span className="core-unavailable">Static view · 3D unavailable</span>
      )}
    </div>
  )
}
