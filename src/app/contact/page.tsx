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
      className="bg-cover bg-center bg-no-repeat h-screen relative flex p-28"
    >
      <div className="text-left text-white grid grid-cols-2 gap-72 min-w-full">
        <motion.div
          initial={{ x: -100, opacity: 0 }} // Animating from left
          animate={{ x: 0, opacity: 1 }} // Moving to the center
          transition={{ ease: "easeInOut", duration: 2 }}
          className="flex flex-col gap-2"
        >
          <div>
            <h2 className="text-4xl font-bold text-custom-red my-10 block">
              Let&apos;s talk
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <Link href={"mailto:ravic.ivan88@gmail.com"}>
              <div className="flex flex-row gap-3 items-center">
                <Image src={EmailIcon} alt="White email icon." className="" />
                <p className="text-lg">ravic.ivan88@gmail.com</p>
              </div>
            </Link>
            <Link href={"https://www.linkedin.com/in/ivan-ravić-b3aa36143"}>
              <div className="flex flex-row gap-3 items-center">
                <Image src={LinkedInIcon} alt="White icon for LinkedIn." />
                <p className="text-lg">
                  https://www.linkedin.com/in/ivan-ravić-b3aa36143
                </p>
              </div>
            </Link>
            <Link href={"https://github.com/IvanRavic88?tab=repositories"}>
              <div className="flex flex-row gap-3 items-center">
                <Image src={GitHubIcon} alt="White github icon." className="" />
                <p className="text-lg">
                  https://github.com/IvanRavic88?tab=repositories
                </p>
              </div>
            </Link>
            <Link href={"tel:+381655254013"}>
              <div className="flex flex-row gap-3 items-center">
                <Image src={PhoneIcon} alt="White github icon." className="" />
                <p className="text-lg">+381655254013</p>
              </div>
            </Link>
          </div>
        </motion.div>

        <ContactForm />
      </div>
    </section>
  );
}
