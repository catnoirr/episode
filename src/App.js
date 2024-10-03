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
import SummerCollection from "./components/SummerCollection"; // Import the SummerCollection component
import WinterCollection from "./components/WinterCollection"; // Import the SummerCollection component
import "./index.css";

const App = () => {
  const [showTrend, setShowTrend] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showAccount, setShowAccount] = useState(false); // State for Account Section
  const [showSummerCollection, setShowSummerCollection] = useState(false); // State for Summer Collection
  const [showWinterCollection, setShowWinterCollection] = useState(false); // State for Summer Collection
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBuySectionOpen, setIsBuySectionOpen] = useState(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [isMorePopupVisible, setIsMorePopupVisible] = useState(false); // State for MorePopup
  const [notificationMessage, setNotificationMessage] = useState(""); // State for notification message

  const handleTrendClick = () => {
    setShowTrend(true);
    setShowLogin(false);
    setShowAccount(false);
    setShowSummerCollection(false); // Hide Summer Collection when switching sections
    setShowWinterCollection(false); // Hide Summer Collection when switching sections
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowTrend(false);
    setShowAccount(false);
    setShowSummerCollection(false); // Hide Summer Collection when switching sections
    setShowWinterCollection(false); 
  };

  const toggleCartPopup = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    showNotification("Item added to cart");
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const toggleBuySection = () => {
    setIsBuySectionOpen(!isBuySectionOpen);
  };

  // Show notification
  const showNotification = (message) => {
    setNotificationMessage(message);
    setIsNotificationVisible(true);
  };

  // Hide notification
  const hideNotification = () => {
    setIsNotificationVisible(false);
  };

  // Handle showing notification when option is clicked in MorePopup
  const handleMorePopupNotification = (option) => {
    showNotification(`${option} `);
    if (option === "Social Trend") {
      setShowTrend(true);
      setShowLogin(false);
      setShowAccount(false);
      setShowSummerCollection(false);  
      setShowWinterCollection(false);  
    } else if (option === "Your Account") {
      setShowAccount(true);
      setShowTrend(false);
      setShowLogin(false);
      setShowSummerCollection(false);
      setShowWinterCollection(false); 
    } else if (option === "Summer Collection") {
      setShowSummerCollection(true); // Show Summer Collection when clicked
      setShowTrend(false);
      setShowAccount(false);
      setShowLogin(false);
    }
     else if (option === "Winter Collection") {
      setShowWinterCollection(true); 
      setShowSummerCollection(false); // Show Summer Collection when clicked
      setShowTrend(false);
      setShowAccount(false);
      setShowLogin(false);
    }
  };

  return (
    <div>
      <Navbar 
        onTrendClick={handleTrendClick} 
        onLoginClick={handleLoginClick} 
        toggleCartPopup={toggleCartPopup} 
        cartItemsCount={cartItems.length} 
        toggleMorePopup={() => setIsMorePopupVisible(!isMorePopupVisible)} 
      />
      
      {showTrend ? (
        <TrendSection />
      ) : showLogin ? (
        <LoginSection />
      ) : showAccount ? (
        <AccountSection />
      ) : showSummerCollection ? (
        <SummerCollection addToCart={addToCart} toggleBuySection={toggleBuySection}  /> // Show Summer Collection when selected
      ): showWinterCollection ? (
        <WinterCollection addToCart={addToCart} toggleBuySection={toggleBuySection}  /> // Show Summer Collection when selected
      )  
      : (
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
        message={notificationMessage} 
        isVisible={isNotificationVisible} 
        hideNotification={hideNotification} 
        onClick={() => {
          toggleCartPopup();
          hideNotification();
        }}
      />

      {/* Render the MorePopup if it is visible */}
      <MorePopup 
        isVisible={isMorePopupVisible} 
        togglePopup={() => setIsMorePopupVisible(!isMorePopupVisible)} 
        showNotification={handleMorePopupNotification} 
      />
    </div>
  );
};
 
export default App;
