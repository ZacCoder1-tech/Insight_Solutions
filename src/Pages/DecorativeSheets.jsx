import React from "react";
import "./Sector.css"

export default function DecorativeSheets() {
  return (
    <div className="sector-page decorative-sheets">
      {/* Hero Section */}
      <section className="hero">
        <h1>Decorative Sheets</h1>
        <p>Premium decorative sheets to transform interiors with style, texture, and color.</p>
        <img src="/images/decorative-hero.jpg" alt="Decorative Sheets" className="hero-img" />
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Variety of Designs</h3>
            <p>Wide selection of patterns, textures, and colors.</p>
          </div>
          <div className="card">
            <h3>High Durability</h3>
            <p>Resistant to wear, scratches, and moisture.</p>
          </div>
          <div className="card">
            <h3>Easy to Install</h3>
            <p>Quick and convenient installation for interiors and furniture.</p>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="applications">
        <h2>Applications</h2>
        <ul>
          <li>Interior wall paneling</li>
          <li>Furniture & cabinetry</li>
          <li>Retail & commercial spaces</li>
          <li>Decorative accents & finishes</li>
        </ul>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="images">
          <img src="/images/decorative1.jpg" alt="Decorative 1" />
          <img src="/images/decorative2.jpg" alt="Decorative 2" />
          <img src="/images/decorative3.jpg" alt="Decorative 3" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Enhance Your Spaces</h2>
        <p>Choose our decorative sheets to elevate style and elegance.</p>
        <button>Contact Us</button>
      </section>
    </div>
  );
}
