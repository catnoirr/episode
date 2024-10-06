import React, { useEffect } from "react";
import "../style/trend.css";

const TrendSection = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="trend-container container">
      <header>
        <h1>Trending Now</h1>
        <p>Discover the latest trends in fashion, technology, and more on Episode.in</p>
      </header>

      <section className="trends-grid">
        <div className="trend-item">
          <img src="images/p21.jpeg" alt="Trending Item 1" className="trend-image" />
          <div className="trend-content">
            <h3>Winter Fashion Trend 2024</h3>
            <p>Explore the latest fashion trends taking the world by storm this winter.</p>
            {/* Replace <a> with <button> */}
            <button className="trend-link">Learn More</button>
          </div>
        </div>

        <div className="trend-item">
          <img src="images/p23.jpeg" alt="Trending Item 2" className="trend-image" />
          <div className="trend-content">
            <h3> White Long Zip Sweater</h3>
            <p>Checkout the latest Zip Sweater Collection</p>
            {/* Replace <a> with <button> */}
            <button className="trend-link">Learn More</button>
          </div>
        </div>

        <div className="trend-item">
          <img src="images/p14.jpeg" alt="Trending Item 3" className="trend-image" />
          <div className="trend-content">
            <h3>Hot Summer Trends</h3>
            <p>Stay in shape with these trending Summer fits </p>
            {/* Replace <a> with <button> */}
            <button className="trend-link">Learn More</button>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Episode.in. All rights reserved.</p>
        
      </footer>
    </div>
  );
};

export default TrendSection;
