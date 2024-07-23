import React from 'react';

export default function MyServices() {
  return (
    <section>
      <div className="container mx-auto my-52 px-4">
        <h2 className="mb-20 text-left text-5xl font-bold">
          Maybe i can help you with:
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg p-8 shadow-lg">
            <span className="mb-10 block text-6xl opacity-10">01</span>

            <h3 className="text-2xl font-bold">Full-Stack Web Development</h3>
            <p className="mt-4">
              Transforming ideas into reality by building robust and dynamic web
              applications. I handle both front-end and back-end development to
              create cohesive and efficient solutions.
            </p>
          </div>
          <div className="rounded-lg p-8 shadow-lg">
            <span className="mb-10 block text-6xl opacity-10">02</span>
            <h3 className="text-2xl font-bold">DevOps</h3>
            <p className="mt-4">
              Streamlining your development processes with efficient and
              automated solutions. I integrate continuous delivery and
              collaboration to improve productivity and reliability.
            </p>
          </div>
          <div className="rounded-lg p-8 shadow-lg">
            <span className="mb-10 block text-6xl opacity-10">03</span>
            <h3 className="text-2xl font-bold">AWS Cloud</h3>
            <p className="mt-4">
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
