import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Logged in successfully!')
    navigate('/')
  }

  return (
    <div className="loginin">
      <form onSubmit={handleSubmit} className="login-card">
        <h1>Welcome Back</h1>
        <p className="login-subtitle">Enter your credentials to access CourseCraft</p>
        
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
        </div>
        
        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  )
}

export default Login