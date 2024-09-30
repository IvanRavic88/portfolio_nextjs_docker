import React from 'react';

export default function MyServices() {
  return (
    <section>
      <div className="container mx-auto max-w-[90rem] px-1 sm:mb-44 sm:px-4">
        <h1 className="mb-2 text-4xl sm:text-5xl md:text-6xl">Services</h1>
        <h3 className="mb-16 text-left opacity-50">
          Maybe I can help you with:
        </h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg">
            <span className="mb-10 block text-6xl opacity-30">01</span>

            <h3 className="text-2xl font-bold">Full-Stack Web Development</h3>
            <p className="mt-4 opacity-80">
              Transforming ideas into reality by building robust and dynamic web
              applications. I handle both front-end and back-end development to
              create cohesive and efficient solutions.
            </p>
          </div>
          <div className="rounded-lg">
            <span className="mb-10 block text-6xl opacity-30">02</span>
            <h3 className="text-2xl font-bold">DevOps</h3>
            <p className="mt-4 opacity-80">
              Streamlining your development processes with efficient and
              automated solutions. I integrate continuous delivery and
              collaboration to improve productivity and reliability.
            </p>
          </div>
          <div className="rounded-lg">
            <span className="mb-10 block text-6xl opacity-30">03</span>
            <h3 className="text-2xl font-bold">AWS Cloud</h3>
            <p className="mt-4 opacity-80">
              Leveraging the power of AWS to build scalable and secure cloud
              solutions. With my certification and hands-on experience, I
              optimize your cloud infrastructure for performance and
              cost-efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
