import React from "react";
import useToggle from "./useToggle";
import { Button, Card, CardContent } from "@mui/material";
import './App.css';
const App = () => {
  const [isVisible, toggleVisibility] = useToggle(false);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Button variant="contained" color="primary" onClick={toggleVisibility}>
        Toggle Content
      </Button>

      {isVisible && (
        <div className="bb">
        <Card sx={{ maxWidth: 400, margin: "20px auto", padding: "10px" }}>
          <CardContent>
            <h2>Visible Content</h2>
            <p>This content appears and disappears when you click the button.</p>
          </CardContent>
        </Card>
        </div>
      )}
    </div>
  );
};

export default App;
