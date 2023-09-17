import React from "react";
import Button from "../Common/Button/Button";
import SectionColor from "../Color/SectionColor/SectionColor";
import { Link } from "react-router-dom";
import "./MenuContainer.css";

const MenuContainer = () => {
  return (
    <div className="container">
      <div className="container-title">Welcome!</div>

      <div className="container-buttons">
        <Link to="/custom-color">
          <Button text="Custom Color"></Button>
        </Link>

        <Link to="/section-color">
          <Button text="Section Color"></Button>
        </Link>
      </div>
    </div>
  );
};

export default MenuContainer;
