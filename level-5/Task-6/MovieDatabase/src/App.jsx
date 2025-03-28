import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_KEY = 'a3e46a1a'; 
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchTerm.trim() === '') return;

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get('https://www.omdbapi.com/', {
          params: {
            s: searchTerm,
            apiKey: API_KEY,
          },
        });
        if (response.data.Response === 'True') {
          setMovies(response.data.Search);
        } else {
          setError('No movies found.');
        }
      } catch (err) {
        setError('Failed to fetch movies. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ width: '300px', padding: '10px', marginBottom: '20px' }}
      />
      
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} className="movie-card" style={{ margin: '10px', display: 'inline-block' }}>
              <img src={movie.Poster} alt={movie.Title} style={{ width: '150px', height: '225px' }} />
              <h3>{movie.Title}</h3>
            </div>
          ))
        ) : (
          <p>No movies to display</p>
        )}
      </div>
    </div>
  );
};

export default MovieSearch;
