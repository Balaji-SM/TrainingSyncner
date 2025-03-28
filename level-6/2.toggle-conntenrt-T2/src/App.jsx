import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isVisible,setisVisible] = useState(true);
  return(
    <>
    <div>
      <h1>Toggle content</h1>
      <button onClick={()=>setisVisible(!isVisible)}>
      {isVisible ? "Hide" : "Show"} Content</button>
     
      {isVisible && (
        <div className="alert">
          <p>hello i am balaji i am implimenting of toggle content task!!</p>
        </div>
      )}
    </div> 
    </>
  )


  
}

export default App
