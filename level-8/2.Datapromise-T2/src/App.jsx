import React, { useState, useEffect } from "react";
import './App.css';
function DataFetcher() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function fetchDataPromise() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const mockData = { id: 1, name: "Balaji", role: "Developer" };
                resolve(mockData); // Simulating successful data fetch
                // reject("Failed to fetch data"); // Uncomment to simulate an error
            }, 2000);
        });
    }

    useEffect(() => {
        fetchDataPromise()
            .then(response => {
                setData(response);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h2>Fetch Data Using Promises</h2>
            {loading && <p>Loading data...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {data && (
                <div>
                    <p><strong>ID:</strong> {data.id}</p>
                    <p><strong>Name:</strong> {data.name}</p>
                    <p><strong>Role:</strong> {data.role}</p>
                </div>
            )}
        </div>
    );
}

export default DataFetcher;
