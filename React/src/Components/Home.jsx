import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <div className="page-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src="https://www.abes.ac.in/assets/Logo.webp" alt="College Logo" />
          <h1>ABES Engineering College</h1>
        </div>
       <nav className="navbar">
  <div className="nav-logo">
    <img src="https://www.abes.ac.in/assets/Logo.webp" alt="ABES Logo" />
    <h2>ABES Engineering College</h2>
  </div>
  <ul className="nav-links">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/departments">Departments</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  </ul>
</nav>

      </header>

      {/* Hero */}
      <section className="hero">
        <img
          src="https://dfhe5ze0n4pxu.cloudfront.net/College/Image/Image-1771053852060.jpeg"
          alt="Campus"
          className="hero-img"
        />
        <h2 className="hero-text">Welcome to ABES Engineering College</h2>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 ABES Engineering College. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
