import React from "react";
import "./News.css";

const newsItems = [
  {
    id: 1,
    title: "New Aluminum Window Line Launched",
    date: "2025-12-01",
    image: "https://via.placeholder.com/400x200?text=Window+Launch",
    description: "We have launched a new line of energy-efficient aluminum windows for residential and commercial use.",
    link: "/news/new-aluminum-window-line"
  },
  {
    id: 2,
    title: "Factory Expansion Completed",
    date: "2025-11-15",
    image: "https://via.placeholder.com/400x200?text=Factory+Expansion",
    description: "Our manufacturing facility has expanded to increase production capacity and improve delivery timelines.",
    link: "/news/factory-expansion"
  },
  {
    id: 3,
    title: "Industry Award for Excellence",
    date: "2025-10-30",
    image: "https://via.placeholder.com/400x200?text=Award",
    description: "Our company has been awarded for excellence in aluminum fabrication and innovative product design.",
    link: "/news/industry-award"
  },
];

const News = () => {
  return (
    <div className="news-page">
      <div className="news-banner">
        <h1>Company News</h1>
        <p>Stay updated with the latest announcements and industry news.</p>
      </div>

      <div className="news-grid">
        {newsItems.map((item) => (
          <div key={item.id} className="news-card">
            <img src={item.image} alt={item.title} />
            <div className="news-content">
              <h3>{item.title}</h3>
              <span className="news-date">{item.date}</span>
              <p>{item.description}</p>
              <a href={item.link} className="read-more">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
