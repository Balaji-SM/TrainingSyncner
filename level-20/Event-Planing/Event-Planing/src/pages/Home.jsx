import React from "react";
import { Link } from "react-router-dom";
import './home.css';


const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Task Planner</h1>
        <p>Plan and organize your Task effortlessly!</p>
      </header>
      <section className="about">
        <h2>About Task Planning</h2>
        <p>
          Our platform helps you create, manage, and track your Task efficiently.
          the process of systematically planning, organizing, and executing tasks to achieve specific goals or objectives
        </p>
      </section>
      <section className="instructions">
        <div className="bu1">
  <button style={{padding:"0",width:"100px",textAlign:"center"}}><Link to="/login" style={{color:"white",
                                width:"100px",
                                height:"30px",
                                textAlign:"center",
                                fontSize:"20px",
                              
                                display:"flex"}}> Get started </Link></button>
</div>
</section>
      
    </div>
  );
};

export default Home;

