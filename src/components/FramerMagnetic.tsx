import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function FramerMagnetic({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { height, width, left, top } =
      ref.current != null
        ? ref.current.getBoundingClientRect()
        : { height: 0, width: 0, left: 0, top: 0 };
    const { clientX, clientY } = e;
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      style={{ position: 'relative' }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 120, damping: 10, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
