import React, { useState, useEffect, Suspense, useRef, MouseEventHandler } from 'react';
import { Canvas } from '@react-three/fiber';
import Content from 'views/Content';
import ScrollArea from 'components/ScrollArea';
import throttle from 'lodash.throttle';

const cursor = {
  x: 0,
  y: 0,
};

export default function App() {
  const scrollArea = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [parallaxX, setParallaxX] = useState(0);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const updateScrollPosition: MouseEventHandler = (e) => {
      if (e && e.currentTarget) {
        setScrollY(e.currentTarget.scrollTop);
      }
    };
    const throttledSetScrollY = throttle(updateScrollPosition, 100);
    if (scrollArea && scrollArea.current) {
      scrollArea.current.addEventListener('scroll', throttledSetScrollY as any, false);
    }
  }, [scrollY]);

  const onMouseMove: MouseEventHandler = (e) => {
    cursor.x = e.clientX / window.innerWidth - 0.5;
    cursor.y = e.clientY / window.innerHeight - 0.5;
    setParallaxX(cursor.x);
    setParallaxY(cursor.y);
  };

  return (
    <Suspense fallback={<span>loading...</span>}>
      <Canvas camera={{ fov: 35 }}>
        <Content scrollY={scrollY} parallaxX={parallaxX} parallaxY={parallaxY} />
      </Canvas>
      <ScrollArea onMouseMove={onMouseMove} ref={scrollArea} />
    </Suspense>
  );
}
