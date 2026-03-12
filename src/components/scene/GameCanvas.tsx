import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import PuzzleObject from "./PuzzleObject";

export default function GameCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <PuzzleObject />
      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  );
}
