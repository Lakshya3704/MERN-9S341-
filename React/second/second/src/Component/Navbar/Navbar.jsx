import React from 'react'
import Home from '../../pages/Home/Home.jsx'
import About from '../../pages/About/About.jsx'
import Login from '../../pages/login/Login.jsx'
import Signin from '../../pages/signin/Signin.jsx'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <nav className='navbar'>
      <a href='/' >MyDashboard</a>
      <a href='home'>Home</a>
      <a href='About'>About</a>
      <a href='Login'>Login</a>
      <a href='Signin'>Signin</a>
    </nav>
    </>
  )
}

export default Navbar