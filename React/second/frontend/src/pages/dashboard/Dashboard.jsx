import React from 'react'
import data from '../../data/course'
import CourseCard from '../../Component/CourseCard/Course'
import './Dashboard.css'
const Dashboard = () => {
  return (
    <>
    <div className='dash'>
    <h1 className='heading'>Welcome to DashBoard</h1>
      <h3 className='explore'>Explore the Courses</h3>
      <div className='card-grid'>
        {data.map(data=>{
          return (
            <div key={data.id}>
              <CourseCard image={data.image}
              title={data.title}
              instructor={data.instructor}
              price={data.price}
              duration={data.duration}
              level={data.level}
              ></CourseCard>
            </div> 
          )
        })}
      </div>

    </div>
    </>
  )
}

export default Dashboard