import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BiSolidMessage } from "react-icons/bi";
import { RiMessage3Fill } from "react-icons/ri";
import { baseURL } from '../axios/instance';


export const MessageTab = () => {
  const [fetchedConnections, setFetchedConnections] = useState([])
  const fetchAllConnections = async () => {
    try {
      const response = await axios.get(`${baseURL}/connection/fetchall`, { withCredentials: true })
      console.log(response.data.data, "response from fetch connections ")
      const fetchedData = response?.data?.data;
      setFetchedConnections(fetchedData)
    } catch (error) {
      console.log("error accour in fetching all the connection list ", error)
    }
  }
  useEffect(() => {
    fetchAllConnections()
  }, [])
  return (
    <div className='w-full h-full pt-[40px] '>
      {
        fetchedConnections ? (
          <div className='w-full h-full flex flex-col gap-4'>
            {fetchedConnections.map((item , index) => {
              return (
                <div className='flex flex-row justify-between mx-[10px] ' key={index}>
                  <div className='flex flex-row gap-[10px] items-center '>
                    <div className='h-[50px] w-[50px] rounded-full bg-gray-700 '><img className="w-full h-full rounded-full object-contain" src={item.userProfile}></img></div>
                    <div className='text-customWhite'>{item.firstName} {item.lastName}</div>
                  </div>
                  <div className='flex flex-row gap-[10px] items-center '>
                    {/* <button onClick={() => reviewRequests("accepted", item._id)} className='px-[21px] py-[9px] bg-gradient-to-right text-customWhite rounded-[8px] text-[12px]'>Accept</button> */}
                    <button className='px-[20px] py-[8px] bg-customBlack hover:bg-gradient-to-right hover:border-[0px] border-customWhite border-[1px] text-customWhite rounded-[8px] text-[12px]'>Message</button>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className='w-full flex flex-col '>
            <div className='relative w-full h-[300px] '>
              <BiSolidMessage className=' absolute text-gradientStart text-[200px] left-[10%] top-0 mt-[100px] ' />
              <RiMessage3Fill className=' absolute text-gradientEnd text-[100px] left-[50%] top-[30%] text-center mt-[100px] ' />
            </div>
            <div className='text-[20px] text-center text-customWhite font-medium'>Say Hello</div>
            <div className='text-customWhite text-center'>Lorem ipsum dolor sit, amet<br /> consectetur adipisicing elit. <br />Magni optio porro ab!</div>
          </div>
        )
      }
    </div>
  )
}
