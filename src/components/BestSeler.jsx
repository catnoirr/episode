import React, { useState } from "react";
import "../style/product.css";
import products from "../data/bestseler";
import BuyPopup from "./buyPopup"; // Import the BuyPopup component
import Notification from "./Notification"; // Import the Notification component

const BestSeller = ({ addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null); // State to track selected product
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to toggle popup
  const [isNotificationVisible, setIsNotificationVisible] = useState(false); // State to manage notification visibility

  // Function to handle the "Buy Now" click
  const handleBuyNowClick = (product) => {
    setSelectedProduct(product); // Set the selected product
    setIsPopupOpen(true); // Open the popup
  };

  // Function to close the popup
  const toggleBuyPopup = () => {
    setIsPopupOpen(false); // Close the popup
    setSelectedProduct(null); // Clear the selected product
  };

  // Show notification
  const showNotification = () => {
    setIsNotificationVisible(true); // Show notification
  };

  // Hide notification after delay
  const hideNotification = () => {
    setIsNotificationVisible(false); // Hide notification
  };

  // Function to handle adding to cart and showing notification
  const handleAddToCart = (product) => {
    
      addToCart(product); // Use addToCart passed as a prop
      showNotification(); // Show notification
    
  };

  return (
   
    <div className="product-container container" style={{marginTop:"80px",display:"flex",flexDirection:"column"}}>
      <h2 style={{fontSize:"30px",marginBottom:"0"}}>Most Loved </h2>
      <p style={{textAlign:"center",marginTop:"-10px"}}>Loved by many, chosen by you</p>
      <div className="product-content">
        {products.map((product) => (
          <div key={product.id} className="product-box">
            <img src={product.img} alt={product.name} />
            <p>Available</p>
            <h2>{product.name}</h2>
            <div className="product-info">
              <span>&#x20B9; {product.price}</span>
              <div className="btn-buy">
                <button
                  className="btn btn-outline-dark me-3 buy"
                  onClick={() => handleBuyNowClick(product)} // Show the Buy Popup
                >
                  Buy Now
                </button>
              </div>
              {/* Shopping Bag Icon to add to cart */}
              <i
                className="bx bx-shopping-bag"
                style={{ cursor: "pointer" }}
                onClick={() => handleAddToCart(product)} // Add product to cart and show notification
              ></i>
            </div>
          </div>
        ))}
      </div>

      {/* Render the BuyPopup if a product is selected */}
      {isPopupOpen && (
        <BuyPopup 
          product={selectedProduct} // Pass the selected product to the popup
          toggleBuyPopup={toggleBuyPopup} // Pass the function to close the popup
        />
      )}

      {/* Notification Popup */}
      <Notification
        message="Item added to cart"
        isVisible={isNotificationVisible} // Control visibility of the notification
        hideNotification={hideNotification} // Function to hide the notification
      />
    </div>
  );
};

export default BestSeller;
