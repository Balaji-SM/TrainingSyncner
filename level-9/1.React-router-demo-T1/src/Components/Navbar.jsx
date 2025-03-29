

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Tutor</div>
      <ul>
        <li className="l"><Link to="/">Home</Link></li>
        <li className="l"><Link to="/about">About</Link></li>
        <li className="l"><Link to="/contact">Contact</Link></li>
        <li className="l"><Link to="/products">Products</Link></li>
      </ul>
      <button>Login</button>
    </div>
  );
};

export default Navbar;
