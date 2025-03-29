import React from "react";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <div className="category">
      <NavLink to="/search/Italian">🍕 Italian</NavLink>
      <NavLink to="/search/American">🍔 American</NavLink>
      <NavLink to="/search/Chinese">🥡 Chinese</NavLink>
      <NavLink to="/search/Indian">🍛 Indian</NavLink>
    </div>
  );
};

export default Category;
