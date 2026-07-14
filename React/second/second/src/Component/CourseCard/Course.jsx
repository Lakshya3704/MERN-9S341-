import React from 'react'
import './CourseCard.css'
const Course = ({image, title, instructor, price, duration, level}) => {
  return (
    <>
    <div className='card'>
        <img src={image} className='courseImg'></img>
        <h2>{title}</h2>
        <p>Instructor: {instructor}</p>
        <div className='price'>
          <p>Price: ₹{price}</p>
          <div className='dl'>
            <p>Duration: {duration } </p>
            <p>Level: {level}</p>
          </div>
        </div>
    </div>
    </>
  )
}

export default Course