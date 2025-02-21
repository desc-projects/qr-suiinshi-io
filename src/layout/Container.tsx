import { motion, useAnimation } from "framer-motion";
import React, { ReactNode, useRef } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);


  return (
    <motion.div
      className="fixed top-[116px] bottom-[121px] left-0 right-0 overflow-y-auto"
      style={{
        height: "calc(100vh - 116px - 121px)", // Высота экрана минус высота Header и Footer
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1024px] w-full">
        {children}
      </div>
    </motion.div>
  );
};
