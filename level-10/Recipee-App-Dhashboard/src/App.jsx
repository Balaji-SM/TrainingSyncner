import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import SearchResults from "./pages/SearchResults";
import Search from "./components/Search";
import Category from "./components/Category";

function App() {
  return (
    <div>
      <h1 className="title">Delicious Recipes</h1>
      <Search />
      <Category />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/search/:query" element={<SearchResults />} />
      </Routes>
    </div>
  );
}

export default App;
