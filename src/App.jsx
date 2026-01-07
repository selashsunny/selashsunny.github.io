import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./style.css";

function Scene() {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <planeGeometry args={[20, 20, 20, 20]} />
      <meshStandardMaterial wireframe color="#00ffcc" />
    </mesh>
  );
}

export default function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 5, 5] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Scene />
        <OrbitControls />
      </Canvas>

      <div className="overlay">
        <h1>Selash Sunny</h1>
        <p>Cyber Security Engineer</p>
      </div>
    </>
  );
}
