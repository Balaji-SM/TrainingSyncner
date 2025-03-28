import React, { useState } from "react";
import "./App.css";

const products = [
  { 
    id: 1, 
    name: "T-Shirt",
    imageUrl:"/t-shirt.jpg",
    price: "200"
  },
  { id: 2, 
    name: "Jeans",
    imageUrl: "/jeans.jpg",
     price: "600" 
    },
  { 
    id: 3, 
    name: "Jacket", 
    imageUrl: "/Jacet.jpg", 
    price: "1000" 
  },
  { id: 4, 
    name: "Sneakers", 
    imageUrl: "/sneakers.jpg", 
    price: "500" 
  },
];

const Product = ({ product, addToCart }) => {
  return (
    <div className="product">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <h3 className="product-title">{product.name}</h3>
      <p className="product-price">{product.price}</p>
      <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>👕 FashionHub</h1>
        <div className="cart">🛍️ {cart.length} items</div>
      </header>
      <div className="banner">
        <h2>Trendy Styles, Best Prices!</h2>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <footer className="footer">
        <p>© 2025 FashionHub. Stay Stylish!</p>
      </footer>
    </div>
  );
};

export default App;
