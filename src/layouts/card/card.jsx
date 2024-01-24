import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../../components/Loader";

export default function Card({ product }) {
  return (
    <div className="flex-none aspect-video rounded-t-md rounded-b bg-purple-700">
      <div className="w-full h-5/6 ">
        <Canvas
          className="bg-red-500"
          camera={{ near: 0.1, far: 1000, position: [0, 0, 2] }}
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
    </div>
  );
}
