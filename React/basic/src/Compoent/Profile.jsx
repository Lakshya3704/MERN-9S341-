import React from 'react'
import { useState } from 'react'
const profile = () => {
    const [name, setName] = useState('');
      const [reg, setReg] = useState('');
      const [email, setEmail] = useState('');
      const[age,setAge] = useState('');
      const [city, setCity] = useState('');
      const [post, setPost] = useState('');
  return (
    <>
      <p>Student Detail form</p>
      <form action="/">
          <label htmlFor="name">Name: </label>
          <input type="text" placeholder='Enter your name' id='name' onChange={(e)=>setName(e.target.value)}></input><br></br><br></br>
          <label htmlFor="reg">Reg: </label>
          <input type="number" placeholder='Enter your reg' id='reg' onChange={(e)=>setReg(e.target.value)}></input><br></br><br></br>
          <label htmlFor="email">Email: </label>
          <input type="email" placeholder='Enter your email' id='email' onChange={(e)=>setEmail(e.target.value)}></input><br></br><br></br>
          <label htmlFor="age">Age: </label>
          <input type='number' placeholder='Enter your age' id='age' onChange={(e)=>setAge(e.target.value)}></input><br></br><br></br>
          <label htmlFor='city'>City: </label>
          <input type='text' placeholder='Enter your city' id='city' onChange={(e)=>setCity(e.target.value)}></input><br></br><br></br>
          <label htmlFor='post'>Post: </label>
          <div>
            <input type='radio' value="student" onChange={(e)=>setPost(e.target.value)}></input>
            <label htmlFor='student'>Student</label>
            <input type='radio' value="scholar" onChange={(e)=>setPost(e.target.value)}></input>
            <label htmlFor='scholar'>Scholar</label>
            <input type='radio' value="teacher" onChange={(e)=>setPost(e.target.value)}></input>
            <label htmlFor='teacher'>Teacher</label>
          </div>
      </form>

      <div>
        {name}
        {reg}
        {email}
        {age}
        {city}
        {post}
      </div>
    </>
  )
}

export default profile