import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Login from'./pages/login/Login'
import Signin from './pages/signin/Signin'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import './App.css'

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
