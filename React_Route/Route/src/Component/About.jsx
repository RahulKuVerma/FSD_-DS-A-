import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="page-container">
      <header className="header">
        <h1>About ABES Engineering College</h1>
      </header>

      <section className="section">
        <h2>Our Mission</h2>
        <p>
          To provide quality technical education, foster innovation, and nurture
          future leaders who contribute positively to society.
        </p>
      </section>

      <section className="section">
        <h2>Our Vision</h2>
        <p>
          To be recognized as a premier institution that empowers students with
          knowledge, skills, and values for global excellence.
        </p>
      </section>

      <section className="section">
        <h2>Our History</h2>
        <p>
          Established in 2000, ABES Engineering College has grown into one of
          the most trusted names in technical education, consistently ranked
          among the top engineering colleges in Uttar Pradesh.
        </p>
      </section>

      <section className="section">
        <h2>Core Values</h2>
        <ul>
          <li>Academic Excellence</li>
          <li>Innovation & Research</li>
          <li>Integrity & Ethics</li>
          <li>Community Engagement</li>
        </ul>
      </section>

      <footer className="footer">
        <p>© 2026 ABES Engineering College. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
