import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Greeting(props){
  return<h2>hello {props.name}!!!</h2>

}

function App(){
  return(
    <>
    <div>
    <Greeting name="Balaji"/>
    </div>
    </>
 )
}
export default App;