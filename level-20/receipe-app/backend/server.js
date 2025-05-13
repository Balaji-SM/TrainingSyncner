// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Replace this with your MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://balasivam05:bala12345@bala.cr6gc.mongodb.net/balaji?retryWrites=true&w=majority&appName=bala';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

// Define schema and model
const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const FormData = mongoose.model('FormData', formDataSchema);

// POST route to save form data
app.post('/submit', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newForm = new FormData({ name, email, message });
    await newForm.save();
    res.status(201).json({ success: true, message: 'Data saved to MongoDB' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
