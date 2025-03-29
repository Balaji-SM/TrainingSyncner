import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import './App.css';
// Authentication Context (Global State)
const AuthContext = React.createContext();

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = React.useContext(AuthContext);
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const Home = () => <h2>Home Page (Public)</h2>;

const Dashboard = () => <h2>Dashboard (Protected)</h2>;

const Profile = () => <h2>Profile Page (Protected)</h2>;

const Login = () => {
  const { login } = React.useContext(AuthContext);
  return (
    <div>
      <h2>Login</h2>
      <button onClick={login}>Login</button>
    </div>
  );
};

const Navbar = () => {
  const { isAuthenticated, logout } = React.useContext(AuthContext);
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link> | <Link to="/profile">Profile</Link> |
      {isAuthenticated ? <button onClick={logout}>Logout</button> : <Link to="/login">Login</Link>}
    </nav>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
          <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
