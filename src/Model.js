import React, { useRef, useEffect } from "react";
import { useGLTF, PerspectiveCamera, useAnimations, useMatcapTexture, MeshReflectorMaterial } from "@react-three/drei";
import * as THREE from 'three';



export function Model(props) {
  const depthMaterial = new THREE.MeshDepthMaterial();
  const group = useRef();
  const [matcap] = useMatcapTexture('CAE24E_6C9A23_A3C737_B3D43C')
  const { nodes, materials, animations } = useGLTF("/sitev5.glb");
  const { actions,mixer } = useAnimations(animations, group);
  React.useEffect(() => {
    for (let actionName in actions) {
      actions[actionName].play();
    }
  }, [actions]);
  setTimeout(() => {
    // actions["E1___Camera_Animated|CINEMA_4D_Main|Layer0"];
  },10000)
  useEffect(() => {
    if (materials.A123) {
      materials.A123.depthTest = true
      materials.A123.side = THREE.DoubleSide;
      materials.A123.needsUpdate = true;
    }
  }, [materials]);
  console.log(actions["E1___Camera_Animated|CINEMA_4D_Main|Layer0"])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="A1___Main_Scene"
          position={[-0.001, 45.137, 0.069]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <mesh
            name="Plane"
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={materials["A1 - Sky Clouds"]}
            position={[0, -6869.587, -171.932]}
          />
          <mesh
            name="A1_Main_Floor__Baked_"
            castShadow
            receiveShadow
            geometry={nodes.A1_Main_Floor__Baked_.geometry}
            material={materials.A123}
            side= {THREE.DoubleSide}
            //prevent from showing object above plane
            position={[-0.001, 45.137, 0.069]}
          />
        </group>
        <group
          name="A2___Floor_Objects"
          position={[1.037, 45.139, 15.054]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <mesh
            name="A2_Floor_Boat"
            castShadow
            receiveShadow
            geometry={nodes.A2_Floor_Boat.geometry}
            material={materials.A123}
            position={[-284.648, 81.609, 0.056]}
            rotation={[0, 0, -0.903]}
          />
          <mesh
            name="A2_Floor_Elephant"
            castShadow
            receiveShadow
            geometry={nodes.A2_Floor_Elephant.geometry}
            material={materials.A123}
            position={[161.215, 121.044, -0.029]}
            rotation={[0, 0, -1.854]}
          />
          <mesh
            name="A2_Floor_Sculpture"
            castShadow
            receiveShadow
            geometry={nodes.A2_Floor_Sculpture.geometry}
            material={materials.A123}
            position={[123.433, -202.653, -0.029]}
            rotation={[0, 0, -Math.PI / 4]}
          />
        </group>
        <group
          name="A3___Sky_Robot"
          position={[30, 76.464, -82.274]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <group
          name="A3___Sky_Spheres"
          position={[-30, 61.248, -50.307]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <mesh
            name="A3_Sky_Sphere1"
            castShadow
            receiveShadow
            geometry={nodes.A3_Sky_Sphere1.geometry}
            material={materials.A123}
            position={[3005.008, 4999.287, 1523.583]}
          />
          <mesh
            name="A3_Sky_Sphere2"
            castShadow
            receiveShadow
            geometry={nodes.A3_Sky_Sphere2.geometry}
            material={materials.A123}
            position={[3005.008, 4999.287, 1523.583]}
          />
        </group>
        <group
          name="B1___Main_Room"
          position={[0.623, 0, 9.696]}
          rotation={[1.569, 0.001, -0.282]}
          scale={0.01}
        >
          <mesh
            name="B1_Arc_C"
            castShadow
            receiveShadow
            geometry={nodes.B1_Arc_C.geometry}
            material={materials["B1 -  Main Room"]}
            position={[-666.805, -44.531, -433.146]}
            rotation={[0.002, -0.001, -0.24]}
          />
          <mesh
            name="B1_MR_Arc_D"
            castShadow
            receiveShadow
            geometry={nodes.B1_MR_Arc_D.geometry}
            material={materials["B1 -  Main Room"]}
            position={[506.469, 687.897, -431.187]}
            rotation={[0.002, -0.001, -1.635]}
          />
          <mesh
            name="B1_MR_POLE"
            castShadow
            receiveShadow
            geometry={nodes.B1_MR_POLE.geometry}
            material={materials["B1 -  Main Room"]}
            position={[-945.673, 658.578, 0.444]}
            rotation={[0.002, -0.001, 0.282]}
          />
          <mesh
            name="B1_MR_POLE_2"
            castShadow
            receiveShadow
            geometry={nodes.B1_MR_POLE_2.geometry}
            material={materials["B1 -  Main Room"]}
            position={[-1196.885, -909.304, -20.926]}
            rotation={[0.002, -0.001, 0.282]}
          />
          <mesh
            name="B1_MR_Room"
            castShadow
            receiveShadow
            geometry={nodes.B1_MR_Room.geometry}
            material={materials["B1 -  Main Room"]}
            position={[-1448.014, -201.516, 0.118]}
            rotation={[0.002, -0.001, 0.282]}
            scale={0.887}
          />
          <mesh
            name="B1_MR_Stiars"
            castShadow
            receiveShadow
            geometry={nodes.B1_MR_Stiars.geometry}
            material={materials["B1 -  Main Room"]}
            position={[-655.009, -325.947, -1.336]}
            rotation={[0.002, -0.001, -0.604]}
          />
          <mesh
            name="B1_MR_wall_B"
            castShadow
            receiveShadow
            geometry={nodes.B1_MR_wall_B.geometry}
            material={materials["B1 -  Main Room"]}
            position={[175.374, -1266.263, 0]}
            rotation={[0, 0, 1.501]}
          />
          <mesh
            name="B1_MR_wall_in_arc"
            castShadow
            receiveShadow
            geometry={nodes.B1_MR_wall_in_arc.geometry}
            material={materials["B1 -  Main Room"]}
            position={[389.359, 323.97, -406.853]}
            rotation={[0.002, -0.001, -1.635]}
          />
        </group>
        <group
          name="B2___Room_Elements"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <mesh
            name="B2_BigPlant_Left_PotBase"
            castShadow
            receiveShadow
            geometry={nodes.B2_BigPlant_Left_PotBase.geometry}
            material={materials["B2 - Room Elements"]}
            position={[-581.651, 1502.582, 2.02]}
            rotation={[0.004, -0.002, 0.236]}
          />
          <mesh
            name="B2_BigPlant_Right_PotBase_1"
            castShadow
            receiveShadow
            geometry={nodes.B2_BigPlant_Right_PotBase_1.geometry}
            material={materials["B2 - Room Elements"]}
            position={[458.283, 1552.459, 1.395]}
          />
          <mesh
            name="B2_Bookend_Back"
            castShadow
            receiveShadow
            geometry={nodes.B2_Bookend_Back.geometry}
            material={materials["B2 - Room Elements"]}
            position={[-206.348, 1862.64, 0.673]}
            rotation={[0.005, -0.03, -0.015]}
          />
          <mesh
            name="B2_Bookend_Front"
            castShadow
            receiveShadow
            geometry={nodes.B2_Bookend_Front.geometry}
            material={materials["B2 - Room Elements"]}
            position={[221.149, 2008.576, 1.352]}
            rotation={[0.001, 0, -1.235]}
          />
          <mesh
            name="B2_Lamp"
            castShadow
            receiveShadow
            geometry={nodes.B2_Lamp.geometry}
            material={materials["B2 - Room Elements"]}
            position={[132.137, 1729.315, -59.848]}
          />
          <mesh
            name="B2_SmallPlant_Left_Plant_2"
            castShadow
            receiveShadow
            geometry={nodes.B2_SmallPlant_Left_Plant_2.geometry}
            material={materials["B2 - Room Elements"]}
            position={[-229.995, 1933.561, 0.967]}
            rotation={[-0.004, 0.005, 0]}
          />
          <mesh
            name="B2_SmallPlant_Table_Pot_1"
            castShadow
            receiveShadow
            geometry={nodes.B2_SmallPlant_Table_Pot_1.geometry}
            material={materials["B2 - Room Elements"]}
            position={[87.232, 1747.258, -59.7]}
          />
          <mesh
            name="B2_Statue_Bird"
            castShadow
            receiveShadow
            geometry={nodes.B2_Statue_Bird.geometry}
            material={materials["B2 - Room Elements"]}
            position={[-445.6, 1508.244, 0.962]}
            rotation={[0, 0, 1.865]}
            scale={0.643}
          />
          <mesh
            name="B2_Statue_Dog"
            castShadow
            receiveShadow
            geometry={nodes.B2_Statue_Dog.geometry}
            material={materials["B2 - Room Elements"]}
            position={[346.957, 1221.148, 1.444]}
            rotation={[0, 0, 2.617]}
            scale={0.763}
          />
          <mesh
            name="B2_Statue_Hand"
            castShadow
            receiveShadow
            
            geometry={nodes.B2_Statue_Hand.geometry}
            material={materials["B2 - Room Elements"]}
            position={[-237.027, 2004.955, 1.391]}
            rotation={[0, 0, -1.341]}
            scale={1}
          >
          </mesh>
          <mesh
            name="B2_table"
            castShadow
            receiveShadow
            geometry={nodes.B2_table.geometry}
            material={materials["B2 - Room Elements"]}
            position={[145.401, 1774.541, -57.4]}
          />
          <mesh
            name="B2_Vessel_Drop"
            castShadow
            receiveShadow
            geometry={nodes.B2_Vessel_Drop.geometry}
            material={materials["B2 - Room Elements"]}
            position={[230.526, 2013.268, -86.596]}
          />
          <mesh
            name="B2_Vessel_Tall"
            castShadow
            receiveShadow
            geometry={nodes.B2_Vessel_Tall.geometry}
            material={materials["B2 - Room Elements"]}
            position={[466.494, 1406.465, 1.395]}
          />
          <mesh
            name="B2_Vessel_Top"
            castShadow
            receiveShadow
            geometry={nodes.B2_Vessel_Top.geometry}
            material={materials["B2 - Room Elements"]}
            position={[425.987, 1339.448, 1.386]}
            scale={0.88}
          />
          <mesh
            name="Pippi_S_Chair"
            castShadow
            receiveShadow
            geometry={nodes.Pippi_S_Chair.geometry}
            material={materials["B2 - Room Elements"]}
            position={[233.013, 1839.929, 1.565]}
            rotation={[0, 0, -2.259]}
          />
          <mesh
            name="Pippi_S_Chair_1"
            castShadow
            receiveShadow
            geometry={nodes.Pippi_S_Chair_1.geometry}
            material={materials["B2 - Room Elements"]}
            position={[229.18, 1696.064, 1.565]}
            rotation={[0, 0, 2.482]}
          />
          <mesh
            name="X_IGUL"
            castShadow
            receiveShadow
            geometry={nodes.X_IGUL.geometry}
            material={materials["B2 - Room Elements"]}
            position={[-91.59, 1863.186, 0]}
          />
          <mesh
            name="X_IGUL_1"
            castShadow
            receiveShadow
            geometry={nodes.X_IGUL_1.geometry}
            material={materials["B2 - Room Elements"]}
            position={[-46.308, 1895.087, 0]}
          />
          <mesh
            name="X_IGUL_13"
            castShadow
            receiveShadow
            geometry={nodes.X_IGUL_13.geometry}
            material={materials["B2 - Room Elements"]}
            position={[-105.51, 1912.695, 0.337]}
            rotation={[0, 0, -1.563]}
          />
          <mesh
            name="X_IGUL_2_1"
            castShadow
            receiveShadow
            geometry={nodes.X_IGUL_2_1.geometry}
            material={materials["B2 - Room Elements"]}
            position={[-80.362, 1969.946, 0.326]}
            rotation={[0, 0, -1.563]}
          />
          <mesh
            name="X_IGUL_5"
            castShadow
            receiveShadow
            geometry={nodes.X_IGUL_5.geometry}
            material={materials["B2 - Room Elements"]}
            position={[-133.715, 1937.07, 0.351]}
            rotation={[0, 0, -1.563]}
          />
          <mesh
            name="X_IGUL_6_1"
            castShadow
            receiveShadow
            geometry={nodes.X_IGUL_6_1.geometry}
            material={materials["B2 - Room Elements"]}
            position={[-104.961, 1938.34, 0.337]}
            rotation={[0, 0, -1.563]}
          />
          <mesh
            name="X_IGUL_9_1"
            castShadow
            receiveShadow
            geometry={nodes.X_IGUL_9_1.geometry}
            material={materials["B2 - Room Elements"]}
            position={[-105.51, 1912.695, 0.337]}
            rotation={[0, 0, -1.563]}
          />
        </group>
        <group name="B3___Backdrop" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            name="B3_ARCH"
            castShadow
            receiveShadow
            geometry={nodes.B3_ARCH.geometry}
            material={materials["B3 - Backdrop"]}
            position={[-463.912, -1356.707, 54.198]}
            rotation={[0, 0, 1.082]}
            scale={0.4}
          />
          <mesh
            name="B3_back_pillars"
            castShadow
            receiveShadow
            geometry={nodes.B3_back_pillars.geometry}
            material={materials["B3 - Backdrop"]}
            position={[-2682.83, -2367.67, -1072.446]}
          />
          <mesh
            name="B3_back_stairs"
            castShadow
            receiveShadow
            geometry={nodes.B3_back_stairs.geometry}
            material={materials["B3 - Backdrop"]}
            position={[-1763.275, -2937.374, -121.244]}
          />
          <mesh
            name="B3_close_sphere"
            castShadow
            receiveShadow
            geometry={nodes.B3_close_sphere.geometry}
            material={materials["B3 - Backdrop"]}
            position={[-2150.644, -2574.238, -43.216]}
            rotation={[0, 0, 1.776]}
            scale={10.23}
          />
          <mesh
            name="B3_Cylinder"
            castShadow
            receiveShadow
            geometry={nodes.B3_Cylinder.geometry}
            material={materials["B3 - Backdrop"]}
            position={[-2047.563, -3431.219, -603.794]}
            rotation={[0, 0, -1.648]}
          />
          <mesh
            name="B3_Far_away_building"
            castShadow
            receiveShadow
            geometry={nodes.B3_Far_away_building.geometry}
            material={materials["B3 - Backdrop"]}
            position={[-1723.911, -3360.498, -451.419]}
            rotation={[0, 0, -1.648]}
          />
          <mesh
            name="B3_Landscape_1"
            castShadow
            receiveShadow
            geometry={nodes.B3_Landscape_1.geometry}
            material={materials["B3 - Backdrop"]}
            position={[-1512.154, -7567.22, 144.378]}
          />
          <mesh
            name="B3_Landscape_2"
            castShadow
            receiveShadow
            geometry={nodes.B3_Landscape_2.geometry}
            material={materials["B3 - Backdrop"]}
            position={[-2594.626, -5591.625, 158.211]}
            rotation={[0, 0, 1.032]}
          />
          <mesh
            name="B3_Landscape_3"
            castShadow
            receiveShadow
            geometry={nodes.B3_Landscape_3.geometry}
            material={materials["B3 - Backdrop"]}
            position={[-1773.95, -3041.186, 50.736]}
          />
          <mesh
            name="B3_marbles"
            castShadow
            receiveShadow
            geometry={nodes.B3_marbles.geometry}
            material={materials["B3 - Backdrop"]}
            position={[-1182.432, -427.25, -12.909]}
            rotation={[0, 0, 1.776]}
          />
          <mesh
            name="B3_pebbles"
            castShadow
            receiveShadow
            geometry={nodes.B3_pebbles.geometry}
            material={materials["B3 - Backdrop"]}
            position={[-847.083, -1062.473, -3.109]}
            rotation={[0, 0, -1.941]}
          />
          <mesh
            name="B3_Stairs"
            castShadow
            receiveShadow
            geometry={nodes.B3_Stairs.geometry}
            material={materials["B3 - Backdrop"]}
            position={[-1784.039, -3698.22, -508.911]}
            rotation={[0, 0, -1.976]}
          />
        </group>
        <group
          name="C1___Pillars"
          position={[33.365, -2.599, -29.015]}
          rotation={[Math.PI / 2, 0, 1.082]}
          scale={0.004}
        >
          <mesh
            name="C1_Beat_Vessel_Drop"
            castShadow
            receiveShadow
            geometry={nodes.C1_Beat_Vessel_Drop.geometry}
            material={materials.C123}
            position={[3042.937, 4602.775, -649.836]}
            rotation={[0, 0, -1.082]}
            scale={2.5}
          />
          <mesh
            name="C1_Beat_Vessel_Tall"
            castShadow
            receiveShadow
            geometry={nodes.C1_Beat_Vessel_Tall.geometry}
            material={materials.C123}
            position={[3042.937, 4602.775, -649.836]}
            rotation={[0, 0, -1.082]}
            scale={2.5}
          />
          <mesh
            name="C1_Beat_Vessel_Top"
            castShadow
            receiveShadow
            geometry={nodes.C1_Beat_Vessel_Top.geometry}
            material={materials.C123}
            position={[3042.937, 4602.775, -649.836]}
            rotation={[0, 0, -1.082]}
            scale={2.5}
          />
          <mesh
            name="C1_Pillar1_Arch"
            castShadow
            receiveShadow
            geometry={nodes.C1_Pillar1_Arch.geometry}
            material={materials.C123}
            position={[3042.937, 4602.775, -649.836]}
            rotation={[0, 0, -1.082]}
            scale={2.5}
          />
          <mesh
            name="C1_Pillar1_Base"
            castShadow
            receiveShadow
            geometry={nodes.C1_Pillar1_Base.geometry}
            material={materials.C123}
            position={[3042.937, 4602.775, -649.836]}
            rotation={[0, 0, -1.082]}
            scale={2.5}
          />
          <mesh
            name="C1_Pillar1_Pillars"
            castShadow
            receiveShadow
            geometry={nodes.C1_Pillar1_Pillars.geometry}
            material={materials.C123}
            position={[3042.937, 4602.775, -649.836]}
            rotation={[0, 0, -1.082]}
            scale={2.5}
          />
          <mesh
            name="C1_Pillar2_Arch"
            castShadow
            receiveShadow
            geometry={nodes.C1_Pillar2_Arch.geometry}
            material={materials.C123}
            position={[3042.937, 4602.775, -649.836]}
            rotation={[0, 0, -1.082]}
            scale={2.5}
          />
          <mesh
            name="C1_Pillar2_Base"
            castShadow
            receiveShadow
            geometry={nodes.C1_Pillar2_Base.geometry}
            material={materials.C123}
            position={[3042.937, 4602.775, -649.836]}
            rotation={[0, 0, -1.082]}
            scale={2.5}
          />
          <mesh
            name="C1_Pillar2_Pillars"
            castShadow
            receiveShadow
            geometry={nodes.C1_Pillar2_Pillars.geometry}
            material={materials.C123}
            position={[3042.937, 4602.775, -649.836]}
            rotation={[0, 0, -1.082]}
            scale={2.5}
          />
          <mesh
            name="C1_Pillar3_Arch"
            castShadow
            receiveShadow
            geometry={nodes.C1_Pillar3_Arch.geometry}
            material={materials.C123}
            position={[-2965.68, -12006.775, -649.836]}
            rotation={[0, 0, -1.552]}
            scale={2.5}
          />
          <mesh
            name="C1_Pillar3_Base"
            castShadow
            receiveShadow
            geometry={nodes.C1_Pillar3_Base.geometry}
            material={materials.C123}
            position={[-2965.68, -12006.775, -649.836]}
            rotation={[0, 0, -1.552]}
            scale={2.5}
          />
          <mesh
            name="C1_Pillar3_Pillars"
            castShadow
            receiveShadow
            geometry={nodes.C1_Pillar3_Pillars.geometry}
            material={materials.C123}
            position={[-2965.68, -12006.775, -649.836]}
            rotation={[0, 0, -1.552]}
            scale={2.5}
          />
        </group>
        <group
          name="C2___Windmill"
          position={[159.805, -0.1, -105.144]}
          rotation={[Math.PI / 2, 0, 1.082]}
          scale={0.003}
        >
          <group
            name="C2_Rotation"
            position={[-57.067, -99.49, -1236.389]}
            rotation={[-2.416, -0.736, 2.494]}
            scale={0.511}
          >
            <mesh
              name="C2_Windmill_Rotate"
              castShadow
              receiveShadow
              geometry={nodes.C2_Windmill_Rotate.geometry}
              material={materials.C123}
              position={[-123847.891, 57701.543, 46469.215]}
              rotation={[-2.432, 0, 1.121]}
              scale={7.533}
            />
          </group>
          <mesh
            name="C2_Island_Rock"
            castShadow
            receiveShadow
            geometry={nodes.C2_Island_Rock.geometry}
            material={materials.C123}
            position={[6856.772, 73314.68, -38.571]}
            rotation={[0, 0, -1.082]}
            scale={3.849}
          />
          <mesh
            name="C2_Rooftops"
            castShadow
            receiveShadow
            geometry={nodes.C2_Rooftops.geometry}
            material={materials.C123}
            position={[6856.772, 73314.68, -38.571]}
            rotation={[0, 0, -1.082]}
            scale={3.849}
          />
          <mesh
            name="C2_Windmill_base"
            castShadow
            receiveShadow
            geometry={nodes.C2_Windmill_base.geometry}
            material={materials.C123}
            position={[6856.772, 73314.68, -38.571]}
            rotation={[0, 0, -1.082]}
            scale={3.849}
          />
        </group>
        <group
          name="C3___Airship"
          position={[405, -2.82, -110]}
          rotation={[Math.PI / 2, 0, -Math.PI / 6]}
          scale={0.01}
        >
          <mesh
            name="C3_Airship_Baloon"
            castShadow
            receiveShadow
            geometry={nodes.C3_Airship_Baloon.geometry}
            material={materials.C123}
            position={[-3293.082, 73.867, -66.543]}
            rotation={[0, 0, 0.009]}
          />
          <mesh
            name="C3_Airship_Base"
            castShadow
            receiveShadow
            geometry={nodes.C3_Airship_Base.geometry}
            material={materials.C123}
            position={[-3376.375, -11.62, 216.801]}
            rotation={[0, 0, 0.009]}
          />
          <mesh
            name="C3_Airship_Elements"
            castShadow
            receiveShadow
            geometry={nodes.C3_Airship_Elements.geometry}
            material={materials.C123}
            position={[-3359.065, 9.868, 222.822]}
            rotation={[0, 0, 0.009]}
          />
          <mesh
            name="C3_Airship_Proplellor_1"
            castShadow
            receiveShadow
            geometry={nodes.C3_Airship_Proplellor_1.geometry}
            material={materials.C123}
            position={[-3133.076, -11.97, -66.488]}
            rotation={[0, 0, 0.009]}
          />
          <mesh
            name="C3_Airship_Proplellor_2"
            castShadow
            receiveShadow
            geometry={nodes.C3_Airship_Proplellor_2.geometry}
            material={materials.C123}
            position={[-3614.02, -13.867, -66.488]}
            rotation={[0, 0, 0.009]}
          />
        </group>
        <group
          name="D1___Various_Objects"
          position={[407.249, -0.017, -232.452]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <mesh
            name="Scene4_Model_Apple"
            castShadow
            receiveShadow
            geometry={nodes.Scene4_Model_Apple.geometry}
            material={materials["D1 - Object - Apple"]}
            position={[290.191, -142.844, -1.693]}
          />
          <mesh
            name="Scene4_Model_Orange"
            castShadow
            receiveShadow
            geometry={nodes.Scene4_Model_Orange.geometry}
            material={materials["D1 - Object - Orange"]}
            position={[295.031, 94.127, -1.693]}
          />
          <mesh
            name="Scene4_Model_Avocado"
            castShadow
            receiveShadow
            geometry={nodes.Scene4_Model_Avocado.geometry}
            material={materials["D1 - Object - Avocado"]}
            position={[70.695, -256.215, -1.693]}
          />
          <mesh
            name="Scene4_Model_Pumpkin"
            castShadow
            receiveShadow
            geometry={nodes.Scene4_Model_Pumpkin.geometry}
            material={materials["D1 - Object - Pumpkin"]}
            position={[-246.484, -166.627, -1.693]}
          />
          <mesh
            name="Scene4_Model_PlantBase"
            castShadow
            receiveShadow
            geometry={nodes.Scene4_Model_PlantBase.geometry}
            material={materials["D1 - Object - Plant Alovera"]}
            position={[301.676, -29.967, -1.693]}
          >
            <mesh
              name="Scene4_Model_PlantLeaves"
              castShadow
              receiveShadow
              geometry={nodes.Scene4_Model_PlantLeaves.geometry}
              material={materials["D1 - Object - Plant Alovera"]}
              position={[0.004, -0.002, 0]}
            />
          </mesh>
          <mesh
            name="Scene4_Model_BellPepper"
            castShadow
            receiveShadow
            geometry={nodes.Scene4_Model_BellPepper.geometry}
            material={materials["D1 - Object - Most Objects"]}
            position={[-280.242, -21.307, -1.693]}
          />
          <mesh
            name="Scene4_Model_Bird"
            castShadow
            receiveShadow
            geometry={nodes.Scene4_Model_Bird.geometry}
            material={materials["D1 - Object - Most Objects"]}
            position={[216.664, 214.621, -4.977]}
          />
          <mesh
            name="Scene4_Model_Boat"
            castShadow
            receiveShadow
            geometry={nodes.Scene4_Model_Boat.geometry}
            material={materials["D1 - Object - Most Objects"]}
            position={[-195.82, 76.766, -1.693]}
          />
          <mesh
            name="Scene4_Model_Bottle"
            castShadow
            receiveShadow
            geometry={nodes.Scene4_Model_Bottle.geometry}
            material={materials["D1 - Object - Most Objects"]}
            position={[-277.906, 89.787, -1.693]}
          />
          <mesh
            name="Scene4_Model_Car"
            castShadow
            receiveShadow
            geometry={nodes.Scene4_Model_Car.geometry}
            material={materials["D1 - Object - Most Objects"]}
            position={[-74.641, -138.416, -1.693]}
          />
          <mesh
            name="Scene4_Model_Clock"
            castShadow
            receiveShadow
            geometry={nodes.Scene4_Model_Clock.geometry}
            material={materials["D1 - Object - Most Objects"]}
            position={[-103.402, -219.686, -1.693]}
          />
          <mesh
            name="Scene4_Model_Cube"
            castShadow
            receiveShadow
            geometry={nodes.Scene4_Model_Cube.geometry}
            material={materials["D1 - Object - Most Objects"]}
            position={[77.617, -23.225, -1.693]}
          />
          <mesh
            name="Scene4_Model_CubeDots"
            castShadow
            receiveShadow
            geometry={nodes.Scene4_Model_CubeDots.geometry}
            material={materials["D1 - Object - Most Objects"]}
            position={[-103.402, -21.307, -1.693]}
          />
          <mesh
            name="Scene4_Model_CubeHollow"
            castShadow
            receiveShadow
            geometry={nodes.Scene4_Model_CubeHollow.geometry}
            material={materials["D1 - Object - Most Objects"]}
            position={[-24.008, -21.307, -1.693]}
          />
          <mesh
            name="Scene4_Model_Dog"
            castShadow
            receiveShadow
            geometry={nodes.Scene4_Model_Dog.geometry}
            material={materials["D1 - Object - Most Objects"]}
            position={[72.965, -159.334, -1.693]}
          />
          <mesh
            name="Scene4_Model_Elephant"
            castShadow
            receiveShadow
            geometry={nodes.Scene4_Model_Elephant.geometry}
            material={materials["D1 - Object - Most Objects"]}
            position={[20.844, 86.723, -1.693]}
          />
          <mesh
            name="Scene4_Model_Gate"
            castShadow
            receiveShadow
            geometry={nodes.Scene4_Model_Gate.geometry}
            material={materials["D1 - Object - Most Objects"]}
            position={[-103.402, 222.102, -1.693]}
          />
          <mesh
            name="Scene4_Model_HalfGate"
            castShadow
            receiveShadow
            geometry={nodes.Scene4_Model_HalfGate.geometry}
            material={materials["D1 - Object - Most Objects"]}
            position={[208.426, -226.84, -1.693]}
          />
          <mesh
            name="Scene4_Model_Hand"
            castShadow
            receiveShadow
            geometry={nodes.Scene4_Model_Hand.geometry}
            material={materials["D1 - Object - Most Objects"]}
            position={[178.805, -131.91, -3.446]}
          />
          <mesh
            name="Scene4_Model_Horse"
            castShadow
            receiveShadow
            geometry={nodes.Scene4_Model_Horse.geometry}
            material={materials["D1 - Object - Most Objects"]}
            position={[225.914, 1.213, -1.693]}
          />
          <mesh
            name="Scene4_Model_MusicBox"
            castShadow
            receiveShadow
            geometry={nodes.Scene4_Model_MusicBox.geometry}
            material={materials["D1 - Object - Most Objects"]}
            position={[66.477, 220.115, -1.693]}
          />
          <mesh
            name="Scene4_Model_Plus"
            castShadow
            receiveShadow
            geometry={nodes.Scene4_Model_Plus.geometry}
            material={materials["D1 - Object - Most Objects"]}
            position={[-233.805, 169.576, -1.693]}
          />
          <mesh
            name="Scene4_Model_Sphere_2"
            castShadow
            receiveShadow
            geometry={nodes.Scene4_Model_Sphere_2.geometry}
            material={materials["D1 - Object - Most Objects"]}
            position={[-231.039, 252.662, -1.693]}
          />
          <mesh
            name="Scene4_Model_SpherePines"
            castShadow
            receiveShadow
            geometry={nodes.Scene4_Model_SpherePines.geometry}
            material={materials["D1 - Object - Most Objects"]}
            position={[-183.945, -21.307, -1.693]}
          />
          <mesh
            name="Scene4_Model_Spring"
            castShadow
            receiveShadow
            geometry={nodes.Scene4_Model_Spring.geometry}
            material={materials["D1 - Object - Most Objects"]}
            position={[136.25, 65.84, 47.369]}
          />
          <mesh
            name="Scene4_Model_Vasa"
            castShadow
            receiveShadow
            geometry={nodes.Scene4_Model_Vasa.geometry}
            material={materials["D1 - Object - Most Objects"]}
            position={[-103.402, 86.725, -1.693]}
          />
        </group>
        <group
          name="E2___sphere"
          position={[0, 46.064, 13]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <mesh
            name="Sphere"
            castShadow
            receiveShadow
            geometry={nodes.Sphere.geometry}
            // material={materials["E2 - Sphere"]}
          >
            <MeshReflectorMaterial 
            blur={[200, 300]}
            resolution={1024}
            mixBlur={1}
            mixStrength={1}
            mixContrast={1}
            mirror={0.7}
            roughness={0.1}
            depthScale={100}
            distortion={0}
            minDepthThreshold={0.9}
            maxDepthThreshold={100}
            depthToBlurRatioBias={0.5}
            color="#e3f5fc"
            metalness={1}
            reflectorOffset={0}
              />
          </mesh>
        </group>
        <PerspectiveCamera
          name="E1___Camera_Animated"
          makeDefault={true}
          far={1000000}
          near={30}
          fov={40}
          position={[0, 46.394, 21.218]}
          scale={0.01}
        />
        <mesh
          name="E3___clouds_A"
          castShadow
          receiveShadow
          geometry={nodes.E3___clouds_A.geometry}
          material={materials["E3 - Clouds"]}
          position={[669.836, 0.164, -362.156]}
          rotation={[Math.PI / 2, 0, 1.103]}
          scale={0.01}
        />
        <mesh
          name="E3___clouds_B"
          castShadow
          receiveShadow
          geometry={nodes.E3___clouds_B.geometry}
          material={materials["E3 - Clouds"]}
          position={[534.6, 0.164, -290.014]}
          rotation={[Math.PI / 2, 0, 1.103]}
          scale={0.01}
        />
        <mesh
          name="A3_Sky_RobotArm__Copy_"
          castShadow
          receiveShadow
          geometry={nodes.A3_Sky_RobotArm__Copy_.geometry}
          material={materials.A123}
          position={[6.344, 54.557, -22.386]}
          rotation={[1.722, 0.025, 0.209]}
          scale={0.01}
        />
        <mesh
          name="A3_Sky_RobotLeg1__Copy_"
          castShadow
          receiveShadow
          geometry={nodes.A3_Sky_RobotLeg1__Copy_.geometry}
          material={materials.A123}
          position={[2.784, 54.657, -22.386]}
          rotation={[1.722, 0.025, 0.209]}
          scale={0.01}
        />
        <mesh
          name="A3_Sky_RobotLeg2__Copy_"
          castShadow
          receiveShadow
          geometry={nodes.A3_Sky_RobotLeg2__Copy_.geometry}
          material={materials.A123}
          position={[54.416, 88.221, -89.668]}
          rotation={[1.654, 0.01, 0.049]}
          scale={0.01}
        />
      </group>
    </group>
  );
}


useGLTF.preload("/sitev5.glb");
