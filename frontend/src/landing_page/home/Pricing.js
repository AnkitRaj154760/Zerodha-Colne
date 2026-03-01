
import React from "react";

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* Left Section */}
        <div className="col-md-6">
          <h1 className="mb-3">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href="/"
            style={{ textDecoration: "none" }}
            className="fw-semibold"
          >
            See Pricing <i className="fa-solid fa-arrow-right ms-2"></i>
          </a>
        </div>

        {/* Right Section */}
        <div className="col-md-6">
          <div className="row text-center">

            <div className="col-md-6 p-2 border">
              <h1 className="mb-3">
                <i className="fa-solid fa-indian-rupee-sign me-1"></i>0
              </h1>
              <p>Free equity delivery and<br/> direct mutual funds</p>
            </div>

            <div className="col-md-6  p-2 border">
              <h1>
                <i className="fa-solid fa-indian-rupee-sign me-1"></i>20
              </h1>
              <p>Intraday and F&O</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;