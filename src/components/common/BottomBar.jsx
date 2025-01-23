import React, { useState, useEffect } from 'react';
import { FaRegHeart, FaHeart, FaMessage, FaRegMessage } from "react-icons/fa6";
import { RiHome2Line, RiHome2Fill } from "react-icons/ri";
import { useNavigate, useLocation } from 'react-router-dom';
import { HiMiniUserCircle } from "react-icons/hi2";

export const BottomBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(location.pathname); // Initialize based on current route

  useEffect(() => {
    setActive(location.pathname); // Update active based on navigation changes
  }, [location.pathname]);

  return (
    <div className='lg:hidden md:hidden absolute bottom-0 flex bg-customBlack px-[50px] h-[10vh] w-full justify-between items-center'>
      <div
        role="button"
        aria-label="Navigate to connections"
        onClick={() => navigate('/connections')}
        className={`${active ==='/connections' ? 'text-gradientStart ': 'text-gray-700'} text-[25px]`}
      >
         <FaHeart /> 
      </div>

      <div
        role="button"
        aria-label="Navigate to home"
        onClick={() => navigate('/main')}
        className={`${active ==='/main' ? 'text-gradientStart ': 'text-gray-700'} text-[25px]`}
      >
        <RiHome2Fill /> 
      </div>

      <div
        role="button"
        aria-label="Navigate to messages"
        onClick={() => navigate('/messages')}
        className={`${active ==='/messages' ? 'text-gradientStart ': 'text-gray-700'} text-[21px]`}
      >
        <FaMessage /> 
      </div>

      <div
        role="button"
        aria-label="Navigate to profile"
        onClick={() => navigate('/profile')}
        className={`${active ==='/profile' ? 'text-gradientStart ': 'text-gray-700'} text-[30px]`}
      >
        <HiMiniUserCircle /> 
      </div>
    </div>
  );
};
