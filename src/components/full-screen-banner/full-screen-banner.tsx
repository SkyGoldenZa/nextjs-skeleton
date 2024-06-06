import Image, { type StaticImageData } from 'next/image';
import React from 'react';

export const FullScreenBanner = ({
  children,
  classes,
  image,
  altText = '',
}: {
  children?: React.ReactNode;
  classes: string;
  image?: StaticImageData;
  altText?: string;
}) => (
  <div className={`relative flex h-96 w-full flex-col items-center justify-center`}>
    <div className="-z-10 w-full absolute">
      {image ? (
        <Image priority className="h-full w-full" src={image} alt={altText} layout="fill" objectFit="cover" objectPosition="center" />
      ) : (
        <img src="https://picsum.photos/1600/850" width="1600" height="850" alt="boo" className="h-full w-full bg-cover object-center" />
      ) }
    </div>

    <div className={ classes }>{ children }</div>
  </div>
);
