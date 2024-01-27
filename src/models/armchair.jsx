import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import armchairScene from "../assets/3d/armchair.glb";

export default function Armchair(props) {
  const { viewport } = useThree();
  const armchairRef = useRef();

  useFrame(({ mouse }) => {
    const x = (mouse.x * 1.4 * viewport.width) / 2;
    armchairRef.current.rotation.set(0, x, 0);
  });
  const { nodes, materials } = useGLTF(armchairScene);
  return (
    <group ref={armchairRef} {...props} position={[0, -0.7, -0.4]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MOR_MT_1L_156_L_01.geometry}
        material={materials["Velutto_32.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MOR_MT_1L_156_L_02.geometry}
        material={materials["Wenge legs new.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MOR_MT_OT_98_170_R_01.geometry}
        material={materials["Velutto_32.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MOR_MT_OT_98_170_R_02.geometry}
        material={materials["Wenge legs new.001"]}
      />
    </group>
  );
}
