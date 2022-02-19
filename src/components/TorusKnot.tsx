import React from 'react';
import { Mesh } from 'three';
import { useCubeTexture } from '@react-three/drei';
import { Vector3 } from '@react-three/fiber';

type TorusKnotProps = {
  position: Vector3;
};

const TorusKnot = React.forwardRef<Mesh, TorusKnotProps>(({ position }, ref) => {
  const envMap = useCubeTexture(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'], {
    path: 'environmentMap/',
  });

  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={[0.6, 0.2, 300, 20]} />
      <meshStandardMaterial metalness={1} roughness={0.1} envMap={envMap} />
    </mesh>
  );
});

export default TorusKnot;
