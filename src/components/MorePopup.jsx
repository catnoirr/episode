import React from "react";
import "../style/morePopup.css"; // Ensure this CSS file is correctly linked

const MorePopup = ({ isVisible, togglePopup, showNotification }) => {
  if (!isVisible) return null; // Don't render if not visible

  // Function to handle option click
  const handleOptionClick = (option) => {
    showNotification(option); // Show notification for the clicked option
    togglePopup(); // Close the popup
  };

  return (
    <div className="more-popup">
      <div className="more-popup-content">
        <button className="close-btn" onClick={togglePopup}>&times;</button>
        <h2>Episode.in</h2>
        <p>Be a Trend</p>
        <div className="scrollable-content">
          <ul>
          <li onClick={() => handleOptionClick("Your Account")} ><a href="#your-account" >Your Account</a></li>

            <li onClick={() => handleOptionClick("Social Trend")}><a href="#social-trend" >Social Trend</a></li>
            <li onClick={() => handleOptionClick("Summer Collection")}><a href="#summer-collection" >Summer Collection</a></li>
            <li onClick={() => handleOptionClick("Winter Collection")}><a href="#winter-collection" >Winter Collection</a></li>
            <li onClick={() => handleOptionClick("Best Seller")}><a href="#bestseller" >Best Seller</a></li>
            <li onClick={() => handleOptionClick("Men Section")}><a href="#men" >Men</a></li>
            <li onClick={() => handleOptionClick("Women Section")}><a href="#women" >Women</a></li>


            <li onClick={() => handleOptionClick("Track Your Order")}><a href="#track-order" >Track Order</a></li>
            <li onClick={() => handleOptionClick("Return Section")}><a href="#return" >Return</a></li>

            
            <li onClick={() => handleOptionClick("Find Store")}><a href="#find-store" >Find a Store</a></li>
            <li onClick={() => handleOptionClick("Customer Services")}><a href="#customer-services" >Customer Services</a></li>
            <li  onClick={() => handleOptionClick("About")}><a href="#about" >About Us</a></li>

            
          </ul>
        </div> 
      </div>
    </div>
  );
};

export default MorePopup;
