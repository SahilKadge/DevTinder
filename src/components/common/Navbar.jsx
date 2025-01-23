import React, { useEffect, useState } from 'react'
import { AiFillFire } from "react-icons/ai";

import { LoginPopup } from './LoginPopup';
import { HamburgerMenu } from './HamburgerMenu';

export const Navbar = ({isMenuOpen, setIsMenuOpen}) => {
  const [isScrolled , setIsScrolled] = useState(false);
   const [isModalOpen, setIsModalOpen] = useState(false);
   
    const toggleModal = () => {
      setIsModalOpen((prev) => !prev);
    };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  useEffect(() => {
    const handdleScroll = () => {
      if(window.scrollY > 10 ){ 
        setIsScrolled(true);
      }else{
        setIsScrolled(false);
      }
      
    }
    window.addEventListener('scroll', handdleScroll);
    return () => {
      window.removeEventListener('scroll', handdleScroll);
    }
  })
  return (
    <div>
    <div className={`lg:flex md:flex  w-full  justify-center  h-[70px] lg:fixed md:fixed absolute z-50 transition-all ease-in-out duration-500 ${isScrolled ? "top-0" : "lg:top-[50px] md:top-[50px] top-0"}`}>
        <div className={`h-full lg:bg-customWhite md:bg-customWhite bg-transparent p-[10px] flex flex-row justify-between items-center transition-all ease-in-out duration-300 ${isScrolled ? "w-full rounded-none  " : "lg:rounded-full md:rounded-full rounded-none lg:w-[77%] md:w-[77%] w-full"} `} >
          <div className='flex items-center text-transparent bg-clip-text lg:bg-gradient-to-right md:bg-gradient-to-right bg-customWhite from-[#FD267A] to-[#FF6036]  '><AiFillFire className='h-[40px] lg:text-gradientStart md:text-gradientStart text-customWhite w-[40px]'/> <span className='text-[20px] font-semibold'>DEVTINDER</span></div>
          <div className=' text-customBlack  font-medium text-[18px] gap-[32px] lg:flex md:flex hidden '>
            <div>Product</div>
            <div>About Us </div>
            <div>Privacy Policy</div>
            <div>Support</div>
          </div>
          <button onClick={toggleModal} className='lg:block md:block hidden rounded-full h-full px-[40px] bg-gradient-to-right text-[18px] font-medium text-customWhite'>Log In </button>
          <div className="lg:hidden md:hidden">
            <HamburgerMenu toggle={toggleMenu} setIsOpen={setIsMenuOpen} isOpen={isMenuOpen} />
          </div>
        </div>
    </div>
    {isModalOpen && <LoginPopup setIsModalOpen={setIsModalOpen} closeModal={toggleModal} />} {/* Render modal conditionally */}
    </div>
  )
}
