import React from 'react';

export const Button = ({ children, classes, onClick }: { children: React.ReactNode; classes: string; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className={`focus:box-glow-xl rounded-md bg-cyan-600 px-4 py-2 shadow-teal-500 transition-all hover:bg-cyan-700 ${classes}`}>
      {children}
    </button>
  );
};
