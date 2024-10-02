import React from "react";
import "../style/buySection.css"; // Adjust the path as needed

const BuyPopup = ({ product, toggleBuyPopup }) => {
  if (!product) return null; // Don't render the popup if no product is selected

  const handlePurchase = () => {
    // Logic for handling purchase
    alert(`Purchased ${product.name} for ₹${product.price}`);
    toggleBuyPopup(); // Close the popup after purchase
  };

  return (
    <div className="buy-popup">
      <div className="buy-popup-content">
        <h2>Purchase Item</h2>
        <button className="close-btn" onClick={toggleBuyPopup}>
          &times;
        </button>
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <p>Price: ₹{product.price}</p>
        <button className="purchase-btn" onClick={handlePurchase}>Confirm Purchase</button>
      </div>
    </div>
  );
};

export default BuyPopup;
