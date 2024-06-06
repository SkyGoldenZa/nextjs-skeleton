'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

import { Button } from '@/components';

export const DesktopNavItem = ({ children, btn, link }: { children: React.ReactNode; btn?: boolean; link: string }) => {
  const router = useRouter();
  const pathname: string = usePathname();
  let isActive: boolean = pathname === link;

  const handleClick = () => {
    router.push(link, { scroll: false });
    document.activeElement instanceof HTMLElement && document.activeElement.blur();
  };

  return !btn ? (
    <Link
      href={link}
      className={`
        mx-2 border-b-2 border-teal-500 border-opacity-0 p-2 text-gray-200
        transition-all duration-300 hover:text-teal-500
        ${isActive ? `border-opacity-90 text-gray-200 hover:text-gray-200 ` : ''}
      `}>
      {children}
    </Link>
  ) : (
    <Button onClick={() => handleClick()} classes={`ml-6`}>
      {children}
    </Button>
  );
};
