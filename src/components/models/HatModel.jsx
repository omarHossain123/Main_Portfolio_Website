/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const HatModel = React.memo(function HatModel(props) {
  // Use React.memo for performance optimization
  const { nodes, materials } = useGLTF("/models/hat-transformed.glb");

  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.02;
  });
  
  return (
    <group ref={modelRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  )  
});

export default HatModel;
useGLTF.preload("/models/hat-transformed.glb");
