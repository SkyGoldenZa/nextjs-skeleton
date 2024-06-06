import React from 'react';

export const InnerContainer = ({ children, classes }: { children: React.ReactNode; classes?: string }) => {
  return <div className={`p-6 ${classes}`}>{children}</div>;
};
