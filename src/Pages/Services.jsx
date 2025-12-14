import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const services = [
  { id: 1, name: "Aluminum Fabrication", image: "https://via.placeholder.com/300x200?text=Fabrication", link: "/service/fabrication" },
  { id: 2, name: "Installation Services", image: "https://via.placeholder.com/300x200?text=Installation", link: "/service/installation" },
  { id: 3, name: "Custom Designs", image: "https://via.placeholder.com/300x200?text=Custom+Designs", link: "/service/custom-designs" },
  { id: 4, name: "Maintenance & Repair", image: "https://via.placeholder.com/300x200?text=Maintenance", link: "/service/maintenance" },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services-page">
      {/* Banner / Hero */}
      <div className="services-banner">
        <h1>Our Services</h1>
        <p>Professional aluminum solutions tailored to your needs.</p>
      </div>

      {/* Service Grid */}
      <div className="services-grid">
        {services.map((item) => (
          <div
            key={item.id}
            className="service-card"
            onClick={() => navigate(item.link)}
          >
            <img src={item.image} alt={item.name} />
            <div className="service-info">
              <h3>{item.name}</h3>
              <span>Learn More →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
