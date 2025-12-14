import React from "react";
import "./Sector.css"

export default function ArchitecturalSector() {
  return (
    <div className="sector-page architectural-sector">
      {/* Hero Section */}
      <section className="hero">
        <h1>Architectural Sector</h1>
        <p>Innovative materials and solutions for modern architectural designs and projects.</p>
        <img src="/images/architectural-hero.jpg" alt="Architectural Sector" className="hero-img" />
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Architects Choose Us</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Aesthetic Designs</h3>
            <p>Enhance your projects with visually stunning and functional solutions.</p>
          </div>
          <div className="card">
            <h3>Eco-Friendly</h3>
            <p>Sustainable materials that minimize environmental impact.</p>
          </div>
          <div className="card">
            <h3>Precision Engineering</h3>
            <p>Accurate, durable, and easy-to-install solutions for all scales of projects.</p>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="applications">
        <h2>Applications</h2>
        <ul>
          <li>Commercial & residential buildings</li>
          <li>Interior & exterior cladding</li>
          <li>Facade and decorative panels</li>
          <li>Architectural fixtures and fittings</li>
        </ul>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="images">
          <img src="/images/architectural1.jpg" alt="Architectural 1" />
          <img src="/images/architectural2.jpg" alt="Architectural 2" />
          <img src="/images/architectural3.jpg" alt="Architectural 3" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Design Your Dream Project</h2>
        <p>Work with our experts to bring your architectural vision to reality.</p>
        <button>Contact Us</button>
      </section>
    </div>
  );
}
