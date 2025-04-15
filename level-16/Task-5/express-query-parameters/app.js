const express = require('express');
const app = express();
const PORT = 3000;


app.get('/search', (req, res) => {
 
  const searchQuery = req.query.q || 'No query provided';
  const limit = req.query.limit || 5;


  res.send(`Search for: ${searchQuery}, Limit: ${limit}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
