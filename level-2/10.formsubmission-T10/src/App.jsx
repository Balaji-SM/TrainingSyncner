import React, { useState } from "react";
import './App.css'


function SimpleForm() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    alert("Your form has been submitted!"); // Show alert popup
  };

  return (
    <div className="container">
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mbl">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" placeholder="Enter your name" required />
        </div>

        <div className="mb">
          <label className="form-label">Email:</label>
          <input type="email" className="form-control" placeholder="Enter your email" required />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default SimpleForm;
