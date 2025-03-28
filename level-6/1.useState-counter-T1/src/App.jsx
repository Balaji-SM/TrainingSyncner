import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <div>
    <h2>counter</h2>
    <p><strong>{count}</strong></p>
    <button  className="baal"onClick={()=>setCount(count+1)}>incresce</button>
    <button onClick={()=>setCount(count-1)}>decress</button>
    </div>
    </>
  )
}

export default App
