import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css';

function HomePage() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const searchBooks = async () => {
    if (!query) return; // Don't search if query is empty.
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`http://localhost:5000/api/books/search?q=${query}`);
      setSearchResults(response.data);
    } catch (err) {
      setError('Failed to fetch search results.');
    } finally {
      setLoading(false);
    }
  };

  const addBookToCollection = async (book) => {
    try {
      await axios.post('http://localhost:5000/api/books', book);
      alert('Book added to collection!');
    } catch (err) {
      alert('Error adding book to collection.');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>📚 BookShelf</h1>
        <div className="menu">
          <button onClick={() => navigate('/collections')}>My Collection</button>
        </div>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchBooks}>Search</button>
      </div>
      <div className='hh'>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <h2>Search Results</h2>
      </div>
      <div className="book-list">
        {searchResults.map((book) => (
          <div key={book.googleId} className="book-card">
            <img src={book.image} alt="book cover" />
            <h3>{book.title}</h3>
            <p>{book.authors?.join(', ')}</p>
            <button onClick={() => addBookToCollection(book)}>Add to Collection</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
