import React, { Suspense,useState } from 'react';
import { 
  Environment, 
  Sphere, 
  Torus, 
  TorusKnot, 
  RoundedBox,
  Text3D,
  OrbitControls,
  Billboard
} from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { MeshTransmissionMaterial } from '@react-three/drei';

function CanvasContent() {
  const [isHovered, setIsHovered] = useState(false);
  const [shape, setShape] = useState('sphere');
  const [text, setText] = useState('hello \n\n\ world');

  const handlePointerOver = () => {
    setIsHovered(true);
    setText('Click\n\n\ me!');
  };

  const handlePointerOut = () => {
    setIsHovered(false);
    setText('hello \n\n\world');
  };

  const handleClick = () => {
    const shapes = ['torus', 'sphere', 'torusknot', 'roundedbox'];
    setShape(shapes[(shapes.indexOf(shape) + 1) % shapes.length]);
  };

  const renderShape = () => {
    const materialProps = {
      samples: 2,
      resolution: 8,
      transmission: 1,
      roughness: 0.02,
      thickness: 1.01,
      ior: 1.42,
      chromaticAberration: 0.03,
      distortion: 0.15,
      temporalDistortion: 0.05,
      clearcoat: 1,
      attenuationDistance: 0.5,
      transmissionSampler: true
    };

    switch(shape) {
      case 'torus':
        return <Torus ><MeshTransmissionMaterial {...materialProps} /></Torus>;
      case 'torusknot':
        return <TorusKnot scale={2}><MeshTransmissionMaterial {...materialProps} /></TorusKnot>;
      case 'roundedbox':
        return <RoundedBox><MeshTransmissionMaterial {...materialProps} /></RoundedBox>;
      default:
        return <Sphere><MeshTransmissionMaterial {...materialProps} /></Sphere>;
    }
  }

  return (
    <>
      <Environment files={'/flatway.hdr'} background={true} />
      <ambientLight intensity={0.5} />
      <pointLight intensity={isHovered ? 2000 : 0.1} />

      <mesh scale={0.7}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}>
        {renderShape()}
      </mesh>

      <Billboard follow={true}
        lockX={false}
        lockY={false}
        lockZ={false}>
        <Text3D
          position={[-3, 1, -1]}
          curveSegments={8}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.05}
          thickness={0}
          lineHeight={0.5}
          letterSpacing={isHovered ? 1 : 0.9}
          size={isHovered ? 2 : 0.9}
          font="./zenhand.json">
          {text}
          <meshStandardMaterial color={"white"} metalness={1} roughness={0} smooth={1} flatshading={0} />
        </Text3D>
      </Billboard>
    </>
  );
}

export default function Home () {
  return (
    <Suspense fallback={null}>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
        <CanvasContent />
        <OrbitControls autoRotate={true} autoRotateSpeed={0.2} enableZoom={false} maxDistance={10} minDistance={10}/>
      </Canvas>
    </Suspense > 
  );
}
