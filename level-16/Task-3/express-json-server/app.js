
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice',   email: 'alice@example.com' },
    { id: 2, name: 'Bob',     email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' }
  ];
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
