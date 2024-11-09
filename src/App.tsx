import React from 'react'
import './App.css'
import 'antd/dist/reset.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Header from './components/Header'
import User from './components/User'
import FormSubmission from './components/FormSubmission'
import Home from './components/Home'
import Contacts from './components/Contacts'
import About from './components/About'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <div className='appBg'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/header' element={<Header />} />
          <Route path='/user' element={<User />} />
          <Route path='/formSubmission' element={<FormSubmission />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contacts />} />
          <Route path='/about' element={<About />} />
          <Route path='/footer' element={<Footer />} />
        </Routes>
      </div>
    </>
  )
}

export default App