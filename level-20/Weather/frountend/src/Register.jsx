import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './App.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/api/register', form);
      alert('Registered successfully! Now login.');
      navigate('/login'); 
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="reg-container">
      <h2>Register</h2>
      <input style={{width:"300px",marginTop:"10px",marginBottom:"10px"}} name="username" placeholder="Username" onChange={handleChange} /> <br />
      <input style={{width:"300px",marginTop:"10px",marginBottom:"10px"}} name="email" placeholder="Email" onChange={handleChange} /><br />
      <input style={{width:"300px",marginTop:"10px",marginBottom:"10px"}} name="password" type="password" placeholder="Password" onChange={handleChange} /> <br />
      <button style={{width:"330px",marginTop:"10px",marginBottom:"10px"}} onClick={handleRegister}>Register</button>
      <p>Back to Login?<Link to="/Login">Login</Link>   </p>
    </div>
  );
};

export default Register;
