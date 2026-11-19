import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'motion/react'

// Original Motion implementation, inspired by the tactile interaction category at React Bits.
export default function Magnetic({ children, className = '' }) {
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 230, damping: 18 })
  const springY = useSpring(y, { stiffness: 230, damping: 18 })
  return (
    <motion.div
      className={`magnetic ${className}`}
      style={reduce ? {} : { x: springX, y: springY }}
      onPointerMove={(event) => {
        if (reduce || event.pointerType !== 'mouse') return
        const rect = event.currentTarget.getBoundingClientRect()
        x.set((event.clientX - rect.left - rect.width / 2) * 0.12)
        y.set((event.clientY - rect.top - rect.height / 2) * 0.12)
      }}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}
