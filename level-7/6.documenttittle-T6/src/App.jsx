import './App.css';
import React, { useState } from 'react';
import useDocumentTitle from './useDocumentTitle';

const App = () => {
  const [pageName, setPageName] = useState('Home'); 

  
  useDocumentTitle(pageName);

  return (
    <div className='container'>
      <h1>{pageName} Page</h1>
      <button onClick={() => setPageName('Home')}>Home</button>
      <button onClick={() => setPageName('About')}>About</button>
      <button onClick={() => setPageName('Contact')}>Contact</button>
    </div>
  );
};

export default App;
