import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export const MobileNavItem = ({ children, link, handleToggle }: { children: React.ReactNode; link: string; handleToggle: () => void }) => {
  const pathname: string = usePathname();
  let isActive: boolean = pathname === link;

  return (
    <Link
      href={link}
      onClick={handleToggle}
      className={`
          block px-4 py-6 text-center text-teal-500 transition-all duration-300 hover:bg-slate-800
          ${isActive ? `text-teal-800 hover:bg-slate-900` : ''}
        `}>
      {children}
    </Link>
  );
};
