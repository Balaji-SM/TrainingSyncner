import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

const ParallelRequests = () => {
  const [data, setData] = useState({ users: [], posts: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const [usersResponse, postsResponse] = await Promise.all([
          axios.get("https://jsonplaceholder.typicode.com/users"),
          axios.get("https://jsonplaceholder.typicode.com/posts")
        ]);
        
        setData({ users: usersResponse.data, posts: postsResponse.data });
      } catch (err) {
        setError("Failed to fetch data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center mt-5"><div className="spinner-border" role="status"></div></div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-5">
      <h2>Users</h2>
      <ul className="list-group mb-4">
        {data.users.slice(0, 5).map((user) => (
          <li key={user.id} className="list-group-item">{user.name} ({user.email})</li>
        ))}
      </ul>

      <h2>Posts</h2>
      {data.posts.slice(0, 5).map((post) => (
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
      <ParallelRequests />
    </div>
  );
};

export default App;
