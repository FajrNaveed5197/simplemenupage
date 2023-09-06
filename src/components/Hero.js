import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import heroImage from "../logo.jpg"; 

const Hero = () => {
  return (
    <div className="hero-container bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1>Corriander</h1>
            <p>
              We take inspiration from the world's best cuisines, and create a
              unique fusion experience. Our lipsmacking creations will tickle
              your culinary senses!
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <img src={heroImage} alt="Hero" className="img-fluid" style={{ marginRight: "20px" }} /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
