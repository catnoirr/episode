import React, { useEffect } from 'react';
import '../style/notification.css'; // Create this CSS file for notification styling

const Notification = ({ message, isVisible, hideNotification }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        hideNotification(); // Hide notification after 3 seconds
      }, 2000);

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [isVisible, hideNotification]);

  return (
    <div className={`notification ${isVisible ? 'show' : ''}`}>
      {message}
    </div>
  );
};

export default Notification;
