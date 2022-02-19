import React, { useMemo, FC } from 'react';
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';

import texture from 'assets/textures/particles/star_08.png';

type ParticlesProps = {
  count: number;
  objectsDistance: number;
  sectionsCount: number;
};

const Particles: FC<ParticlesProps> = ({ count, objectsDistance, sectionsCount }) => {
  const particlesMaterial = useTexture<string>(texture);

  const positionsArray = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = objectsDistance * 0.5 - Math.random() * objectsDistance * sectionsCount;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count, objectsDistance, sectionsCount]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attachObject={['attributes', 'position']} count={count} array={positionsArray} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        transparent
        sizeAttenuation={true}
        alphaMap={particlesMaterial}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default Particles;
