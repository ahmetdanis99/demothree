import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import ElectricBox from "../models/ElectricBox";

export default function Home() {
  const adjustElectricBoxForScreenSize = () => {
    let screenScale = [1, 1, 1];
    let screenPosition = [0, -20, -60];
    let rotation = [0, 0, 0];

    // if (window.innerWidth < 768) {
    //   screenScale = [0.9, 0.9, 0.9];
    // } else {
    //   screenScale = [1, 1, 1];
    // }
    return [screenScale, screenPosition, rotation];
  };

  const [ElectricBoxScale, ElectricBoxPosition, ElectricBoxRotation] =
    adjustElectricBoxForScreenSize();

  return (
    <main className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-9 px-9">
      <div className="flex-none aspect-video rounded-t-md rounded-b bg-purple-700">
        <div className="w-full h-5/6 ">
          <Canvas className="bg-red-500" camera={{ near: 0.1, far: 1000 }}>
            <Suspense fallback={<Loader />}>
              <directionalLight position={[1, 10, 1]} intensity={5} />
              <ambientLight intensity={0.5} />
              <hemisphereLight
                skyColor="#b1e1ff"
                groundColor="#000000"
                intensity={1}
              />

              <ElectricBox
                position={ElectricBoxPosition}
                scale={ElectricBoxScale}
                rotation={ElectricBoxRotation}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
      <div className="flex-none aspect-video rounded-t-md rounded-b bg-purple-700">
        <div className="w-full h-5/6 ">
          <Canvas className="bg-red-500" camera={{ near: 0.1, far: 1000 }}>
            <Suspense fallback={<Loader />}>
              <directionalLight position={[1, 10, 1]} intensity={5} />
              <ambientLight intensity={0.5} />
              {/* <pointLight />
              <spotLight />*/}
              <hemisphereLight
                skyColor="#b1e1ff"
                groundColor="#000000"
                intensity={1}
              />

              <ElectricBox
                position={ElectricBoxPosition}
                scale={ElectricBoxScale}
                rotation={ElectricBoxRotation}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
      <div className="flex-none aspect-video rounded-t-md rounded-b bg-purple-700">
        <div className="w-full h-5/6 ">
          <Canvas className="bg-red-500" camera={{ near: 0.1, far: 1000 }}>
            <Suspense fallback={<Loader />}>
              <directionalLight position={[1, 10, 1]} intensity={5} />
              <ambientLight intensity={0.5} />
              {/* <pointLight />
              <spotLight />*/}
              <hemisphereLight
                skyColor="#b1e1ff"
                groundColor="#000000"
                intensity={1}
              />

              <ElectricBox
                position={ElectricBoxPosition}
                scale={ElectricBoxScale}
                rotation={ElectricBoxRotation}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
      <div className="flex-none aspect-video rounded-t-md rounded-b bg-purple-700">
        <div className="w-full h-5/6 ">
          <Canvas className="bg-red-500" camera={{ near: 0.1, far: 1000 }}>
            <Suspense fallback={<Loader />}>
              <directionalLight position={[1, 10, 1]} intensity={5} />
              <ambientLight intensity={0.5} />
              {/* <pointLight />
              <spotLight />*/}
              <hemisphereLight
                skyColor="#b1e1ff"
                groundColor="#000000"
                intensity={1}
              />

              <ElectricBox
                position={ElectricBoxPosition}
                scale={ElectricBoxScale}
                rotation={ElectricBoxRotation}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </main>
  );
}
