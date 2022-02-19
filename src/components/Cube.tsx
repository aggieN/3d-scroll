import React from 'react';
import { Mesh } from 'three';
import { useTexture } from '@react-three/drei';
import { Vector3 } from '@react-three/fiber';

import cubeColor from 'assets/textures/tiles/color.jpg';
import cubeAmbientOcclusion from 'assets/textures/tiles/ambientOcclusion.jpg';
import cubeMetallic from 'assets/textures/tiles/metallic.jpg';
import cubeNormal from 'assets/textures/tiles/normal.jpg';
import cubeRoughness from 'assets/textures/tiles/roughness.jpg';

type CubeProps = {
  position: Vector3;
};

const Cube = React.forwardRef<Mesh, CubeProps>(({ position }, ref) => {
  const props = useTexture({
    map: cubeColor,
    aoMap: cubeAmbientOcclusion,
    metalnessMap: cubeMetallic,
    normalMap: cubeNormal,
    roughnessMap: cubeRoughness,
  });

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={[1.4, 1.4, 1.4]} />
      <meshStandardMaterial {...props} displacementScale={0} metalness={0.8} />
    </mesh>
  );
});

export default Cube;
