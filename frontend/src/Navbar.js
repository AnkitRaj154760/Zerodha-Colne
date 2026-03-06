import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom bg-white">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img src="media/logo.svg" style={{ width: "120px" }} alt="Zerodha logo" />
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right Side Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link active" href="#">Signup</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#">Products</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#">Pricing</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#">Support</a>
            </li>

            {/* Menu icon */}
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <i className="fa-solid fa-bars"></i>
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;