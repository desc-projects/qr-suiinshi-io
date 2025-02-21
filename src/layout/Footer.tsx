import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Footer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <>
      <footer className="fixed bottom-0 left-0 bg-white/50 backdrop-blur-sm w-full h-[121px] z-50">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
            {children}
        </div>
      </footer>
    </>
  );
};
