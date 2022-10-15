import React from "react";
import logo from "../../img/docsumo-logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div
      className="col-12 d-flex justify-content-flex-start"
      style={{ height: "fit-content" }}
    >
      <img alt="docsomu-logo" src={logo} className="docsumo-logo-img" />
    </div>
  );
};

export default Header;
