import React from 'react';

import { MainWrapper } from '@/components';
// import { FooterItem } from './footer-item';
import { FooterSocialItem } from './footer-social-item';

import linkedin from '@/images/social/linkedin.png';
import instagram from '@/images/social/instagram.png';
import twitter from '@/images/social/twitter.png';
import facebook from '@/images/social/facebook.png';

export const Footer: React.FC = () => {
  return (
    <MainWrapper>
      <footer className="container flex flex-col bg-black py-8">
        <div className={`flex flex-row justify-around bg-black pb-4`}>
          <div className="flex items-center">
            {/*<FooterItem link="/privacy">Privacy</FooterItem>*/}
            {/*<FooterItem link="/contact">Contact</FooterItem>*/}
          </div>

          <div className="flex flex-row items-center self-stretch">
            <FooterSocialItem link="https://www.linkedin.com/" img={linkedin} altText="LinkedIn" />
            <FooterSocialItem link="https://instagram.com/" img={instagram} altText="Instagram" />
            <FooterSocialItem link="https://twitter.com/" img={twitter} altText="Twitter" />
            <FooterSocialItem link="https://www.facebook.com/" img={facebook} altText="Facebook" />
          </div>
        </div>

        <div className={`flex items-center justify-center text-xs font-thin text-gray-400`}>
          Copyright © 2024 or something
        </div>
      </footer>
    </MainWrapper>
  );
};
