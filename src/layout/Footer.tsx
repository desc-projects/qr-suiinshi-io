import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Footer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <>
      <footer className="z-10 fixed bottom-0 left-0 w-full h-[121px] bg-white bg-opacity-50 backdrop-blur-[20rem]">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <p className="text-center text-gray-700">
            {children}
          </p>
        </div>
      </footer>
    </>
  );
};
