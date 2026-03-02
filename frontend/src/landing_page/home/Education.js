import React from "react";

function Education() {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Section - Image */}
          <div className="col-md-6 text-center">
            <img
              src="media/education.svg"   // Replace with your actual image path
              alt="Varsity"
              className="img-fluid"
              style={{ maxWidth: "80%" }}
            />
          </div>

          {/* Right Section - Content */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-4">
              Free and open market education
            </h2>

            <div className="mb-4">
              <p className="text-muted">
                Varsity, the largest online stock market education book in the
                world covering everything from the basics to advanced trading.
              </p>
              <a
                href="/"
                className="fw-semibold text-decoration-none text-primary"
              >
                Varsity <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
            </div>

            <div>
              <p className="text-muted">
                TradingQ&A, the most active trading and investment community in
                India for all your market related queries.
              </p>
              <a
                href="/"
                className="fw-semibold text-decoration-none text-primary"
              >
                TradingQ&A <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;

