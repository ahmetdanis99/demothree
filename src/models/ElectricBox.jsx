import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import electricBoxScene from "../assets/3d/electric_box.glb";

export default function ElectricBox(props) {
  const { viewport } = useThree();
  const boxRef = useRef();
  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2;
    boxRef.current.rotation.set(0, x, 0);
  });
  const { nodes, materials } = useGLTF(electricBoxScene);
  return (
    <group ref={boxRef} {...props} position={[0, -27, -60]}>
      <mesh
        geometry={nodes["Box003_Material_#2_0"].geometry}
        material={materials.Material_2}
        position={[24.168, 33.594, 5.495]}
        rotation={[0, Math.PI / 2, 0]}
      />
    </group>
  );
}
