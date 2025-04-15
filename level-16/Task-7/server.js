const express = require('express');
const app = express();
const PORT = 3000;

const requestLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;
  console.log(`[${timestamp}] [${method}] [${url}]`);
  next(); 
};

app.use(requestLogger);

app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});

app.post('/submit', (req, res) => {
  res.send('Form submitted successfully.');
});

app.put('/update', (req, res) => {
  res.send('Update completed.');
});

app.delete('/delete', (req, res) => {
  res.send('Item deleted.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
