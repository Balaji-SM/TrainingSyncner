import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import './App.css';


const cache = new Map();

const useAxios = (url, config = {}, forceRefresh = false) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    if (!forceRefresh && cache.has(url)) {
      setData(cache.get(url));
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(url, config);
      cache.set(url, response.data);
      setData(response.data);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  }, [url, config, forceRefresh]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refresh: () => fetchData(true) };
};

const AxiosHookComponent = () => {
  const { data, loading, error, refresh } = useAxios("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <div className="text-center mt-5"><div className="spinner-border" role="status"></div></div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-5">
      <h2>Posts</h2>
      <button className="btn btn-primary mb-3" onClick={refresh}>Refresh</button>
      {data.slice(0, 5).map((post) => (
        <div key={post.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <AxiosHookComponent />
    </div>
  );
};

export default App;
