"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <main>
        <section
          style={{ backgroundImage: `url('/hero-img_1.png')` }}
          className="bg-cover bg-center bg-no-repeat h-screen relative "
        >
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 2 }}
            className="flex flex-col items-start justify-center h-screen p-10 md:p-20 space-y-6"
          >
            <h1 className="text-6xl font-bold text-left text-custom-red">
              Ivan Ravić
            </h1>

            <p className="text-2xl text-left text-white max-w-xl">
              Dedicated software developer with{" "}
              <span className="text-custom-yellow">
                AWS Developer Associate certification.
              </span>
            </p>
          </motion.div>
        </section>
      </main>
    </>
  );
}
