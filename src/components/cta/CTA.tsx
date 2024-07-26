import Image from 'next/image';
import IvanRavic from '@/public/images/Ivan.png'; // Adjust the path as necessary
import Rounded from '@/components/common/Button'; // Adjust the path as necessary

function CTA() {
  return (
    <div className="container mx-auto my-5 mb-20 flex flex-shrink flex-col justify-between gap-8 rounded-lg p-8 md:flex-row">
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

      <a
        href="mailto:ravic.ivan88@gmail.com?subject=Email from Website&body=Hi, I'm interested in..."
        className="mt-4 sm:ml-auto sm:mt-0"
      >
        <Rounded>
          <p className="z-10 whitespace-nowrap p-1 text-base">Drop me a line</p>
        </Rounded>
      </a>
    </div>
  );
}

export default CTA;
