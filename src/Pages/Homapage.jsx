import { useState } from "react";

import "./Homepage.css";


const Homepage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  // Auto-slide every 4 seconds
 
  return (
    <div className="premium-home">

<nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">INSIGHT SOLUTIONS</div>

        {/* Desktop Menu */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>

      {/* ---------- HERO SECTION ---------- */}
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-box">
          <h1 className="hero-title">Modern Steel Solutions</h1>
          <p className="hero-text">
            Premium-grade metal manufacturing with precision, durability & engineering excellence.
          </p>
          <button className="hero-btn">Explore Products</button>
        </div>
      </section>

     
{/* ---------- PRODUCTS SECTION ---------- */}
<section className="products-section" id="products">
  <h2 className="section-title">Our Products</h2>
  <div className="products-container">

    <div className="product-card">
      <img src="https://images.unsplash.com/photo-1581092334707-73f19f79ab6d" alt="Industrial Sector" />
      <h3>Industrial Sector</h3>
      <p>Pipes, SHS, RHS, Angles, Flat & Solid Bars, Machined / Fabricated Products for Oil & Gas, Transport, Marine, Scaffolding & Formwork.</p>
    </div>

    <div className="product-card">
      <img src="https://images.unsplash.com/photo-1566837945700-30057527ade0" alt="Architectural Sector" />
      <h3>Architectural Sector</h3>
      <p>Curtain Wall Systems, Doors & Windows (Sliding / Hinge), Balustrades, Pergola & Roofing Systems, Structural Profiles.</p>
    </div>

    <div className="product-card">
      <img src="https://images.unsplash.com/photo-1536305030015-4d61aa56f46a" alt="Hardware & Accessories" />
      <h3>Hardware & Accessories</h3>
      <p>High-performance Door Hardware, Locks, Handles, Hinges, Glass Fittings, Fasteners, and Construction Accessories.</p>
    </div>

    <div className="product-card">
      <img src="https://images.unsplash.com/photo-1600185367200-72c0a8b54f5d" alt="Decorative Sheets" />
      <h3>Decorative Anodised Sheets</h3>
      <p>Digital Printing on Anodized Aluminium, Signages, Nameplates, Artwork, and Indoor/Outdoor Certified Sheets.</p>
    </div>

  </div>
</section>

      {/* ---------- CONTACT FORM ---------- */}
      <section className="contact-section" id="contact">
        <h1 className="section">Contact Us</h1>
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-container">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Company Name" />
            <textarea placeholder="Your Message" rows="5"></textarea>
            <button type="submit" className="send-btn">Send Message</button>
          </form>

          <div className="contact-info">
  <h3>Contact Details</h3>
  <p><strong>Email:</strong> info@metalcorp.com</p>
  <p><strong>Phone:</strong> +91 98765 43210</p>
  <p><strong>Address:</strong> Industrial Zone, Mumbai, India</p>

  <div className="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13387.822091589893!2d79.10896525210453!3d28.04950961580643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397545f9b6ba0367%3A0x2b92784d2c5a14c4!2sAkram%20Nagar%20Gadhi%2C%20Uttar%20Pradesh%20243601!5e1!3m2!1sen!2sin!4v1765307206402!5m2!1sen!2sin"
      title="Company Location"
      allowFullScreen
      loading="lazy"
      style={{width:"500px", height:"300px",margin:"30px 0 0 20px"}}
    ></iframe>
  </div>
            </div>
        </div>
      </section>
      <footer className="footer">
      <div className="footer-container">
        {/* About / Brand */}
        <div className="footer-brand">
          <h2>INSIGHT SOLUTIONS</h2>
          <p>
            Premium aluminium & steel trading solutions with global sourcing and
            manufacturing expertise.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: info@insightsolutions.com</p>
          <p>Phone: +971-XXX-XXXXXXX</p>
          <p>Address: Dubai, UAE</p>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Insight Solutions. All Rights Reserved.
      </div>
    </footer>
    </div>
  );
};

export default Homepage;
