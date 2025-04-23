import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import './home.css';

const Login = ({ onLogin }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value.trim() }));
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/login', form);
      alert('Login successful!');
      navigate('/events');
    } catch (err) {
      console.error('Login failed:', err);
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        style={{width:"300px",marginTop:"10px",marginBottom:"10px"}}
      /><br />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
        style={{width:"300px",marginTop:"10px"}}
      /><br />
      <button style={{width:"320px",marginTop:"10px"}} onClick={handleLogin}>Login</button>
      <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
    </div>
  );
};

export default Login;
