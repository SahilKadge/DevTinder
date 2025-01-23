import { useState } from "react";
import { motion } from "framer-motion";

const pathTopVariants = {
  open: { d: "M3 6L18 18" }, // Top diagonal
  closed: { d: "M3 6L21 6" } // Horizontal
};

const pathMiddleVariants = {
    open: { d: "M3 18L18 6" }, // Bottom diagonal
    closed: { d: "M3 12L21 12" } // Horizontal
};

const pathBottomVariants = {
  open: { d: "M3 18L18 6" }, // Bottom diagonal
  closed: { d: "M3 18L21 18" } // Horizontal
};

export const HamburgerMenu = ({toggle , isOpen, setIsOpen}) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen((prev) => !prev);
//   };

  return (
    <button onClick={toggle} style={{ cursor: "pointer" }}>
      <svg width="30" height="30" viewBox="0 0 30 30">
        {/* Top Line */}
        <motion.path
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
          animate={isOpen ? "open" : "closed"}
          variants={pathTopVariants}
        />
        {/* Middle Line */}
        <motion.path
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
          animate={isOpen ? "open" : "closed"}
          variants={pathMiddleVariants}
        />
        {/* Bottom Line */}
        <motion.path
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
          animate={isOpen ? "open" : "closed"}
          variants={pathBottomVariants}
        />
      </svg>
    </button>
  );
};
