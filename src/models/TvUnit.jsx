import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame} from "@react-three/fiber";
import {a} from "@react-spring/three"

import tvUnitScene from "../assets/3d/tv_unit.glb"

export function TvUnit(props) {
    const tvRef = useRef();
    useFrame(() => {
      tvRef.current.rotation.y += 0.01;
    });
  const { nodes, materials } = useGLTF(tvUnitScene);
  return (
    <group ref={tvRef} {...props} position={[-0.5, -1, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box009.geometry}
        material={materials["Wood 01"]}
        position={[-0.32, 0.02, -0.289]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box010.geometry}
        material={materials["Wood 01"]}
        position={[1.66, 0.02, -0.289]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base.geometry}
        material={materials["Plexi white"]}
        position={[0.665, 0.02, -0.289]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_03.geometry}
        material={materials["Wood 01"]}
        position={[0.197, 0.266, -0.064]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box014.geometry}
        material={materials["Wood 01"]}
        position={[1.66, 0.49, -0.364]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box015.geometry}
        material={materials["Wood 01"]}
        position={[1.5, 0.49, -0.504]}
        rotation={[0, 1.571, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box016.geometry}
        material={materials["Wood 01"]}
        position={[-0.32, 0.49, -0.364]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box017.geometry}
        material={materials["Wood 01"]}
        position={[0.18, 0.49, -0.364]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box018.geometry}
        material={materials["Wood 01"]}
        position={[-0.072, 1.57, -0.361]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box019.geometry}
        material={materials["Wood 01"]}
        position={[0.572, 1.52, -0.361]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box020.geometry}
        material={materials["Wood 01"]}
        position={[0.572, 1.523, -0.494]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shelf.geometry}
        material={materials["Plexi white"]}
        position={[-0.31, 0.918, -0.389]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box022.geometry}
        material={materials["Plexi white"]}
        position={[-0.31, 1.249, -0.389]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line004.geometry}
        material={materials.Metal}
        position={[-0.304, 1.239, -0.311]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line005.geometry}
        material={materials.Metal}
        position={[-0.304, 1.239, -0.478]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line010.geometry}
        material={materials.Metal}
        position={[0.164, 1.239, -0.311]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={-0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line011.geometry}
        material={materials.Metal}
        position={[0.164, 1.239, -0.478]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={-0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box024.geometry}
        material={materials["Wood 01"]}
        position={[-0.069, 1.219, -0.514]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box025.geometry}
        material={materials["Wood 01"]}
        position={[0.706, 0.908, -0.514]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials.Metal}
        position={[0.565, 1.383, -0.432]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={materials.Metal}
        position={[1.215, 1.383, -0.432]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box027.geometry}
        material={materials["Wood 01"]}
        position={[0.172, 0.02, -0.289]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box028.geometry}
        material={materials["Wood 01"]}
        position={[0.667, 0.02, -0.289]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box029.geometry}
        material={materials["Wood 01"]}
        position={[1.167, 0.02, -0.289]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_01.geometry}
        material={materials["Wood 01"]}
        position={[0.197, 0.266, -0.064]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_02.geometry}
        material={materials["Wood 01"]}
        position={[0.197, 0.266, -0.064]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Metal_leg.geometry}
        material={materials.Metal}
        position={[-0.357, 0.02, -0.1]}
        rotation={[Math.PI, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Metal_leg001.geometry}
        material={materials.Metal}
        position={[-0.357, 0.02, -0.466]}
        rotation={[Math.PI, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Metal_leg002.geometry}
        material={materials.Metal}
        position={[1.694, 0.02, -0.466]}
        rotation={[Math.PI, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Metal_leg003.geometry}
        material={materials.Metal}
        position={[1.694, 0.02, -0.1]}
        rotation={[Math.PI, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Metal_leg004.geometry}
        material={materials.Metal}
        position={[1.17, 0.02, -0.466]}
        rotation={[Math.PI, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Metal_leg005.geometry}
        material={materials.Metal}
        position={[1.17, 0.02, -0.1]}
        rotation={[Math.PI, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Metal_leg006.geometry}
        material={materials.Metal}
        position={[0.67, 0.02, -0.466]}
        rotation={[Math.PI, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Metal_leg007.geometry}
        material={materials.Metal}
        position={[0.67, 0.02, -0.1]}
        rotation={[Math.PI, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Metal_leg008.geometry}
        material={materials.Metal}
        position={[0.17, 0.02, -0.466]}
        rotation={[Math.PI, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Metal_leg009.geometry}
        material={materials.Metal}
        position={[0.17, 0.02, -0.1]}
        rotation={[Math.PI, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text002.geometry}
        material={materials.Metal}
        position={[0.915, 0.556, -0.261]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.002, 0.001, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box005.geometry}
        material={materials.Metal}
        position={[1.27, 0.8, -0.321]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials.Metal}
        position={[0.515, 0.795, -0.322]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials.Metal}
        position={[0.578, 0.48, -0.394]}
        rotation={[Math.PI / 9, 0, Math.PI]}
        scale={-0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line002.geometry}
        material={materials.Metal}
        position={[1.313, 0.491, -0.337]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box004.geometry}
        material={materials.Metal}
        position={[0.578, 0.575, -0.329]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box003.geometry}
        material={materials.Metal}
        position={[1.251, 0.575, -0.329]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials.Metal}
        position={[1.251, 0.48, -0.394]}
        rotation={[-2.793, 0, Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line003.geometry}
        material={materials.Metal}
        position={[0.516, 0.491, -0.337]}
        rotation={[0, 0, Math.PI]}
        scale={-0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box001.geometry}
        material={materials["Plastic dark"]}
        position={[0.915, 0.91, -0.261]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box006.geometry}
        material={materials.Metal}
        position={[1.303, 0.8, -0.321]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box007.geometry}
        material={materials.Metal}
        position={[1.286, 0.787, -0.321]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials.Metal}
        position={[0.64, 0.795, -0.322]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials.Metal}
        position={[0.66, 0.795, -0.322]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials.Metal}
        position={[0.62, 0.795, -0.322]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box030.geometry}
        material={materials["Wood 01"]}
        position={[0.19, 0.49, -0.504]}
        rotation={[0, 1.571, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box031.geometry}
        material={materials["Wood 01"]}
        position={[0.572, 1.363, -0.361]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.001}
      />
      <group position={[0.269, 1.394, -0.426]} scale={[0.001, 0, 0.001]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box004001.geometry}
          material={materials["one day"]}
          position={[0, -20.2, -0.111]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line009.geometry}
          material={materials["one day"]}
          position={[0.019, 0, 0]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box007001.geometry}
        material={materials["13 - Default"]}
        position={[0.108, 0.799, -0.327]}
        rotation={[-Math.PI, 0, 2.007]}
        scale={-0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box008.geometry}
        material={materials.soyka}
        position={[-0.196, 0.815, -0.327]}
        rotation={[-Math.PI, 0, 1.222]}
        scale={[-0.002, -0.001, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box009001.geometry}
        material={materials.zatmenie}
        position={[0.269, 1.404, -0.426]}
        scale={[0.002, 0.002, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box010001.geometry}
        material={materials["20 - Default"]}
        position={[1.598, 1.436, -0.426]}
        rotation={[Math.PI, 0, -1.222]}
        scale={-0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box011.geometry}
        material={materials.rassvet}
        position={[-0.218, 0.82, -0.327]}
        rotation={[-Math.PI, 0, 1.222]}
        scale={-0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box012.geometry}
        material={materials.gostiya}
        position={[1.629, 1.441, -0.426]}
        rotation={[Math.PI, 0, -1.222]}
        scale={[-0.001, -0.002, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box013.geometry}
        material={materials["01"]}
        position={[0.135, 0.806, -0.327]}
        rotation={[-Math.PI, 0, 2.007]}
        scale={[-0.002, -0.001, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box014001.geometry}
        material={materials["03 - Default"]}
        position={[-0.255, 0.819, -0.327]}
        rotation={[Math.PI / 2, Math.PI / 9, Math.PI / 2]}
        scale={-0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_04.geometry}
        material={materials["Plexi white"]}
        position={[-0.336, 0.01, -0.206]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.001}
      />
      <group
        position={[0.143, 1.049, -0.186]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box033.geometry}
          material={materials["Plastic dark"]}
          position={[0, 0, -0.439]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box034.geometry}
          material={materials["Plastic dark"]}
          position={[0, 52.648, 7.782]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box035.geometry}
          material={materials["Plastic dark"]}
          position={[0, -50.542, 7.782]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
        />
      </group>
      <group
        position={[0.637, 0.355, -0.037]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box036.geometry}
          material={materials["Plastic dark"]}
          position={[0, 0, -0.439]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box037.geometry}
          material={materials["Plastic dark"]}
          position={[0, -50.542, 7.782]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box038.geometry}
          material={materials["Plastic dark"]}
          position={[0, 52.648, 7.782]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
        />
      </group>
      <group
        position={[0.701, 0.355, -0.037]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box039.geometry}
          material={materials["Plastic dark"]}
          position={[0, 0, -0.439]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box040.geometry}
          material={materials["Plastic dark"]}
          position={[0, -50.542, 7.782]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box041.geometry}
          material={materials["Plastic dark"]}
          position={[0, 52.648, 7.782]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
        />
      </group>
      <group
        position={[1.207, 0.355, -0.037]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box042.geometry}
          material={materials["Plastic dark"]}
          position={[0, 0, -0.439]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box043.geometry}
          material={materials["Plastic dark"]}
          position={[0, -50.542, 7.782]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box044.geometry}
          material={materials["Plastic dark"]}
          position={[0, 52.648, 7.782]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shelf001.geometry}
        material={materials["Plexi white"]}
        position={[-0.31, 0.261, -0.389]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line012.geometry}
        material={materials.Metal}
        position={[-0.304, 0.251, -0.311]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line013.geometry}
        material={materials.Metal}
        position={[-0.304, 0.251, -0.478]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line014.geometry}
        material={materials.Metal}
        position={[0.156, 0.251, -0.478]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={-0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line015.geometry}
        material={materials.Metal}
        position={[0.156, 0.251, -0.311]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={-0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box046.geometry}
        material={materials.zatmenie}
        position={[-0.227, 0.119, -0.278]}
        scale={[0.002, 0.002, 0.001]}
      />
      <group position={[-0.227, 0.109, -0.278]} scale={[0.001, 0, 0.001]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box047.geometry}
          material={materials["one day"]}
          position={[0, -20.2, -0.111]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line016.geometry}
          material={materials["one day"]}
          position={[0.019, 0, 0]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box048.geometry}
        material={materials.gostiya}
        position={[0.146, 0.157, -0.278]}
        rotation={[Math.PI, 0, -1.222]}
        scale={[-0.001, -0.002, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box049.geometry}
        material={materials["20 - Default"]}
        position={[0.115, 0.153, -0.278]}
        rotation={[Math.PI, 0, -1.222]}
        scale={-0.001}
      />
      <group position={[-0.23, 0.27, -0.278]} scale={[0.001, 0, 0.001]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box050.geometry}
          material={materials["one day"]}
          position={[0, -20.2, -0.111]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line017.geometry}
          material={materials["one day"]}
          position={[0.019, 0, 0]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shelf002.geometry}
        material={materials["Plexi white"]}
        position={[-0.31, 0.734, -0.389]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line018.geometry}
        material={materials.Metal}
        position={[0.164, 0.724, -0.311]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={-0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line019.geometry}
        material={materials.Metal}
        position={[0.164, 0.724, -0.478]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={-0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line020.geometry}
        material={materials.Metal}
        position={[-0.304, 0.724, -0.311]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line021.geometry}
        material={materials.Metal}
        position={[-0.304, 0.724, -0.478]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Counter_01.geometry}
        material={materials["Plexi white"]}
        position={[0.687, 0.261, -0.501]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <group
        position={[0.001, 0.589, -0.187]}
        rotation={[0, -Math.PI / 3, 0]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box052.geometry}
          material={materials.Frame}
          position={[12.342, -3.42, 0]}
          rotation={[0, 0, -1.222]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object005.geometry}
          material={materials["Picture Frame"]}
          position={[12.342, -3.42, 0]}
          rotation={[0, 0, -1.222]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object006.geometry}
          material={materials.Frame}
          position={[5.792, 79.15, -66.246]}
          rotation={[Math.PI / 2, 0.175, -Math.PI / 2]}
          scale={0.316}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object007.geometry}
          material={materials["05 - VRay Material"]}
          position={[-0.344, 66.96, -55.689]}
          rotation={[Math.PI / 2, Math.PI / 9, -Math.PI / 2]}
          scale={0.316}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object008.geometry}
          material={materials["05 - VRay Material"]}
          position={[-0.344, 66.96, -138.558]}
          rotation={[Math.PI / 2, Math.PI / 9, -Math.PI / 2]}
          scale={0.316}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TV_Screen.geometry}
        material={materials["TV Screen"]}
        position={[0.916, 0.91, -0.268]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line023.geometry}
        material={materials.vase}
        position={[0.9, 1.495, -0.49]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.001}
      />
      <group
        position={[-0.211, 0.489, -0.15]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh101.geometry}
          material={materials["white ceramic"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh101_1.geometry}
          material={materials.plant_ground}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh101_2.geometry}
          material={materials.plant_leave}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line024.geometry}
        material={materials.Metal}
        position={[-0.304, 0.908, -0.478]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line025.geometry}
        material={materials.Metal}
        position={[0.164, 0.908, -0.478]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={-0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line026.geometry}
        material={materials.Metal}
        position={[0.164, 0.908, -0.311]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={-0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line027.geometry}
        material={materials.Metal}
        position={[-0.304, 0.908, -0.311]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
    </group>
  );
}
