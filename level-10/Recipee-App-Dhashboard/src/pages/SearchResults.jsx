import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const SearchResults = () => {
  const { query } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const API_KEY = "c7997e02e35d47a084f58c95296a0df0";
      const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`;
      
      const { data } = await axios.get(url);
      setRecipes(data.results);
    };

    fetchRecipes();
  }, [query]);

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

export default SearchResults;
