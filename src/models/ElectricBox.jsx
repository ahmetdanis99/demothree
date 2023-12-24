/* eslint-disable react/no-unknown-property */
import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import {a} from "@react-spring/three"

import electricBoxScene from "../assets/3d/electric_box.glb"

export default function ElectricBox(props) {

    const boxRef = useRef();
    const { nodes, materials } = useGLTF(electricBoxScene);
  return (
    <a.group ref={boxRef} {...props}>
      <mesh
        geometry={nodes["Box003_Material_#2_0"].geometry}
        material={materials.Material_2}
        position={[24.168, 33.594, 5.495]}
        rotation={[0, Math.PI / 2, 0]}
      />
    </a.group>
  );
}
