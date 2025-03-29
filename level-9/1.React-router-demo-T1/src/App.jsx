import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Navbar from './Components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Products from './pages/Products';





function App() {
  return (
    <>
      <div>
        <Navbar />
     
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />} />
          </Routes>

      </div>
    </>
  )
}

export default App;
