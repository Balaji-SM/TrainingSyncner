const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://balasivam05:bala12345@bala.cr6gc.mongodb.net/balaji?retryWrites=true&w=majority&appName=bala', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the Book schema and model
const bookSchema = new mongoose.Schema({
  googleId: String,
  title: String,
  authors: [String],
  image: String,
  category: { type: String, default: 'Want to Read' },
  rating: Number,
  notes: String,
});

const Book = mongoose.model('Book', bookSchema);

// Get all books in the collection
app.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books' });
  }
});

// Add a book to the collection
app.post('/api/books', async (req, res) => {
  try {
    const { googleId, title, authors, image, category, rating, notes } = req.body;

    // Check if the book already exists
    const existing = await Book.findOne({ googleId });
    if (existing) {
      return res.status(409).json({ message: 'Book already exists' });
    }

    const newBook = new Book({
      googleId,
      title,
      authors,
      image,
      category,
      rating,
      notes,
    });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Error adding book to collection' });
  }
});

// Delete a book from the collection
app.delete('/api/books/:id', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book from collection' });
  }
});

// Update book details (like category, rating, notes)
app.put('/api/books/:id', async (req, res) => {
  try {
    const { category, rating, notes } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { category, rating, notes },
      { new: true }
    );
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: 'Error updating book' });
  }
});

// Search for books by query (using Google Books API)
app.get('/api/books/search', async (req, res) => {
  try {
    const query = req.query.q;
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);

    const results = response.data.items?.map((item) => ({
      googleId: item.id,
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors || [],
      image: item.volumeInfo.imageLinks?.thumbnail || '',
    })) || [];
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching books from Google API' });
  }
});

// Start server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
