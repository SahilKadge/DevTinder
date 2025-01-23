

import './App.css'
import {  Route, Routes } from 'react-router-dom'
import { routes } from './utils'
import { Home } from './pages/Home'

import { RegistrationPage } from './pages/RegistrationPage'
import { MainPage } from './pages/MainPage'
import { MessagePage } from './pages/MessagePage'
import { ConnectionPage } from './pages/ConnectionPage'
import { ProfilePage } from './pages/ProfilePage'
function App() {


  return (
    <div className='bg-customBlack'>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/registration" element={<RegistrationPage />} /> */}
        <Route path={routes.root} Component={Home}/>
        <Route path={routes.regsitration} Component={RegistrationPage}/>
        <Route path={routes.main} Component={MainPage}/>
        <Route path={routes.messages} Component={MessagePage}/>
        <Route path={routes.connections} Component={ConnectionPage}/>
        <Route path={routes.profile} Component={ProfilePage}/>
      </Routes>
    </div>
  )
}

export default App
