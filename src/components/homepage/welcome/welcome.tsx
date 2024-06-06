import Image from 'next/image';

export const Welcome = () => (
  <div className="flex w-full flex-col items-center justify-center md:flex-row">
    <div className="flex justify-center pb-12 md:w-1/3 md:justify-start md:pb-0">
      <img src="https://picsum.photos/700" width="700" height="700" alt="welcome" className="w-1/2 md:w-4/5" />
    </div>

    <div className="w-full md:w-2/3">
      <div className="pb-3 text-2xl text-neutral-200">Heading</div>
      <div className="pb-6 text-sm">
        Description text
      </div>

      <div className="pb-3 text-2xl text-neutral-200">Section heading</div>
      <div className="pb-1 text-xl text-neutral-200">Subheading</div>
      <div className="pb-3 text-sm">
        Description text
      </div>
    </div>
  </div>
);
