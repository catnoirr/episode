import React from "react";
import "../style/account.css"; // Create this CSS file for styling

const AccountSection = () => {
  return (
    <div className="account-container">
    
      <h2>Your Account</h2>
      <p>Manage your account details and preferences.</p>
      
      <div className="account-info">
        <div className="all-info">
      <div className="profile">
        
        <div>
            <img src="images/profile.jpeg" alt="" />
            <h4>Shanaya Gupta</h4>
        </div>
        <div>
        <p><strong>Email:</strong> shanayagupta@gmail.com</p>
        <p><strong>Phone:</strong> 9812434145</p>
        </div>
        
        </div>
        <div className="main-add">
        <div className="address">
        <p><strong>Address</strong></p>
        <p>P-12/76 Model Town <br />Panipat,Haryana</p>
        
        </div>
        <div className="bn">
        <button className="btn-edit">Track Order</button>
        <button className="btn-edit">Contact Us</button>
        </div>
        </div>
        </div>
        <button className="btn-edit">Edit Account</button>
      </div>

      <div className="order-history">
        <h3>Order History</h3>
        <ul>
          <li>Order #12345 - Delivered</li>
          <li>Order #12346 - In Transit</li>
          <li>Order #12347 - Cancelled</li>
        </ul>
      </div>

      <div className="preferences">
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

export default AccountSection;
