import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <>
      <form action='/' className='loginin'>
      <div className='login'>
        <h1>Welcome Back To MyDashBoard</h1>
        <input type='email' placeholder='Enter your email' required></input>
        <input type='password' placeholder='Enter your password' required></input>
        <button type='submit'>Submit</button>
      </div>
      </form>

    </>
  )
}

export default Login