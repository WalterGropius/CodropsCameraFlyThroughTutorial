import { Canvas, useFrame } from "@react-three/fiber";
import { Gltf, ScrollControls, useScroll, PresentationControls, Environment, EnvironmentMap, Loader ,AccumulativeShadows,RandomizedLight} from "@react-three/drei";
import { getProject, val } from "@theatre/core";
import theatreState from "./theatreState.json";

import {
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";

export default function App() {
  const sheet = getProject("Fly Through", { state: theatreState }).sheet(
    "Scene"
  );

  return (
    <Canvas gl={{ preserveDrawingBuffer: true }}>
      <ScrollControls pages={5}>
        <SheetProvider sheet={sheet}>
          <Scene />
        </SheetProvider>
      </ScrollControls>
    </Canvas>
  );
}

function Scene() {
  const sheet = useCurrentSheet();
  const scroll = useScroll();
  let lastScrollOffset = 0;
  // our callback will run on every animation frame
  useFrame(() => {
    if (lastScrollOffset !== scroll.offset) {
      // the length of our sequence
      const sequenceLength = val(sheet.sequence.pointer.length);
      // update the "position" of the playhead in the sequence, as a fraction of its whole length
      sheet.sequence.position = scroll.offset * sequenceLength;
      
      const event = new CustomEvent('scrollChanged', { detail: scroll.offset });
      document.dispatchEvent(event);

      lastScrollOffset = scroll.offset;
    }});

  const bgColor = "#8883b3";

  return (
    <>
      <color attach="background" args={[bgColor]} />
      <fog attach="fog" color={bgColor} near={-10} far={3} />
      <ambientLight intensity={0.1} />
    <Environment background={false} files="dawn.hdr" />
      <PresentationControls
      enabled={true} // the controls can be disabled by setting this to false
      global={false} // Spin globally or by dragging the model
      cursor={true} // Whether to toggle cursor style on drag
      snap={true} // Snap-back to center (can also be a spring config)
      speed={0.1} // Speed factor
      zoom={1} // Zoom factor when half the polar-max is reached
      rotation={[0, 0, 0]} // Default rotation
      polar={[0, Math.PI / 2]} // Vertical limits
      azimuth={[-Infinity, Infinity]} // Horizontal limits
      config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
      >
    <Gltf src="/environment.glb" castShadow receiveShadow />
      </PresentationControls>
      
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 0, 0]}
        fov={90}
        near={0.1}
        far={70}
      />
    </>
  );
}
