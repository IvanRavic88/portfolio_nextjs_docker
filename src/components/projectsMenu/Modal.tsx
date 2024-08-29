import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';

const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  enter: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

interface ModalProps {
  modal: { active: boolean; index: number };
  projects: {
    index: number;
    src: string;
    color: string;
    description: string;
    href: string;
  }[];
}

export default function Modal({ modal, projects }: ModalProps) {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  const { src, color, description } = projects[index];

  useEffect(() => {
    // Move Container
    let xMoveContainer = gsap.quickTo(modalContainer.current, 'left', {
      duration: 0.8,
      ease: 'power3',
    });
    let yMoveContainer = gsap.quickTo(modalContainer.current, 'top', {
      duration: 0.8,
      ease: 'power3',
    });
    // Move cursor
    let xMoveCursor = gsap.quickTo(cursor.current, 'left', {
      duration: 0.5,
      ease: 'power3',
    });
    let yMoveCursor = gsap.quickTo(cursor.current, 'top', {
      duration: 0.5,
      ease: 'power3',
    });
    // Move cursor label
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'left', {
      duration: 0.45,
      ease: 'power3',
    });
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'top', {
      duration: 0.45,
      ease: 'power3',
    });

    window.addEventListener('mousemove', (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
        className="pointer-events-none absolute flex h-[410px] w-[410px] items-center justify-center overflow-hidden bg-white"
      >
        <div
          className="duration-[0.5s] ease-[cubic-bezier(0.76,0,0.24,1)]; absolute h-full w-full transition-[top]"
          style={{ top: index * -100 + '%' }}
        >
          {projects.map((project) => {
            return (
              <div
                className="flex h-full w-full items-center justify-center"
                style={{ backgroundColor: color }}
                key={`modal_${project.index}`}
              >
                <Image
                  className="h-auto w-full"
                  src={src}
                  width={300}
                  height={0}
                  alt={description}
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        className="z-2 pointer-events-none absolute flex h-[80px] w-[80px] items-center justify-center rounded-full bg-custom-dark text-[14px] font-light text-white"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
      ></motion.div>

      <motion.div
        ref={cursorLabel}
        className="z-2 pointer-events-none absolute flex h-[80px] w-[80px] items-center justify-center rounded-full bg-transparent text-[14px] font-light text-white"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
      >
        <div className="pointer-events-none">View</div>
      </motion.div>
    </>
  );
}
