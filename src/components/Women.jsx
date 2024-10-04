import React, { useState } from "react";
import "../style/product.css";
import products from "../data/women";
import BuyPopup from "./buyPopup"; // Import the BuyPopup component
import Notification from "./Notification"; // Import the Notification component

const Women = ({ addToCart }) => {
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
    addToCart(product); // Add the product to cart
    showNotification(); // Show notification when item is added to cart
  };

  return (
   < div style={{marginTop:"100px"}}>
    <div style={{textAlign:"center"}}>
   <h1 style={{textAlign:"center",marginBottom:"0"}}>Women’s Wardrobe</h1>
   <p style={{color:"grey",marginTop:"5px"}}>Chic, effortless, and timeless pieces for every women.</p>
   </div>
  
    <div className="product-container container summer">
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
    </div>
  );
};

export default Women;
