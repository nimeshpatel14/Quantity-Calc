import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <Link to="/">
          <img src="images/logo.png" />
        </Link>
        <span className="header-title">Quantity Calculator</span>
      </div>
      <div className="header-right">
        <div>Contact</div>
        <div>Help</div>
      </div>
    </div>
  );
};

export default Header;
