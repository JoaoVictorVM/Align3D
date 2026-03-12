import { useRef } from "react";
import { Mesh } from "three";

export default function PuzzleObject() {
  const meshRef = useRef<Mesh>(null);

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#E5E9F0" />
    </mesh>
  );
}
