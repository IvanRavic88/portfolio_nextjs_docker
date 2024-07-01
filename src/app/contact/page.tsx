"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";
import EmailIcon from "@/public/email_1.svg";
import GitHubIcon from "@/public/github_1.svg";
import LinkedInIcon from "@/public/linkedin_1.svg";
import PhoneIcon from "@/public/phone-icon.svg";

export default function ContactPage() {
  return (
    <section
      style={{ backgroundImage: `url("/hero-img_1.png" )` }}
      className="bg-cover bg-right md:bg-center bg-no-repeat min-h-screen flex flex-col p-4 md:p-6 lg:p-12 xl:p-28 "
    >
      <div className="text-left text-white grid gap-8 lg:gap-16 md:grid-cols-1 lg:grid-cols-2 w-full bg-black/40">
        <motion.div
          initial={{ x: -100, opacity: 0 }} // Animating from left
          animate={{ x: 0, opacity: 1 }} // Moving to the center
          transition={{ ease: "easeInOut", duration: 2 }}
          className="flex flex-col gap-6"
        >
          <div className="p-4 sm:p-6 md:p-8 lg:p-10 w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-custom-red my-6 md:my-8 lg:my-10">
              Let&apos;s talk
            </h2>

            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-row gap-2 md:gap-3 items-center">
                <Image
                  src={EmailIcon}
                  alt="White email icon."
                  width={24}
                  height={24}
                />
                <Link href={"mailto:ravic.ivan88@gmail.com"}>
                  <p className="text-sm md:text-lg hover:underline hover:text-custom-yellow">
                    ravic.ivan88@gmail.com
                  </p>
                </Link>
              </div>

              <div className="flex flex-row gap-2 md:gap-3 items-center">
                <Image
                  src={LinkedInIcon}
                  alt="White icon for LinkedIn."
                  width={24}
                  height={24}
                />
                <Link
                  href={"https://www.linkedin.com/in/ivan-ravić-b3aa36143"}
                  target="_blank"
                >
                  <p className="text-sm md:text-lg hover:underline hover:text-custom-yellow">
                    LinkedIn Profile
                  </p>
                </Link>
              </div>

              <div className="flex flex-row gap-2 md:gap-3 items-center">
                <Image
                  src={GitHubIcon}
                  alt="White github icon."
                  width={24}
                  height={24}
                />{" "}
                <Link
                  href={"https://github.com/IvanRavic88?tab=repositories"}
                  target="_blank"
                >
                  <p className="text-sm md:text-lg hover:underline hover:text-custom-yellow">
                    GitHub Profile
                  </p>
                </Link>
              </div>

              <div className="flex flex-row gap-2 md:gap-3 items-center">
                <Image
                  src={PhoneIcon}
                  alt="White phone icon."
                  width={24}
                  height={24}
                />
                <Link href={"tel:+381655254013"}>
                  <p className="text-sm md:text-lg hover:underline hover:text-custom-yellow">
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
