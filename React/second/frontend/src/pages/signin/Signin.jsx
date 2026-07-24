import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Signin.css'

const Signin = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Account created successfully!')
    navigate('/login')
  }

  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit} className="signin-card">
        <h1>Create an Account</h1>
        <p className="signin-subtitle">Join CourseCraft and start learning today</p>
        
        <div className="input-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" required />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Create a password" required />
        </div>

        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
    </div>
  )
}

export default Signin