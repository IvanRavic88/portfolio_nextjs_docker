import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Intro({ background }: { background: string }) {
  const container = useRef(null);
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: mounted ? container : undefined,
    offset: ['start start', 'end start'],
    layoutEffect: false,
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '50vh']);

  return (
    <div
      ref={container}
      className="relative h-[50vh] overflow-hidden pt-10 sm:h-[80vh] lg:h-screen"
    >
      <motion.div style={{ y }} className="relative h-full w-full">
        <Image
          src={background}
          alt="Parallax background"
          layout="responsive"
          width={1920}
          height={1080}
          priority
          className="block"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </motion.div>
    </div>
  );
}
