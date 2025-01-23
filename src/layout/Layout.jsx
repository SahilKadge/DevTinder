import React, { useState } from "react";
import { Navbar } from "../components/common/Navbar";
import { Footer } from "../components/common/Footer";
import { MobileNavbar } from "../components/common/MobileNavbar";
import { motion } from "framer-motion";

export const HomeLayout = ({ children }) => {
  // State for the HamburgerMenu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative bg-customBlack">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen ? (
        <MobileNavbar />
      ) : (
        <motion.div
          className="content-wrapper"
          initial={{ x: "-100vw" }} // Start off-screen to the right
      animate={{ x: "0" }} // Slide into view
      exit={{ x: "100vw" }} // Slide out to the right when exiting
      transition={{ type: "tween", duration: 0.5 }} // Smooth animation// Smooth animation
        >
          {children}
          <Footer />
        </motion.div>
      )}
    </div>
  );
};
