import type { Metadata } from 'next';

import { FullScreenBanner, InnerContainer, MainWrapper, OuterContainer, Welcome } from '@/components';
import { index } from '@/data';

export const metadata: Metadata = {
  title: index.site.title,
  description: index.site.description,
};

const Home = () => (
  <>
    <MainWrapper>
      <FullScreenBanner altText="hero image" classes={`container`}>
        <section className="relative flex h-full flex-col items-center justify-center">
          <div className="flex w-full">
            <div className="flex w-full items-center justify-center">
              <img src="https://picsum.photos/600/65" alt="alt" className="w-5/6 xl:w-2/3" />
            </div>
          </div>
        </section>
      </FullScreenBanner>
    </MainWrapper>

    <MainWrapper classes="bg-slate-900">
      <OuterContainer classes="py-12 text-gray-400">
        <Welcome />
      </OuterContainer>
    </MainWrapper>

    <MainWrapper classes="bg-slate-900">
      <OuterContainer classes={`w-1/2 text-gray-400`}>
        <InnerContainer>
          <div className={`text-center`}>
            Some little bottom text thing, like for mottos or whatever
          </div>
        </InnerContainer>
      </OuterContainer>
    </MainWrapper>
  </>
);

export default Home;
