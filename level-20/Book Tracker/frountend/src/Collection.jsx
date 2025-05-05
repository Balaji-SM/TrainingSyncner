import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Collection() {
  const [collection, setCollection] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Fetch collection of books from backend
  useEffect(() => {
    fetchCollection();
  }, []);

  const fetchCollection = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/books');
      setCollection(res.data);
    } catch (error) {
      console.error('Error fetching collection:', error);
    }
  };

  // Delete book from collection
  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${id}`);
      fetchCollection();  // Re-fetch collection after deletion
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>📚 My Collection</h1>
        <div className="dropdown">
          <button className="dropbtn" onClick={() => setMenuOpen(!menuOpen)}>
            Menu ⬇
          </button>
          {menuOpen && (
            <div className="dropdown-content">
              <button onClick={() => navigate('/')}>Home</button>
            </div>
          )}
        </div>
      </div>

      <div className="book-list">
        {collection.length > 0 ? (
          collection.map((book) => (
            <div key={book._id} className="book-card">
              <img src={book.image} alt="book cover" />
              <h3>{book.title}</h3>
              <p>{book.authors?.join(', ')}</p>
              <p>📖 {book.category}</p>
              <p>⭐ {book.rating || 'No rating yet'}</p>
              <p>📝 {book.notes || 'No notes'}</p>
              <button onClick={() => deleteBook(book._id)}>Delete from Collection</button>
            </div>
          ))
        ) : (
          <p>No books in your collection yet.</p>
        )}
      </div>
    </div>
  );
}

export default Collection;
