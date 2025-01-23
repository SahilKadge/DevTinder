import React, { useEffect, useState } from 'react'
import { MessageTab } from './MessageTab';
import { MatchesTab } from './MatchesTab';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUser, fetchUser } from '../redux/slices/authSlice';
export const SideBar = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchUser(user._id)); // Replace "USER_ID" with the actual user ID
  }, [dispatch]);

  console.log("user in side bar ", user)
  const [navbarState , setNavbarState] = useState("matches");
  return (
    <div className='flex  lg:flex flex-col h-[100vh] w-full bg-customBlack border-r-[1px] border-gray-700 '>
        <div className='flex flex-row bg-gradient-to-right h-[11%] justify-between items-center px-[10px]'>
            <div className='flex flex-row gap-[5px] '>
                <div className=' h-[50px] w-[50px] rounded-full'>
                  <img src={user.userProfile} className='w-full h-full rounded-full object-cover'></img>
                </div>
                <div className='flex justify-center items-center'>{user.firstName}</div>
            </div>
            <div className='flex gap-[10px]'>
            <div className='bg-black h-[40px] w-[40px] rounded-full'></div>
            <div className='bg-black h-[40px] w-[40px] rounded-full'></div>
            <div className='bg-black h-[40px] w-[40px] rounded-full'></div>
            </div>
        </div>
        <div className='flex flex-row gap-[20px] text-customWhite mt-[10px] ml-[20px] '>
          <div className='flex flex-col cursor-pointer ' onClick={() => setNavbarState("matches")}>
            <div>Matches</div>
           { navbarState == "matches" ? <div className='w-full bg-gradient-to-right h-[3px] mt-[3px] rounded-full '></div> : ""}
          </div>
          <div className='flex flex-col cursor-pointer' onClick={() => setNavbarState("messages")}>
            <div>Messages</div>
           { navbarState == "messages" ? <div className='w-full bg-gradient-to-right h-[3px] mt-[3px] rounded-full '></div> : ""}
          </div>
        </div>
        <div>{
          navbarState == "matches" ? <MatchesTab/> : navbarState == 'messages' ? <MessageTab/> : ""}</div>

    </div>
  )
}
