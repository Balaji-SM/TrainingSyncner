import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import './App.css';

const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: "100vw", transition: { duration: 0.3 } },
};

const Home = () => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
    <h2>Home Page</h2>
    <p>Welcome to the Home Page!</p>
  </motion.div>
);

const About = () => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
    <h2>About Page</h2>
    <p>This is the About Page.</p>
  </motion.div>
);

const Contact = () => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
    <h2>Contact Page</h2>
    <p>Contact us for more information.</p>
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <Router>
    <div style={{ textAlign: "center", padding: "20px" }}>
      <nav>
        <Link to="/" style={{ margin: "10px" }}>Home</Link>
        <Link to="/about" style={{ margin: "10px" }}>About</Link>
        <Link to="/contact" style={{ margin: "10px" }}>Contact</Link>
      </nav>
      <AnimatedRoutes />
    </div>
  </Router>
);

export default App;
