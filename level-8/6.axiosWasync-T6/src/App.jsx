import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center mt-5"><div className="spinner-border" role="status"></div></div>;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  return (
    <div className="container mt-5">
      <h2>Fetched Data</h2>
      {data.slice(0, 5).map((item) => (
        <div key={item.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <DataFetcher />
    </div>
  );
};

export default App;
