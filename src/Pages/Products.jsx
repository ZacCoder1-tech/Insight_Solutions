import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const products = [
  { id: 1, name: "Aluminum Windows", image: "https://via.placeholder.com/300x200?text=Windows", link: "/product/windows" },
  { id: 2, name: "Aluminum Doors", image: "https://via.placeholder.com/300x200?text=Doors", link: "/product/doors" },
  { id: 3, name: "Aluminum Panels", image: "https://via.placeholder.com/300x200?text=Panels", link: "/product/panels" },
  { id: 4, name: "Aluminum Frames", image: "https://via.placeholder.com/300x200?text=Frames", link: "/product/frames" },
  { id: 5, name: "Curtain Walls", image: "https://via.placeholder.com/300x200?text=Curtain+Walls", link: "/product/curtain-walls" },
  { id: 6, name: "Roofing Sheets", image: "https://via.placeholder.com/300x200?text=Roofing+Sheets", link: "/product/roofing-sheets" },
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="products-page">
      {/* Banner / Hero */}
      <div className="products-banner">
        <h1>Our Aluminum Products</h1>
        <p>High-quality aluminum solutions for residential and industrial use.</p>
      </div>

      {/* Product Grid */}
      <div className="products-grid">
        {products.map((item) => (
          <div
            key={item.id}
            className="product-card"
            onClick={() => navigate(item.link)}
          >
            <img src={item.image} alt={item.name} />
            <div className="product-info">
              <h3>{item.name}</h3>
              <span>View Details →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
