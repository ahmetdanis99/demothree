import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../../components/Loader";

export default function Carddetail({ product }) {
  return (
    <div className="flex-none rounded-t-md rounded-b w-full aspect-square">
      <Canvas
        className="border-2 border-slate-400"
        camera={{ near: 0.1, far: 1000, position: [0, 0, 3] }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[0, 40, 10]} intensity={3} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          {product.modelComponent}
        </Suspense>
      </Canvas>
    </div>
  );
}
