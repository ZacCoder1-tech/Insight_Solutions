import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About / Company */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are a leading aluminum products manufacturer, providing high-quality solutions for residential and industrial projects.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Address: 123 Industrial Road, City, Country</p>
          <p>Phone: +91 12345 67890</p>
          <p>Email: info@aluminumco.com</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><img src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.png" alt="Facebook" /></a>
            <a href="#"><img src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter.png" alt="Twitter" /></a>
            <a href="#"><img src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png" alt="LinkedIn" /></a>
            <a href="#"><img src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png" alt="Instagram" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 AluminumCo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
