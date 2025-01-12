

import './App.css'
import {  Route, Routes } from 'react-router-dom'
import { routes } from './utils'
import { Home } from './pages/Home'

import { RegistrationPage } from './pages/RegistrationPage'
import { MainPage } from './pages/MainPage'
function App() {


  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/registration" element={<RegistrationPage />} /> */}
        <Route path={routes.root} Component={Home}/>
        <Route path={routes.regsitration} Component={RegistrationPage}/>
        <Route path={routes.main} Component={MainPage}/>
      </Routes>
    </>
  )
}

export default App
