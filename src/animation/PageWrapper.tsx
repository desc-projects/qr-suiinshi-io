import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <motion.div
      initial={{opacity: 0, x: 200}}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: -75}}
      transition={{duration: 0.5}}
    >
      {children}
    </motion.div>
  )  
};
