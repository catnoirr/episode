import React from 'react';

import '../style/footer.css'; // Import your CSS file for styling

const Footer = ({handleShowAbout } ) => {
  
  return (  
    <footer className="footer">
      <div className="footer-container">
        {/* Footer top section with social media and contact */}
        <div className="footer-top">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: support@example.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 Fashion St, New York</p>
          </div>
          <div className="footer-section">
            <h3>Help</h3>
            <ul className="social-media">
            <li onClick={() => handleShowAbout("About")}>About Us</li>
            <li onClick={() => handleShowAbout("Customer Services")}>Customer Services</li>
            <li onClick={() => handleShowAbout("Return")}>Return Policy</li>
            <li onClick={() => handleShowAbout("Find Us")}>Find Us</li>
            </ul>
          </div>
        </div>

        {/* Footer bottom section with links */}
        <div className="footer-bottom">
          <ul className="footer-links">
          <li><a href="https://facebook.com"><i className="bx bxl-facebook"></i></a></li>
              <li><a href="https://twitter.com"><i className="bx bxl-twitter"></i></a></li>
              <li><a href="https://instagram.com"><i className="bx bxl-instagram"></i></a></li>
              <li><a href="https://linkedin.com"><i className="bx bxl-linkedin"></i></a></li>
          </ul>
        </div>

        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Episode.in. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
