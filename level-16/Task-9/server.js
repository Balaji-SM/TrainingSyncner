const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <h1>Contact Form</h1>
    <form method="POST" action="/submit">
      <label>Name:</label><br>
      <input type="text" name="name" /><br><br>
      
      <label>Email:</label><br>
      <input type="email" name="email" /><br><br>
      
      <label>Message:</label><br>
      <textarea name="message"></textarea><br><br>
      
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.send(`
      <h2>Error: All fields are required!</h2>
      <a href="/">Go Back</a>
    `);
  }

  res.send(`
    <h2>Form submitted successfully!</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
    <a href="/">Submit another response</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
