import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

 return(
  <div className="container text-center mt-5">
    <h2>Simple counter</h2>
    <h3>{count}</h3>
    <button className='bala' onClick={()=>setCount(count + 1)}>increment</button>
    <button className='ba' onClick={()=>setCount(count - 1)}>decrement</button>
  </div>
 )
}

export default App;