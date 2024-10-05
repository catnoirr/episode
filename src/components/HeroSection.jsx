import React from "react";
import homeImage from "../images/home.png";
import "../style/herosection.css";

const HeroSection = () => { 
  return ( 
    <div className="ladyContainer">
      <div className="app">
        <h1>Elevate Your Styles that Speak to Everyone!</h1>
        <div className="btn">
          <button>
            <i className="bx bxl-android"></i> Episode.in
          </button>
          <button>
            <i className="bx bxl-apple"></i> Episode.in
          </button>
        </div>
      </div>
      <div className="lady">
        <img src={homeImage} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
