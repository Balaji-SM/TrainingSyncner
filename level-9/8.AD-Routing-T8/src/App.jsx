import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useSearchParams, Link } from "react-router-dom";
import './App.css';
// Sample item list (e.g., products, articles)
const items = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
  { id: 2, name: "Phone", category: "Electronics", price: 500 },
  { id: 3, name: "Shoes", category: "Fashion", price: 80 },
  { id: 4, name: "Jacket", category: "Fashion", price: 120 },
  { id: 5, name: "Watch", category: "Accessories", price: 200 },
];

// Component to handle search and filtering
const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Extract search parameters from the URL
  const initialSearch = searchParams.get("query") || "";
  const initialCategory = searchParams.get("category") || "";
  const initialMinPrice = searchParams.get("minPrice") || "";
  const initialMaxPrice = searchParams.get("maxPrice") || "";

  // State for search form
  const [query, setQuery] = useState(initialSearch);
  const [category, setCategory] = useState(initialCategory);
  const [minPrice, setMinPrice] = useState(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice);

  // Filter items based on query parameters
  const filteredItems = items.filter((item) => {
    return (
      item.name.toLowerCase().includes(query.toLowerCase()) &&
      (category === "" || item.category === category) &&
      (minPrice === "" || item.price >= Number(minPrice)) &&
      (maxPrice === "" || item.price <= Number(maxPrice))
    );
  });

  // Update URL query parameters when the form is submitted
  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.set("query", query);
    if (category) params.set("category", category);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    setSearchParams(params);
  };

  return (
    <div>
      <h2>Search Items</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Accessories">Accessories</option>
        </select>
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <h3>Results:</h3>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong> - {item.category} - ${item.price}
          </li>
        ))}
      </ul>

      <h4>Shareable Search URL:</h4>
      <p>{window.location.href}</p>
    </div>
  );
};

// App Component with Router
const App = () => (
  <Router>
    <SearchPage />
  </Router>
);

export default App;
