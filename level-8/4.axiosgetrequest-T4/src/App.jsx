import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

function DataFetcher() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setPosts(response.data); // Store API response in state
            } catch (err) {
                setError("Failed to fetch data. Please try again.");
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2>Fetched Posts</h2>

            {loading && <p>Loading data...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            <ul>
                {posts.slice(0, 10).map((post) => (
                    <li key={post.id} style={{ marginBottom: "10px" }}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DataFetcher;
