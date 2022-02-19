import React, { useRef, FC } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';

import Particles from 'components/Particles';
import Cube from 'components/Cube';
import Sphere from 'components/Sphere';
import TorusKnot from 'components/TorusKnot';

type ContentProps = {
  scrollY: number;
  parallaxX: number;
  parallaxY: number;
};

const Content: FC<ContentProps> = ({ scrollY, parallaxX, parallaxY }) => {
  const objectsDistance = 4;

  const cube = useRef<Mesh>(null!);
  const torusKnot = useRef<Mesh>(null!);
  const sphere = useRef<Mesh>(null!);

  const { camera } = useThree();

  const meshes = [cube, torusKnot, sphere];

  const group = useRef<Group>(null!);

  useFrame(({ clock }) => {
    const elapsedTime = clock.elapsedTime;

    meshes.forEach((mesh) => {
      mesh.current.rotation.x = elapsedTime * 0.15;
      mesh.current.rotation.y = elapsedTime * 0.17;
    });

    camera.position.y = (-scrollY / window.innerHeight) * objectsDistance;

    group.current.position.x += (-parallaxX - group.current.position.x) * 0.1;
    group.current.position.y += (parallaxY - group.current.position.y) * 0.1;
  });

  return (
    <>
      <directionalLight color="#ffffff" position={[2, 0, 4]} />
      <pointLight color="#dfd9d0" position={[-2, 2, 1]} />
      <pointLight color="#e6e6e6" position={[2, -8, 2]} decay={1.5} />

      <group ref={group}>
        <Particles count={1000} objectsDistance={objectsDistance} sectionsCount={meshes.length} />
        <Cube ref={cube} position={[1, 0, 0]} />
        <TorusKnot ref={torusKnot} position={[-1, -objectsDistance, 0]} />
        <Sphere ref={sphere} position={[1, -objectsDistance * 2, 0]} />
      </group>
    </>
  );
};

export default Content;
