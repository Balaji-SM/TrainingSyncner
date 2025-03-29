import React from "react";
import { FixedSizeList as List } from "react-window";
import './App.css';
// Generate a large dataset (10,000 items)
const items = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`);

// Row component to render each item
const Row = ({ index, style }) => (
  <div style={{ ...style, padding: "10px", borderBottom: "1px solid #ddd" }}>
    {items[index]}
  </div>
);

const VirtualizedList = () => {
  return (
    <div style={{ width: "300px", height: "400px", border: "1px solid black" }}>
      <h2>Virtualized List</h2>
      {/* Virtualized List with Fixed Row Height */}
      <List height={350} width={300} itemSize={35} itemCount={items.length}>
        {Row}
      </List>
    </div>
  );
};

export default VirtualizedList;
