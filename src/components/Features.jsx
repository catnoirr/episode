import React from "react";
import "../style/features.css";

const Feature = () => {
  return (
    <div className="container features-container">
      <div className="feature">
        <div><i className='bx bx-package'></i></div>
       <div className="heading">
       <h3>Timeless</h3>
       <p>Timeless delivery, bringing style to your doorstep seamlessly.</p>
       </div>
      </div>
      <div className="feature"> 
      <div><i className='bx bxs-book-reader'></i></div>
       <div className="heading">
       <h3>Modern Retro</h3>
       <p>Timeless styles, reimagined for the modern era in our chic modern retro collection.</p>
       </div>
      </div>
      <div className="feature">
      <div><i className='bx bxs-donate-heart'></i></div>
       <div className="heading">
       <h3>High-quality</h3>
       <p>Redefined elegance in every stitch, embodying a commitment to high quality and timeless style.</p>
       </div>
      </div>
    </div>
  );
};

export default Feature;
