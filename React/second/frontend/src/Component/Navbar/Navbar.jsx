import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ThemeContext } from '../../Context/ThemeContext'
import './Navbar.css'

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const location = useLocation()

  return (
    <nav className={`navbar ${theme}`}>
      <div className="nav-brand">
        <Link to="/">CourseCraft</Link>
      </div>

      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Dashboard</Link>
        <Link to="/home" className={location.pathname === '/home' ? 'active' : ''}>Home</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Login</Link>
        <Link to="/signin" className={location.pathname === '/signin' ? 'active' : ''}>Sign Up</Link>
      </div>

      <button type="button" className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </nav>
  )
}

export default Navbar