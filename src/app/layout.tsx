import React from 'react';
import { Open_Sans } from 'next/font/google';
import './globals.css';

import { Footer, MainWrapper, Navigation, OuterContainer } from '@/components';
import Providers from './providers';

const openSans = Open_Sans({ weight: '300', subsets: ['latin'] });

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
    <body className={ openSans.className }>
    <Providers>
      <MainWrapper classes="bg-slate-900">
        <OuterContainer classes="py-1">
          <Navigation/>
        </OuterContainer>
      </MainWrapper>

      { children }
      <Footer/>
    </Providers>
    </body>
    </html>
  );
};

export default RootLayout;
