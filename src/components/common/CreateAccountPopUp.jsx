import React, { useState, useEffect } from 'react';
import { RxCross2 } from "react-icons/rx";
import { useGoogleLogin } from '@react-oauth/google';
import { AiFillFire } from 'react-icons/ai';
import { FcGoogle } from "react-icons/fc";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import "./fade.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/authSlice';
import { MailLogin } from './MailLogin';
import { baseURL } from '../../axios/instance';
export const CreateAccountPopUp = ({ setIsModalOpen, closeModal }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [loginType, setLoginType] = useState("main");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    
    setIsClosing(true); // Start the closing animation
    setTimeout(() => setIsModalOpen(false), 300); // Wait for the animation to complete
  };

  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      console.log("Code Response:", codeResponse);
      try {
        // Send access_token to your backend for verification
        const response = await axios.post(`${baseURL}/auth/google`, {
          token: codeResponse.access_token,
        }, { withCredentials: true });
        console.log("Backend Response:", response.data.user.isRegistrationCompleted        );
        // set the user in redux store 
        dispatch(setUser(response.data.user));
        // if registered then redirect to main page 
        if(response?.data?.user?.isRegistrationCompleted){
          navigate('/main')
        }else{
          navigate('/registration')
        }
      } catch (err) {
        console.error("Error communicating with backend:", err);
      }
    },
    onError: (error) => console.error("Login Failed:", error),
  });
  
  return (
    <div
      onClick={handleCloseModal}
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${
        isClosing ? 'fade-out' : 'fade-in'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex flex-col justify-center items-center xs:h-[75vh] h-[60vh] lg:h-[70vh] lg:w-[35vw] md:w-[60vw] w-[90vw] bg-customBlack rounded-[12px]"
      >
        <div
          onClick={handleCloseModal}
          className="absolute top-[20px] right-[20px] cursor-pointer"
        >
          <RxCross2 className="text-customWhite hover:text-gray-500 font-semibold text-[30px]" />
        </div>
        {loginType == "main" ? (
          <>
            <div className="flex items-center text-transparent bg-clip-text bg-gradient-to-right from-[#FD267A] to-[#FF6036]">
          <AiFillFire className="h-[40px] text-gradientStart w-[40px]" />
        </div>
        <div className="font-bold text-customWhite text-[28px] my-[10px]">Create Account</div>
        <div className="text-[16px] font-light text-center text-customWhite">
          By tapping Log In or Continue, you agree to our
          <br />
          <span className="text-blue-500 underline">Terms</span>. Learn how we process your data in our
          <br />
          <span className="text-blue-500 underline">Privacy Policy</span>, and{' '}
          <span className="text-blue-500 underline">Cookie Policy</span>
        </div>
        <button
          onClick={login}
          className="mt-[16px] inline-flex h-12 w-[90%] lg:w-[60%] hover:animate-shimmer gap-4 items-center justify-center text-center rounded-full border border-slate-700 bg-customBlack hover:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-2 font-medium text-customWhite transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="w-8 h-8 flex justify-center items-center text-customWhite rounded-full">
            <FcGoogle />
          </span>
          <span>Continue with Google</span>
        </button>
        <button
          onClick={() => setLoginType("mail")}
          className="mt-[10px] inline-flex h-12 w-[90%] lg:w-[60%] hover:animate-shimmer gap-4 items-center justify-center text-center rounded-full border border-slate-700 bg-customBlack hover:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-2 font-medium text-customWhite transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="w-8 h-8 flex justify-center items-center text-customWhite rounded-full">
            <BiLogoGmail />
            
          </span>
          <span>Continue with Mail</span>
        </button>
        <button
          
          className="mt-[10px] inline-flex h-12 w-[90%] lg:w-[60%] hover:animate-shimmer gap-4 items-center justify-center text-center rounded-full border border-slate-700 bg-customBlack hover:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-2 font-medium text-customWhite transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="w-8 h-8 flex justify-center items-center text-customWhite rounded-full">
            <FaPhoneAlt />
          </span>
          <span>Continue with Phone Number</span>
        </button>
        <div className="mt-6 font-light text-customWhite text-[16px] text-center">
          Have an account? <span className="text-blue-500 hover:underline cursor-pointer">Log In</span>
        </div>
        <div className="mt-6 font-light text-blue-500 hover:underline text-[16px] text-center">
          Trouble Creating Account?
        </div>
          </>
        ):(
          <div className='w-full'><MailLogin/></div>
        )}
      </div>
    </div>
  );
};
