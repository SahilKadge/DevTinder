import React from 'react'
import { useSelector } from 'react-redux'
import { IoMdSettings } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../redux/slices/authSlice';
export const ProfileTab = () => {
    const user = useSelector((state) => state.auth.user)
    console.log("user in profile tab ", user)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(clearUser());
        navigate('/');
    };
    return (
        <div className='relative h-full bg-black overflow-hidden   '>
            <div className='bg-customBlack h-[60vh] w-[200vw] rounded-b-[500vh] translate-x-[-25%]'>
                <div className='absolute top-[20%] left-[50%] translate-x-[-50%] flex flex-col justify-center items-center'>
                    <div className='rounded-full h-[150px] w-[150px] bg-red-400  '>
                        <img className='object-cover h-full w-full rounded-full ' src={user.userProfile}></img>
                    </div>
                    <div className='text-customWhite w-full text-center mt-[10px] text-[24px] '>{user.firstName} {user.lastName} <span className='text-[36px] '>{user.age}</span> </div>
                    <div className='flex mx-auto gap-[50px] mt-[10px]'>
                        {/* <div className='h-[50px] w-[50px] rounded-full border-[1px] border-gray-700 flex justify-center items-center text-gray-800 text-[25px]'><IoMdSettings /> </div> */}
                        <div className='h-[50px] w-[50px] rounded-full border-[1px] border-gray-700 flex justify-center items-center text-gray-800 text-[25px] mt-[20px]'><IoMdSettings /> </div>
                        {/* <div className='h-[50px] w-[50px] rounded-full border-[1px] border-gray-700 flex justify-center items-center text-gray-800 text-[25px]'><IoMdSettings /> </div> */}
                    </div>
                </div>
            </div>
            <button
                onClick={handleLogout}
                className="  absolute z-20 px-[14px] py-[8px] bg-transperent border-[1px] hover:border-0 border-gray-700 hover:bg-gradient-to-right text-customWhite text-[16px] rounded-full right-4 top-4"
            >
                Log Out
            </button>
        </div>
    )
}
