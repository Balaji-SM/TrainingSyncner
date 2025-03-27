import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from "react";

const UserInfo = ({ name = "John Doe", age = 25, city = "thanjavur" }) => {
  return (
    <div>
      <h2>User Information</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>City:</strong> {city}</p>
      <hr />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <UserInfo name="Balaji" age={28} city="Chennai" />
      <UserInfo name="adhithya" age={25} city="coimbator" />
      <UserInfo /> {/* Uses default values */}
    </div>
  );
};

export default App;
