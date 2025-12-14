import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">

      {/* HERO SECTION */}
      <section className="about-hero">
        <h1>About Insight Solutions</h1>
        <p>
          Insight Solutions is a trusted aluminum products manufacturing and
          sourcing company delivering high-quality industrial, architectural,
          and customized aluminum solutions worldwide.
        </p>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="about-overview">
        <h2>Who We Are</h2>
        <p>
          Established with a vision to bridge global manufacturing excellence
          with customer-specific requirements, Insight Solutions specializes
          in aluminum profiles, fabricated products, architectural systems,
          and decorative anodized solutions.
        </p>
        <p>
          With a strong network of certified factories and mills, we ensure
          consistency, compliance, and cost efficiency across every project.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="about-values">
        <div className="value-box">
          <h3>Our Mission</h3>
          <p>
            To empower businesses with reliable aluminum solutions through
            innovation, technical expertise, and uncompromising quality
            standards.
          </p>
        </div>

        <div className="value-box">
          <h3>Our Vision</h3>
          <p>
            To become a globally recognized aluminum solutions partner known
            for engineering excellence, trust, and long-term partnerships.
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="about-services">
        <h2>What We Do</h2>

        <ul>
          <li>Aluminum extrusion & fabrication</li>
          <li>Industrial aluminum solutions</li>
          <li>Architectural aluminum systems</li>
          <li>Decorative anodized aluminum sheets</li>
          <li>Customized engineering & sourcing</li>
          <li>Quality inspection & compliance support</li>
        </ul>
      </section>

      {/* WHY CHOOSE US */}
      <section className="about-why">
        <h2>Why Choose Insight Solutions</h2>

        <div className="why-grid">
          <div className="why-card">
            <h4>Certified Supply Chain</h4>
            <p>
              Partnered with ISO, ASTM, DIN & EN compliant manufacturers.
            </p>
          </div>

          <div className="why-card">
            <h4>Engineering Expertise</h4>
            <p>
              Experienced engineers ensuring precision and performance.
            </p>
          </div>

          <div className="why-card">
            <h4>End-to-End Solutions</h4>
            <p>
              From design and sourcing to delivery and support.
            </p>
          </div>

          <div className="why-card">
            <h4>Confidentiality & Trust</h4>
            <p>
              Secure handling of designs, drawings, and prototypes.
            </p>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="about-team">
        <h2>Our Leadership</h2>

        <div className="team-cards">
          <div className="team-card">
            <img src="https://via.placeholder.com/180" alt="Founder" />
            <h3>Jane Doe</h3>
            <p>Founder & CEO</p>
          </div>

          <div className="team-card">
            <img src="https://via.placeholder.com/180" alt="Operations Head" />
            <h3>John Smith</h3>
            <p>Head of Operations</p>
          </div>

          <div className="team-card">
            <img src="https://via.placeholder.com/180" alt="Engineering Head" />
            <h3>Emily Clark</h3>
            <p>Head of Engineering</p>
          </div>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="about-contact">
        <h2>Get in Touch</h2>
        <p>
          📧 Email: <strong>info@insightsolutions.com</strong>
        </p>
        <p>
          📞 Phone: <strong>+91 12345 67890</strong>
        </p>
        <p>
          📍 Location: India | Serving Global Markets
        </p>
      </section>

    </div>
  );
};

export default About;
