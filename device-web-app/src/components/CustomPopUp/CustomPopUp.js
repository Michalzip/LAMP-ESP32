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
        <div className="Content">{props.children}</div>
        <div className="Footer">
          <p>{props.describe}</p>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default CustomPopUp;
