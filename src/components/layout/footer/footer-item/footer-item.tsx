'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

export const FooterItem = ({ children, link }: { children: React.ReactNode; link: string }) => {
  const pathname: string = usePathname();
  let isActive: boolean = pathname === link;

  return (
    <Link
      href={link}
      className={`
        mx-1 border-b-2 border-gray-200 border-opacity-100 p-1 text-sm text-slate-200
        transition-all duration-300 hover:border-opacity-0
        ${isActive ? 'border-slate-400 text-slate-400' : ''}
      `}>
      {children}
    </Link>
  );
};
