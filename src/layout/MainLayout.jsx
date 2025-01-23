import React from 'react'
import { SideBar } from '../components/SideBar'
import { MainTopBar } from '../components/common/MainTopBar'
import { BottomBar } from '../components/common/bottomBar'


export const MainLayout = ({children}) => {
  return (
    <div className='relative flex lg:h-auto h-[100vh] lg:flex-row md:flex-row flex-col bg-black'>
        <MainTopBar/>
        <div className='lg:w-[25%] lg:block md:block hidden '><SideBar/></div>
        <div className='lg:w-[75%] w-full h-[90vh] md:h-[100vh] lg:h-[100vh]'>{children}</div>
        <BottomBar/>
    
    </div>
  )
}
