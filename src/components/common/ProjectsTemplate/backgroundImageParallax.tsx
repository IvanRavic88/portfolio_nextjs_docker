import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Intro({ background }: { background: string }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
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
          objectFit="cover"
          objectPosition="center"
          priority
          className="block"
        />
      </motion.div>
    </div>
  );
}
