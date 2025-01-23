import React from 'react';
import { motion } from 'framer-motion';

export const MobileNavbar = () => {
  return (
    <motion.div
      className="h-[100vh] w-[100vw] bg-customBlack fixed top-0 right-0 z-10"
      initial={{ x: "100vw" }} // Start off-screen to the right
      animate={{ x: "0" }} // Slide into view
      exit={{ x: "100vw" }} // Slide out to the right when exiting
      transition={{ type: "tween", duration: 0.5 }} // Smooth animation
    >
      MobileNavbar
    </motion.div>
  );
};
