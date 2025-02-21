import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1024px] w-full">
      {children}
    </div>
  );
};