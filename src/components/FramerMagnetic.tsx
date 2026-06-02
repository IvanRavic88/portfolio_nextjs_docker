'use client';

import React, { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function FramerMagnetic({
  children,
  strength = 0.35,
}: {
  children: React.ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = e.clientX - (left + width / 2);
    const middleY = e.clientY - (top + height / 2);
    // Pull a fraction of the cursor distance so the element glides toward the
    // pointer instead of jumping the full distance.
    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  if (shouldReduceMotion) {
    return <div style={{ position: 'relative' }}>{children}</div>;
  }

  const { x, y } = position;

  return (
    <motion.div
      style={{ position: 'relative' }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
