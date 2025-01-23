import React, { useEffect } from 'react'
import { MainLayout } from '../layout/MainLayout'
// import { SwipeCards } from '../components/common/FeedCard'
import { FeedsPage } from '../components/FeedsPage'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export const MainPage = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.auth.user)
  console.log("userrrrrrrrrrrrri in mainnnnnnnnn pageeeeeeeeee", user)

  useEffect(() => {
    if(!user){
      navigate("/")
    }else{
      if(!user.isRegistrationCompleted){
        navigate('/registration')
      }
    }
  },[user, navigate])
  return (
    <MainLayout>
      <FeedsPage/> 
      {/* <SwipeCards/> */}
    </MainLayout>
  )
}
