const express = require('express');
const app = express();
const PORT = 3000;

const isDev = process.env.NODE_ENV !== 'production';


app.use(express.json());



app.get('/', (req, res) => {
  res.send('<h1>Welcome to the homepage</h1>');
});


app.get('/api/data', (req, res) => {
  res.json({ message: 'API data response' });
});

app.get('/error', (req, res, next) => {
  const error = new Error('Something went wrong intentionally!');
  error.status = 500;
  next(error);
});

app.get('/api/products/:id', (req, res, next) => {
  const product = null; 
  if (!product) {
    const error = new Error('Product not found');
    error.status = 404;
    next(error);
  } else {
    res.json(product);
  }
});



app.use((req, res, next) => {
  const error = new Error('Resource not found');
  error.status = 404;
  next(error);
});


app.use((err, req, res, next) => {
  const status = err.status || 500;
  const isApi = req.originalUrl.startsWith('/api');

  
  if (isApi) {
    res.status(status).json({
      error: {
        message: err.message,
        ...(isDev && { stack: err.stack })
      }
    });
  } else {
    res.status(status).send(`
      <h1>Error ${status}</h1>
      <p>${err.message}</p>
      ${isDev ? `<pre>${err.stack}</pre>` : ''}
      <a href="/">Go Home</a>
    `);
  }
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
