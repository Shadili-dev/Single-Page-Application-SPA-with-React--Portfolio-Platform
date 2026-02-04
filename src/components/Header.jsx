import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <h1>Portfolio<span className="highlight">Pro</span></h1>
          </div>
          <ul className="nav-links">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#add-project">Add Project</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
        
        <div className="hero">
          <h2>Showcase Your Creative Work</h2>
          <p>A dynamic portfolio platform to display, manage, and share your projects</p>
          <a href="#projects" className="cta-button">View Projects</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
