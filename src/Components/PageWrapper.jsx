

import { motion } from "framer-motion";

export const PageWrapper = ({ children }) => (
  <motion.div className="w-11/12"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);
