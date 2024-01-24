import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function Vcanvas({ children }) {
  return (
    <Canvas
      className="border border-black bg-gray-200"
      camera={{ near: 0.1, far: 1000, position: [0, 0, 10] }}
    >
      <Suspense fallback={<Loader />}>
        <directionalLight position={[0, 40, 10]} intensity={3} />
        <ambientLight intensity={0.5} />
        <hemisphereLight
          skyColor="#b1e1ff"
          groundColor="#000000"
          intensity={1}
        />
        {children}
      </Suspense>
    </Canvas>
  );
}
