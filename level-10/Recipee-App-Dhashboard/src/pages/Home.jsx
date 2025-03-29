import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const API_KEY = "your_api_key_here";  // Replace with Spoonacular API Key
      const url = `https://api.spoonacular.com/recipes/random?number=8&apiKey=${API_KEY}`;
      
      const { data } = await axios.get(url);
      setRecipes(data.recipes);
    };

    fetchRecipes();
  }, []);

  return (
    <div className="container">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <Link to={`/recipe/${recipe.id}`}>
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
