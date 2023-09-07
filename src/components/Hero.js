import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import heroImage from "../logo.jpg";

const Hero = () => {
  return (
    <div className="hero-container bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 order-2 order-md-1"> {/* Reversed order for small screens */}
            <h1>Corriander</h1>
            <p>
              We take inspiration from the world's best cuisines and create a
              unique fusion experience. Our lipsmacking creations will tickle
              your culinary senses!
            </p>
          </div>
          <div className="col-md-6 order-1 order-md-2 text-center"> {/* Reversed order for small screens */}
            <img
              src={heroImage}
              alt="Hero"
              className="img-fluid"
              style={{ marginBottom: "20px" }} // Add margin bottom for spacing
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
