import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import './App.css';
// Dummy product data
const products = [
  { id: 1, name: "Laptop", price: "$1000", description: "A powerful laptop" },
  { id: 2, name: "Smartphone", price: "$700", description: "A high-end smartphone" },
  { id: 3, name: "Headphones", price: "$200", description: "Noise-canceling headphones" },
];

// Product List Component
const ProductList = () => {
  return (
    <div className="kk">
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.name} - {product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Product Detail Component
const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <Link to="/products">Back to Products</Link>
    </div>
  );
};

// App Component with Routes
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
