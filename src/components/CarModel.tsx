
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Mesh } from 'three'

interface CarModelProps {
  path: string
  position?: [number, number, number]
  scale?: number
  rotation?: [number, number, number]
}

export default function CarModel({ 
  path, 
  position = [0, 0, 0], 
  scale = 1, 
  rotation = [0, 0, 0] 
}: CarModelProps) {
  const meshRef = useRef<Mesh>(null)
  
  // This is a placeholder until the user uploads their actual 3D model
  // The scene will attempt to load the provided path, but will show a fallback if it fails
  const { scene } = useGLTF(path, true)
  
  // Rotate the car slightly for a better view
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
    }
  })
  
  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={[scale, scale, scale]}
    >
      <primitive object={scene} />
    </mesh>
  )
}
