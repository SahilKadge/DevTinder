import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";

export const Checkbox = ({isCheck, setIsCheck}) => {
    
    return (
        <div onClick={() => setIsCheck(!isCheck)} className={`w-[25px] h-[25px]  border-[1px] rounded-[5px] cursor-pointer text-[14px]  flex justify-center items-center 
        ${isCheck ? "bg-gradient-to-right text-customWhite border-gradientStart " : "bg-customBlack hover:bg-gray-400"}
        `}>
            {isCheck ? <FaCheck /> : ""}
        </div>
    )
}
