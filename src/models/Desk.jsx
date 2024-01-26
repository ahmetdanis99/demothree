import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import deskScene from "../assets/3d/desk.glb";

export default function Desk(props) {
  const { viewport } = useThree();
  const deskRef = useRef();

  useFrame(({ mouse }) => {
    const x = (mouse.x * 2.5 * viewport.width) / 2;
    deskRef.current.rotation.set(0, 3.2 + x, 0);
  });
  const { nodes, materials } = useGLTF(deskScene);
  return (
    <group ref={deskRef} {...props} position={[0, -0.5, 1]}>
      <group position={[0.002, 0.023, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_1.geometry}
          material={materials.wire_hole_plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_2.geometry}
          material={materials["Bamboo Wood"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_3.geometry}
          material={materials.Steel}
        />
      </group>
    </group>
  );
}
