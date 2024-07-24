import { useEffect } from 'react';
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

  useEffect(() => {
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
