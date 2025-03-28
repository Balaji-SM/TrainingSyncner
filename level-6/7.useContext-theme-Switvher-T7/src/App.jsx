import { createContext, useContext, useState } from "react";
import "./App.css";

// Create ThemeContext
const ThemeContext = createContext();

// Theme Provider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app-container ${theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Theme Toggle Button
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className="toggle-button">
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

// Main App Component
export default function App() {
  return (
    <npm>
    <ThemeProvider>
      <h1>Theme Switcher</h1>
      <ThemeToggle />
    </ThemeProvider>
    </npm>
  );
}

