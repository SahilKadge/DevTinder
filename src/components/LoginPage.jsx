import { useState, useEffect, useRef } from "react";
import React from "react";
import bgvideo from "../assets/devtinder-bg-video-2.mp4";
import { CreateAccountPopUp } from "./common/CreateAccountPopUp";
import { LoginPopup } from "./common/LoginPopup";

export const LoginPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  const loginModal = () => {
    setIsLoginOpen((prev) => !prev);
  }
  

  return (
    <div className="relative ">
      <div className="lg:h-[100vh] md:h-[100vh] h-[90vh] overflow-hidden">
        <video
        className="lg:object-contain lg:w-[100%] lg:h-auto h-[90vh] object-cover "
          
          src={bgvideo}
          
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="absolute bottom-0 h-[50vh] w-full bg-gradient-to-t from-customBlack to to-customBlack/0">

      </div>
      <div className="absolute top-0 h-[10vh] w-full bg-gradient-to-b from-customBlack to to-customBlack/0">

      </div>
      <div className="bg-transparent absolute top-0 w-full h-[100vh] z-20 flex flex-col justify-center items-center">
        <div className="text-customWhite lg:text-[100px] text-[35px] font-bold flex  ">
          Start Something epic. 
        </div>
        <div className="flex w-full lg:w-auto md:w-auto lg:flex-row md:flex-row flex-col justify-center items-center lg:mt-[30px] md:mt-[30px] mt-[100px] ">
        <button onClick={toggleModal} className="bg-gradient-to-right lg:px-[30px] lg:py-[15px] md:px-[30px] md:py-[15px] lg:w-auto md:w-auto w-[80%] py-[10px]  rounded-full text-customWhite font-medium text-[20px] ">Create account</button>
        <button onClick={loginModal} className="lg:hidden md:hidden block mt-[20px] border-[1.5px] border-customWhite lg:px-[30px] lg:py-[15px] md:px-[30px] md:py-[15px] lg:w-auto md:w-auto w-[80%] py-[7px]  rounded-full text-customWhite font-medium text-[20px] ">Log In</button>
        </div>
      </div>
      {isModalOpen && <CreateAccountPopUp setIsModalOpen={setIsModalOpen} closeModal={toggleModal} />} {/* Render modal conditionally */}
      {isLoginOpen && <LoginPopup setIsModalOpen={setIsLoginOpen} closeModal={loginModal} />} {/* Render modal conditionally */}
    </div>
  );
};
