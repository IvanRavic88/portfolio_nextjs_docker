import Image from 'next/image';
import IvanRavic from '@/public/images/Ivan.png';
import Rounded from '@/components/common/Button';

function CTA() {
  return (
    <div className="mx-auto my-44 flex max-w-[90rem] flex-shrink flex-col justify-between gap-10 rounded-lg p-0 sm:container sm:my-20 sm:p-8 md:flex-row md:items-center">
      <div className="flex flex-col md:flex-row md:items-center">
        <Image
          src={IvanRavic}
          alt="Ivan Ravić profile picture"
          width={100}
          height={100}
          className="mb-4 mr-0 rounded-full sm:mb-0 sm:mr-4"
        />
        <p className="text-2xl font-bold leading-tight opacity-80 sm:text-left sm:text-3xl md:text-4xl">
          Let&rsquo;s collaborate! I&rsquo;m always open to new and innovative
          projects.
        </p>
      </div>
      <div className="">
        <a
          href="mailto:ravic.ivan88@gmail.com?subject=Email from Website&body=Hi, I'm interested in..."
          className="inline-block"
        >
          <Rounded>
            <p className="z-10 m-0 whitespace-nowrap text-base">
              Drop me a line
            </p>
          </Rounded>
        </a>
      </div>
    </div>
  );
}

export default CTA;
