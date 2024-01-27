import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../../components/Loader";

export default function Card({ product }) {
  return (
    <div className=" border-[3px] border-[#54f4ff] overflow-hidden rounded-br-3xl">
      <div className="aspect-video">
        <Canvas
          className="bg-white border-b-4 border-[#54f4ff]"
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
        <div className="flex justify-between items-center px-9 h-12 md:text-2xl text-black bg-slate-100">
          {product.title}
          <div>
            Detaylar 
          </div>
      </div>
    </div>
  );
}
