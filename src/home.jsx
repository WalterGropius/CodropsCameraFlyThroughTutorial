import {
  Backdrop,
  Box,
  Environment,
  MeshDistortMaterial,
  MeshTransmissionMaterial,
  MeshWobbleMaterial,
  OrbitControls,
  Sphere,
  Stage
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useControls } from 'leva'
import { MeshNormalMaterial } from 'three'
import { Perf } from 'r3f-perf'
import { Suspense } from 'react'

export default function Home () {
  /* const config = useControls({
        meshPhysicalMaterial: false,
        transmissionSampler: false,
        backside: false,
        samples: { value: 10, min: 1, max: 32, step: 1 },
        resolution: { value: 2048, min: 256, max: 2048, step: 256 },
        transmission: { value: 1, min: 0, max: 1 },
        roughness: { value: 0.0, min: 0, max: 1, step: 0.01 },
        thickness: { value: 3.5, min: 0, max: 10, step: 0.01 },
        ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
        chromaticAberration: { value: 0.06, min: 0, max: 1 },
        anisotropy: { value: 0.1, min: 0, max: 1, step: 0.01 },
        distortion: { value: 0.0, min: 0, max: 1, step: 0.01 },
        distortionScale: { value: 0.3, min: 0.01, max: 1, step: 0.01 },
        temporalDistortion: { value: 0.5, min: 0, max: 1, step: 0.01 },
        clearcoat: { value: 1, min: 0, max: 1 },
        attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
        attenuationColor: '#ffffff',
        color: '#c9ffa1',
        bg: '#839681'
      }) */
  return (
    <><Suspense fallback={null}>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
        <Environment files={'/flatway.hdr'} background={true} />
        <ambientLight intensity={0.5} />
        <Sphere scale={0.7}>
          {' '}
          <MeshTransmissionMaterial
            samples={2}
            resolution={8}
            transmission={1}
            roughness={0.02}
            thickness={1.01}
            ior={1.42}
            chromaticAberration={0.03}
            distortion={0.15}
            temporalDistortion={0.05}
            clearcoat={1}
            attenuationDistance={0.5}
            transmissionSampler={true}
          />
        </Sphere>

        <OrbitControls autoRotate={true} autoRotateSpeed={0.2} />
         {/* <Perf position='top-left' /> */}
      </Canvas></Suspense > 
    </>
  )
}
