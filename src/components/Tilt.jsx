import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'motion/react'

// Original pointer-depth treatment; React Bits Tilted Card informed the interaction direction.
export default function Tilt({ children }) {
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(x, { stiffness: 160, damping: 20 })
  const rotateY = useSpring(y, { stiffness: 160, damping: 20 })
  return (
    <motion.div
      className="tilt-art"
      style={reduce ? {} : { rotateX, rotateY, transformPerspective: 1100 }}
      onPointerMove={(event) => {
        if (reduce || event.pointerType !== 'mouse') return
        const rect = event.currentTarget.getBoundingClientRect()
        x.set(-((event.clientY - rect.top) / rect.height - 0.5) * 7)
        y.set(((event.clientX - rect.left) / rect.width - 0.5) * 9)
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
