
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

app.get('/about', (req, res) => {
  res.send('About Us page');
});


app.get('/contact', (req, res) => {
  res.send('Contact Us page');
});


app.get('/services', (req, res) => {
  res.send('Our Services page');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
