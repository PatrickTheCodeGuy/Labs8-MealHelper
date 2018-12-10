import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import "./Navbar.css";

class NavbarLanding extends Component {
  render() {
    return (
      <div className="Navbar-Container">
        <p className="logo">EatWell</p>
        <div className="signup-login-buttons-navbar">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="buttons-navbar">Log In</button>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <button className="buttons-navbar">Sign Up</button>
          </Link>
          <div className="page-jumps">
            <a href="#team">
              <h2>Product</h2>
              <h2>Pricing</h2>
              <h2>Team</h2>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(withRouter(NavbarLanding));
