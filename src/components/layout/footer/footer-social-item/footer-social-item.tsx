import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

export const FooterSocialItem = ({ link, img, altText }: { link: string; img: StaticImageData; altText: string }) => {
  return (
    <Link href={link} className={`flex h-8 w-8 items-center justify-center px-0.5`}>
      <div className={`flex h-5 w-5 items-center justify-center transition-all duration-300 hover:h-8 hover:w-8`}>
        <Image src={img} alt={altText} />
      </div>
    </Link>
  );
};
