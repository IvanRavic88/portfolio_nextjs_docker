"use client";
import { motion } from "framer-motion";
export default function AboutPage() {
  return (
    <section
      style={{ backgroundImage: `url("/About.png" )` }}
      className="bg-cover bg-center bg-no-repeat h-screen relative items-centar flex"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <div className="ml-10 grid lg:grid-cols-2 mt-12">
          <div className="text-left text-white">
            <h1 className="text-4xl font-bold text-custom-red">About Me</h1>
            <p className="text-xl mt-8">
              I&apos;m a dynamic software developer with a background in
              Electrical and Computer Engineering, holding a{" "}
              <span className="text-custom-yellow">Master&apos;s</span> degree
              from VISER in Belgrade. My journey began in a mining company,
              where I specialized in automatic control systems and software
              development.
            </p>
            <p className="text-xl mt-8">
              Transitioning from this role, I pursued my passion for
              programming, expanding my expertise in{" "}
              <span className="text-custom-yellow">Next.js</span>,
              <span className="text-custom-yellow"> TypeScript</span>, and
              <span className="text-custom-yellow"> Tailwind CSS</span>. Driven
              by a desire to innovate and contribute meaningfully to the
              software development industry, I continuously seek opportunities
              for growth.
            </p>
            <p className="text-xl mt-8">
              Recently, I achieved the{" "}
              <span className="text-custom-yellow">
                AWS Associate Developer certification
              </span>
              , showcasing my expertise in cloud computing and AWS services.
              I&apos;m enthusiastic about leveraging my diverse skill set to
              create impactful solutions and tackle new challenges.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
