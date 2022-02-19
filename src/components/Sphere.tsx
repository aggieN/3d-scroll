import React from 'react';
import { Mesh } from 'three';
import { Vector3 } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

import texture from 'assets/textures/normals/Sci-Fi_Wall_012_normal.jpg';

type SphereProps = {
  position: Vector3;
};

const Sphere = React.forwardRef<Mesh, SphereProps>(({ position }, ref) => {
  const material = useTexture<string>(texture);

  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color={'white'} normalMap={material} />
    </mesh>
  );
});

export default Sphere;
