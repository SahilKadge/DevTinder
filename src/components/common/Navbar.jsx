import React, { useEffect, useState } from 'react'
import { AiFillFire } from "react-icons/ai";

export const Navbar = () => {
  const [isScrolled , setIsScrolled] = useState(false);
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
    <div className={`w-full flex justify-center  h-[70px] fixed z-50 transition-all ease-in-out duration-500 ${isScrolled ? "top-0" : "top-[50px]"}`}>
        <div className={`h-full bg-customWhite p-[10px] flex flex-row justify-between items-center transition-all ease-in-out duration-300 ${isScrolled ? "w-full rounded-none  " : "rounded-full w-[77%]"} `} >
          <div className='flex items-center text-transparent bg-clip-text bg-gradient-to-right from-[#FD267A] to-[#FF6036]  '><AiFillFire className='h-[40px] text-gradientStart w-[40px]'/> <span className='text-[20px] font-semibold'>DEVTINDER</span></div>
          <div className=' text-customBlack font-medium text-[18px] gap-[32px] flex '>
            <div>Product</div>
            <div>About Us </div>
            <div>Privacy Policy</div>
            <div>Support</div>
          </div>
          <button className='rounded-full h-full px-[40px] bg-gradient-to-right text-[18px] font-medium text-customWhite'>Log In </button>
        </div>
    </div>
  )
}
