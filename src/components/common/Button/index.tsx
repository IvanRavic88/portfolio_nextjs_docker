'use client';

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import FramerMagnetic from '@/components/FramerMagnetic';

interface ButtonProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function Button({
  children,
  backgroundColor = '',
  ...attributes
}: ButtonProps) {
  const controls = useAnimation();

  // The circle-fill is a hover effect; on touch / reduced-motion it never
  // triggers, so we skip the animated <motion.div> entirely and render a static
  // button. That keeps framer-motion off the hydration path on mobile.
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setEnabled(fine && !reduce);
    // Cleanup function to stop animations if the component unmounts
    return () => controls.stop();
  }, [controls]);

  const handleMouseEnter = () => {
    controls.start({
      top: '-25%',
      width: '150%',
      transition: { duration: 0.4, ease: 'easeIn' },
    });
  };

  const handleMouseLeave = () => {
    controls.start({
      top: '-150%',
      width: '125%',
      transition: { duration: 0.25, ease: 'easeOut' },
    });
  };

  if (!enabled) {
    return (
      <FramerMagnetic>
        <div className="roundedButton" {...attributes}>
          {children}
        </div>
      </FramerMagnetic>
    );
  }

  return (
    <FramerMagnetic>
      <div
        className="roundedButton"
        style={{ overflow: 'hidden' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...attributes}
      >
        {children}
        <motion.div
          initial={{ top: '-150%', width: '125%' }}
          animate={controls}
          className="circle"
        ></motion.div>
      </div>
    </FramerMagnetic>
  );
}
