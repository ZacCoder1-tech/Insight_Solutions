import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send to API
    console.log(form);
    alert("Thank you for contacting us!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contact-page">
      {/* Banner */}
      <div className="contact-banner">
        <h1>Contact Us</h1>
        <p>Get in touch with AluminumCo for inquiries, quotes, or support.</p>
      </div>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Our Office</h2>
          <p><strong>Address:</strong> 123 Industrial Road, City, Country</p>
          <p><strong>Phone:</strong> +91 12345 67890</p>
          <p><strong>Email:</strong> info@aluminumco.com</p>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send a Message</h2>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
          <label>Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Map Placeholder */}
      <div className="contact-map">
        <h2>Our Location</h2>
        <div className="map-placeholder">
          {/* Replace with actual Google Maps embed */}
          <p>Map goes here</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
