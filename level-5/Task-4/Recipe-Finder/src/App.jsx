import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import "./App.css";

const recipes = [
  {
    id: 1,
    title: "Dosa::",
    imageUrl: "/dhosa.jpg",
    ingredients: ["Rice,", "urad dal", "salt", "water"],
    instructions: "Soak rice and urad dal overnight.Grind into a batter and ferment for 8-12 hours.Heat a griddle and pour a thin layer of batter.Cook until golden brown and crispy.Serve with sambar and chutneys."
  },
  {
    id: 2,
    title: " Idli",
    imageUrl: "/idli.jpg",
    ingredients: ["Rice", "urad dal", "salt"],
    instructions: "Soak rice and urad dal overnight.Grind into a batter and ferment for 8-12 hours.Steam the batter in molds.Serve with sambar and chutneys."
  },
  {
    id: 3,
    title: " Sambar",
    imageUrl: "/sambar.jpg",
    ingredients: ["Dal", "vegetables", "tamarind pulp", "spices", "coconut oil"],
    instructions: "Cook dal with vegetables and spices.Add tamarind pulp and coconut oil.Simmer until the flavors meld"
  },
  {
    id: 4,
    title: " puliyodharai",
    imageUrl: "/puli.jpg",
    ingredients: ["Tamarind pulp", "Peppercorns Coriander seeds","Sesame seeds","Red chilies (dried or fresh)", "Lemon", "Asafoetida (hing)", "Curry leaves","Turmeric powder"],
    instructions: "Prepare the Tamarind Sauce:Add Spices: Make the Sauce:Combine with Rice:Optional Additions:"
  },
  
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container">
      <h1 className="title">Recipe Finder</h1>
      <input
        type="text"
        placeholder="Search for a recipe..."
        className="search-box"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="recipe-list">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <Link to={`/recipe/${recipe.id}`} className="recipe-title">{recipe.title}</Link>
            <img src={recipe.imageUrl} alt={recipe.title} className="recipe-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <h2 className="error">404 - Recipe Not Found</h2>;
  }

  return (
    <div className="container">
      <h1 className="recipe-title">{recipe.title}</h1>
      <img src={recipe.imageUrl} alt={recipe.title} className="recipe-image-large" />
      <h2>Ingredients:</h2>
      <ul className="ingredient-list">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions:</h2>
      <p className="instructions">{recipe.instructions}</p>
      <Link to="/" className="back-button">Back to Home</Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="*" element={<h2 className="error">404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
