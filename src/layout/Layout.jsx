import React from 'react'
import { Navbar } from '../components/common/Navbar'
import { Footer } from '../components/common/Footer'

export const HomeLayout = ({children}) => {
  return (
    <div className=' '>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}
