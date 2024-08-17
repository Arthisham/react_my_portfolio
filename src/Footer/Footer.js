import React from 'react';
import './Footer.css'; // Optional: for custom styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <p>
          Follow us on
          <a href="https://twitter.com/yourcompany"> Twitter</a>,
          <a href="https://facebook.com/yourcompany"> Facebook</a>, and
          <a href="https://instagram.com/yourcompany"> Instagram</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;