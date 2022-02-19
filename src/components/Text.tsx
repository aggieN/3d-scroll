import React, { useMemo, FC } from 'react';
import { extend, useLoader } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

import texture from 'assets/textures/matcaps/03.png';

extend({ TextGeometry });

type TextProps = {
  children: string;
};

const Text: FC<TextProps> = ({ children }) => {
  const font = useLoader(FontLoader, 'helvetiker_regular.typeface.json');
  const material = useTexture<string>(texture);
  const config = useMemo(
    () => ({
      font,
      size: 0.6,
      height: 0.2,
      curveSegments: 100,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.03,
      bevelOffset: 0,
      bevelSegments: 3,
    }),
    [font]
  );

  return (
    <mesh>
      <textGeometry args={[children, config]} />
      <meshMatcapMaterial matcap={material} />
    </mesh>
  );
};

export default Text;
