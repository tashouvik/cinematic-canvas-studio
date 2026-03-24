/**
 * ============================================================
 * SCENE 3D — Floating 3D objects using React Three Fiber
 * ============================================================
 * Film reel torus, floating cubes, and glowing spheres that
 * rotate slowly for a cinematic 3D background.
 * ============================================================
 */

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

/** Slowly rotating torus (film-reel inspired) */
const FilmReel = () => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.15;
    ref.current.rotation.y += delta * 0.1;
  });
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.5}>
      <mesh ref={ref} position={[3.5, 1.5, -2]}>
        <torusGeometry args={[1.2, 0.35, 16, 48]} />
        <meshStandardMaterial
          color="#FF7000"
          emissive="#FF7000"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
};

/** Floating wireframe cube */
const FloatingCube = ({ position, size, color }: { position: [number, number, number]; size: number; color: string }) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.2;
    ref.current.rotation.z += delta * 0.15;
  });
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <mesh ref={ref} position={position}>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial
          color={color}
          wireframe
          emissive={color}
          emissiveIntensity={0.4}
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>
  );
};

/** Glowing distorted sphere */
const GlowSphere = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.1;
  });
  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={1}>
      <mesh ref={ref} position={position}>
        <icosahedronGeometry args={[0.8, 4]} />
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.2}
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.4}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
};

/** Small floating particles in 3D space */
const Particles3D = () => {
  const count = 60;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      arr[i] = (Math.random() - 0.5) * 20;
      arr[i + 1] = (Math.random() - 0.5) * 12;
      arr[i + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null!);
  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#FF7000" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const Scene3D = () => (
  <div className="fixed inset-0 pointer-events-none z-[1]" aria-hidden="true">
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#FF7000" />
      <pointLight position={[-5, -3, 3]} intensity={0.5} color="#007F81" />

      <FilmReel />
      <FloatingCube position={[-4, -2, -3]} size={1.2} color="#007F81" />
      <FloatingCube position={[5, -3, -4]} size={0.7} color="#FF7000" />
      <FloatingCube position={[-2, 3, -5]} size={0.5} color="#007F81" />
      <GlowSphere position={[-5, 2, -2]} color="#FF7000" />
      <GlowSphere position={[4, -1, -6]} color="#007F81" />
      <Particles3D />
    </Canvas>
  </div>
);

export default Scene3D;
