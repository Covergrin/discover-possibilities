
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera, useProgress } from '@react-three/drei'
import CarModel from './CarModel'

// Loading indicator for the 3D model - this is rendered outside the Canvas
function Loader() {
  const { progress } = useProgress()
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="bg-black/80 text-white px-6 py-4 rounded-md">
        Loading: {Math.round(progress)}%
      </div>
    </div>
  )
}

// Fallback shape in case no model is provided - this is part of the 3D scene
function FallbackCar() {
  return (
    <mesh>
      <boxGeometry args={[1, 0.5, 2]} />
      <meshStandardMaterial color="#555555" roughness={0.5} metalness={0.8} />
    </mesh>
  )
}

// Scene components that will be rendered inside the Canvas
function Scene({ modelPath }: { modelPath: string }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[3, 2, 5]} fov={50} />
      <ambientLight intensity={0.5} />
      <spotLight 
        position={[10, 10, 10]} 
        angle={0.15} 
        penumbra={1} 
        intensity={1} 
        castShadow 
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      {modelPath ? (
        <CarModel path={modelPath} scale={1.5} />
      ) : (
        <FallbackCar />
      )}
      <Environment preset="sunset" />
      
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={2}
        maxDistance={10}
      />
    </>
  )
}

export default function ModelViewer({ modelPath = '' }) {
  return (
    <div className="w-full h-full min-h-[500px] relative">
      <Canvas shadows>
        <Suspense fallback={null}>
          <Scene modelPath={modelPath} />
        </Suspense>
      </Canvas>
      {/* Loader is outside the Canvas */}
      <Loader />
    </div>
  )
}
