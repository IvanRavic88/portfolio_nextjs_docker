import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface IntroProps {
  background: string;
}

export default function Intro({ background }: IntroProps) {
  const container = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: mounted ? container : undefined,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div
      ref={container}
      className="relative h-[20vh] overflow-hidden sm:h-[40vh] md:h-[60vh] lg:h-[80vh]"
    >
      <motion.div style={{ y }} className="relative h-full w-full">
        <Image
          src={background}
          alt="Main image of the project"
          width={1920}
          height={1080}
          priority
        />
      </motion.div>
    </div>
  );
}
