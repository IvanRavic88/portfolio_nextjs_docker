import LinkAnimated from '../LinkAnimated';
import ThemedText from '../ThemedText';
import Image from 'next/image';
import IvanRavic from '@/public/images/Ivan.png';
import CurrentTime from '@/components/footer/CurentTime';
import { CONTACT_INFO } from '@/constants';

export default function Content() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-custom-gray px-5 py-8 sm:px-12">
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <FooterNav />
    </div>
  );
};

const Section2 = () => {
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
        <CurrentTime />
      </ThemedText>
    </div>
  );
};

const FooterNav = () => {
  return (
    <div className="flex flex-wrap gap-10 md:gap-24">
      <div>
        <ul className="flex w-full flex-col gap-2 lg:text-xl">
          <LinkAnimated href="/contact">
            <ThemedText>
              <h2 className="pb-3 text-2xl font-bold">Let&apos;s talk</h2>
            </ThemedText>
          </LinkAnimated>

          {CONTACT_INFO.map((info) => (
            <div
              key={info.id}
              className="flex flex-row items-center gap-2 md:gap-3"
            >
              {info.icon && (
                <div className="h-6 w-6 md:h-8 md:w-8">{info.icon}</div>
              )}
              <LinkAnimated href={info.href || ''}>
                <p>{info.text}</p>
              </LinkAnimated>
            </div>
          ))}
        </ul>
      </div>
      <div className="flex flex-row sm:flex-col">
        <ul className="lg:text-xl">
          <LinkAnimated href="/about">
            <ThemedText>
              <h2 className="pb-3 text-2xl font-bold">About</h2>
            </ThemedText>
          </LinkAnimated>

          <LinkAnimated href="/contact">Contact</LinkAnimated>
          <LinkAnimated href="/projects">Projects</LinkAnimated>
          <LinkAnimated href="/Ivan_Ravić_Resume_30_9_2024.pdf">
            Resume
          </LinkAnimated>
          <LinkAnimated href="/AWS Certified Developer - Associate certificate.pdf">
            AWS Certificate
          </LinkAnimated>
        </ul>
      </div>
    </div>
  );
};
