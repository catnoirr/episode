import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Feature from "./components/Features";
import Products from "./components/Products";
import TrendSection from "./components/TrendSection";
import LoginSection from "./components/LoginSection";
import CartPopup from "./components/CartPopup";  
import BuySection from "./components/BuySection"; 
import Notification from "./components/Notification"; 
import MorePopup from "./components/MorePopup"; // Import the MorePopup component
import AccountSection from "./components/AccountSection"; // Import the AccountSection component
import "./index.css";

const App = () => {
  const [showTrend, setShowTrend] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showAccount, setShowAccount] = useState(false); // State for Account Section
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBuySectionOpen, setIsBuySectionOpen] = useState(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [isMorePopupVisible, setIsMorePopupVisible] = useState(false); // State for MorePopup
  const [notificationMessage, setNotificationMessage] = useState(""); // State for notification message

  const handleTrendClick = () => {
    setShowTrend(true);
    setShowLogin(false);
    setShowAccount(false); // Hide Account Section
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowTrend(false);
    setShowAccount(false); // Hide Account Section
  };

  const toggleCartPopup = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    showNotification("Item added to cart"); // Show notification when item is added
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const toggleBuySection = () => {
    setIsBuySectionOpen(!isBuySectionOpen);
  };

  // Show notification
  const showNotification = (message) => {
    setNotificationMessage(message); // Set the message
    setIsNotificationVisible(true); // Show notification
  };

  // Hide notification
  const hideNotification = () => {
    setIsNotificationVisible(false); // Hide notification
  };

  // Handle showing notification when option is clicked in MorePopup
  const handleMorePopupNotification = (option) => {
    showNotification(`${option}`); // Show the specific option selected
    if (option === "Social Trend") {
      setShowTrend(true); // Show TrendSection if Social Trend is clicked
      setShowLogin(false); // Ensure login is hidden
      setShowAccount(false); // Ensure account is hidden
    } else if (option === "Your Account") {
      setShowAccount(true); // Show AccountSection if Your Account is clicked
      setShowTrend(false); // Ensure trend is hidden
      setShowLogin(false); // Ensure login is hidden
    }
  };

  return (
    <div>
      <Navbar 
        onTrendClick={handleTrendClick} 
        onLoginClick={handleLoginClick} 
        toggleCartPopup={toggleCartPopup} 
        cartItemsCount={cartItems.length} 
        toggleMorePopup={() => setIsMorePopupVisible(!isMorePopupVisible)} // Pass toggleMorePopup
      />
      
      {showTrend ? (
        <TrendSection />
      ) : showLogin ? (
        <LoginSection />
      ) : showAccount ? (
        <AccountSection /> // Render AccountSection when showAccount is true
      ) : (
        <div>
          <HeroSection />
          <Feature />
          <Products addToCart={addToCart} toggleBuySection={toggleBuySection} />
        </div>
      )}

      {isCartOpen && (
        <CartPopup 
          cartItems={cartItems} 
          toggleCartPopup={toggleCartPopup} 
          removeFromCart={removeFromCart} 
          toggleBuySection={toggleBuySection}
        />
      )}

      {isBuySectionOpen && (
        <BuySection 
          cartItems={cartItems} 
          toggleBuySection={toggleBuySection} 
        />
      )}

      <Notification 
        message={notificationMessage} // Show dynamic notification message
        isVisible={isNotificationVisible} 
        hideNotification={hideNotification} 
        onClick={() => {
          toggleCartPopup();
          hideNotification();
        }} // Show cart on notification click
      />

      {/* Render the MorePopup if it is visible */}
      <MorePopup 
        isVisible={isMorePopupVisible} 
        togglePopup={() => setIsMorePopupVisible(!isMorePopupVisible)} 
        showNotification={handleMorePopupNotification} // Pass notification handler to MorePopup
      />
    </div>
  );
};

export default App;
