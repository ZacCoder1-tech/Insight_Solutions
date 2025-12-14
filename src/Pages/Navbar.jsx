import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  const [servOpen, setServOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        {/* LOGO */}
        <div className="nav-logo">
          INSIGHT <span>SOLUTIONS</span>
        </div>

        {/* LINKS */}
        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>

          {/* PRODUCTS Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() => setProdOpen(true)}
            onMouseLeave={() => setProdOpen(false)}
          >
            <span><Link to="/Products">Products ▾</Link></span>
            {prodOpen && (
              <ul className="dropdown-menu">
                <li><Link to="IndustrialSector">Industrial Sector</Link></li>
                <li><Link to="ArchitecturalSector">Architectural Sector</Link></li>
                <li><Link to="DecorativeSheets">Decorative Sheets</Link></li>
              </ul>
            )}
          </li>

          {/* SERVICES Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() => setServOpen(true)}
            onMouseLeave={() => setServOpen(false)}
          >
            <span><Link to="/Services">Services ▾</Link></span>
            {servOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/services/fabrication">Fabrication</Link></li>
                <li><Link to="/services/surfacetreatment">Surface Treatments</Link></li>
                <li><Link to="/services/customsolutions">Custom Solutions</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/news">News</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* MOBILE TOGGLE */}
        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
