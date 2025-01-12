import React from 'react'
import { SideBar } from '../components/SideBar'
import { MainTopBar } from '../components/common/MainTopBar'

export const MainLayout = ({children}) => {
  return (
    <div className='relative flex flex-row bg-black'>
        <MainTopBar/>
        <div className='lg:w-[25%]  '><SideBar/></div>
        <div className='lg:w-[75%] w-full h-[100vh]'>{children}</div>
    </div>
  )
}
