import React, { useState, useEffect } from "react";
import "../style/trackOrder.css"; // Add styling for the Track Order section

const TrackOrder = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [orderID, setOrderID] = useState("");
  const [trackingResult, setTrackingResult] = useState(null);

  const handleInputChange = (e) => {
    setOrderID(e.target.value);
  };

  const handleTrackOrder = () => {
    // Simulate fetching order status based on the orderID
    if (orderID === "") {
      setTrackingResult("Please enter a valid order ID.");
    } else {
      setTrackingResult(`Order ${orderID}: Your package is on its way!`);
    }
  };

  return (
    <div className="track-order-container">
      <h1 className="heading-underline" style={{ textAlign: "center", marginBottom: "20px" }}>
        Track Your Order
      </h1>
      <p style={{ textAlign: "center", marginBottom: "20px" }}>
        Enter your order ID to check the status of your delivery.
      </p>
      
      <div className="track-order-form">
        <input 
          type="text" 
          placeholder="Enter Order ID" 
          value={orderID} 
          onChange={handleInputChange}
          className="track-order-input"
        />
        <button className="track-order-btn" onClick={handleTrackOrder}>
          Track Order
        </button>
      </div>

      {trackingResult && (
        <div className="tracking-result">
          <p>{trackingResult}</p>
        </div>
      )}
      <div className="preferences tack-section-contact">
        <div>
          <div className="payment-icon">
            <div>
          <i class='bx bx-credit-card-alt'></i>
          </div>
          <div className="optionns">
          <h4>  Payment Options</h4>
          <p>Edit or add payment methods</p>
          </div>
</div>
          
        </div>
        <div>
          <div className="payment-icon">
            <div>
            <i class='bx bx-lock-alt' ></i>                      </div>
          <div className="optionns">
          <h4>Login</h4>
          <p>Update Login Information</p>
          </div>
</div>
          
        </div>
        <div>
          <div className="payment-icon">
            <div>
            <i class='bx bx-gift' ></i>  
                    </div>
          <div className="optionns">
          <h4>Gift Card</h4>
          <p>Add/Manage Gift Card</p>
          </div>
</div>
          
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
