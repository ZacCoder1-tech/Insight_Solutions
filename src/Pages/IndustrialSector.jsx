import "./Sector.css"
import React from "react";

export default function IndustrialSector() {
  return (
    <div className="sector-page industrial-sector">
      {/* Hero Section */}
      <section className="hero">
        <h1>Industrial Sector</h1>
        <p>High-performance industrial solutions for manufacturing, engineering, and heavy-duty applications.</p>
        <img src="/images/industrial-hero.jpg" alt="Industrial Sector" className="hero-img" />
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Our Industrial Solutions?</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Durable Materials</h3>
            <p>Engineered for maximum durability under harsh industrial conditions.</p>
          </div>
          <div className="card">
            <h3>Custom Solutions</h3>
            <p>Tailored to meet your specific manufacturing and operational needs.</p>
          </div>
          <div className="card">
            <h3>Global Standards</h3>
            <p>Compliant with international quality and safety standards.</p>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="applications">
        <h2>Applications</h2>
        <ul>
          <li>Heavy machinery & equipment manufacturing</li>
          <li>Automotive & aerospace components</li>
          <li>Industrial automation and robotics</li>
          <li>Energy & power sector</li>
        </ul>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="images">
          <img src="/images/industrial1.jpg" alt="Industrial 1" />
          <img src="/images/industrial2.jpg" alt="Industrial 2" />
          <img src="/images/industrial3.jpg" alt="Industrial 3" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Get Your Industrial Solution Today</h2>
        <p>Contact us for customized industrial solutions that elevate your operations.</p>
        <button>Contact Us</button>
      </section>
    </div>
  );
}
