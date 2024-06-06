import React from 'react';

export const MainWrapper = ({ children, classes }: { children: React.ReactNode; classes?: string }) => {
  return <main className={`flex flex-col items-center justify-between ${classes}`}>{children}</main>;
};
