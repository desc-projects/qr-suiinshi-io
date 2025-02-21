import React, { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="drop-shadow-[0_-6px_18.8px_rgba(0,0,0,0.15)] fixed top-0 left-0 w-full h-[116px] bg-[#FCFBFB] border-b border-[#E5E7EB] rounded-b-[16px] z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1024px] w-full h-full flex items-center text-center text-2xl">
        {children}
      </div>
    </header>
  );
};