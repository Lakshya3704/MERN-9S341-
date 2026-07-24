import React from 'react'
import './CourseCard.css'

const Course = ({ image, title, instructor, price, duration, level }) => {
  const levelClass = level ? level.toLowerCase() : 'beginner'

  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="courseImg" />
        <span className={`level-tag ${levelClass}`}>{level}</span>
      </div>

      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="instructor">👨‍🏫 {instructor}</p>

        <div className="card-info">
          <span className="duration">⏱️ {duration}</span>
        </div>

        <div className="price-row">
          <div className="price-tag">₹{price}</div>
          <button className="enroll-btn">Enroll Now</button>
        </div>
      </div>
    </div>
  )
}

export default Course