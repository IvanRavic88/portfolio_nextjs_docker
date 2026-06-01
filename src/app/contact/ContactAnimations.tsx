'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';

const ContactForm = dynamic(
  () => import('@/components/ContactForm').then((mod) => mod.ContactForm),
  { ssr: false }
);

export default function ContactAnimations({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="grid w-full gap-12 text-left md:grid-cols-1 lg:grid-cols-2 lg:gap-48">
      <ContactForm />
      <motion.div
        initial={{ x: -100, opacity: 0 }} // Animating from left
        animate={{ x: 0, opacity: 1 }} // Moving to the center
        transition={{ ease: 'backInOut', duration: 2 }}
        className="flex flex-col gap-6"
      >
        {children}
      </motion.div>
    </div>
  );
}
