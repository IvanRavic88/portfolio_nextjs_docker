import React from 'react';
import LinkAnimated from '@/components/LinkAnimated';

function Socials() {
  return (
    <>
      <ul className="z-99 col-span-4 mx-auto hidden list-none sm:text-sm lg:block xl:text-xl">
        <li className="mb-4 border-b-2 pb-2 text-center opacity-50">
          <span>Let&apos;s get connected</span>
        </li>
        <li className="z-99 mb-2 sm:text-left">
          <LinkAnimated href="https://www.instagram.com/ivan_ravic_88/" external>
            Instagram
          </LinkAnimated>
        </li>
        <li className="z-99 mb-2 sm:text-left">
          <LinkAnimated
            href="https://linkedin.com/in/ivan-ravić-b3aa36143"
            external
          >
            LinkedIn
          </LinkAnimated>
        </li>
        <li className="z-99 mb-2 sm:text-left">
          <LinkAnimated
            href="https://github.com/IvanRavic88?tab=repositories"
            external
          >
            GitHub
          </LinkAnimated>
        </li>
      </ul>
    </>
  );
}

export default Socials;
