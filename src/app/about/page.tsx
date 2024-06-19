"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section
        style={{ backgroundImage: `url("/About.png" )` }}
        className="bg-cover bg-center bg-no-repeat flex-grow flex items-center justify-left p-4 sm:p-6 md:p-8 lg:p-10 "
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="max-w-4xl text-white  p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl shadow-xl"
        >
          <div className="mt-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-custom-red">
              About Me
            </h1>
            <p className="text-lg sm:text-xl mt-8">
              I&apos;m a dynamic software developer with a background in
              Electrical and Computer Engineering, holding a{" "}
              <span className="text-custom-yellow">Master&apos;s</span> degree
              from VISER in Belgrade. My journey began in a mining company,
              where I specialized in automatic control systems and software
              development.
            </p>
            <p className="text-lg sm:text-xl mt-8">
              Transitioning from this role, I pursued my passion for
              programming, expanding my expertise in{" "}
              <span className="text-custom-yellow">Next.js</span>,
              <span className="text-custom-yellow"> TypeScript</span>, and
              <span className="text-custom-yellow"> Tailwind CSS</span>. Driven
              by a desire to innovate and contribute meaningfully to the
              software development industry, I continuously seek opportunities
              for growth.
            </p>
            <p className="text-lg sm:text-xl mt-8">
              Recently, I achieved the{" "}
              <span className="text-custom-yellow">
                AWS Associate Developer certification
              </span>
              , showcasing my expertise in cloud computing and AWS services. My
              enthusiasm for Cloud & DevOps has also led me to delve into
              automation using tools like{" "}
              <span className="text-custom-yellow">Ansible</span>,{" "}
              <span className="text-custom-yellow">Bash</span>, and{" "}
              <span className="text-custom-yellow">Terraform</span>, enabling me
              to streamline processes and improve efficiency.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
