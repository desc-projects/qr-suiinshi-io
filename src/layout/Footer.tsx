import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Footer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <>
      <footer className="fixed bottom-0 left-0 w-full h-[121px]">
        <div className="backdrop-blur-[13.8px] bg-white bg-opacity-50 container mx-auto px-4 h-full flex items-center justify-center">
          <p className="text-center text-gray-700">
            {children}
          </p>
        </div>
      </footer>
    </>
  );
};
