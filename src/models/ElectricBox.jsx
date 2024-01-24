import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import electricBoxScene from "../assets/3d/electric_box.glb";
import { useFrame } from "@react-three/fiber";

export default function ElectricBox(props) {
  const boxRef = useRef();
  useFrame(() => {
    boxRef.current.rotation.y += 0.005;
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
