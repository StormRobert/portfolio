import { Canvas } from "@react-three/fiber";
import { Experience } from "../src/components/experience";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function App() {
  

  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
     
    </>
  )
}

export default App
