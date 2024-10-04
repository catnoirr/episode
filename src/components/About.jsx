import React, { useEffect } from "react";
import "../style/about.css"; // Add custom styling for the About section


const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="about-container">
      <h1 className="heading-underline" style={{ textAlign: "center", marginBottom: "20px",marginTop:"0" ,fontSize:"30px" }}>
        About Episode.in
      </h1>
      <p style={{ textAlign: "center", marginBottom: "40px", fontSize: "18px", lineHeight: "1.6" }}>
        Episode.in is more than just a fashion brand—it's a community of individuals who value style, creativity, and sustainability.
        Our mission is to bring unique, high-quality clothing to people around the world, while maintaining our commitment to ethical fashion.
      </p>

      <div className="about-section">
        <div className="about-card">
          <h2>Our Story</h2>
          <p>
            Founded in 2015, Episode.in started with a small team of passionate designers and fashion enthusiasts. 
            Today, we are proud to be a global brand, serving thousands of customers with innovative fashion that aligns with modern trends and sustainability.
          </p>
        </div>
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to create clothing that not only looks good but also makes you feel good. We believe in creating fashion with a purpose—focusing on sustainability, ethical practices, and inclusivity.
          </p>
        </div>
        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            At Episode.in, our vision is to lead the fashion industry into a new era of sustainability, creativity, and global impact. We aim to be a trendsetter in ethical fashion, producing garments that leave a positive impact on both people and the planet.
          </p>
        </div>
      </div>
      <div className="preferences tack-section-contact">
        <div>
          <div className="payment-icon">
            <div>
          <i class='bx bx-credit-card-alt'></i>
          </div>
          <div className="optionns">
          <h4>  Payment Options</h4>
          <p>Edit or add payment methods</p>
          </div>
</div>
          
        </div>
        <div>
          <div className="payment-icon">
            <div>
            <i class='bx bx-lock-alt' ></i>                      </div>
          <div className="optionns">
          <h4>Login</h4>
          <p>Update Login Information</p>
          </div>
</div>
          
        </div>
        <div>
          <div className="payment-icon">
            <div>
            <i class='bx bx-gift' ></i>  
                    </div>
          <div className="optionns">
          <h4>Gift Card</h4>
          <p>Add/Manage Gift Card</p>
          </div>
</div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
