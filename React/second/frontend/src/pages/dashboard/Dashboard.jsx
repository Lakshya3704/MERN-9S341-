import React, { useState } from 'react'
import data from '../../data/course'
import CourseCard from '../../Component/CourseCard/Course'
import './Dashboard.css'

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('All')

  const filteredCourses = data.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel
    return matchesSearch && matchesLevel
  })

  return (
    <div className="dash">
      <div className="dash-header">
        <h1 className="heading">Explore Premium Courses</h1>
        <p className="subheading">Upgrade your full-stack development and computer science skills</p>
        
        <div className="filter-bar">
          <input 
            type="text" 
            placeholder="🔍 Search courses or instructors..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <select 
            value={selectedLevel} 
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="level-select"
          >
            <option value="All">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </div>

      <div className="card-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(item => (
            <CourseCard 
              key={item.id}
              image={item.image}
              title={item.title}
              instructor={item.instructor}
              price={item.price}
              duration={item.duration}
              level={item.level}
            />
          ))
        ) : (
          <div className="no-results">No courses found matching your criteria.</div>
        )}
      </div>
    </div>
  )
}

export default Dashboard