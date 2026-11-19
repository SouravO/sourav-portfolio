import { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Line } from '@react-three/drei/core/Line.js'
import * as THREE from 'three'

function Core({ active }) {
  const group = useRef()
  const knot = useRef()
  const points = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => {
        const phi = Math.acos(1 - (2 * (i + 0.5)) / 12)
        const theta = Math.PI * (1 + Math.sqrt(5)) * i
        return new THREE.Vector3(
          2.05 * Math.cos(theta) * Math.sin(phi),
          2.05 * Math.sin(theta) * Math.sin(phi),
          2.05 * Math.cos(phi),
        )
      }),
    [],
  )
  useFrame((state, delta) => {
    if (state.gl.domElement.dataset.rendered !== 'true')
      state.gl.domElement.dataset.rendered = 'true'
    const dt = Math.min(delta, 0.05)
    group.current.rotation.y += dt * 0.12
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      state.pointer.y * 0.18,
      3,
      dt,
    )
    group.current.rotation.z = THREE.MathUtils.damp(
      group.current.rotation.z,
      -state.pointer.x * 0.15 + active * 0.1,
      3,
      dt,
    )
    knot.current.rotation.y -= dt * 0.22
    knot.current.rotation.z += dt * 0.08
  })
  return (
    <group ref={group} rotation={[0.25, 0.4, -0.2]}>
      <mesh ref={knot}>
        <torusKnotGeometry args={[0.98, 0.285, 180, 24, 2, 3]} />
        <meshStandardMaterial
          color="#b8f36c"
          metalness={0.82}
          roughness={0.25}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.92, 1]} />
        <meshBasicMaterial
          color="#a7bb8b"
          wireframe
          transparent
          opacity={0.13}
        />
      </mesh>
      {points.map((point, i) => (
        <group key={i}>
          <mesh position={point}>
            <sphereGeometry args={[i % 3 === active ? 0.065 : 0.035, 12, 12]} />
            <meshBasicMaterial
              color={i % 3 === active ? '#c5ff78' : '#66834b'}
            />
          </mesh>
          {i % 2 === 0 && (
            <Line
              points={[point, points[(i + 4) % points.length]]}
              color="#a3c47d"
              transparent
              opacity={0.2}
              lineWidth={0.7}
            />
          )}
        </group>
      ))}
      <mesh rotation={[Math.PI / 2.4, 0.2, 0]}>
        <torusGeometry args={[2.42, 0.008, 8, 150]} />
        <meshBasicMaterial color="#769653" transparent opacity={0.45} />
      </mesh>
      <mesh rotation={[-0.3, 0.7, 0.2]}>
        <torusGeometry args={[2.45, 0.004, 8, 150]} />
        <meshBasicMaterial color="#769653" transparent opacity={0.3} />
      </mesh>
    </group>
  )
}

function ContextEvents({ onFailure }) {
  const gl = useThree((state) => state.gl)
  useEffect(() => {
    const canvas = gl.domElement
    canvas.addEventListener('webglcontextlost', onFailure)
    return () => canvas.removeEventListener('webglcontextlost', onFailure)
  }, [gl, onFailure])
  return null
}

export default function CoreScene({ active = 0, onFailure, onReady }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.3], fov: 43 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      onCreated={() => onReady()}
      fallback={null}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 4, 5]} intensity={4} color="#d4ffa4" />
      <directionalLight
        position={[-4, -2, 3]}
        intensity={2.5}
        color="#8d9d7a"
      />
      <pointLight position={[0, -2, -3]} intensity={14} color="#b1ed61" />
      <ContextEvents onFailure={onFailure} />
      <Core active={active} />
    </Canvas>
  )
}
