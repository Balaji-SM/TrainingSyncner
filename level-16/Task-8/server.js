const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); 
let products = [];
let nextId = 1;

app.get('/products', (req, res) => {
  res.status(200).json(products);
});

app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.status(200).json(product);
});

app.post('/products', (req, res) => {
  const { name, price, description } = req.body;

  if (!name || !price || !description) {
    return res.status(400).json({ error: 'All fields are required (name, price, description)' });
  }

  const newProduct = {
    id: nextId++,
    name,
    price,
    description
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price, description } = req.body;

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  if (!name || !price || !description) {
    return res.status(400).json({ error: 'All fields are required (name, price, description)' });
  }

  product.name = name;
  product.price = price;
  product.description = description;

  res.status(200).json(product);
});

app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }

  const deletedProduct = products.splice(index, 1);
  res.status(200).json({ message: 'Product deleted', product: deletedProduct[0] });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
