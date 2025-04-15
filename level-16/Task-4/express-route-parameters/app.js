const express = require('express');
const app = express();
const PORT = 3000;


app.get('/users/:id', (req, res) => {
 
  const userId = req.params.id;
  
  res.send(`User ID: ${userId}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
