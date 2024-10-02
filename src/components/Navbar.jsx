import React from "react";
import "./nav.css";

const Navbar = ({ onTrendClick, onLoginClick, toggleCartPopup, cartItemsCount,toggleMorePopup }) => {
  return (
    <div className="nave">
      <a href="/">Episode.in</a>
      <a 
        href="/trend" 
        onClick={(e) => {
          e.preventDefault();
          onTrendClick();
        }}
      >
        Trend
      </a>
      <a 
        href="/login"  
        onClick={(e) => {
          e.preventDefault();
          onLoginClick();
        }}
      >
        Login
      </a>
      {/* Shopping Bag Icon */}
      <div style={{ position: "relative" }}>
        <i 
          className="bx bx-shopping-bag bx-tada" 
          style={{ cursor: "pointer" }} 
          onClick={toggleCartPopup} // Open cart popup
        ></i>
        {/* Cart Items Count */}
        {cartItemsCount > 0 && (
          <span className="cart-count">{cartItemsCount}</span>
        )}
      </div>
      <a href="#products"  onClick={toggleMorePopup}>More..</a>
    </div>
  );
};

export default Navbar;
