import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App =() => {
  const Student = ["balaji","ajitha","manimekalai","sathasivam"];
  return(

  <div>
    <h2>Student List</h2>
    <ul>
      {Student.map((student,index) => (
        <li key={index}><strong>{student}</strong></li>
      ))}
    </ul>
  </div>
  )
}

export default App
