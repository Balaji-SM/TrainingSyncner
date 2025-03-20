import React, { useState } from 'react';
import './App.css';

// UserMessage Component
const UserMessage = ({ role }) => {
  return (
    <div>
      {role === "Admin" ? (
        <h2>HELLO Welcome!!!,professor You have full access.</h2>
      ) : role === "User" ? (
        <h2>HELLO Welcome!!!, Student! You have limited access.</h2>
      ) : (
        <h2>HELLO Welcome!!!</h2>
      )}
    </div>
  );
};

// Main App Component
const App = () => {
  const [role, setRole] = useState("Guest"); // Default role is "Guest"

  return (
    <div>
      <h1>welcome to StudentBase</h1>
      <UserMessage role={role} /> {/* Display message based on role */}

      {/* Buttons to change role */}
      <button onClick={() => setRole("Admin")}>professor</button>
      <button onClick={() => setRole("User")}>Student</button>
    </div>
  );
};

export default App;
