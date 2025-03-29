import React from "react";
import { Routes, Route, Link, Outlet, Navigate } from "react-router-dom";
import './App.css'
const Dashboard = () => {
  return (
    <div className="d-flex">
      <nav className="bg-light p-3 vh-100" style={{ width: "200px" }}>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="overview">Overview</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="profile">Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <div className="p-3 flex-grow-1">
        <h2>Dashboard</h2>
        <Outlet />
      </div>
    </div>
  );
};

const Overview = () => <h3>Overview Section</h3>;
const Profile = () => <h3>Profile Section</h3>;
const Settings = () => <h3>Settings Section</h3>;

const App = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />}>
        {/* Default redirect to /dashboard/overview */}
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<Overview />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<h2>Welcome to the App! Go to /dashboard</h2>} />
    </Routes>
  );
};

export default App;
