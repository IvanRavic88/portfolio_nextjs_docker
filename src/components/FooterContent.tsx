import LinkAnimated from './LinkAnimated';
import ThemedText from './ThemedText';
import Image from 'next/image';
import IvanRavic from '@/public/Ivan.png';

export default function Content() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-custom-gray px-12 py-8">
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h12',
  });

  return (
    <div className="flex items-end justify-between">
      <h1 className="mt-10 flex items-center text-[10vw] leading-[0.8] text-custom-dark">
        <Image
          src={IvanRavic}
          alt="Ivan Ravić profile picture"
          width={200}
          height={200}
          className="mr-3 hidden rounded-full sm:block"
        />
        Ivan Ravic
      </h1>
      <ThemedText>
        <p>Local Time: {currentTime} </p>
      </ThemedText>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20">
      <div className="flex flex-col gap-2">
        <ul>
          <h3 className="mb-2 uppercase">
            <LinkAnimated href="/about">
              <ThemedText>About</ThemedText>
            </LinkAnimated>
          </h3>
          <LinkAnimated href="/contact">Contact</LinkAnimated>
          <LinkAnimated href="/projects">Projects</LinkAnimated>
          <LinkAnimated href="/Ivan_Ravić_Resume_21_5_2024.pdf">
            Resume
          </LinkAnimated>
          <LinkAnimated href="/AWS Certified Developer - Associate certificate.pdf">
            AWS Certificate
          </LinkAnimated>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <ul>
          <h3 className="mb-2 uppercase">
            <ThemedText>Socials</ThemedText>
          </h3>
          <LinkAnimated href="https://www.instagram.com/ivan_ravic_88/">
            Instagram
          </LinkAnimated>
          <LinkAnimated href="https://linkedin.com/in/ivan-ravić-b3aa36143">
            LinkedIn
          </LinkAnimated>
          <LinkAnimated href="https://github.com/IvanRavic88?tab=repositories">
            GitHub
          </LinkAnimated>
        </ul>
      </div>
    </div>
  );
};
