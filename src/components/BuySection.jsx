import React from "react";
import "../style/buySection.css"; // Adjust path as needed

const BuySection = ({ cartItems, toggleBuySection }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handlePurchase = () => {
    // Logic to handle purchase
    alert("Purchase successful!"); // Placeholder for actual purchase logic
    toggleBuySection(); // Close the buy section after purchase
  };

  return (
    <div className="buy-section">
      <div className="buy-section-header">
        <h2>Confirm Purchase</h2>
        <button className="close-btn" onClick={toggleBuySection}>
          &times;
        </button>
      </div>
      <div className="buy-items">
        {cartItems.map((item, index) => (
          <div key={index} className="buy-item">
            <img src={item.img} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="buy-summary">
        <h3>Total: ₹{totalPrice}</h3>
        <button className="purchase-btn" onClick={handlePurchase}>
          Confirm Purchase
        </button>
      </div>
    </div>
  );
};

export default BuySection;
