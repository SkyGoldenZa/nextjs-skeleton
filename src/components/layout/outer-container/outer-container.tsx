import React from 'react';

export const OuterContainer = ({ children, classes }: { children: React.ReactNode; classes?: string }) => {
  return <section className={`container p-6 ${classes ? classes : ''}`}>{children}</section>;
};
