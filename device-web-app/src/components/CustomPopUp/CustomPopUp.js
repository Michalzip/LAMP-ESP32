import React from "react";
import "./CustomPopUp.css";
import { VscChromeClose } from "react-icons/vsc";

const CustomPopUp = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn">
          <VscChromeClose />
        </button>
        {props.children}

        <div className="Footer">
          <div className="Describe">
            <p>Choose your favorite colors thanks to the color palette</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default CustomPopUp;
