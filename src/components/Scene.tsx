'use client';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Model from './Model';

export default function Scene({ activeMenu }: { activeMenu: number | null }) {
  return (
    <Canvas>
      <Model activeMenu={activeMenu} />
    </Canvas>
  );
}
