import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="fixed top-[80px] left-0 right-0 overflow-y-scroll"
      style={{
        height: "calc(100vh - 90px)",
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1024px] w-full">
        {children}
      </div>
    </div>
  );
};
