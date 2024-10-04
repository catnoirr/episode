import React, { useState, useEffect } from "react";
import "../style/findStore.css"; // Add custom styling for the Find Store section

const stores = [
  { id: 1, name: "Episode.in Store - New York", address: "123 Fashion St, NY, USA", distance: "2.5 km" },
  { id: 2, name: "Episode.in Store - Los Angeles", address: "789 Sunset Blvd, LA, USA", distance: "5.3 km" },
  { id: 3, name: "Episode.in Store - Chicago", address: "456 Michigan Ave, Chicago, USA", distance: "3.1 km" },
  { id: 4, name: "Episode.in Store - Houston", address: "101 Main St, Houston, USA", distance: "4.7 km" },
  { id: 5, name: "Episode.in Store - Mumbai", address: "Juhu Beach Rd, Mumbai, Maharashtra", distance: "3.2 km" },
  { id: 6, name: "Episode.in Store - Delhi", address: "Connaught Place, New Delhi, Delhi", distance: "4.5 km" },
  { id: 7, name: "Episode.in Store - Bangalore", address: "Brigade Road, Bangalore, Karnataka", distance: "2.7 km" },
  { id: 8, name: "Episode.in Store - Hyderabad", address: "Banjara Hills, Hyderabad, Telangana", distance: "3.9 km" },
  { id: 9, name: "Episode.in Store - Chennai", address: "T. Nagar, Chennai, Tamil Nadu", distance: "4.1 km" },
  { id: 10, name: "Episode.in Store - Kolkata", address: "Park Street, Kolkata, West Bengal", distance: "3.8 km" },
];

const FindStore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [location, setLocation] = useState("");
  const [filteredStores, setFilteredStores] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false); // Track whether the search button is clicked
  const [errorMessage, setErrorMessage] = useState(""); // Track error message

  const handleInputChange = (e) => {
    setLocation(e.target.value);
    setErrorMessage(""); // Clear error message on input change
  };

  const handleFindStore = () => {
    setSearchClicked(true); // Mark that the search button was clicked

    if (location === "") {
      setErrorMessage("Please enter a location."); // Set error message if input is empty
      setFilteredStores([]); // Clear previous results
      return; // Stop further execution
    }

    const results = stores.filter((store) =>
      store.name.toLowerCase().includes(location.toLowerCase()) ||
      store.address.toLowerCase().includes(location.toLowerCase())
    );

    setFilteredStores(results); // Set filtered stores based on search
  };

  return (
    <div className="find-store-container">
      <h1 className="heading-underline" style={{ textAlign: "center", marginBottom: "20px" }}>
        Find a Store
      </h1>
      <p style={{ textAlign: "center", marginBottom: "20px" }}>
        Enter your location to find the nearest store.
      </p>

      <div className="find-store-form track-order-form">
        <input
          type="text"
          placeholder="Enter city or address"
          value={location}
          onChange={handleInputChange}
          className="find-store-input track-order-input"
        />
        <button className="find-store-btn" onClick={handleFindStore}>
          Find Store
        </button>
      </div>

      {/* Show error message if input is empty */}
      {errorMessage && <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>}

      <div className="store-results">
        {searchClicked && filteredStores.length > 0 ? (
          filteredStores.map((store) => (
            <div key={store.id} className="store-card">
              <h3>{store.name}</h3>
              <p>{store.address}</p>
              <p>{store.distance} away</p>
            </div>
          ))
        ) : searchClicked && filteredStores.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No stores found.
          </p>
        ) : null}
      </div>
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

export default FindStore;
