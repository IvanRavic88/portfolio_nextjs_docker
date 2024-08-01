'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ContactForm } from '@/components/ContactForm';
import { CONTACT_INFO } from '@/constants';
import LinkAnimated from '@/components/LinkAnimated';

export default function ContactPage() {
  return (
    <section
      style={{ backgroundImage: `url("/hero-img_1.png" )` }}
      className="flex min-h-screen flex-col bg-cover bg-right bg-no-repeat p-2 md:bg-center md:p-6 lg:p-12 xl:p-28"
    >
      <div className="max-w-[90rem] py-24 sm:py-32 md:py-40">
        <div className="flex flex-wrap">
          <div className="relative order-2 block w-full">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
              <span className="block">Let&rsquo;s start a</span>
              <span>project together</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="grid w-full gap-12 text-left md:grid-cols-1 lg:grid-cols-2 lg:gap-48">
        <ContactForm />
        <motion.div
          initial={{ x: -100, opacity: 0 }} // Animating from left
          animate={{ x: 0, opacity: 1 }} // Moving to the center
          transition={{ ease: 'backInOut', duration: 2 }}
          className="flex flex-col gap-6"
        >
          <div className="w-full p-4 text-base sm:p-6 md:p-8 lg:p-10">
            <h2 className="my-6 text-2xl font-bold md:my-8 md:text-3xl lg:my-10 lg:text-4xl">
              Let&apos;s talk
            </h2>

            <ul className="flex w-full flex-col gap-2">
              {CONTACT_INFO.map((info) => (
                <div
                  key={info.id}
                  className="flex flex-row items-center gap-2 md:gap-3"
                >
                  {info.icon && (
                    <div className="h-6 w-6 md:h-8 md:w-8">{info.icon}</div>
                  )}
                  <LinkAnimated href={info.href || ''}>
                    <p>{info.text}</p>
                  </LinkAnimated>
                </div>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
