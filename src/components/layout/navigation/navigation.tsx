'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { DesktopNav } from './desktop-nav';
import { MobileNav } from './mobile-nav';

export const Navigation: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-slate-900 px-0 py-3 xl:px-3">
      <Link
        href="/"
        className={`
          flex h-14 w-14 items-center justify-center transition-all duration-500 hover:bg-green-950
        `}>
        Logo plz
      </Link>

      <div className="hidden md:block">
        <DesktopNav />
      </div>

      <div className="flex md:hidden">
        <MobileNav />
      </div>
    </div>
  );
};
