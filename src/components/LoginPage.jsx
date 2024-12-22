import { useEffect, useRef } from "react";
import React from "react";
import bgvideo from "../assets/devtinder-bg-video-2.mp4";

export const LoginPage = () => {
  

  return (
    <div className="relative ">
      <div className="h-[100vh]  overflow-hidden">
        <video
        className="object-contain w-[100%] "
          
          src={bgvideo}
          
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="bg-transparent absolute top-0 w-full h-[100vh] z-20 flex flex-col justify-center items-center">
        <div className="text-customWhite text-[100px] font-bold flex  ">
          Start Something epic. 
        </div>
        <button className="bg-gradient-to-right px-[30px] py-[15px] rounded-full text-customWhite font-medium text-[20px] mt-[30px]">Create account</button>
      </div>
      
    </div>
  );
};
