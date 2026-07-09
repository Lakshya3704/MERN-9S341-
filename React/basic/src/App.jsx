import React from 'react'
import { useState } from 'react';
import Profile from './Compoent/Profile'
import Card from './Compoent/Card'
import CardContainer from './Compoent/CardContainer';

function App() {
  const[studentDetails,setStudentDetails] = useState();
  return (
    <>
    <Profile setStudentDetails={setStudentDetails}></Profile>
    <Card data={studentDetails}></Card>
    </>
  
)
}

export default App
