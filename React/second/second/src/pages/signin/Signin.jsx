import React from 'react'
import './Signin.css'
const Signin = () => {
  return (
    <>
        <form action='/login' className='signin'>
        <div className='sign'>
          <h1 className='heading'>Welcome To MyDashBorad</h1>
        <input type='text' placeholder='Enter your Name' required></input>
        <input type='email' placeholder='Enter your Email' required></input>
        <input type='password'placeholder='Enter your password' required></input>
        <button type='submit' value='Submit'>Submit</button>
        </div>
        </form>
          
    </>
  )
}

export default Signin