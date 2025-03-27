import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'


const Greeting = ({ message="hello wolrd!"}) => {
  return <h1>{message}</h1>;
};



export default Greeting;
