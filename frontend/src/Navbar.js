import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom bg-white">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src="media/logo.svg" style={{ width: "120px" }} alt="Zerodha logo" />
        </Link>

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
              <Link className="nav-link active" to="/signup">Signup</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/product">Products</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="pricing">Pricing</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="support">Support</Link>
            </li>

            {/* Menu icon */}
            <li className="nav-item">
              <Link className="nav-link active" href="#">
                <i className="fa-solid fa-bars"></i>
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;