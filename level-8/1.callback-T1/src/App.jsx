
import React, { useState, useEffect } from "react";
import './App.css';
function fetchData(callback) {
  setTimeout(() => {
    const mockData = [
      { id: 1, name: "balaji" },
      { id: 2, name: "parama" },
      { id: 3, name: "jaya" },
      {id:4,name:"sanjay"},
      {id:5, name :"mukilan"},
    ];
    callback(mockData); // Call the callback function with mock data
  }, 2000);
}

function App() {
  const [data, setData] = useState([]); // State to store fetched data

  useEffect(() => {
    fetchData(setData); // Fetch data when the component mounts
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Fetched Data</h2>
      {data.length === 0 ? (
        <p>Loading data...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;


