import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { baseURL } from '../axios/instance';
export const MatchesTab = () => {
  const [reqestData , setRequestData] = useState([]);
  
  const fetchAllRequests = async() => {
    try {
      const response = await axios.get(
        `${baseURL}/request/fetchall`,
        
        { withCredentials: true } // Enable sending cookies
      );
      const requests = response?.data?.data
      setRequestData(requests)
      console.log("Response from API:", response.data.data);
    } catch (error) {
      console.error("Error handling swipe action:", error);
      alert("Failed to send request. Please try again.");
    }
  }
  useEffect (() => {
    fetchAllRequests();
  },[])
  const reviewRequests = async (reviewStatus, requestId) => {
    try {
      const reviewResponse = await axios.patch(
        `${baseURL}/request/review/${reviewStatus}/${requestId}`, // Use PATCH and correct endpoint
        {}, // Empty body since the parameters are in the URL
        { withCredentials: true } // Enable sending cookies
      );
      console.log("Response from review request:", reviewResponse.data);
      // Optionally, update the local state to reflect the changes:
      setRequestData((prev) =>
        prev.filter((request) => request._id !== requestId)
      );
    } catch (error) {
      console.error("Error occurred while updating the request:", error);
      // alert("Failed to update the request. Please try again.");
    }
  };
  
  // ["accepted", "rejected"];
  return (
    <div className='w-full h-full pt-[50px] '>
      {
        reqestData.length != 0 ? (
          <div className='flex flex-col gap-[10px] ' >
            {reqestData.map((item, index) => {
              return (
                <div className='flex flex-row justify-between mx-[10px] ' key={index}>
                  <div className='flex flex-row gap-[10px] items-center '>
                    <div className='h-[50px] w-[50px] rounded-full bg-gray-700 '><img className="w-full h-full rounded-full object-contain" src={item.fromUserId.userProfile}></img></div>
                    <div className='text-customWhite'>{item.fromUserId.firstName} {item.fromUserId.lastName}</div>
                  </div>
                  <div className='flex flex-row gap-[10px] items-center '>
                    <button onClick={() => reviewRequests("accepted", item._id)} className='px-[21px] py-[9px] bg-gradient-to-right text-customWhite rounded-[8px] text-[12px]'>Accept</button>
                    <button className='px-[20px] py-[8px] bg-customBlack border-customWhite border-[1px] text-customWhite rounded-[8px] text-[12px]'>Decline</button>
                  </div>
                </div>
              )
            })}
          </div>
        ):(
          <div className='w-full h-full flex flex-col items-center'>
              <div className='bg-gradient-to-tr from-gradientStart to-gradientEnd h-[200px] w-[150px] rounded-[10px] '></div>
              <div className='text-customWhite text-[20px] font-medium mt-[18px]'>Start Matching</div>
              <div className='text-customWhite text-center'>Lorem ipsum dolor sit, amet<br/> consectetur adipisicing elit. <br/>Magni optio porro ab!</div>
          </div>
        )
      }
    </div>
  )
}
