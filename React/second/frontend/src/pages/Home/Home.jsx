import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Master New Skills with CourseCraft</h1>
        <p>Explore top-rated online courses in MERN stack, React, Data Structures, and Python taught by industry experts.</p>
        <div className="hero-buttons">
          <Link to="/" className="btn-primary">Explore Courses</Link>
          <Link to="/signin" className="btn-secondary">Join Now</Link>
        </div>
      </div>
    </div>
  )
}

export default Home