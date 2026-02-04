import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Creative Agency</h3>
            <p>Building innovative digital solutions since 2020.</p>
            <p>Transforming ideas into exceptional experiences.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#add-project">Add Project</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Technologies</h4>
            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>Python</span>
              <span>MongoDB</span>
              <span>AWS</span>
              <span>Docker</span>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>📍 123 Innovation Street</p>
            <p>📧 hello@creativeagency.com</p>
            <p>📞 (555) 123-4567</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Creative Agency. All rights reserved.</p>
          <p className="footer-note">
            Built with React • This portfolio is updated dynamically
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
