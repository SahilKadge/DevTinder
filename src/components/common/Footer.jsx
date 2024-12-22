import React from 'react'
import { AiFillFire } from 'react-icons/ai'
import { LuInstagram } from "react-icons/lu";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className='relative bg-customBlack w-full py-[40px] px-[60px] '>
        <div className='grid grid-cols-4 text-customWhite'>
            <div>
                <div className='flex items-center text-transparent bg-clip-text bg-gradient-to-right from-[#FD267A] to-[#FF6036]  '><AiFillFire className='h-[40px] text-gradientStart w-[40px]'/> <span className='text-[20px] font-semibold'>DEVTINDER</span></div>
            </div>
            <div >
                <div className='text-[24px] font-bold'>Legal</div>
                <ul className=' flex flex-col gap-y-[10px] mt-[20px]'>
                    <li className='hover:text-gradientStart'>Privacy</li>
                    <li className='hover:text-gradientStart'>Consumer Health Data Privacy Policy</li>
                    <li className='hover:text-gradientStart'>Terms</li>
                    <li className='hover:text-gradientStart'>Cookie Policy</li>
                </ul>

            </div>
            <div >
                <div className='text-[24px] font-bold'>Social</div>
                <div className=' text-[24px] flex flex-row gap-x-[15px] mt-[20px]'>
                   <LuInstagram className='hover:text-gradientStart' />
                   <FaYoutube className='hover:text-gradientStart' /> 
                   <FaTwitter className='hover:text-gradientStart' />
                   <FaFacebookF className='hover:text-gradientStart' />
                </div>

            </div>
            <div >
                <div className='text-[24px] font-bold'>Faq</div>
                <ul className=' flex flex-col gap-y-[10px] mt-[20px]'>
                    
                </ul>

            </div>
        </div>
        <div className='bg-slate-700 h-[1px] w-full my-[30px] '></div>
        <div className='flex flex-row gap-[10px] text-customWhite'> <span className='hover:text-gradientStart'>FAQ</span> <span> / </span> <span className='hover:text-gradientStart' >Safety Tips</span> <span>/</span> <span className='hover:text-gradientStart' >Terms</span> <span>/</span> <span className='hover:text-gradientStart' >Cookie Policy</span> <span>/</span> <span className='hover:text-gradientStart'> Privacy Settings</span></div>
    </div>
  )
}
