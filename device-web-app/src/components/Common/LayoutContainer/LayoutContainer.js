import React from "react";
import "./LayoutContainer.css";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";

const LayoutContainer = (props) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <Link to="/">
          <button className="close-btn">
            <VscChromeClose />
          </button>
        </Link>
        <div className="Content">{props.children}</div>
        <div className="Footer">
          <p>{props.describe}</p>
        </div>
      </div>
    </div>
  );
};

export default LayoutContainer;
