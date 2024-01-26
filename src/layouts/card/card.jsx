import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../../components/Loader";

export default function Card({ product }) {
  return (
    <div className="flex-none border-2 border-slate-400 aspect-video rounded-t-md rounded-b bg-gray-200 ">
      <div className="w-full h-5/6 ">
        <Canvas
          className="bg-white border-b-2 border-slate-400"
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
      <div className="flex justify-center">
        <div className="flex justify-center text-xl text-black">
          {product.title}
        </div>
      </div>
    </div>
  );
}
