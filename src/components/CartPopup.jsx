import React from "react";
import "../style/cartpopup.css";

const CartPopup = ({ cartItems, toggleCartPopup, removeFromCart, toggleBuySection }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-popup">
      <div className="cart-popup-header">
        <h2>Your Cart</h2>
        <button className="close-btn" onClick={toggleCartPopup}>
          &times;
        </button>
      </div>
      
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.img} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h3>Total: ₹{totalPrice}</h3>
          <button className="buy-btn" >Buy Now</button> {/* Button to open Buy Section */}
        </div>
      )}
    </div>
  );
};

export default CartPopup;
