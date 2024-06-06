'use client';
import React, { useRef, useState } from 'react';

import { useOutsideClick } from '@/hooks';

import { MobileNavItem } from './mobile-nav-item';
import { HamburgerIcon } from './hamburger-icon';

export const MobileNav = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  useOutsideClick(wrapperRef, handleClose);

  return (
    <nav ref={wrapperRef} className="z-10">
      <button onClick={() => setIsOpen(!isOpen)} className="flex h-12 w-12 items-center justify-center rounded-full focus:outline-none">
        <HamburgerIcon isOpen={isOpen} handleToggle={handleToggle} />
      </button>

      {isOpen && (
        <div className="absolute bottom-0 left-0 right-0 top-10 mt-8 bg-slate-900 py-8 shadow-xl">
          <MobileNavItem link="/" handleToggle={handleToggle}>
            Home
          </MobileNavItem>
        </div>
      )}
    </nav>
  );
};
