import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./mainContent.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import img1 from "../img2.jpg";
import img2 from "../img1.jpg";

const MainContent = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <img src={img1} alt="Product" className="img-fluid img-size" />
          </div>

          <div className="col-lg-6 col-md-12 mb-4">
            <div>
              <div className="d-flex flex-row">
                <h1>Uthappizza</h1>
                <span class="badge bg-danger hotstyle">Hot</span>
                <span className="badge bg-secondary pricestyle">$4.99</span>
              </div>
              <h4>
                A unique combination of Indian Uthappam (pancake) and Italian
                pizza, topped with Cerignota olives, ripe vine cherry tomatoes,
                Vidalia onion, Guntur chilies, and Buffalo Paneer.
              </h4>
              <button className="col-6 col-md-3 btn btn-block btn-primary mt-3">
                More
                <i class="bi bi-arrow-right-short"></i>
              </button>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <img src={img2} alt="Product" className="img-fluid img-size" />
          </div>

          <div className="col-lg-6 col-md-12 mb-4">
            <div>
              <h1 className="mt-4">Weekend Grand Buffet</h1>
              <h4>
                Featuring mouthwatering combinations with a choice of five
                different salads, six enticing appetizers, six main entrees, and
                five choicest desserts. Free-flowing bubbly and soft drinks. All
                just $19.99.
              </h4>
              <button className="col-6 col-md-3 btn btn-block btn-primary mt-3">
                More
                <i class="bi bi-arrow-right-short"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
