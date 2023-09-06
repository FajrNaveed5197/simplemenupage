import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./mainContent.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import img1 from "../img2.jpg";
import img2 from "../img1.jpg";
const MainContent = () => {
  return (
    <>
      <div className="container mt-4 ">
        <div className="row">
          <div className="col-lg-3">
            <img src={img1} alt="Product" className="img-fluid img-size " />
            <img
              src={img2}
              alt="Product"
              className="img-fluid img-size margintop100"
            />
          </div>

          <div className="col-md-6 ">
            <div>
              <div className="d-flex flex-row">
                <h1>Uthappizza </h1>
                <span class="badge bg-danger hotstyle">Hot</span>
                <span className="badge bg-secondary pricestyle" >$4.99 </span>              </div>
              <h4>
                A unique combination of Indian Uthappam(pancake) and italian
                pizza, topped with Cerignota olives, ripe vine cherry tomatoes,
                Vidalia oninon, Guntur chillies and Buffalo Paneer.
              </h4>

              <button className="col-3 btn btn-block btn-primary mt-3">
                More
                <i class="bi bi-arrow-right-short"></i>
              </button>
            </div>

            <div>
              <h1 className="margintop100">Weekend Grand Buffet </h1>

              <h4>
                Featuring mouthwatering combinations with a choice of five
                different salads, six enticing appetizers,six main entrees and
                five choicest desserts. Free flowing bubbly and soft drinks. All
                just $19.99.
              </h4>
              <button className="col-3 btn btn-block btn-primary mt-3">
                More
                <i class="bi bi-arrow-right-short"></i>
              </button>
            </div>
          </div>

          <div className="col-lg-3">
            <h3 className="d-flex flex-column align-items-center">
              Our Lipsmacking Culinary Creations
            </h3>
            <h3 className="d-flex flex-column align-items-center margintop300">
              This Month's Promotion
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
