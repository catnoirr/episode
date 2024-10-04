import React, { useState, useEffect } from "react";
import "../style/return.css"; // Add custom styling for the Return section

const Return = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const [orderID, setOrderID] = useState("");
  const [reason, setReason] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending return request to the server
    setIsSubmitted(true);
    setOrderID("");
    setReason("");
  };

  return (
    <div className="return-container">
      <h1 className="heading-underline" style={{ textAlign: "center", marginBottom: "20px",marginTop:"0" ,fontSize:"30px"}}>
        Return Your Order
      </h1>
      <p style={{ textAlign: "center", marginBottom: "40px", fontSize: "18px", lineHeight: "1.6" }}>
        We offer a 30-day return policy. If you're not satisfied with your purchase, please follow the instructions below to initiate a return.
      </p>

      {/* Return Policy Section */}
      <div className="return-policy-section">
        <h2>Return Policy</h2>
        <ul>
          <li>You can return any product within 30 days of purchase.</li>
          <li>Products must be unused and in their original packaging.</li>
          <li>Refunds will be processed within 7-10 business days after receiving the returned item.</li>
          <li>Return shipping is free for defective or incorrect items.</li>
        </ul>
      </div>

      {/* Return Form */}
      <div className="return-form-section">
        <h2>Initiate a Return</h2>
        {isSubmitted ? (
          <p style={{ color: "green", textAlign: "center" }}>Your return request has been submitted! We will get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="return-form">
            <input
              type="text"
              placeholder="Enter Order ID"
              value={orderID}
              onChange={(e) => setOrderID(e.target.value)}
              className="return-input"
              required
            />
            <textarea
              placeholder="Reason for Return"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="return-textarea"
              required
            ></textarea>
            <button type="submit" className="return-submit-btn">Submit Return</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Return;
