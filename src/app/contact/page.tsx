'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ContactForm } from '@/components/ContactForm';
import EmailIcon from '@/public/svg/email_1.svg';
import GitHubIcon from '@/public/svg/github_1.svg';
import LinkedInIcon from '@/public/svg/linkedin_1.svg';
import PhoneIcon from '@/public/svg/phone-icon.svg';

export default function ContactPage() {
  return (
    <section
      style={{ backgroundImage: `url("/hero-img_1.png" )` }}
      className="flex min-h-screen flex-col bg-cover bg-right bg-no-repeat p-4 md:bg-center md:p-6 lg:p-12 xl:p-28"
    >
      <div className="grid w-full gap-8 bg-black/40 text-left text-white md:grid-cols-1 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ x: -100, opacity: 0 }} // Animating from left
          animate={{ x: 0, opacity: 1 }} // Moving to the center
          transition={{ ease: 'easeInOut', duration: 2 }}
          className="flex flex-col gap-6"
        >
          <div className="w-full p-4 sm:p-6 md:p-8 lg:p-10">
            <h2 className="my-6 text-2xl font-bold text-custom-red md:my-8 md:text-3xl lg:my-10 lg:text-4xl">
              Let&apos;s talk
            </h2>

            <div className="flex w-full flex-col gap-4">
              <div className="flex flex-row items-center gap-2 md:gap-3">
                <Image
                  src={EmailIcon}
                  alt="White email icon."
                  width={24}
                  height={24}
                />
                <Link href={'mailto:ravic.ivan88@gmail.com'}>
                  <p className="text-sm hover:text-custom-yellow hover:underline md:text-lg">
                    ravic.ivan88@gmail.com
                  </p>
                </Link>
              </div>

              <div className="flex flex-row items-center gap-2 md:gap-3">
                <Image
                  src={LinkedInIcon}
                  alt="White icon for LinkedIn."
                  width={24}
                  height={24}
                />
                <Link
                  href={'https://www.linkedin.com/in/ivan-ravić-b3aa36143'}
                  target="_blank"
                >
                  <p className="text-sm hover:text-custom-yellow hover:underline md:text-lg">
                    LinkedIn Profile
                  </p>
                </Link>
              </div>

              <div className="flex flex-row items-center gap-2 md:gap-3">
                <Image
                  src={GitHubIcon}
                  alt="White github icon."
                  width={24}
                  height={24}
                />{' '}
                <Link
                  href={'https://github.com/IvanRavic88?tab=repositories'}
                  target="_blank"
                >
                  <p className="text-sm hover:text-custom-yellow hover:underline md:text-lg">
                    GitHub Profile
                  </p>
                </Link>
              </div>

              <div className="flex flex-row items-center gap-2 md:gap-3">
                <Image
                  src={PhoneIcon}
                  alt="White phone icon."
                  width={24}
                  height={24}
                />
                <Link href={'tel:+381655254013'}>
                  <p className="text-sm hover:text-custom-yellow hover:underline md:text-lg">
                    +381655254013
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <ContactForm />
      </div>
    </section>
  );
}
