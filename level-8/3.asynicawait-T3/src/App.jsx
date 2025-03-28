import React, { useState, useEffect } from "react";
import './App.css';
// Function that returns a Promise, simulating an API call
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mockData = { id: 1, name: "Balaji", role: "Developer" };
            resolve(mockData);
            // reject("Failed to fetch data"); // Uncomment to test error handling
        }, 2000);
    });
}

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Async function to fetch data using await
    async function fetchDataAsync() {
        try {
            console.log("Fetching data...");
            const result = await fetchDataPromise(); // Wait for promise to resolve
            setData(result);
        } catch (err) {
            setError("Failed to fetch data.");
        } finally {
            setLoading(false); // Stop loading state
        }
    }

    // Use useEffect to call fetchDataAsync on mount
    useEffect(() => {
        fetchDataAsync();
    }, []);

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2>Async/Await Data Fetching</h2>

            {loading && <p>Loading data...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
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

export default App;
