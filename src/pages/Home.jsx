import React from 'react'
import { HomeLayout } from '../layout/Layout'
import { LoginPage } from '../components/LoginPage'
export const Home = () => {
  return (
    <HomeLayout>
        <LoginPage/>
    </HomeLayout>
  )
}
