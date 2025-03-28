import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import './App.css';
const blogPosts = [
  { id: 1, title: "React Basics", shortDescription: "Learn the basics of React.", content: "React is a JavaScript library for building user interfaces..." },
  { id: 2, title: "Understanding React Router", shortDescription: "A guide to React Router.", content: "React Router is a standard library for routing in React..." },
  { id: 3, title: "State Management in React", shortDescription: "Managing state effectively.", content: "State management is crucial for React applications..." }
];

const Home = () => {
  return (
    <div>
      <h1>Simple Blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}><h2>{post.title}</h2></Link>
            <p>{post.shortDescription}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <h2>404 - Post Not Found</h2>;
  }

  return (
    <div className="hhh">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
