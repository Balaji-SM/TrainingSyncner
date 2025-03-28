import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

const CancellableRequest = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1", {
          cancelToken: source.token,
        });
        setData(response.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled", err.message);
        } else {
          setError("Failed to fetch data.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      source.cancel("Component unmounted, request canceled");
    };
  }, []);

  if (loading) return <div className="text-center mt-5"><div className="spinner-border" role="status"></div></div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-5">
      <h2>Post</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{data?.title}</h5>
          <p className="card-text">{data?.body}</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <CancellableRequest />
    </div>
  );
};

export default App;
